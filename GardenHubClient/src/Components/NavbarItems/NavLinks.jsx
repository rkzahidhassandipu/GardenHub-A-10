import React, { useContext } from "react";
import { FaQuestion, FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { FcFaq } from "react-icons/fc";
import { IoIosInformationCircle } from "react-icons/io";

const NavLinks = () => {
  const { user } = useContext(AuthContext);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1 text-base font-semibold hover:bg-navActive-100 hover:text-primary-100 duration-700 rounded px-2 ${
      isActive ? "bg-green-300 text-green-700" : ""
    }`;

  return (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
          </svg>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className={linkClass}>
          <IoIosInformationCircle  className="text-base" />
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/browsetips" className={linkClass}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <path d="m3 17 2 2 4-4"></path>
            <path d="m3 7 2 2 4-4"></path>
            <path d="M13 6h8"></path>
            <path d="M13 12h8"></path>
            <path d="M13 18h8"></path>
          </svg>
          Browse Tips
        </NavLink>
      </li>

      <li>
        <NavLink to="/explore" className={linkClass}>
          <FaUserFriends className="text-lg" />
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className={linkClass}>
          <FaQuestion className="text-base" />
          Gardens FAQ
        </NavLink>
      </li>

     
    </>
  );
};

export default NavLinks;
