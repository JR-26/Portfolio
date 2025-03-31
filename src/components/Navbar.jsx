import React from 'react';
import logo from "../assets/jr.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-16 h-16" src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/joel-ebenezer/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-600" />
        </a>
        <a href="https://github.com/JR-26" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-600" />
        </a>
        <a href="https://www.codechef.com/users/gaily_harp_90" target="_blank" rel="noopener noreferrer">
          <SiCodechef className="hover:text-orange-600" />
        </a>
        <a href="https://leetcode.com/u/jr_26/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="hover:text-yellow-600" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
