import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="h-screen bg-gradient-to-r from-gray-800 to-black flex items-center text-white">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Established 1984
        </motion.h1>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          THE PROFESSIONAL CHOICE FOR STEEL CONSTRUCTION IN BOLAND AND OVERBERG
          FOR OVER 40 YEARS
        </motion.p>
        <Link to="/home">
          <motion.button
            className="px-6 py-3 bg-accent text-white rounded-md hover:bg-yellow-600 transition-all duration-300 bg-yellow-600"
            whileHover={{ scale: 1.1 }}
          >
            Enter
          </motion.button>
        </Link>
      </div>
    </header>
  );
};

export default Hero;
