import React from "react";
import { FaBookOpen } from "react-icons/fa";
const GardeningHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[300px]">
      <div className="mb-2">
        <FaBookOpen className="text-primary-100 text-5xl" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Gardening Basics Workshop</h1>
      <p className="max-w-md text-gray-600">
        New to gardening? Our quick guides will help you get started on the right foot.
      </p>
    </div>
  );
};

export default GardeningHeader;
