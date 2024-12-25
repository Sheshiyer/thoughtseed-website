import { Metadata } from "next";
import { PageWrapper } from "../../components/layout/page-wrapper";
import PhilosophySection from "../../components/about/philosophy-section";
import VisionMissionSection from "../../components/about/vision-mission-section";
import ServicesSection from "../../components/about/services-section";
import TeamSection from "../../components/about/team-section";
import CTASection from "../../components/about/cta-section";

export const metadata: Metadata = {
  title: "About | Thoughtseed",
  description: "Empowering Creativity Through Knowledge",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <PhilosophySection />
      <VisionMissionSection />
      <ServicesSection />
      <TeamSection />
      <CTASection />
    </PageWrapper>
  );
}
