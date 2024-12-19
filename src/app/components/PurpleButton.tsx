// ===== Section: PurpleButton Component =====
import React from "react";
import Link from "next/link";

import { PurpleButtonProps } from "@/app/types"; // Import the type


const PurpleButton: React.FC<PurpleButtonProps> = ({
  text,
  link,
  onClick,
  type = "button",
}) => {
  const baseClasses =
    "bg-purple-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-purple-600 transition-colors duration-200";

  if (link) {
    return (
      <Link href={link} legacyBehavior>
        <a className={baseClasses}>{text}</a>
      </Link>
    );
  }

  return (
    <button type={type} className={baseClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default PurpleButton;
// ===== End Section: PurpleButton Component =====
