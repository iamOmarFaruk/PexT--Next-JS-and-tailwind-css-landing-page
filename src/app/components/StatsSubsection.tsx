"use client";

// ===== Section: Imports =====
import { motion } from "framer-motion";
import SecondaryButton from "@/app/components/SecondaryButton";

import { StatsSubsectionProps } from "@/app/types"; // Import the types
// ===== End Section: Imports =====


// ===== End Section: Types =====

// ===== Section: StatsSubsection Component =====

const StatsSubsection: React.FC<StatsSubsectionProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-center mt-20 px-4 md:px-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 mb-6 sm:mb-0"
        >
          {/* Animated Value */}
          <motion.h3
            className="text-4xl sm:text-5xl lg:text-6xl font-thin text-purple-500 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.4 }}
          >
            {stat.value}
          </motion.h3>
          {/* Stat Description */}
          <motion.p
            className="text-gray-600 text-sm sm:text-base mb-4 px-2 sm:px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            {stat.description}
          </motion.p>
          {/* Call-to-Action Button */}
          <motion.div
            className={`flex justify-center items-center w-full ${
              index === stats.length - 1 ? "mb-0" : "mb-4"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.6 }}
          >
            <SecondaryButton
              linkHref={stat.link}
              linkText={stat.buttonText}
             
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
};
// ===== End Section: StatsSubsection Component =====

// ===== Section: Export =====
export default StatsSubsection;
// ===== End Section: Export =====
