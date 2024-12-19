// ===== Section: Imports =====
import React from "react";

import SectionHeader from "@/app/components/SectionHeader";
import TestimonialsSlider from "@/app/components/TestimonialsSlider";

import { TestimonialSectionProps } from "@/app/types"; // Import the types

// ===== Section: TestimonialSection Component =====
const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  header,
  testimonials,
}) => {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gray-50 overflow-hidden"
    >
      {/* Centering Content */}
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <SectionHeader title={header.title} description={header.description} />

        {/* Testimonials Slider */}
        <div className="max-w-7xl mx-auto">
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
};
// ===== End Section: TestimonialSection Component =====

export default TestimonialSection;
