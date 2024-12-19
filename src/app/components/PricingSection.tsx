"use client";

// ===== Section: Imports =====
import Image from "next/image";

import { motion } from "framer-motion";

import SecondaryButton from "@/app/components/SecondaryButton";
import PurpleButton from "@/app/components/PurpleButton";


import { PricingSectionProps } from "@/app/types"; // Import the type

// ===== Section: Animation Variants =====
const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};
// ===== End Section: Animation Variants =====



const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  heading,
  description,
  buttonPrimary,
  buttonSecondary,
  benefits,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section id="pricing" className="bg-purple-600 text-white py-20">
      <div className="container mx-auto px-4">
        {/* ===== Section: Top Banner ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
        </motion.div>
        {/* ===== End Section: Top Banner ===== */}

        {/* ===== Section: Content ===== */}
        <div className="bg-white text-gray-900 rounded-lg shadow-lg flex flex-col-reverse lg:flex-row items-center overflow-hidden">
          {/* ===== Section: Left Content ===== */}
          <motion.div
            className="lg:w-1/2 p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl sm:text-4xl font-bold mb-4"
              variants={slideUpVariants}
            >
              {heading}
            </motion.h3>
            <motion.p className="text-gray-600 mb-6" variants={slideUpVariants}>
              {description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6"
              variants={slideUpVariants}
            >
              <PurpleButton
                text={buttonPrimary.text}
                link={buttonPrimary.link}
              />

              <SecondaryButton
                linkHref={buttonSecondary.link}
                linkText={buttonSecondary.text}
              />
            </motion.div>

            {/* Benefits */}
            <motion.div
              className="flex flex-col text-left text-gray-600 text-sm"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center mb-2"
                  variants={slideUpVariants}
                >
                  <span className="text-yellow-500 mr-2">→</span>
                  {benefit}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          {/* ===== End Section: Left Content ===== */}

          {/* ===== Section: Right Image ===== */}
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1300}
              height={1300}
              className="w-full h-full object-cover"
            />
          </div>
          {/* ===== End Section: Right Image ===== */}
        </div>
        {/* ===== End Section: Content ===== */}
      </div>
    </section>
  );
};
// ===== End Section: PricingSection Component =====

export default PricingSection;
