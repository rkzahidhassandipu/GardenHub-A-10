import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ShareTipForm = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newTips = Object.fromEntries(formData.entries());

  if (!user) {
    toast.warning("Please log in to submit a tip.")
    return;
    
  }

  // Add user info
  newTips.userEmail = user?.email || "";
  newTips.userName = user?.displayName || "Anonymous";

  // ✅ Add random 'like' value between 0–100
  newTips.like = Math.floor(Math.random() * 101); // Random number from 0 to 100

  fetch("https://garden-hub-server-six.vercel.app/shareTips", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newTips),
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("Thanks for share your Tips")
      e.target.reset(); 
    });
};


  return (
    <div className="w-full bg-light-100 py-20">
      <Helmet>
        <title>Share Tip</title>
        <meta
          name="description"
          content="View and manage all your shared gardening tips."
        />
      </Helmet>
      <div className="max-w-2xl mx-auto p-6  rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-green-800 text-center mb-6">
          Share Your Gardening Wisdom
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Help others grow by sharing your tips and tricks!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title (e.g., "How I Grow Tomatoes Indoors")
              </label>
              <input
              required
                type="text"
                name="title"
                className="w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your tip title"
              />
            </div>

            {/* Plant Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Plant Type/Topic
              </label>
              <input
              required
                type="text"
                name="plantType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter plant type or topic"
              />
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Difficulty Level
              </label>
              <select
              required
                name="difficulty"
                className="w-full px-3 py-2 text-gray-700 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                required
                name="description"
                rows="4"
                className="w-full resize-none px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Share your gardening tip in detail"
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
              required
                type="url"
                name="imageUrl"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
              required
                name="category"
                className="w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select category</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="herbs">Herbs</option>
                <option value="flowers">Flowers</option>
                <option value="indoor">Indoor Plants</option>
              </select>
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Availability
              </label>
              <div className="flex items-center">
                <input
                required
                  type="radio"
                  id="public"
                  name="availability"
                  value="public"
                  className="h-4 w-4 text-green-600 text-gray-700 focus:ring-green-500"
                />
                <label
                  htmlFor="public"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Public (Visible to everyone)
                </label>
              </div>
              <div className="flex items-center">
                <input
                required
                  type="radio"
                  id="hidden"
                  name="availability"
                  value="Private"
                  className="h-4 w-4 text-green-600 text-gray-700 focus:ring-green-500"
                />
                <label
                  htmlFor="hidden"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Hidden (Only visible to you)
                </label>
              </div>
            </div>

            {/* User Info (readonly) */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium  text-gray-700 mb-1">
                  User Name
                </label>
                <input
                  type="text"
                  value={user?.displayName || "Anonymous"}
                  disabled
                  className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  disabled
                  // value={user.email}
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Share Tip
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareTipForm;
