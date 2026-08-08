import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { patientJourney } from "@/lib/site-config";

/** §7.9 — 4-step stepper tied to the gold line. */
export function HowItWorks() {
  return (
    <section className="bg-clinical-white py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Your visit" title="Getting care is simple." />

        <div className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden h-px bg-line sm:block"
          />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
            {patientJourney.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.08} className="relative">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-clinical-white font-mono text-lg font-semibold text-evergreen">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-medium text-evergreen">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
