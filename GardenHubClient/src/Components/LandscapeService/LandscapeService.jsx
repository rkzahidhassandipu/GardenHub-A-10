import React from "react";
import { FaLeaf } from "react-icons/fa";
import OurSkills from "../About/OurSkills";

const LandscapeService = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
      
      {/* LEFT SECTION */}
      <div className="w-full lg:w-1/2 space-y-6">
        <p className="text-green-600 font-semibold tracking-wide text-sm">
          # WE HAVE 25+ YEARS OF EXPERIENCE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 leading-tight">
          We Give Awesome <br /> Landscape Service.
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          use that it has a more-or-less normal.
        </p>

        {/* Mission */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-md shadow-sm hover:bg-green-100 transition-colors duration-300">
          <div className="inline-block bg-green-500 text-white font-bold px-4 py-2 rounded mb-4">
            Mission
          </div>
          <p className="text-green-900 leading-relaxed text-sm md:text-base">
            Our mission is to cultivate a vibrant gardening community where individuals of all skill levels can connect, learn, and grow together. We aim to provide accessible resources, hands-on guidance, and a supportive platform for sharing knowledge on sustainable gardening practices — from composting and hydroponics to urban balcony gardens.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-md shadow-sm hover:bg-green-100 transition-colors duration-300">
          <div className="inline-block bg-green-500 text-white font-bold px-4 py-2 rounded mb-4">
            Vision
          </div>
          <p className="text-green-900 leading-relaxed text-sm md:text-base">
            To become the leading online hub where gardening enthusiasts from all walks of life connect, learn, and grow together — transforming urban and rural spaces into thriving, green, and sustainable environments.
          </p>
        </div>

        {/* Goal */}
        <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-md shadow-sm hover:bg-green-100 transition-colors duration-300">
          <div className="inline-block bg-green-500 text-white font-bold px-4 py-2 rounded mb-4">
            Goal
          </div>
          <p className="text-green-900 leading-relaxed text-sm md:text-base">
            We aim to inspire and support gardeners of all levels by providing a welcoming space to share knowledge, find local events, and grow sustainably. Whether you're into composting, balcony gardening, or hydroponics, our community is here to help you thrive — one plant at a time.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative overflow-hidden">
        
        {/* Stat Circles */}
        <div className="flex flex-wrap justify-center gap-6 z-10 mb-10">
          {[
            { value: "50+", label: "Total Projects." },
            { value: "25+", label: "Total Projects." },
            { value: "90+", label: "Total Projects." },
          ].map((item, i) => (
            <div
              key={i}
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-black/10 shadow-md flex flex-col items-center justify-center text-center ${i === 1 ? "-mt-4" : ""}`}
            >
              <h3 className="text-green-600 text-xl sm:text-2xl font-bold">
                {item.value}
              </h3>
              <p className="text-green-900 text-xs sm:text-sm font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Circle Background */}
        <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-gray-100 dark:bg-gray-800 absolute top-24 z-0"></div>

        {/* Gardener Image */}
        <img
          src="https://i.postimg.cc/02rWgQrx/Adobe-Express-file.png"
          alt="Gardener"
          className="w-[240px] sm:w-[300px] md:w-[360px] z-10"
        />

        {/* Skills Section */}
        <div className="mt-12 w-full">
          <OurSkills />
        </div>
      </div>
    </section>
  );
};

export default LandscapeService;
