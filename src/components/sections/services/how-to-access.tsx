import { PhoneCall, ClipboardCheck, Stethoscope } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  { icon: PhoneCall, title: "Call, WhatsApp or walk in", text: "Reach out ahead of time, or simply walk in to General Outpatient." },
  { icon: ClipboardCheck, title: "Register at the front desk", text: "Quick registration — bring your ID and HMO card if insured." },
  { icon: Stethoscope, title: "See a clinician", text: "You'll be seen and guided to the right department for your needs." },
];

/** §8.2 (5) — "How to access care" mini-steps. */
export function HowToAccess() {
  return (
    <section className="bg-sage py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Getting started" title="How to access care." align="center" />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="rounded-card bg-clinical-white p-7 text-center shadow-soft">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-tint text-gold">
                <step.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-evergreen">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
