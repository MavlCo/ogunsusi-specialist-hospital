import { Star, MessageSquareHeart } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";

/**
 * Component J — §7.12 / §8.7. Real reviews only (design.md §4.10 / §10 of
 * profile.md): no reviews are published for this hospital yet, so this
 * ships the honest, labelled empty state rather than inventing quotes.
 */
export function Testimonials({ tone = "sage" }: { tone?: "sage" | "white" }) {
  return (
    <section className={tone === "sage" ? "bg-sage py-24 sm:py-28" : "bg-clinical-white py-24 sm:py-28"}>
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Patient stories" title="What our patients say." align="center" />

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-lg rounded-card border border-dashed border-line bg-clinical-white p-10 text-center shadow-soft">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-tint text-gold">
            <MessageSquareHeart className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="mt-4 flex justify-center gap-1 text-line">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4" aria-hidden="true" />
            ))}
          </div>
          <p className="mt-3 font-display text-lg italic text-ink/70">
            Patient reviews will appear here soon.
          </p>
          <p className="mt-2 text-sm text-ink/50">
            We only publish real, verified reviews from our patients — check
            back after your visit, or leave us one yourself.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
