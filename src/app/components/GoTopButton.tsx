"use client";

import { useEffect, useState } from "react";

// Extend the Window interface to add scrollTimeout
declare global {
  interface Window {
    scrollTimeout: ReturnType<typeof setTimeout>;
  }
}

const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector("footer");
      if (!footerElement) return;

      const footerPosition = footerElement.getBoundingClientRect();
      setIsVisible(footerPosition.top < window.innerHeight);
    };

    const debounceScroll = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debounceScroll);
    return () => window.removeEventListener("scroll", debounceScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-20 right-0 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-transform duration-300 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
      aria-label="Go to top"
      title="Go to top"
      aria-hidden={!isVisible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default GoTopButton;
