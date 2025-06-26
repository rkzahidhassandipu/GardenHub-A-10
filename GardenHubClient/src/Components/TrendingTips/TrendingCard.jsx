import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const TrendingCard = ({ tip }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (user) {
      navigate(`/shareTips/${tip._id}`);
    } else {
      navigate("/login");
      toast.info("Please log in to view details.");
    }
  };

 



  return (
    <div className="py-4 border dark:border-none shadow-md dark:bg-primaryDarkSection-100 px-4 rounded-xl border-gray-200 pb-4 mb-4 last:border-b-0">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 text-primary-100">
        {tip.title}
      </h2>

      {/* Category and Difficulty */}
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-sm font-medium text-gray-600 capitalize">
          {tip.category}
        </span>
        <span className="text-gray-400">-</span>
        <span className="text-sm font-medium text-gray-600 capitalize">
          {tip.difficulty}
        </span>
      </div>

      {/* Description (truncated) */}
      <p className="text-gray-600 mt-2 line-clamp-2">{tip.description}</p>

      {/* Author and Likes */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-sm text-gray-500">
          By {tip.userName || "Anonymous"}
        </span>
        <div className="flex items-center space-x-1">
          <span className="text-sm font-medium text-gray-600">
            ➤ {tip.like || "0"} Likes
          </span>
        </div>
      </div>

      {/* Read More Link */}
      <div className="mt-2">
        <button
          onClick={handleReadMore}
          className="text-green-600 cursor-pointer hover:text-green-800 text-sm font-medium"
        >
          Read More ➔
        </button>
      </div>
    </div>
  );
};

export default TrendingCard;
