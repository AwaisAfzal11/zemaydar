import "./Navbar.css";
import logo from './logo.webp'
import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../Data/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Desktop = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    window.scrollTo(0, 0);
    navigate("/contact");
  };

  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  // const img1 = `${process.env.REACT_APP_DOMAIN}/Assets/logo02.webp`;


  return (
    <>
      
      <div className="hidden lg:block sticky top-0 bg-white z-50">
        <div className="flex items-center justify-between border-b px-8">
          {/* Logo */}
          <div>
            <NavLink to="/" onClick={handleNavClick}>
              <img
                src={logo}
                alt="Company Logo..."
                className="h-10 my-4 w-auto"
                loading="lazy"
              />
            </NavLink>
          </div>
          <div className="flex items-center">
            <nav className="flex items-center capppitalize">
              {Navbar.links.map((link, index) =>
                !link.submenu ? (
                  <NavLink
                    key={index}
                    to={link.path}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md hover:bg-gray-100 transition-colors text-base
                      ${
                        isActive ? "font-bold text-[#EC1E24]" : "text-gray-600"
                      } 
                      [font-size:clamp(0.5rem,0.4rem_+_0.5vw,1rem)]`
                    }
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <div key={index} className="relative group">
                    <NavLink
                      to={link.path}
                      onClick={handleNavClick}
                      className={({ isActive }) =>
                        `px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center
                        ${
                          isActive
                            ? "font-bold text-[#EC1E24]"
                            : "text-gray-600"
                        }
                        [font-size:clamp(0.5rem,0.4rem_+_0.5vw,1rem)]`
                      }
                    >
                      {link.name}
                      <img
                        className="ml-1"
                        src={`${process.env.PUBLIC_URL}/Assets/icons/dropdown.svg`}
                        alt="dropdown"
                        loading="
                      lazy"
                      />
                    </NavLink>
                    <div className="absolute invisible group-hover:visible mt-0 w-64 bg-white shadow-lg rounded-md">
                      {link.submenu.map((sublink, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={sublink.path}
                          onClick={handleNavClick}
                          className={({ isActive }) =>
                            `block px-4 py-2 hover:bg-gray-100 capitalize transition-colors
                            ${
                              isActive
                                ? "font-bold text-[#EC1E24]"
                                : "text-gray-600"
                            }`
                          }
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )
              )}
            </nav>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop;