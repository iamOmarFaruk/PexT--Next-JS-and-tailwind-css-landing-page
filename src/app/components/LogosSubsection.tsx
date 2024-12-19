"use client";

import Image from "next/image";

const LogosSubsection = ({ logos }: { logos: string[] }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12 sm:mb-16 items-center">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo}
          alt={`Client logo ${index + 1}`}
          width={60}
          height={24}
          className="mx-auto w-20 sm:w-24 md:w-28 h-auto filter grayscale hover:filter-none transition-all duration-300 border border-gray-200 p-2 sm:border-0 sm:p-0"
        />
      ))}
    </div>
  );
};

export default LogosSubsection;
