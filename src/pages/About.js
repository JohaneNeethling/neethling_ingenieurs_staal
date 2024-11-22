// Importing necessary libraries for React and framer-motion animations
import React from "react";
import { motion } from "framer-motion"; // For animations
import Logo from "../media/NeetLogo1.png"; // Importing the logo image

// Functional component for the About section
const About = () => {
  return (
    // Main container div with a full screen height and gradient background
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-black py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Motion div for the logo with an opacity fade-in animation */}
        <motion.div
          className="mt-16 mb-6 flex justify-center" // Centering the logo with margin
          initial={{ opacity: 0 }} // Initial opacity is 0 (hidden)
          whileInView={{ opacity: 1 }} // Fade to full opacity when in view
          viewport={{ once: true }} // Animation runs only once when the element comes into view
          transition={{ duration: 1 }} // Duration of the fade-in effect is 1 second
        >
          <img
            src={Logo} // Setting the image source to the imported logo
            alt="About Neethling Ingenieurs" // Alt text for accessibility
            className="rounded-lg max-w-full sm:w-64 w-48" // Applying styles for image size and border radius
          />
        </motion.div>

        {/* Motion paragraph for the company description with a slide-in effect */}
        <motion.p
          className="text-lg sm:text-2xl leading-7 text-center font-mono font-bold mt-8 sm:mt-12" // Styling for text
          initial={{ opacity: 0, x: -100 }} // Initially, the paragraph is hidden and positioned off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Animate to full opacity and reset horizontal position
          transition={{ duration: 1 }} // Duration of the slide-in effect is 1 second
        >
          {/* About the company text */}
          Established in 1984, we have proudly served as the professional choice
          for steel construction in the Boland and Overberg regions for over 40
          years. With decades of experience, Mr. JPJ Neethling has built a
          reputation for delivering high-quality, reliable steel solutions that
          meet the unique needs of every project. His commitment to excellence,
          craftsmanship, and customer satisfaction has made him a trusted
          partner in the industry, ensuring that each structure he creates
          stands the test of time.
        </motion.p>
      </div>
    </div>
  );
};

// Export the About component so it can be used in other parts of the application
export default About;
