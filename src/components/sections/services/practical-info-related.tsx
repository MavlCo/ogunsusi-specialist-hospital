import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { DynamicIcon } from "@/components/icon-map";
import { services, type ServiceDefinition } from "@/lib/site-config";

/** §8.3 (5)+(6) — practical-info card with mono labels, and a related-services row. */
export function PracticalInfoRelated({ service }: { service: ServiceDefinition }) {
  const related = services.filter((s) => s.slug !== service.slug);

  return (
    <section className="bg-clinical-white py-20 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal className="rounded-card border border-line bg-evergreen p-8 text-white shadow-soft sm:p-10">
          <p className="eyebrow text-gold">Practical information</p>
          <dl className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {service.practicalInfo.map((info) => (
              <div key={info.label}>
                <dt className="font-mono text-xs uppercase tracking-[0.1em] text-white/50">{info.label}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-white/90">{info.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16">
          <p className="eyebrow">Related services</p>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-3 rounded-card border border-line p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-hover"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-evergreen">
                    <DynamicIcon name={s.iconKey} className="h-4.5 w-4.5" />
                  </span>
                  <span className="flex-1 font-body text-sm font-semibold text-ink group-hover:text-evergreen">
                    {s.shortTitle}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gold" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
