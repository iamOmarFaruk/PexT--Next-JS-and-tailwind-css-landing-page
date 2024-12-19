"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import { DashboardFeatureProps } from "@/app/types"; // Import the types


// ===== End Section: Types =====

// ===== Section: DashboardFeature Component =====
const DashboardFeature: React.FC<DashboardFeatureProps> = ({
  heading,
  icons,
  bottomImage,
}) => {
 

  return (
    <section id="dashboard" className="py-20 bg-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-[800px] mx-auto">
          {/* ===== Section: Top Heading ===== */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-8 leading-snug">
            {heading}
          </h2>

          {/* ===== Section: Icons ===== */}
          <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-items-center mb-16 lg:mb-32">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative z-10 w-full"
              >
                <div className="bg-purple-800 rounded-full w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] flex items-center justify-center">
                  <Image
                    src={icon.img}
                    alt={icon.title}
                    width={40}
                    height={40}
                  />
                </div>
                <p className="text-sm font-medium text-white mt-4">
                  {icon.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Section: Bottom Image ===== */}
        <motion.div
          className="mt-8 lg:mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={bottomImage.src}
            alt={bottomImage.alt}
            width={1000}
            height={700}
            className="mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[800px]"
           
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};
// ===== End Section: DashboardFeature Component =====

export default DashboardFeature;
