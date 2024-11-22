import React from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion for animations
import Flooring from "../media/1.png"; // Importing images for service icons
import Assembly from "../media/2.png";
import DP from "../media/3.png";
import Finishing from "../media/4.png";
import MQ from "../media/5.png";
import Manufacturing from "../media/6.png";

// Services component
const Services = () => {
  // Array of service objects containing title, description, and icon for each service
  const services = [
    {
      title: "Flooring",
      description:
        "We specialize in providing durable and high-quality steel flooring solutions tailored to your project’s needs. Whether for residential, commercial, or industrial applications, our flooring systems offer strength, safety, and long-lasting performance.",
      icon: Flooring, // Image imported earlier
    },
    {
      title: "Assembly",
      description:
        "Our expert assembly services ensure that all components are expertly put together with precision and efficiency. We handle the assembly of steel structures, ensuring they are built to code, safely and on time.",
      icon: Assembly,
    },
    {
      title: "Design & Plans",
      description:
        "We offer comprehensive design and planning services to bring your vision to life. Our experienced team works closely with clients to create detailed plans that align with both aesthetic and functional requirements, while adhering to the highest safety standards.",
      icon: DP,
    },
    {
      title: "Finishing",
      description:
        "Our finishing services include welding, coating, and surface treatments that not only enhance the visual appeal of your steel structure but also increase its durability. We ensure that every project meets the exact specifications and requirements for long-term performance.",
      icon: Finishing,
    },
    {
      title: "Measurements & Quotations",
      description:
        "With our precise measurement services, we ensure accuracy from the start. Our detailed quotations provide clear, cost-effective pricing, helping you make informed decisions on your project, with no hidden surprises.",
      icon: MQ,
    },
    {
      title: "Manufacturing",
      description:
        "We handle the full manufacturing process, from fabricating individual steel components to creating large-scale structures. Our state-of-the-art facilities and skilled workforce ensure that every piece is crafted to meet exacting standards, delivering the highest quality products.",
      icon: Manufacturing,
    },
  ];

  return (
    // Main container with background image, padding, and full screen height
    <div className="min-h-screen bg-workers py-20 bg-cover bg-center">
      <div className="container mx-auto px-4">
        {/* Grid layout for displaying services: one column for small screens, two columns for medium screens, three columns for large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mapping over the services array and creating a card for each service */}
          {services.map((service, index) => (
            <motion.div
              key={index} // Unique key for each card (service)
              className="relative p-4 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300" // Styling for the card
              initial={{ opacity: 0, y: 50 }} // Initial animation state
              whileInView={{ opacity: 1, y: 0 }} // Animation when the card comes into view
              viewport={{ once: true }} // Ensures animation happens only once when it comes into view
              transition={{ duration: 0.5, delay: index * 0.2 }} // Animation duration and delay based on index
            >
              {/* Image for the service icon */}
              <img
                src={service.icon} // Service icon
                alt={service.title} // Alt text for accessibility
                className="h-20 w-20 mx-auto mb-4 relative z-10" // Styling for the icon
              />
              {/* Title of the service */}
              <h3 className="text-lg font-semibold text-center text-black relative z-10">
                {service.title}
              </h3>
              {/* Description of the service */}
              <p className="text-sm text-black text-center mt-4 relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
