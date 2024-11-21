import React from "react";
import { motion } from "framer-motion";
import Logo from "../media/NeetLogo1.png";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-black py-20 text-white">
      <div className="container mx-auto">
        <motion.div
          className="mt-16 mb-1.5 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={Logo}
            alt="About Neethling Ingenieurs"
            className="rounded-lg size-[18rem]"
          />
        </motion.div>
        <motion.p
          className="text-2xl leading-7 text-center font-mono font-bold mt-12"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
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

export default About;
