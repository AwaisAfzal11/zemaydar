import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import logo from '../../../src/Assets/Home/zemaydar.webp'; // Make sure your logo is at this path


const Footer = () => {
  // const logo = `${process.env.REACT_APP_BASE_URL}/Assets/Home/logo.webp`

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://www.facebook.com/Zemaydar.pk' },
    { icon: <FaYoutube />, href: 'https://youtube.com/@zemaydar' },
    { icon: <FaLinkedinIn />, href: 'https://pk.linkedin.com/company/zemaydar-com' },
  ];

  return (
    <>
      {/* Part 1: Call-to-Action Section */}
      <div className="bg-[#BD872E]">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold">Ready to Secure Your Investment?</h2>
            <p className="text-white/80 mt-1">Let's talk about your next venture with ZEMAYDAR.</p>
          </div>
          <a
            href="https://wa.me/923116111111"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 bg-white text-black font-bold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors duration-300"
          >
            Get in Touch <ChevronRight size={20} />
          </a>
        </div>
      </div>

      {/* Part 2: Main Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Column 1: Logo, Tagline, and Socials */}
            <div className="space-y-6 md:col-span-1">
              <img src={logo} alt="ZEMAYDAR Logo" className="w-36" />
              <p className="text-gray-600 text-sm">
                Your trusted partner in strategic land investment and property ventures.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#BD872E] hover:bg-[#BD872E] hover:text-white transform hover:scale-110 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4 uppercase tracking-wider">Contact Info</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 mt-1">
                    <MapPin className="h-5 w-5 text-[#BD872E]" />
                  </div>
                  <span>Plot # 03, 04 & 05, Near Kiani House, Opposite ATTOCK Petrol Pump, DHA Phase 02, GT Road, Islamabad, Pakistan</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 mt-1">
                    <Mail className="h-5 w-5 text-[#BD872E]" />
                  </div>
                  <a href="mailto:zemaydar@gmail.com" className="hover:text-[#BD872E] transition-colors">
                    zemaydar@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 mt-1">
                    <Phone className="h-5 w-5 text-[#BD872E]" />
                  </div>
                  <a href="tel:+923331111114" className="hover:text-[#BD872E] transition-colors">
                    +92 333 111 111 4
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-700 hover:text-[#BD872E] flex items-center gap-2 transition-colors"
                    >
                      <ChevronRight size={16} className="text-[#BD872E]" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
            <span>© {new Date().getFullYear()} ZEMAYDAR. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;