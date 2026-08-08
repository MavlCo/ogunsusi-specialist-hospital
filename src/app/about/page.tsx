import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { OurStory } from "@/components/sections/about/our-story";
import { MissionVisionValues } from "@/components/sections/about/mission-vision-values";
import { AccreditationSection } from "@/components/sections/about/accreditation-section";
import { FacilityGallery } from "@/components/sections/about/facility-gallery";
import { DirectorFeature } from "@/components/sections/shared/director-feature";
import { CtaBand } from "@/components/sections/shared/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Ogunsusi Specialist Hospital's story, mission, values, medical director, and accreditation in Ile-Oluji, Ondo State.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="Our story"
        title="About Ogunsusi Specialist Hospital"
        intro="A registered, HMO-accredited specialist hospital, founded to bring dignified, quality care to Ile-Oluji and its surrounding communities."
      />
      <OurStory />
      <MissionVisionValues />
      <DirectorFeature showLink={false} />
      <AccreditationSection />
      <FacilityGallery />
      <CtaBand
        title="Ready to experience compassionate specialist care?"
        intro="Book an appointment or reach out — our team is here to help."
      />
    </>
  );
}
