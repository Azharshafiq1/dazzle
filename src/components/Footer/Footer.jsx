import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Dazzles Punch</h2>
          <p className="text-sm leading-6 text-gray-300">
            We specialize in transforming your ideas into stunning digital
            realities through our digitizing and vector art services.
          </p>
          <p className="mt-4 text-sm text-gray-300">
            © {new Date().getFullYear()} Dazzles Punch. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-blue-400"></i>
              +923102179329
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope text-blue-400"></i>
              abdulbasit49459@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-400"></i>
              House 02 Street 30 Area 3-B Landhi 04 Karachi
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
            >
              <FaTwitter className="text-white" />
            </a>
            <a
              
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
            >
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
