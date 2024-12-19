"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { MobileNavProps } from "@/app/types"; // Import the type

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  sections,
  logoUrl,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobileNav"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed top-0 left-0 w-full h-full bg-purple-600 z-50 flex flex-col"
        >
          {/* Header Container for Logo and Close Button */}
          <div className="flex items-center justify-between p-4 bg-purple-600 px-8">
            {logoUrl && (
              <Image
                src={logoUrl}
                alt="Logo"
                width={50}
                height={20}
                className="cursor-pointer filter brightness-0 invert"
              />
            )}
            <button
              onClick={onClose}
              aria-label="Close mobile menu"
              className="text-3xl text-white hover:text-gray-200"
            >
              &times;
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col items-center justify-center flex-1 space-y-8">
            {sections.map(({ name, link }) => (
              <Link
                key={name}
                href={link}
                onClick={onClose}
                className="text-2xl font-semibold text-white hover:text-gray-200"
              >
                {name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
