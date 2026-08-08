import { IdCard, ClipboardCheck, HeartPulse } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";

const steps = [
  { icon: IdCard, title: "Bring your HMO card", text: "Present your HMO card and authorisation code at registration." },
  { icon: ClipboardCheck, title: "We verify your cover", text: "Our front desk confirms your plan and authorisation with your HMO." },
  { icon: HeartPulse, title: "Receive cashless care", text: "You're treated with no out-of-pocket payment for covered services." },
];

/** §8.6 — how cashless care works, 3 steps. */
export function HowCashlessWorks() {
  return (
    <section className="bg-clinical-white py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="How it works" title="Cashless care, made simple." align="center" />
        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <span aria-hidden="true" className="absolute top-6 right-0 left-0 hidden h-px bg-line sm:block" />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} className="relative text-center">
              <span className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-clinical-white text-evergreen">
                <step.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-evergreen">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
