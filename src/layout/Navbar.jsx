import { useState } from 'react';
import { logo } from '../assets/images/image.js';
import { navLinks } from '../utils/data.js';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFEB9A] p-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center ml-8">
        <img src={logo} alt="KiwiRoo Jobs Logo" />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex justify-center flex-1">
        <div className="flex space-x-7 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              className={`text-black hover:text-gray-700 Montserrat ${
                link.name === 'Home' ? 'font-bold' : 'font-medium'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Desktop Sign In Button */}
      <div className="hidden lg:block mr-8">
        <a
          href="/signin"
          className="text-black text-center hover:text-white hover:bg-black border-[0.2rem] border-black px-11 py-3 rounded-full OpenSans font-semibold"
        >
          Sign In
        </a>
      </div>

      {/* Mobile Menu (Only covers required height with solid background) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}
        className={`lg:hidden absolute top-16 left-0 w-full h-[60vh] bg-yellow-200 z-50 Montserrat transition-all duration-500 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-2 p-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.path}
              className={`text-black hover:text-gray-700 text-base Montserrat ${
                link.name === 'Home' ? 'font-bold' : 'font-medium'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-end mt-4">
            <a
              href="/signin"
              className="text-black text-center hover:text-white hover:bg-black border border-black px-6 py-2 rounded-full OpenSans"
            >
              Sign In
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
