import { Target, Eye, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";

const blocks = [
  {
    icon: Target,
    title: "Mission",
    text: "To provide accessible, compassionate, and high-quality specialist medical care to the people of Ile-Oluji and surrounding communities, treating every patient with dignity and professional excellence.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "To be the most trusted private specialist hospital in central Ondo State, recognised for clinical excellence, ethical care, and patient-centred service.",
  },
  {
    icon: HeartHandshake,
    title: "Core Values",
    text: "Compassion, excellence, integrity, and accessibility — the four principles guiding every consultation, admission, and procedure at our hospital.",
  },
];

/** §8.1 (3) — three calm blocks tied by the gold line. */
export function MissionVisionValues() {
  return (
    <section className="bg-sage py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="What guides us" title="Mission, vision & values." align="center" />
        <div className="relative mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          <span aria-hidden="true" className="absolute top-6 right-0 left-0 hidden h-px bg-line md:block" />
          {blocks.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.08} className="relative rounded-card border border-line bg-clinical-white p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-tint text-gold">
                <block.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-evergreen">{block.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{block.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
