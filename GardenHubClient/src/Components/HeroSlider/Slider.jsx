import { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // This ref tracks if the slide was changed manually (by clicking buttons)
  const isManualChange = useRef(false);

  // Fetch slides
  useEffect(() => {
    fetch('/Slider.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch slides');
        return res.json();
      })
      .then((data) => setSlides(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;

    const handleTyping = () => {
      const currentHeader = slides[currentSlide].header;
      const updatedText = isDeleting
        ? currentHeader.substring(0, displayText.length - 1)
        : currentHeader.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentHeader) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        
        // Only auto-advance slide if NOT manual change
        if (!isManualChange.current) {
          setCurrentSlide((currentSlide + 1) % slides.length);
        } else {
          isManualChange.current = false; // reset flag after manual change handled
        }
      }

      setTypingSpeed(isDeleting ? 75 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, currentSlide, slides]);

  const nextSlide = () => {
    isManualChange.current = true; // mark manual change
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    resetTyping();
  };

  const prevSlide = () => {
    isManualChange.current = true; // mark manual change
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    resetTyping();
  };

  const resetTyping = () => {
    setDisplayText('');
    setIsDeleting(false);
    setTypingSpeed(150);
  };

  if (slides.length === 0) {
    return <div className="flex justify-center items-center h-screen text-white">Loading slides...</div>;
  }

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-75 flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                {displayText}
                <span className="ml-1 inline-block w-1 h-10 bg-white animate-blink"></span>
              </motion.h1>
              {slide.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
                  className="text-lg md:text-xl text-white mb-4"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle font-normal"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="dark:text-white text-xl text-primary-100" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle font-normal"
        aria-label="Next slide"
      >
        <FaArrowRight className="dark:text-white text-xl text-primary-100" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              isManualChange.current = true; // mark manual change
              setCurrentSlide(index);
              resetTyping();
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
