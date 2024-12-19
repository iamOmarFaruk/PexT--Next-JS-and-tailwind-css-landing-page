"use client";

import React from "react";

import { SecondaryButtonProps } from "@/app/types"; // Import the type

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  linkHref = "#", // Default href to "#"
  linkText,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault(); // Prevent default anchor behavior
      onClick(); // Call the passed onClick handler
    }
  };

  return (
    <a
      href={linkHref}
      onClick={handleClick}
      className="text-purple-500 font-semibold flex items-center justify-center group relative w-full text-center py-3 my-4 sm:w-auto sm:my-0"
    >
      <span>{linkText}</span>
      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </a>
  );
};

export default SecondaryButton;
