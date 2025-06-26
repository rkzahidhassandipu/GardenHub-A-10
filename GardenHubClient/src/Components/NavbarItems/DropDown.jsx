import React, { useState, useEffect, useRef, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router";

const DropDown = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.warning("you are successfully logOut");
        navigate("/login");
      })
      .catch(() => {
        console.log("Log out wrong");
      });
  };

  return (
    <div className="relative dropdown-end" ref={dropdownRef}>
      {/* Avatar Button */}
      <div
        role="button"
        className="btn btn-ghost btn-circle avatar relative group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-10 rounded-full">
          <img alt="User Avatar" src={user?.photoURL} />
        </div>

        {/* Tooltip: natural height, only show on hover when dropdown is closed */}
        {!isOpen && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded z-50 opacity-0 group-hover:opacity-100 min-w-32 h-8 transition-opacity duration-300 max-w-xs break-words">
            {user?.displayName}
          </div>
        )}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow z-10 mt-3 w-52 absolute right-0">
          <li className="border-b ">
            <a className="text-base font-semibold">{user?.displayName}</a>
          </li>
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li className="text-red-500" onClick={handleSignOut}>
            <a>Logout</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
