import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersCog,
  faEdit,
  faHome,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Sidebar.css";
import { IconContext } from "react-icons";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            <li>
              <Link
                to="/addBlogs"
                class="flex items-center space-x-2 py-2 pt-4 px-4 transition duration-200 text-white  hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faEdit} />
                <span>Post blog</span>
              </Link>
            </li>
            <li>
              <Link
                to="manageBlogs"
                class="flex items-center space-x-2 py-2 px-4 transition duration-200 text-white hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faTasks} />
                <span>Manage Blogs</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                class="flex items-center space-x-2 py-2 px-4 transition duration-200 text-white hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
