import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg py-3">
      <div className="flex justify-center items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              "relative text-lg font-semibold tracking-wide transition-all duration-300",
              isActive
                ? "text-blue-600 after:scale-x-100"
                : "text-gray-700 hover:text-blue-600 hover:after:scale-x-100",
              "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:rounded-full after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300",
            ].join(" ")
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            [
              "relative text-lg font-semibold tracking-wide transition-all duration-300",
              isActive
                ? "text-blue-600 after:scale-x-100"
                : "text-gray-700 hover:text-blue-600 hover:after:scale-x-100",
              "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:rounded-full after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300",
            ].join(" ")
          }
        >
          Paste
        </NavLink> 
      </div>
    </nav>
  );
}
