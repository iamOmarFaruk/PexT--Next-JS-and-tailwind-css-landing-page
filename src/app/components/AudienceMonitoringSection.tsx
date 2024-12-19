"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import SecondaryButton from "@/app/components/SecondaryButton";

import { AudienceMonitoringSectionProps } from "@/app/types"; // Import the type



// Animation Variants
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

const AudienceMonitoringSection: React.FC<AudienceMonitoringSectionProps> = ({
  imagePath,
  altText,
  subtitle,
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 px-4 md:px-6 lg:px-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <Image
            src={imagePath}
            alt={altText}
            width={400}
            height={300}
            priority
            className="w-full max-w-[350px] md:max-w-[500px] lg:max-w-none"
          />
        </div>

        {/* Right Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={containerVariants}
          className="w-full lg:w-1/2 flex-1 text-center lg:text-left"
        >
          <motion.h4
            className="text-orange-500 font-semibold uppercase mb-2 text-xs md:text-sm"
            variants={slideUpVariants}
          >
            {subtitle}
          </motion.h4>
          <motion.h2
            className="text-lg sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug"
            variants={slideUpVariants}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base"
            variants={slideUpVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={slideUpVariants} className="inline-block">
            <SecondaryButton linkHref={linkHref} linkText={linkText} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceMonitoringSection;
