import { ClipboardCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { beforeVisitChecklist } from "@/lib/site-config";

/** §8.4 (2) — "Before your visit" checklist card. */
export function BeforeVisitChecklist() {
  return (
    <section className="bg-clinical-white py-20 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Before you arrive" title="What to bring on your first visit." />
        <Reveal delay={0.08} className="mt-10 max-w-2xl rounded-card border border-line bg-sage/50 p-8 shadow-soft">
          <ul className="space-y-4">
            {beforeVisitChecklist.map((item) => (
              <li key={item} className="flex gap-3">
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-ink/80">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
