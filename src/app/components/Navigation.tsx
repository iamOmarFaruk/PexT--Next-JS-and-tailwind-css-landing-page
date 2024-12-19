"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/app/components/MobileNav";
import SecondaryButton from "@/app/components/SecondaryButton";
import PurpleButton from "@/app/components/PurpleButton";
import LoginModal from "@/app/components/modals/LoginModal";

// Import the type from types.ts
import { NavigationProps } from "@/app/types";

const Navigation: React.FC<NavigationProps> = ({
  sections = [],
  logoUrl = "/logo.png",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Highlight the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust offset for highlighting
      let currentActive = "";

      sections.forEach(({ name, link }) => {
        const sectionId = link.split("#")[1];
        const sectionElement = document.getElementById(sectionId);

        if (
          sectionElement &&
          sectionElement.offsetTop <= scrollPosition &&
          sectionElement.offsetTop + sectionElement.offsetHeight >
            scrollPosition
        ) {
          currentActive = name;
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logoUrl}
            alt="Logo"
            width={65}
            height={30}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {sections.map(({ name, link }) => (
            <Link
              key={name}
              href={link}
              className={`${
                activeSection === name ? "text-purple-500" : "text-gray-700"
              } hover:text-purple-500`}
              aria-label={`Navigate to ${name}`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <SecondaryButton
            linkHref="#"
            linkText="Login"
            onClick={() => setIsModalOpen(true)}
          />
          <PurpleButton text="Join Free" link="/join-now" />
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-label="Open mobile navigation menu"
        >
          {isMobileNavOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <LoginModal closeModal={() => setIsModalOpen(false)} />
        </div>
      )}

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        sections={sections.map(({ name, link }) => ({ name, link }))}
        logoUrl={logoUrl}
      />
    </header>
  );
};

export default Navigation;
