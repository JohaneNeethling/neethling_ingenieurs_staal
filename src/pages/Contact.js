import React from "react";
import { motion } from "framer-motion";
import Owner from "../media/Johannes.png";
import Phone from "../media/Phone.png";
import Mail from "../media/Mail.png";
import Location from "../media/Location.png";

const Contact = () => {
  return (
    <div className="min-h-screen py-40 bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="container mx-auto flex items-center justify-center space-x-12">
        {/* Left side: Contact info */}
        <motion.div
          className="max-w-lg bg-white text-black p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h2>

          <div className="flex items-center space-x-6 mb-4">
            <img
              src={Phone}
              alt="Contact Icon"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <a
                href="tel:+27828995768"
                className="text-xl text-black hover:text-sky-200 block"
              >
                Call Us: +27 82 899 5768
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6 mb-4">
            <img
              src={Mail}
              alt="Email Icon"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <a
                href="mailto:jni@lando.co.za"
                className="text-xl text-black hover:text-sky-200 block"
              >
                Email Us: jni@lando.co.za
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6 mb-4">
            <img
              src={Location}
              alt="Location Icon"
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <p className="text-xl text-black">
                Visit Us: 9 Landbou Street, Bonnievale, South Africa
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right side: Additional image */}
        <div>
          <img
            src={Owner}
            alt="Side Image"
            className="w-96 h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
