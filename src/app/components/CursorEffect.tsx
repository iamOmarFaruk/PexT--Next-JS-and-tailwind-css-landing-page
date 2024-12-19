"use client";

import React, { useEffect, useState } from "react";

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Handle click animation
    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300); // Reset click effect
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  // Add hover effects
  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const hoverableElements = document.querySelectorAll(
      "a, button, .hoverable"
    );

    hoverableElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverableElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: isHovered ? "60px" : isClicked ? "70px" : "20px",
        height: isHovered ? "60px" : isClicked ? "70px" : "20px",
        backgroundColor: isHovered
          ? "rgba(128, 90, 213, 0.7)"
          : "rgba(128, 90, 213, 0.4)", // Change intensity on hover
        borderRadius: "50%",
        boxShadow: isHovered
          ? "0 0 40px 10px rgba(128, 90, 213, 0.8)"
          : "0 0 20px 5px rgba(128, 90, 213, 0.4)", // Persistent glow on hover
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        transition: "all 0.2s ease-out",
      }}
    />
  );
};

export default CursorEffect;
