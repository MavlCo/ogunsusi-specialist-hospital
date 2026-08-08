import type { Metadata } from "next";
import { MessageSquareHeart, Star, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/shared/cta-band";

export const metadata: Metadata = {
  title: "Testimonials & Reviews",
  description: "Real patient reviews from Ogunsusi Specialist Hospital, Ile-Oluji, Ondo State.",
  alternates: { canonical: "/testimonials" },
};

/**
 * §8.7 — real reviews only; ships the honest, labelled empty state since
 * no reviews are published yet (profile.md §10).
 */
export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
        eyebrow="Patient stories"
        title="What our patients say"
        intro="We only publish genuine, verified reviews from our own patients — never invented ones."
      />

      <section className="bg-clinical-white py-24 sm:py-28">
        <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
          <Reveal className="mx-auto max-w-lg rounded-card border border-dashed border-line bg-sage/50 p-10 text-center shadow-soft">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold-tint text-gold">
              <MessageSquareHeart className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="mt-5 flex justify-center gap-1 text-line">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" aria-hidden="true" />
              ))}
            </div>
            <h2 className="mt-4 font-display text-xl font-medium text-evergreen">
              Patient reviews will appear here soon.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              A thorough search found no published reviews for the hospital
              yet. Once real, verified patient reviews are shared with us,
              they&apos;ll appear here with an average rating.
            </p>
            <div className="mt-6">
              <Button href="https://www.google.com/maps" size="md">
                Leave a review <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
