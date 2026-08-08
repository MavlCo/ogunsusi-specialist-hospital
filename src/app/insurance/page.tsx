import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { HowCashlessWorks } from "@/components/sections/insurance/how-cashless-works";
import { InsuranceBlock } from "@/components/sections/shared/insurance-block";
import { SelfPayNote } from "@/components/sections/insurance/self-pay-note";
import { FaqSection } from "@/components/sections/shared/faq-section";
import { CtaBand } from "@/components/sections/shared/cta-band";
import { faqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Insurance & HMO",
  description:
    "Ogunsusi Specialist Hospital is HMO-accredited — learn how cashless care works and which insurance plans we accept.",
  alternates: { canonical: "/insurance" },
};

const insuranceFaqs = faqs.find((g) => g.group === "Insurance / HMO")?.items ?? [];

export default function InsurancePage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Insurance & HMO" }]}
        eyebrow="Insurance & HMO"
        title="HMO & insurance made simple"
        intro="We're an accredited provider on private health-insurance networks — insured patients are treated on a cashless basis."
      />
      <HowCashlessWorks />
      <InsuranceBlock />
      <SelfPayNote />
      <FaqSection items={insuranceFaqs} eyebrow="Questions" title="Insurance FAQs" seeAllHref="/faq" />
      <CtaBand />
    </>
  );
}
