import { CheckCircle2, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import type { ServiceDefinition } from "@/lib/site-config";

/** §8.3 (2)+(3) — "What to expect" and "Who this is for". */
export function ExpectWhoFor({ service }: { service: ServiceDefinition }) {
  return (
    <section className="bg-clinical-white py-20 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-lg leading-relaxed text-ink/80">{service.description}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal className="rounded-card border border-line bg-sage/50 p-7">
            <h3 className="font-display text-xl font-medium text-evergreen">What to expect</h3>
            <ul className="mt-4 space-y-3">
              {service.expect.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/75">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="rounded-card border border-line bg-sage/50 p-7">
            <h3 className="font-display text-xl font-medium text-evergreen">Who this is for</h3>
            <ul className="mt-4 space-y-3">
              {service.whoFor.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/75">
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-healing-green" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
