import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { DynamicIcon } from "@/components/icon-map";
import { whyOgunsusi } from "@/lib/site-config";

/** §7.7 — four icon+text differentiators. */
export function WhyOgunsusi() {
  return (
    <section className="bg-sage py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why Ogunsusi"
          title="Care you can trust, close to home."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyOgunsusi.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="flex flex-col items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-clinical-white text-evergreen shadow-soft">
                <DynamicIcon name={item.iconKey} className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-medium text-evergreen">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
