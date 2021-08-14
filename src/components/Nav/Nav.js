import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "./../../App";

function Nav({ handleLogOut }) {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <nav
        className="nav flex flex-wrap items-center justify-between px-4"
        style={{
          backgroundColor: "#aff1da",
          backgroundImage: " linear-gradient(315deg, #aff1da 0%, #f9ea8f 74%)",
        }}
      >
        <div className="flex flex-no-shrink items-center mr-6 py-3 pl-3 text-gray-400">
          <span className="font-semibold text-3xl tracking-tight">
            Blogosphere<span classNameName="font-bold text-red-300">.</span>
          </span>
        </div>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          for="menu-btn"
        >
          <span className="navicon bg-white flex items-center relative"></span>
        </label>
        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li className="border-t md:border-none">
            <Link
              to="/"
              className="block md:inline-block px-4 py-3 no-underline text-gray-900 hover:text-gray-500 font-bold"
            >
              Home
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link
              to="/"
              className="block md:inline-block px-4 py-3 no-underline text-gray-900 hover:text-gray-500"
            >
              About
            </Link>
          </li>
          <li className="border-t md:border-none">
            <Link
              to="/"
              className="block md:inline-block px-4 py-3 no-underline text-gray-900 hover:text-gray-500"
            >
              Blogs
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link
              to="/"
              className="block md:inline-block px-4 py-3 no-underline text-gray-900 hover:text-gray-500"
            >
              Contact
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link
              to="/dashboard"
              className="block md:inline-block px-4 py-3 no-underline text-gray-900 hover:text-gray-500"
            >
              Dashboard
            </Link>
          </li>

          {user.email ? (
            <li className="border-t md:border-none">
              <Link
                className="inline-block text-sm font-semibold px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-200 hover:bg-white mt-4 lg:mt-2"
                to="/login"
                onClick={handleLogOut}
              >
                Log out
              </Link>
            </li>
          ) : (
            <li className="border-t md:border-none">
              <Link
                className="inline-block text-sm font-semibold px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-200 hover:bg-white mt-4 lg:mt-2"
                to="/login"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
