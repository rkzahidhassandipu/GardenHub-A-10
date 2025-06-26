import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet } from "react-router"; // ✅ Use react-router-dom

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 text-base font-semibold px-3 py-2 rounded transition-all duration-300 
   hover:bg-green-600 hover:text-white ${
     isActive ? "bg-white text-green-700" : "text-white"
   }`;

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-green-700 text-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between lg:justify-center border-b border-green-600">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button
            className="lg:hidden text-white text-2xl"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={linkClass}
                onClick={closeSidebar}
              >
                🌱 My Tips
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/sharetip"
                className={linkClass}
                onClick={closeSidebar}
              >
                ✍️ Share a Tip
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content area */}
      <div className="flex-1 lg:ml-64 overflow-y-auto h-screen bg-white">
        {/* Mobile Top Bar */}
        <div className="lg:hidden bg-green-700 p-4">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FaBars />
          </button>
        </div>

        {/* Outlet Content */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
