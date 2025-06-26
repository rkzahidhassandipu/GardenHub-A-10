import React from "react";
import { CiLogin } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import { NavLink } from "react-router"; // changed to react-router-dom

const LoginSignUpBn = () => {
  return (
    <>
      {/* Show on all devices */}
      <div className="flex items-center gap-2 lg:gap-4 font-semibold text-sm sm:text-base">
        <NavLink to="/login" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-3 lg:px-4 hover:bg-navActive-100 cursor-pointer hover:text-primary-100 duration-700 py-2 rounded-xl flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-500">
            <CiLogin className="text-xl" /> Login
          </button>
        </NavLink>
        <NavLink to="/signup" className="w-full sm:w-auto">
          <button className="btn w-full sm:w-28 bg-green-700 rounded-xl px-3 lg:px-4 flex items-center gap-1 justify-center focus:outline-none focus:ring-2 text-white focus:ring-green-500">
            <FiUserPlus className="md:flex hidden" />
            Sign Up
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default LoginSignUpBn;
