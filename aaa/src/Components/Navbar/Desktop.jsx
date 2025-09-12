import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import NavbarData from '../../Data/Navbar';
import whiteLogo from '../../Assets/Home/logo-white.png';
import goldenLogo from '../../Assets/Home/golden-logo.png';
import './Navbar.css';

function Desktop() {
  // const whiteLogo = `${process.env.REACT_APP_BASE_URL}/Assets/Home/logo-white.png` // Removed
  // const goldenLogo = `${process.env.REACT_APP_BASE_URL}/Assets/Home/golden-logo.png` // Removed


  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user has scrolled more than 10px, false otherwise
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to scroll to top on link click
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    // Main container: hidden on mobile (lg:flex), fixed position, full width
    <div
      className={`hidden lg:flex fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Centered content wrapper */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={handleLinkClick}>
              <img
                // 2. Conditionally set the src based on the isScrolled state
                src={isScrolled ? goldenLogo : whiteLogo}
                alt="Logo"
                // 3. Removed the CSS filter class name
                className="h-12 w-auto transition-all duration-300"
              />
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-10">
            {NavbarData.links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={handleLinkClick}
                // Dynamically change text color based on scroll position
                className={`text-lg font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-[#BD872E] hover:text-opacity-80' : 'text-white hover:text-opacity-80'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Desktop;