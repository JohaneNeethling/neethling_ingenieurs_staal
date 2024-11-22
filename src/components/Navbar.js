import React, { useState } from "react"; // Importing React and useState hook
import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation

const Navbar = () => {
  // State to track whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black text-white p-5 fixed w-full z-50 text-xl font-mono">
      {/* Navbar container with styling for background, padding, and text */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <h1 className="text-2xl sm:text-4xl font-bold tracking-wide">
          Neethling Ingenieurs
        </h1>

        {/* Mobile menu button (hamburger icon) */}
        <button
          className="sm:hidden text-white text-3xl focus:outline-none" // Hidden on larger screens (sm:hidden), white text, 3xl size
          onClick={() => setIsOpen(!isOpen)} // Toggles the isOpen state when clicked
        >
          ☰ {/* Hamburger icon */}
        </button>

        {/* Navbar links - displayed as a flex layout on small screens and as a hidden menu on mobile */}
        <ul
          className={`sm:flex space-y-4 sm:space-y-0 sm:space-x-6 absolute sm:static left-0 top-full sm:top-auto bg-gray-800 sm:bg-transparent w-full sm:w-auto p-5 sm:p-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden" // Shows menu when isOpen is true, else hides it
          }`}
        >
          {/* Link items with hover effects and transition */}
          <li className="hover:text-accent transition-all duration-300">
            <Link to="/home" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-accent transition-all duration-300">
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
          </li>
          <li className="hover:text-accent transition-all duration-300">
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className="hover:text-accent transition-all duration-300">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
