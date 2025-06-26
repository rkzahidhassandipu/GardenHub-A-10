import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import { NavLink } from 'react-router'

const Logo = () => {
  return (
    <>
      <NavLink
          to="/"
          className="flex items-center gap-1 text-green-700 font-bold text-lg sm:text-xl md:text-2xl"
        >
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
                className="text-xl sm:w-5 sm:h-5 md:w-8 md:h-8"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
          <span className="">GardenHub</span>
        </NavLink>
    </>
  )
}

export default Logo
