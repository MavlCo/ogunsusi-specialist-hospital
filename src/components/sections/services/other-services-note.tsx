import { Info } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/** §8.2 (4) — small note area for services to confirm/add later. */
export function OtherServicesNote() {
  return (
    <section className="bg-clinical-white pb-4">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <Reveal className="flex items-start gap-3 rounded-card border border-dashed border-line bg-sage/50 p-6">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-healing-green" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink/70">
            <span className="font-semibold text-ink">Looking for something else?</span>{" "}
            We may also offer laboratory &amp; diagnostics, pharmacy, maternity,
            imaging and ambulance services. Call us to confirm availability
            for your specific need.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
