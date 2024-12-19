import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

// import CursorEffect from "@/app/components/CursorEffect";

// components
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

// data
import { navigationData, footerData } from "@/app/data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include the font weights you need
});

export const metadata: Metadata = {
  title: "PexT Pro | Empowering Growth with Reviews and Insights",
  description:
    "PexT Pro is the ultimate platform to collect reviews and user-generated content, driving growth and success for your business with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        
        {/* Cursor Effect */}
        {/* <CursorEffect /> */}

        {/* Navigation */}
        <Navigation
          sections={navigationData.sections}
          logoUrl={navigationData.logoUrl}
        />

        {/* Dynamic Body Content */}

        {children}

        {/* Footer */}
        <Footer
          logoSrc={footerData.logoSrc} // Path to your logo
          logoAlt={footerData.logoAlt}
          description={footerData.description}
          navSections={footerData.navSections}
          footerText={footerData.footerText}
        />
      </body>
    </html>
  );
}
