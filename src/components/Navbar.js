import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black text-white p-5 fixed w-full z-50 text-xl font-mono">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold tracking-wide">
          Neethling Ingenieurs
        </h1>
        <ul className="flex space-x-6">
          <li className="hover:text-accent transition-all duration-300">
            <Link to="/home">Home</Link>
          </li>
          <li className="hover:text-accent transition-all duration-300">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="hover:text-accent transition-all duration-300">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-accent transition-all duration-300">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
