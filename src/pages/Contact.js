import React from "react"; // Importing React to create the component
import { motion } from "framer-motion"; // Importing motion for animations from framer-motion
import Owner from "../media/Johannes.png"; // Importing the owner's image
import Phone from "../media/Phone.png"; // Importing the phone icon
import Mail from "../media/Mail.png"; // Importing the email icon
import Location from "../media/Location.png"; // Importing the location icon

// Contact component
const Contact = () => {
  return (
    // Container with gradient background, padding, and full-screen height
    <div className="min-h-screen py-20 bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-12 md:space-y-0 px-6">
        {/* Left side: Contact information with animation */}
        <motion.div
          className="w-full max-w-lg bg-white text-black p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }} // Initial animation properties (opacity and scale)
          animate={{ opacity: 1, scale: 1 }} // Animation to full opacity and normal scale
          transition={{ duration: 0.8 }} // Duration of the animation
        >
          {/* Contact heading with animation */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -50 }} // Start with opacity 0 and a slight upward movement
            animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{ duration: 0.8 }} // Duration of the animation
          >
            Get In Touch
          </motion.h2>

          {/* Phone contact section */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={Phone} // Phone icon
              alt="Contact Icon"
              className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full" // Styling the icon size and shape
            />
            <div>
              {/* Phone number link */}
              <a
                href="tel:+27828995768"
                className="text-lg md:text-xl text-black hover:text-sky-200 block" // Styling link text with hover effect
              >
                Call Us: +27 82 899 5768
              </a>
            </div>
          </div>

          {/* Email contact section */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={Mail} // Mail icon
              alt="Email Icon"
              className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full" // Styling the icon size and shape
            />
            <div>
              {/* Email link */}
              <a
                href="mailto:jni@lando.co.za"
                className="text-lg md:text-xl text-black hover:text-sky-200 block" // Styling link text with hover effect
              >
                Email Us: jni@lando.co.za
              </a>
            </div>
          </div>

          {/* Physical address section */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={Location} // Location icon
              alt="Location Icon"
              className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full" // Styling the icon size and shape
            />
            <div>
              {/* Address text */}
              <p className="text-lg md:text-xl text-black">
                Visit Us: 9 Landbou Street, Bonnievale, South Africa
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right side: Owner image */}
        <div className="w-full max-w-xs md:max-w-md">
          <img
            src={Owner} // Owner's image
            alt="Side" // Alt text for the image
            className="w-full h-auto object-cover rounded-lg" // Styling the image to cover the container and rounded corners
          />
        </div>
      </div>
    </div>
  );
};

export default Contact; // Export the component for use in other parts of the app
