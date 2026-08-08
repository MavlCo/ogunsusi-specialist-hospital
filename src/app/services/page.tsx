import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { CareJourney } from "@/components/sections/shared/care-journey";
import { OtherServicesNote } from "@/components/sections/services/other-services-note";
import { HowToAccess } from "@/components/sections/services/how-to-access";
import { CtaBand } from "@/components/sections/shared/cta-band";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "General outpatient, inpatient & admission, surgery, and mortuary & embalming services at Ogunsusi Specialist Hospital, Ile-Oluji.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Our services"
        title="Complete care, under one roof."
        intro="From walk-in consultations to surgery and dignified mortuary care — explore how we support you at every step."
      />
      <CareJourney />
      <OtherServicesNote />
      <HowToAccess />
      <CtaBand />
    </>
  );
}
