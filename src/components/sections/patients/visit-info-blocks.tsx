import { DoorOpen, BedDouble, Clock3 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";

const blocks = [
  {
    icon: DoorOpen,
    title: "Booking & walk-ins",
    points: [
      "Walk in any time during outpatient hours for General Outpatient care.",
      "Prefer to plan ahead? Call or WhatsApp us to book a time that suits you.",
      "On arrival, register at the front desk with your ID (and HMO card, if insured).",
    ],
  },
  {
    icon: BedDouble,
    title: "Admissions & inpatient care",
    points: [
      "Admission is arranged by your attending clinician based on your clinical needs.",
      "Bring a valid ID, your HMO card and authorisation code, toiletries and a change of clothes.",
      "Our nursing team will orient you and your family to the ward on arrival.",
    ],
  },
  {
    icon: Clock3,
    title: "Visiting hours & guidance",
    points: [
      "Please confirm current visiting hours with ward reception on arrival.",
      "For the comfort of all patients, we ask visitors to keep visits brief and calm.",
      "Emergency and inpatient care itself is available around the clock.",
    ],
  },
];

/** §8.4 (3)+(4)+(5). */
export function VisitInfoBlocks() {
  return (
    <section className="bg-sage py-20 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Your visit" title="What to expect, step by step." />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.08} className="rounded-card bg-clinical-white p-7 shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-tint text-gold">
                <block.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-evergreen">{block.title}</h3>
              <ul className="mt-3 space-y-2.5">
                {block.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-ink/70">
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
