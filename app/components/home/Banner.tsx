import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Banner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0b0730] to-[#0d093f] text-white text-sm h-10 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 px-4">
        {/* Left section */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-purple-500" />
            <span>Jersey City</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="text-purple-500" />
            <a href="mailto:ullasraghu465gmail.com" className="hover:underline">
              ullasraghu465gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-purple-500" />
            <a href="tel:+1(973) 281-6379" className="hover:underline">
              +1(973) 281-6379
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <span className="hidden md:inline">Social Media :</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaYoutube />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
