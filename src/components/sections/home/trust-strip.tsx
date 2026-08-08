import { Chip } from "@/components/ui/chip";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site-config";

/** §7.5 — Component F, four credential pills on a Sage Mist band. */
export function TrustStrip() {
  return (
    <section className="bg-sage py-14 sm:py-16">
      <div className="mx-auto max-w-(--container-page) px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">A registered, accredited specialist hospital.</p>
        </Reveal>
        <Reveal delay={0.08} className="mt-5 flex flex-wrap justify-center gap-3">
          {site.trustSignals.map((t) => (
            <Chip key={t} className="bg-clinical-white">
              {t}
            </Chip>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
