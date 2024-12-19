// ===== Section: Navigation Types =====
export interface NavigationProps {
  sections?: { name: string; link: string }[]; // Updated to reflect name-link structure
  logoUrl?: string; // Logo URL
}



// ===== Section: Hero Section Types =====
export interface HeroSectionProps {
  title: string;
  description: string; // Rich text supported
  buttonText: string;
  imagePath: string;
  buttonLink: string;
  note?: string;
  altText?: string; // Optional alt text for the image
}



// ===== Section: Features Section Types =====

// Type for a Single Feature
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Type for Features Section Props
export interface FeaturesSectionProps {
  features: Feature[];
  sectionTitle: string;
  sectionDescription: string;
}


// ===== Section: Section Header Types =====
export interface SectionHeaderProps {
  title: string;
  description: string;
}


// ===== Section: AudienceMonitoringSection Types =====

// Props type for the AudienceMonitoringSection component
export interface AudienceMonitoringSectionProps {
  imagePath: string; // Path to the image
  altText: string; // Alt text for the image
  subtitle: string; // Subtitle for the section
  title: string; // Title for the section
  description: string; // Description for the section
  linkText: string; // Text for the button/link
  linkHref: string; // URL for the button/link
}


// ===== Section: ClientsAndStats Types =====

// Type for a single statistic
export interface Stat {
  value: string; // Statistic value
  description: string; // Description of the statistic
  link: string; // Link for additional details
  buttonText: string; // Text for the call-to-action button
}

// Props type for the ClientsAndStats component
export interface ClientsAndStatsProps {
  logos: string[]; // Array of logo URLs
  stats: Stat[]; // Array of statistics
}







// ===== Section: Pricing Section Types =====

export interface PricingSectionProps {
  title: string;
  heading: string;
  description: string;
  buttonPrimary: { text: string; link: string }; // Primary button details
  buttonSecondary: { text: string; link: string }; // Secondary button details
  benefits: string[]; // List of benefits
  imageSrc: string; // Path to the image source
  imageAlt: string; // Alternative text for the image
}


// ===== Section: Stats Subsection Types =====

// Type for a single statistic
export interface Stat {
  value: string;
  description: string;
  link: string;
  buttonText: string;
}

// Props type for the StatsSubsection component
export interface StatsSubsectionProps {
  stats: Stat[]; // Array of stats
}


// ===== Section: Dashboard Feature Types =====

// Type for an individual icon
export interface Icon {
  img: string;
  title: string;
}

// Props type for the DashboardFeature component
export interface DashboardFeatureProps {
  heading: string; // Heading text for the section
  icons: Icon[]; // Array of icons
  bottomImage: {
    src: string; // Source of the bottom image
    alt: string; // Alt text for the bottom image
  };
}



// ===== Section: Testimonial Section Types =====

// Type for a single testimonial
export interface Testimonial {
  name: string; // Name of the person
  position: string; // Job position or title
  image: string; // Path to the image
  text: string; // Testimonial text
  rating: number; // Rating out of 5
}

// Props type for the TestimonialSection component
export interface TestimonialSectionProps {
  header:SectionHeaderProps; // Section header
  testimonials: Testimonial[]; // Array of testimonials
}


// Props type for components using testimonials
export interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}


// ===== Section: Footer Types =====

// Type for a navigation section in the footer
export interface FooterNavSection {
  title: string; // Title of the navigation section
  links: string[]; // Array of link texts
}

// Props type for the Footer component
export interface FooterProps {
  logoSrc?: string; // Source of the logo image
  logoAlt?: string; // Alternative text for the logo image
  description?: string; // Description text for the footer
  navSections?: FooterNavSection[]; // Array of navigation sections
  footerText?: string; // Footer copyright text
}



// ===== Buttons and Other Elements =====





// ===== Section: MobileNav Types =====

// Type for the props of the MobileNav component
export interface MobileNavProps {
  isOpen: boolean; // Determines whether the mobile nav is open
  onClose: () => void; // Callback to close the mobile nav
  sections: { name: string; link: string }[]; // Array of sections with name and link properties
  logoUrl?: string; // Optional URL for the logo image
}




// ===== Section: SecondaryButton Types =====

// Props type for the SecondaryButton component
export interface SecondaryButtonProps {
  linkHref?: string; // Optional URL for the link
  linkText: string; // Text to display on the button
  onClick?: () => void; // Optional click handler
}


// ===== Section: PurpleButton Types =====

// Props type for the PurpleButton component
export interface PurpleButtonProps {
  text: string; // Text to display on the button
  link?: string; // Optional URL for navigation
  onClick?: () => void; // Optional click event handler
  type?: "button" | "submit" | "reset"; // Button type for form use
}
