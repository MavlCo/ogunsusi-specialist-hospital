import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { BeforeVisitChecklist } from "@/components/sections/patients/before-visit-checklist";
import { VisitInfoBlocks } from "@/components/sections/patients/visit-info-blocks";
import { InsuranceBlock } from "@/components/sections/shared/insurance-block";
import { GettingHere } from "@/components/sections/shared/getting-here";
import { FaqSection } from "@/components/sections/shared/faq-section";
import { CtaBand } from "@/components/sections/shared/cta-band";
import { faqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Patients & Visitors",
  description:
    "Everything you need for your visit to Ogunsusi Specialist Hospital — what to bring, booking, admissions, visiting hours, payments and directions.",
  alternates: { canonical: "/patients-visitors" },
};

const visitFaqs = faqs
  .filter((g) => g.group === "Visiting & booking" || g.group === "Emergency")
  .flatMap((g) => g.items);

export default function PatientsVisitorsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Patients & Visitors" }]}
        eyebrow="Patients & visitors"
        title="Everything you need for your visit"
        intro="Clear, practical guidance so you know exactly what to expect — before, during, and after your time with us."
      />
      <BeforeVisitChecklist />
      <VisitInfoBlocks />
      <InsuranceBlock />
      <GettingHere />
      <FaqSection items={visitFaqs} eyebrow="Questions" title="Frequently asked questions" seeAllHref="/faq" />
      <CtaBand />
    </>
  );
}
