import React from "react";
import { motion } from "framer-motion"; // Import motion for animations
import { useInView } from "react-intersection-observer"; // Import useInView hook to trigger animations on scroll
// Importing project images
import MorLodge1 from "../media/MorLodge1.jpeg";
import MorLodge2 from "../media/MorLodge2.jpg";
import MorLodge3 from "../media/MorLodge3.jpeg";
import MalHome1 from "../media/MalHome1.jpg";
import MalHome2 from "../media/MalHome2.jpg";
import MalHome3 from "../media/MalHome3.jpg";
import ClubHouse1 from "../media/ClubHouse6.jpg";
import ClubHouse2 from "../media/ClubHouse7.jpg";
import ClubHouse3 from "../media/ClubHouse8.jpg";
import Brits1 from "../media/BritsHome2.jpg";
import Brits2 from "../media/BritsHome3.jpg";
import Brits3 from "../media/BritsHome4.jpg";
import Herman1 from "../media/Herman.jpg";
import Herman2 from "../media/Herman2.jpg";
import Herman3 from "../media/Herman3.jpg";
import TweeEike1 from "../media/TweeEike.jpg";
import TweeEike2 from "../media/TweeEike2.jpg";
import TweeEike3 from "../media/TweeEike3.jpg";
import WelWyn1 from "../media/WelWyn.jpg";
import WelWyn2 from "../media/WelWyn2.jpg";
import WelWyn3 from "../media/WelWyn3.jpg";
import Promo1 from "../media/Assembly.jpg";
import Promo2 from "../media/Finishing.jpg";
import Promo3 from "../media/Manufactor.jpg";
import Promo4 from "../media/Planning.jpg";

// Projects array holding project data
const projects = [
  {
    title: "Morokuru Lodge in Swellendam",
    description:
      "Morukuru, meaning Tamboti Tree in Tswana, is an exclusively appointed bush lodge on the edge of the Marico River, under the Tamboti Trees that grow in abundance on the river banks. The forest villa is suited to private parties and families looking for the exclusive use of the lodge.",
    images: [MorLodge1, MorLodge2, MorLodge3], // Image references for the project
  },
  {
    title: "Home in Malgas",
    description:
      "Malgas (or Malagas ) is a settlement on the southwest bank of the Breede River in the Overberg region of the Western Cape. It is situated 25 kilometres north-west of the Breede River mouth at Witsand, and 30 kilometres south-east of Swellendam.",
    images: [MalHome1, MalHome2, MalHome3], // Image references for the project
  },
  {
    title: "Bowling Club in Bonnievale",
    description:
      "Bowling alley in Bonnievale, South Africa. Bonnievale is a settlement in the Cape Winelands District Municipality in the Western Cape province of South Africa. The town is 64 km southeast of Worcester, in the Breede River Valley.",
    images: [ClubHouse1, ClubHouse2, ClubHouse3], // Image references for the project
  },
  {
    title: "Home in Bonnievale",
    description:
      "Bonnievale is a settlement in the Cape Winelands District Municipality in the Western Cape province of South Africa. The town is 64 km southeast of Worcester, in the Breede River Valley.",
    images: [Brits1, Brits2, Brits3], // Image references for the project
  },
  {
    title: "Home in Bonnievale",
    description:
      "Bonnievale is a settlement in the Cape Winelands District Municipality in the Western Cape province of South Africa. The town is 64 km southeast of Worcester, in the Breede River Valley.",
    images: [Herman1, Herman2, Herman3], // Image references for the project
  },
  {
    title: "Die Eike Guesthouse in Slanghoek ",
    description:
      "Die Eike Guesthouse is situated in the breathtaking Slanghoek Valley on the Breedekloof Wine Route. This valley forms part of the Breede River Valley with Rawsonville and Worcester, as the closest towns.",
    images: [TweeEike1, TweeEike2, TweeEike3], // Image references for the project
  },
  {
    title: "Weltevrede Wine Estate",
    description:
      "Weltevrede is a family owned and operated wine estate in the Robertson Wine Valley, South Africa. Robertson is a town in the Western Cape Province of South Africa, known as the valley of wine and roses, at the heart of the wine route - Route 62.",
    images: [WelWyn1, WelWyn2, WelWyn3], // Image references for the project
  },
  {
    title: "Steel Construction",
    description:
      "Established in 1984, we have proudly served as the professional choice for steel construction in the Boland and Overberg regions for over 40 years.",
    images: [Promo1, Promo2, Promo3, Promo4], // Image references for promotional content
  },
];

const Portfolio = () => {
  // Use the useInView hook to detect if the section is in the viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger animation when 10% of the element is in view
  });

  return (
    <div className="w-full bg-gradient-to-r from-gray-800 to-black">
      {" "}
      {/* Background styling */}
      <div className="container mx-auto px-4 py-8">
        {" "}
        {/* Container for content */}
        <motion.h2
          ref={ref} // Attach ref to trigger animation on the h2 element
          className="text-4xl font-bold text-center text-white my-11"
          initial={{ opacity: 0 }} // Initial state of opacity
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate when in view
          transition={{ duration: 1 }} // Transition duration for animation
        >
          Check Out What We Can Do...
        </motion.h2>
        {/* Grid layout to display projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 text-center">
          {projects.map((project, index) => (
            <motion.div
              key={index} // Unique key for each project
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all" // Styling for project card
              initial={{ opacity: 0 }} // Initial state of opacity
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate when in view
              transition={{ duration: 1, delay: index * 0.2 }} // Delay animation for each project
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>{" "}
              {/* Project title */}
              <p className="mt-2 text-gray-600">{project.description}</p>{" "}
              {/* Project description */}
              {/* Grid layout for project images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {project.images.map((image, idx) => (
                  <motion.img
                    key={idx} // Unique key for each image
                    src={image} // Image source
                    alt={`Project ${idx + 1}`} // Alt text for accessibility
                    className="w-full h-auto aspect-square object-cover rounded-lg hover:scale-110 transition-transform" // Image styling with hover effect
                    initial={{ opacity: 0 }} // Initial opacity
                    animate={inView ? { opacity: 1 } : { opacity: 0 }} // Animate opacity when in view
                    transition={{ duration: 0.5 }} // Transition duration for image animation
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; // Export the Portfolio component for use in other parts of the app
