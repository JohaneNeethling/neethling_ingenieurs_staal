import React from "react"; // Import React library for building the component
import { Link } from "react-router-dom"; // Import Link from React Router to create navigation links
import { motion } from "framer-motion"; // Import motion from framer-motion for animation effects

// Define the Hero component
const Hero = () => {
  return (
    // Header section with full-screen height and a gradient background
    <header className="h-screen bg-gradient-to-r from-gray-800 to-black flex items-center text-white">
      {/* Container for centering content */}
      <div className="container mx-auto text-center">
        {/* Animated main heading */}
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }} // Initial state: invisible and moved up
          animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in normal position
          transition={{ duration: 1 }} // Transition duration of 1 second
        >
          Established 1984
        </motion.h1>

        {/* Animated subheading */}
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 50 }} // Initial state: invisible and moved down
          animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in normal position
          transition={{ duration: 1, delay: 0.5 }} // Transition with delay of 0.5 seconds
        >
          THE PROFESSIONAL CHOICE FOR STEEL CONSTRUCTION IN BOLAND AND OVERBERG
          FOR OVER 40 YEARS
        </motion.p>

        {/* Link to navigate to the home page */}
        <Link to="/home">
          {/* Animated button */}
          <motion.button
            className="px-6 py-3 bg-accent text-white rounded-md hover:bg-yellow-600 transition-all duration-300 bg-yellow-600"
            whileHover={{ scale: 1.1 }} // On hover, scale up the button slightly
          >
            Enter
          </motion.button>
        </Link>
      </div>
    </header>
  );
};

// Export the Hero component for use in other parts of the app
export default Hero;
