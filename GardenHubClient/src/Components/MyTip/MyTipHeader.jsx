import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import { FaPlusCircle } from "react-icons/fa";

const MyTipHeader = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left: Title and User Info */}
        <div>
          <div className="flex items-center gap-3">
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
              <path d="M7 20h10" />
              <path d="M10 20c5.5-2.5.8-6.4 3-10" />
              <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
              <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
            </svg>
            <h1 className="text-3xl font-bold text-gray-800">My Gardening Tips</h1>
          </div>
          <p className="text-gray-600 mt-1">
            {user?.email}, here are all the tips you've shared with the community!
          </p>
        </div>

        {/* Right: Share New Tip Button */}
        <Link to="/dashboard/sharetip">
          <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow">
            <FaPlusCircle className="text-lg" />
            Share a New Tip
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyTipHeader;
