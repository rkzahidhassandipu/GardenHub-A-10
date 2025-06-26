import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

const Faqbody = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true); // 🟢 Loader state

  useEffect(() => {
    fetch('/faq.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch faq');
        return res.json();
      })
      .then((data) => setFaqs(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false)); // 🟢 Set loading to false
  }, []);

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="w-4/5 mx-auto p-4 space-y-6 mb-16">
      {faqs.map((faq, index) => (
        <div key={index} className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold mb-2 text-green-700">{faq.question}</h2>
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Faqbody;
