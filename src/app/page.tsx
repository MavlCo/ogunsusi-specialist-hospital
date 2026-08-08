import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { QuickAccessTiles } from "@/components/sections/home/quick-access-tiles";
import { TrustStrip } from "@/components/sections/home/trust-strip";
import { CareJourney } from "@/components/sections/shared/care-journey";
import { WhyOgunsusi } from "@/components/sections/home/why-ogunsusi";
import { AtAGlance } from "@/components/sections/home/at-a-glance";
import { HowItWorks } from "@/components/sections/home/how-it-works";
import { ContactPreview } from "@/components/sections/home/contact-preview";
import { DirectorFeature } from "@/components/sections/shared/director-feature";
import { InsuranceBlock } from "@/components/sections/shared/insurance-block";
import { Testimonials } from "@/components/sections/shared/testimonials";
import { FaqSection } from "@/components/sections/shared/faq-section";
import { CtaBand } from "@/components/sections/shared/cta-band";
import { faqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Specialist Hospital in Ile-Oluji, Ondo State",
  description:
    "Ogunsusi Specialist Hospital offers general outpatient, inpatient, surgical and mortuary care in Ile-Oluji, Ondo State — HMO-accredited and Category A registered.",
  alternates: { canonical: "/" },
};

const previewFaqs = faqs.flatMap((group) => group.items).slice(0, 4);

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccessTiles />
      <TrustStrip />
      <CareJourney />
      <WhyOgunsusi />
      <AtAGlance />
      <HowItWorks />
      <DirectorFeature />
      <InsuranceBlock />
      <Testimonials />
      <FaqSection items={previewFaqs} seeAllHref="/faq" />
      <CtaBand />
      <ContactPreview />
    </>
  );
}
