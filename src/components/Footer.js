// Importing React library to enable the use of JSX
import React from "react";

// Functional component for the Footer
const Footer = () => {
  return (
    // Footer section with a gradient background and padding
    <footer className="bg-gradient-to-r from-gray-800 to-black text-white font-mono py-6 sm:py-8">
      {/* Container to center content within the footer */}
      <div className="container mx-auto text-center">
        {/* Copyright text with responsive font size */}
        <p className="text-sm sm:text-base">
          © 2024 Neethling Ingenieurs. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

// Exporting Footer component for use in other parts of the app
export default Footer;
