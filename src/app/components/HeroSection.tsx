"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import { HeroSectionProps } from "@/app/types"; // Import the type




// ===== Section: Animation Variants =====
const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
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



const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  imagePath,
  buttonLink,
  note,
}) => {
  // ===== Section: State and Ref for Visibility Tracking =====
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  // ===== End Section: State and Ref for Visibility Tracking =====

  return (
    <section
      id="home"
      ref={sectionRef}
      className="bg-purple-600 text-white pt-40 pb-20 lg:py-40"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 md:px-8 ">
        {/* ===== Left Content ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={containerVariants}
          className="lg:w-1/2 text-center lg:text-left px-2 md:px-4"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug"
            variants={slideUpVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg mb-6 text-gray-200"
            dangerouslySetInnerHTML={{ __html: description }}
            variants={slideUpVariants}
          />

          <motion.a
            href={buttonLink}
            className="bg-white text-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 inline-block"
            variants={slideUpVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.a>

          {note && (
            <motion.p
              className="text-xs mt-2 text-gray-300"
              variants={slideUpVariants}
            >
              {note}
            </motion.p>
          )}
        </motion.div>
        {/* ===== End Left Content ===== */}

        {/* ===== Right Image ===== */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <motion.div
            initial={{ scale: 1 }}
            animate={isInView ? { scale: [1, 1.05, 1] } : { scale: 1 }}
            transition={{
              duration: 3,
              repeat: isInView ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none"
          >
            <Image
              src={imagePath}
              alt="Hero Illustration"
              width={970}
              height={730}
              className="w-full"
              priority
            />
          </motion.div>
        </div>
        {/* ===== End Right Image ===== */}
      </div>
    </section>
  );
};

export default HeroSection;
