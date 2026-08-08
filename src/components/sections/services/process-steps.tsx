import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import type { ServiceDefinition } from "@/lib/site-config";

/** §8.3 (4) — "Typical process" 3–4 step mini-stepper. */
export function ProcessSteps({ service }: { service: ServiceDefinition }) {
  return (
    <section className="bg-sage py-20 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Typical process" title={`What happens, step by step`} />
        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.07} className="relative pl-4">
              <span
                aria-hidden="true"
                className="absolute top-1 left-0 h-full w-px bg-line last:hidden"
              />
              <span className="font-mono text-2xl font-semibold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-medium text-evergreen">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
