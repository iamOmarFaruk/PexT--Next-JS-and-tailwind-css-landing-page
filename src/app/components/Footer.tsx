// ===== Section: Imports =====
import Image from "next/image";

import GoTopButton from "@/app/components/GoTopButton";
import { FooterProps } from "@/app/types"; // Import FooterProps type

const Footer: React.FC<FooterProps> = ({
  logoSrc = "/logo.png",
  logoAlt = "Logo",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus.",
  navSections = [],
  footerText = "NEXT JS Landing Page | All Rights Reserved.",
}) => {
  return (
    <footer className="bg-gray-800 text-white py-10 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={140}
              height={40}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Navigation Sections */}
          {navSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-3 text-sm">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Credit */}
        <div className="text-center mt-12 border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-xs mt-5">
            &copy; {new Date().getFullYear()} {footerText}
          </p>
        </div>
      </div>
      <GoTopButton />
    </footer>
  );
};

export default Footer;
