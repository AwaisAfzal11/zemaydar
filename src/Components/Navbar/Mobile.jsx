import React, { useEffect, useState, useRef } from "react";
import { TfiClose } from "react-icons/tfi";
import { BsChevronDown } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import NavbarData from "../../Data/Navbar";
import "./Navbar.css";
import logo from '../../Assets/golden-logo.png'

function Mobile() {
  const [nav, setNav] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav((prevNav) => !prevNav);
    if (!nav) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        document.body.style.overflow = 'auto';
    }
  };

  const handleCrossNav = () => {
    setNav(false);
    document.body.style.overflow = 'auto';
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    handleCrossNav(); // Close navbar on link click
  };

  const toggleDropdown = (menuName) => {
    setCurrentDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleCrossNav();
      }
    };
    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <div
      className={`lg:hidden fixed top-0 flex items-center w-full z-[10000] transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="sectionlayout poppins text-black flex justify-between items-center w-full">
        <div className="flex items-center justify-center">
          <NavLink to="/" onClick={handleLinkClick}>
            <img
              src={logo}
              loading="lazy"
              className="h-10 my-4 w-auto" // Consistent sizing
              alt="Logo"
            />
          </NavLink>
        </div>
        <div className="flex items-center gap-0">
          <button
            className="inline-flex items-center rounded-md py-2 px-4 text-lg font-medium"
            onClick={handleNav}
          >
            {/* Hamburger icon color changes with scroll */}
            <FaBars size={20} className={isScrolled ? "text-[#BD872E]" : "text-white"} />
          </button>
        </div>
        
        {/* Sidebar Menu */}
        <div ref={sidebarRef} className={`navbar-menu ${nav ? "open" : ""}`}>
          <div className="sticky bg-white shadow-xl border-l border-white/70 overflow-y-auto">
            <ul className="pt-4 px-6 pb-3 overflow-y-auto h-[100vh]">
              <div className="flex justify-end pt-4">
                <TfiClose
                  onClick={handleCrossNav}
                  className="rounded p-1 font-bold hover:bg-black/5 text-[#BD872E]"
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
                            onClick={handleLinkClick}
                            className={({ isActive }) =>
                              `hover:text-[#BD872E] ${
                                isActive ? "text-[#BD872E]" : "text-black"
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
                                    `text-[#454545] text-md p-5 py-4 pl-3 hover:rounded hover:bg-black/5 hover:text-[#BD872E] ${
                                      isActive ? "text-[#BD872E]" : ""
                                    }`
                                  }
                                  onClick={handleLinkClick}
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
                          `cursor-pointer px-1 flex items-center justify-between Georgian py-3 pl-3 font-medium hover:rounded hover:bg-black/5 hover:text-[#BD872E] ${
                            isActive ? "text-[#BD872E]" : "text-black"
                          }`
                        }
                        onClick={handleLinkClick}
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