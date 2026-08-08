import { MapPin, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";

/** §8.4 (7) — "Getting here" with address + embedded map. Reused on Patients & Visitors. */
export function GettingHere() {
  return (
    <section className="bg-clinical-white py-20 sm:py-24">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Getting here" title="Find your way to us." />
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
          <Reveal className="flex flex-col justify-center gap-5 rounded-card border border-line bg-sage/50 p-8">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <p className="text-lg text-ink/80">{site.contact.address.full}</p>
            </div>
            <p className="text-sm text-ink/60">
              Located within Zion Estate, off Temidire Street in Ile-Oluji
              town, central Ondo State.
            </p>
            <Button href={site.contact.mapsDirectionsHref} className="self-start">
              Get directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden rounded-card border border-line shadow-soft">
            <iframe
              title="Map to Ogunsusi Specialist Hospital, Ile-Oluji"
              src={site.contact.mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
