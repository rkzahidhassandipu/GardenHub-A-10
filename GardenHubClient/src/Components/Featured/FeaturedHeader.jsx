import React from "react";
import { FaUserFriends } from "react-icons/fa";

const FeatureHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[300px]">
      <div className="mb-2">
        <FaUserFriends className="text-primary-100 text-5xl" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Featured Gardeners</h1>
      <p className="max-w-md text-gray-600">
        Meet some of our most active and inspiring community members.
      </p>
    </div>
  );
};

export default FeatureHeader;
