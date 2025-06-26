import React from "react";
import { WiStars } from "react-icons/wi";

const SeasonalHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[300px]">
      <div className="mb-2">
        <WiStars className="text-primary-100 text-5xl" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Seasonal Spotlight</h1>
      <p className="max-w-md text-gray-600">
        Tips and tricks for the current gardening season. Get your garden ready for success!
      </p>
    </div>
  );
};

export default SeasonalHeader;
