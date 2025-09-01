import React, { useEffect, useState, useRef } from "react";
import { TfiClose } from "react-icons/tfi";
import { BsChevronDown } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavbarData from "../../Data/Navbar";
import "./Navbar.css";
import logo from './logo.webp'

function Mobile() {
  const [nav, setNav] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState(null);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const handleCrossNav = () => {
    setNav((prevNav) => !prevNav);
  };

  const handleLinkClick = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  const toggleDropdown = (menuName) => {
    setCurrentDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const sidebarRef = useRef(null);
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const img1 = `${process.env.REACT_APP_DOMAIN}/Assets/Logo/experience.png`;

  

  return (
    <div className="lg:hidden sticky top-0 bg-white h-16 mb-2 flex items-center w-full z-[10000] shadow-md">
      <div className="sectionlayout poppins text-[#6C6C6C] flex justify-between items-center w-full">
        <div className="flex items-center justify-center">
          <NavLink to="/" onClick={handleLinkClick}>
            <img
              src={logo}
              loading="lazy"
              className="max-h-[9vh] max-w-[80%]"
              alt="Logo"
            />
          </NavLink>
        </div>
        <div className="flex items-center gap-0">
          <button className="inline-flex items-center hover:text-[#EC1E24]">
            
          </button>
          <button
            className="inline-flex items-center rounded-md hover:text-[#EC1E24] py-2 px-4 text-lg font-medium"
            onClick={handleCrossNav}
          >
            <FaBars size={20} className="text-[#EC1E24]" />
          </button>
        </div>
        <div className={`navbar-menu ${nav ? "open" : ""}`}>
          <div className="sticky bg-white shadow-xl border-l border-white/70 overflow-y-auto">
            <ul className="pt-4 px-6 pb-3 overflow-y-auto h-[100vh]">
              <div className="flex justify-end pt-4">
                <TfiClose
                  onClick={handleCrossNav}
                  className="rounded p-1 font-bold hover:bg-black/5 text-[#EC1E24]"
                  size={24}
                />
              </div>
              <div className="mt-6">
                {NavbarData.links.map((link, index) => (
                  <React.Fragment key={index}>
                    {link.submenu ? (
                      <>
                        <div
                          className="cursor-pointer capitalize px-1 flex items-center justify-between Georgian py-2 pl-3 font-medium hover:rounded hover:bg-black/5"
                          onClick={() => toggleDropdown(link.name)}
                        >
                          <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                              `hover:text-[#EC1E24] ${
                                isActive ? "text-[#EC1E24]" : "text-gray-800"
                              }`
                            }
                          >
                            {link.name}
                          </NavLink>
                          <BsChevronDown
                            className={`${
                              currentDropdown === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        {currentDropdown === link.name && (
                          <div className="submenu capitalize open mt-2 ml-4 flex max-h-[30vh] overflow-y-auto flex-col my-3">
                            <ul className="relative flex flex-col">
                              {link.submenu.map((sublink, subIndex) => (
                                <NavLink
                                  to={sublink.path}
                                  key={subIndex}
                                  className={({ isActive }) =>
                                    `text-[#454545] text-md p-5 py-4 pl-3 hover:rounded hover:bg-black/5 hover:text-[#EC1E24] ${
                                      isActive ? "text-[#EC1E24]" : ""
                                    }`
                                  }
                                  onClick={handleNav}
                                >
                                  {sublink.name}
                                </NavLink>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `cursor-pointer px-1 flex items-center justify-between Georgian py-3 pl-3 font-medium hover:rounded hover:bg-black/5 hover:text-[#EC1E24] ${
                            isActive ? "text-[#EC1E24]" : "text-[#6C6C6C]"
                          }`
                        }
                        onClick={handleNav}
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;