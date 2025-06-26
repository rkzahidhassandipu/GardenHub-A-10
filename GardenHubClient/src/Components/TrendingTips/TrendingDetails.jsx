import React, { useContext, useState } from "react";
import { BiSolidLike } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { IoIosPricetag } from "react-icons/io";
import { IoLayersSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";
import { AiFillLike, AiTwotoneLike } from "react-icons/ai";

const TrendingDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const tips = useLoaderData();
  const tip = tips.find((ti) => ti._id === id);

  const [liked, setLiked] = useState(
    tip.likedBy?.includes(user?.email) || false
  );
  const [likedCount, setLikedCount] = useState(tip.like || 0);

  const {
    _id,
    title,
    plantType,
    difficulty,
    description,
    imageUrl,
    category,
    availability,
    userName,
  } = tip;

  const handleLikeClick = async () => {
    if (!user) {
      toast.info("Please log in to like the tip.");
      return;
    }

    setLiked(true);
    setLikedCount((prev) => prev + 1);

    try {
      const res = await fetch(
        `https://garden-hub-server-six.vercel.app/shareTips/${_id}/like`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Failed to update like");

      const data = await res.json();
      setLikedCount(data.like);
    } catch (err) {
      setLiked(false);
      setLikedCount((prev) => prev - 1);
      toast.error("Failed to update like.");
    }
  };

  return (
    <div className="px-4 py-8 font-sans bg-gray-50 dark:bg-primaryDarkPage-100 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Back Button */}
      <div className="mb-6 w-4/5 mx-auto">
        <button
          className="flex items-center gap-2 bg-white dark:bg-primaryDarkSection-100 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white px-5 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => window.history.back()}
        >
          <FiArrowLeft />
          Back to All Tips
        </button>
      </div>

      {/* Content Box */}
      <div className="w-4/5 mx-auto bg-white dark:bg-primaryDarkSection-100 rounded-md border border-gray-300 dark:border-gray-700 py-10 px-6 md:px-16 shadow-md">
        <div>
          <img className="w-full h-48 object-cover rounded" src={imageUrl} alt={title} />
        </div>

        <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 mt-6 mb-4 leading-tight">
          {title}
        </h1>

        {/* Metadata Rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
            <FaUserAlt className="text-green-600 dark:text-green-400 mr-2" />
            <span className="font-medium">{userName}</span>
          </div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
            <MdDateRange className="text-green-600 dark:text-green-400 mr-2" />
            <span className="font-medium">5/8/2024</span>
          </div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
            <IoIosPricetag className="text-green-600 dark:text-green-400 mr-2" />
            <span className="font-medium">{category}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
            <IoLayersSharp className="text-green-600 dark:text-green-400 mr-2" />
            <span className="font-medium">{difficulty}</span>
          </div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
            <GrView className="text-green-600 dark:text-green-400 mr-2" />
            <span className="font-medium">{availability}</span>
          </div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded">
            <BiSolidLike className="text-green-600 dark:text-green-400 mr-2" />
            <span className="font-medium">{likedCount} Likes</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
          {description}
        </p>

        {/* Like Button */}
        <div className="flex">
          <button
            onClick={handleLikeClick}
            className={`flex items-center gap-2 px-4 text-black hover:bg-green-700 py-2 rounded border bg-green-300`}
          >
            {liked ? <AiFillLike /> : <AiTwotoneLike />}
            {likedCount} Likes
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingDetails;
