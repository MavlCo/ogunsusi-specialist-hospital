import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { images } from "@/lib/images";

const gallery = [
  { image: images.receptionLobby, label: "Reception" },
  { image: images.inpatientWard, label: "Ward" },
  { image: images.surgeryTheatre, label: "Theatre" },
];

/** §8.1 (6) — small gallery placeholder (wards, theatre, reception). */
export function FacilityGallery() {
  return (
    <section className="bg-sage py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Our facility" title="A closer look inside." />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="group relative aspect-4/3 overflow-hidden rounded-card shadow-soft">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 90vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-evergreen/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-[0.1em] text-white">
                {item.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
