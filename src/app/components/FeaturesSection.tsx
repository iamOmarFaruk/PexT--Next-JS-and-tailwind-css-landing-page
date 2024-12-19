import Image from "next/image";
import SectionHeader from "@/app/components/SectionHeader";

import { FeaturesSectionProps } from "@/app/types"; // Import the type

const FeaturesSection = ({
  features,
  sectionTitle,
  sectionDescription,
}: FeaturesSectionProps) => {
  return (
    <section id="feature" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <SectionHeader title={sectionTitle} description={sectionDescription} />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16 sm:mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
                priority
              />
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
