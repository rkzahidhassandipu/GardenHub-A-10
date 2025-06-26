import React, { useEffect, useState } from 'react';

const Faqbody = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch('/faq.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch faq');
        return res.json();
      })
      .then((data) => setFaqs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-4/5 mx-auto p-4 space-y-6 ">
      {faqs.map((faq, index) => (
        <div key={index} className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-green-700">{faq.question}</h2>
          <p className="text-gray-700 dark:text-gray-500">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Faqbody;
