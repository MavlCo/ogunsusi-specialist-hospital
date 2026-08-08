import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/shared/cta-band";
import { faqs } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about visiting, booking, services, insurance and emergency care at Ogunsusi Specialist Hospital.",
  alternates: { canonical: "/faq" },
};

/** §8.8 — standalone FAQ, grouped by theme. */
export default function FaqPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        eyebrow="Support"
        title="Frequently asked questions"
        intro="Can't find what you're looking for? Call or WhatsApp us and we'll help directly."
      />
      <section className="bg-clinical-white py-20 sm:py-24">
        <div className="mx-auto max-w-(--container-page) space-y-14 px-5 sm:px-8">
          {faqs.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.05}>
              <h2 className="font-display text-2xl font-medium text-evergreen">{group.group}</h2>
              <Accordion items={group.items} className="mt-5" />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
