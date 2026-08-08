import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { images } from "@/lib/images";

/** §8.1 (2) — two-column narrative + real-photo placeholder. */
export function OurStory() {
  return (
    <section className="bg-clinical-white py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-evergreen sm:text-4xl">
              Grounded in Ile-Oluji, built for the community.
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/70">
              <p>
                Ogunsusi Specialist Hospital is a privately owned specialist
                healthcare facility on Zion Estate, Temidire Street, in
                Ile-Oluji — the headquarters town of the Ile-Oluji/Okeigbo
                Local Government Area of Ondo State. We serve patients from
                Ile-Oluji and the neighbouring towns and villages across
                central Ondo State.
              </p>
              <p>
                We operate a complete private-hospital service line —
                ambulatory outpatient care, ward admissions with
                round-the-clock nursing, an on-site operating theatre for
                surgical procedures, and mortuary and embalming services for
                the wider community. Every service is delivered with the
                same conviction: that quality specialist care should be
                within reach of the people who call this town home.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-4/3 overflow-hidden rounded-card shadow-soft-hover">
              <Image
                src={images.aboutStory.src}
                alt={images.aboutStory.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
