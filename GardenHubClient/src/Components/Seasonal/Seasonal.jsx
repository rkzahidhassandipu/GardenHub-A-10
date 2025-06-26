import React from "react";
import SeasonalHeader from "./SeasonalHeader";
import { Link } from "react-router"; // Corrected import

const Seasonal = () => {
  return (
    <section className="bg-section-100 rounded-3xl py-8 mb-20 dark:bg-primaryDarkSection-100">
      <SeasonalHeader />
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:px-6 gap-6 lg:gap-10">
        <div>
          <img
            className="w-full h-auto rounded-2xl object-cover"
            src="https://i.postimg.cc/fyKRPLxs/photo-1727099079513-952d40de9d78.jpg"
            alt="Spring Planting"
          />
        </div>
        <div>
          <h1 className="text-2xl text-primary-100 font-bold mb-4">
            Spring Planting Guide
          </h1>
          <p className="mb-4 text-gray-700 dark:text-white">
            As the weather warms, it's time to get those seeds and seedlings in
            the ground! This month, we're focusing on preparing your soil,
            choosing early spring vegetables like peas and lettuce, and
            protecting young plants from late frosts.
          </p>
          <ul className="list-disc ml-5 text-gray-700 dark:text-white">
            <li>Best vegetables to plant in early spring.</li>
            <li>Soil preparation techniques for optimal growth.</li>
            <li>Tips for hardening off seedlings.</li>
            <li>Natural pest deterrents for young plants.</li>
          </ul>

          <Link to="/browsetips">
            <button className="border-primary-100 px-4 py-2 mt-4 border bg-white hover:bg-primary-100 cursor-pointer rounded-xl font-semibold duration-700 dark:bg-primaryDarkPage-100 hover:dark:bg-primaryDarkSection-100">
              More Spring Tips
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Seasonal;
