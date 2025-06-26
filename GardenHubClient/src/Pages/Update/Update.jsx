import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router";

const Update = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const updated = useLoaderData();
  const update = updated.find((ti) => ti._id == id);

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
    userEmail,
  } = update;
  console.log("Loaded tip data:", update);

  const handleUpdated = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTips = Object.fromEntries(formData.entries());

    fetch(`https://garden-hub-server-six.vercel.app/shareTips/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTips),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("successfully updated your tips");
        }
      });
  };

  return (
    <div className="w-full dark:bg-primaryDarkPage-100 bg-light-100 py-20">
      <Helmet>
        <title>Updated Tip</title>
        <meta
          name="description"
          content="View and manage all your shared gardening tips."
        />
      </Helmet>
      <div className="max-w-2xl mx-auto p-6 dark:bg-primaryDarkSection-100 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Update Your Gardening Tip
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Refine your shared wisdom.
        </p>

        <form onSubmit={handleUpdated}>
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
                defaultValue={title}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                defaultValue={plantType}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                defaultValue={difficulty}
                className="w-full px-3 py-2 dark:bg-primaryDarkSection-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                defaultValue={description}
                rows="4"
                className="w-full resize-none px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                defaultValue={imageUrl}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
                defaultValue={category}
                className="w-full px-3 py-2 border dark:bg-primaryDarkSection-100 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
            <div className="flex items-center">
              <input
                required
                type="radio"
                id="public"
                name="availability"
                defaultChecked={availability === "public"}
                className="h-4 w-4 text-green-600 focus:ring-green-500"
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
                defaultChecked={availability === "Private"}
                className="h-4 w-4 text-green-600 focus:ring-green-500"
              />
              <label
                htmlFor="hidden"
                className="ml-2 block text-sm text-gray-700"
              >
                Hidden (Only visible to you)
              </label>
            </div>

            {/* User Info (readonly) */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium  text-gray-700 mb-1">
                  User Name
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={userName}
                  disabled
                  className="w-full px-3 dark:bg-primaryDarkSection-100 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Email
                </label>
                <input
                  type="email"
                  disabled
                  defaultValue={userEmail}
                  className="w-full px-3 py-2 dark:bg-primaryDarkSection-100 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Updated Tip
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
