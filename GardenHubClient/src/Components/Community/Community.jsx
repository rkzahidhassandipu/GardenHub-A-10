import React from "react";
import { Link } from "react-router";

const Community = () => {
  return (
    <div className="my-20 bg-primary-100 p-10 rounded-2xl">
      <h1 className="font-bold text-3xl text-white">Ready to Grow With Us?</h1>
      <p className="text-white my-6 text-lg">
        Join our thriving community of gardening enthusiasts. Share your
        passion, learn new skills, and make your garden flourish.
      </p>
      <button className="bg-primaryDarkSection-100 text-xl text-primary-100 px-4 py-2 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105">
        <Link to='/login'>Join the Community</Link>
      </button>
    </div>
  );
};

export default Community;
