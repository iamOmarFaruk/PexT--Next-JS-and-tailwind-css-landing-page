import HeroSection from "@/app/components/HeroSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import AudienceMonitoringSection from "@/app/components/AudienceMonitoringSection";
import PricingSection from "@/app/components/PricingSection";
import ClientsAndStats from "@/app/components/ClientsAndStats";
import DashboardFeature from "@/app/components/DashboardFeature";
import TestimonialSection from "@/app/components/TestimonialSection";

import {
  heroSectionData,
  featuresSectionData,
  audienceMonitoringData,
  audienceAnalysisData,
  pricingSectionData,
  clientsAndStatsData,
  dashboardFeatureData,
  testimonialSectionData,
} from "@/app/data";

export default function Home() {
  return (
    <>
      <HeroSection
        title={heroSectionData.title}
        description={heroSectionData.description}
        buttonText={heroSectionData.buttonText}
        buttonLink={heroSectionData.buttonLink}
        note={heroSectionData.note}
        imagePath={heroSectionData.imagePath}
      />

      <FeaturesSection
        sectionTitle={featuresSectionData.sectionTitle}
        sectionDescription={featuresSectionData.sectionDescription}
        features={featuresSectionData.features}
      />

      <PricingSection
        title={pricingSectionData.title}
        heading={pricingSectionData.heading}
        description={pricingSectionData.description}
        buttonPrimary={pricingSectionData.buttonPrimary}
        buttonSecondary={pricingSectionData.buttonSecondary}
        benefits={pricingSectionData.benefits}
        imageSrc={pricingSectionData.imageSrc}
        imageAlt={pricingSectionData.imageAlt}
      />

      <ClientsAndStats
        logos={clientsAndStatsData.logos}
        stats={clientsAndStatsData.stats}
      />

      <DashboardFeature
        heading={dashboardFeatureData.heading}
        icons={dashboardFeatureData.icons}
        bottomImage={dashboardFeatureData.bottomImage}
      />

      {/* Audience Monitoring Section */}
      <AudienceMonitoringSection
        imagePath={audienceMonitoringData.imagePath}
        altText={audienceMonitoringData.altText}
        subtitle={audienceMonitoringData.subtitle}
        title={audienceMonitoringData.title}
        description={audienceMonitoringData.description}
        linkText={audienceMonitoringData.linkText}
        linkHref={audienceMonitoringData.linkHref}
      />

      <TestimonialSection
        header={testimonialSectionData.header}
        testimonials={testimonialSectionData.testimonials}
      />

      <AudienceMonitoringSection
        imagePath={audienceAnalysisData.imagePath}
        altText={audienceAnalysisData.altText}
        subtitle={audienceAnalysisData.subtitle}
        title={audienceAnalysisData.title}
        description={audienceAnalysisData.description}
        linkText={audienceAnalysisData.linkText}
        linkHref={audienceAnalysisData.linkHref}
      />
    </>
  );
}
