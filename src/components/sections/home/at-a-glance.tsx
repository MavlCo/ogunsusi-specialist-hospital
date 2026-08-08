import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site-config";

/** §7.8 — evergreen "At a glance" band. Only verified figures — no invented stats. */
export function AtAGlance() {
  return (
    <section className="bg-evergreen py-16 sm:py-20">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {site.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="text-center sm:text-left">
              <p className="font-mono text-4xl font-semibold text-gold sm:text-5xl">{stat.figure}</p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
