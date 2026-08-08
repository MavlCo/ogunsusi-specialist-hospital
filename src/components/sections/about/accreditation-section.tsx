import { Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { accreditations } from "@/lib/site-config";

/** §8.1 (5) — badge cards with short explanations. */
export function AccreditationSection() {
  return (
    <section className="bg-clinical-white py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Accreditation & recognition" title="Genuine, verifiable trust signals." />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {accreditations.map((a, i) => (
            <Reveal
              key={a.title}
              delay={i * 0.08}
              className="rounded-card border-t-2 border-t-gold bg-gold-tint/40 p-7 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clinical-white text-gold shadow-soft">
                <Award className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-medium text-evergreen">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{a.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
