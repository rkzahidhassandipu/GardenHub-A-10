import React from "react";

const OfferHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[300px]">
      <div className="mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-2">What We Offer</h1>
      <p className="max-w-md text-gray-600">
        Everything you need to nurture your green thumb and connect with a
        thriving community.
      </p>
    </div>
  );
};

export default OfferHeader;
