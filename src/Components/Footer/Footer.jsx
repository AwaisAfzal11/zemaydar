import React from 'react';
import { MapPin, Phone, Mail, GlobeIcon } from 'lucide-react';
import { FaFacebook, FaTiktok, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Mainland Company Formation', path: '/mainland' },
    { name: 'Free Zone Company Formation', path: '/freezone' },
    { name: 'Offshore Company Formation', path: '/offshore' },
    { name: 'PRO Services', path: '/pro-services' },
    { name: 'Corporate Bank Account Opening', path: '/corporate-bank-account-opening' },
    { name: 'Accounting & Bookkeeping', path: '/accounting-bookkeeping' },
    { name: 'Other Services', path: '/other-services' },
  ];

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Golden Visa', path: '/goldenVisa' },
  ];

  return (
    <footer className="bg-[#3D498A] text-white pt-12 pb-6 container mx-auto">
      <div className="px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
        <div className="space-y-6 sm:max-w-7 md:max-w-[230px]">
          <img
            src='https://rightone.ae/Assets/Logo/blueLogo.png'
            alt="Consultancy"
            className=" rounded-[10px]"
          />
          <p className="text-white text-[16px] text-justify">
            We have capabilities and experience to deliver the answers you need to move forward.
          </p>
          <div className="">
            <a href="https://wa.me/+971526919516" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-[#3D498A] text-[16px] w-[100%] py-2 rounded-md">
                Free Consultation
              </button>
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-lg font-bold">CONTACT INFO</h3>
          <div className="space-y-4 text-white">
            <p className="flex items-start">
              <MapPin className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
              Right One Corporate Services LLC - Ground Floor , Office # 55 , Al Gurg Building , Umm Hurair Rd , Dubai - U.A.E
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              info@rightone.ae
            </p>
            <p className="flex items-center">
              <GlobeIcon className="mr-2 h-5 w-5" />
              www.rightone.ae
            </p>
            <p className="flex flex-col items-start">
              <span className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Landline: +971 42 224 797
              </span>
            </p>
            <p className="flex flex-col items-start">
              <span className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Mobile: +971 50 983 3635
              </span>
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/rightonecorporateservices"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@rightonecorporate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400 transition-colors"
            >
              <FaTiktok />
            </a>
            <a
              href="https://ae.linkedin.com/company/right-one-corporate-services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/rightonecorporateservices/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6">CORPORATE SERVICES</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  to={service.path}
                  className="text-white hover:text-white transition-colors"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="text-white hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto px-4 mt-12 pt-6 border-t max-w-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center text-white mx-8 space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <span>© 2024 RIGHT ONE CORPORATE SERVICES. ALL RIGHTS RESERVED</span>
          </div>
          <div className="space-x-4 text-center sm:text-right">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;