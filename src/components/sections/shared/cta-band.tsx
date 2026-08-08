import { CalendarPlus, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site-config";

/** Component K — full-width evergreen band with gold Care-Line motif. Reused site-wide. */
export function CtaBand({
  title = "Need to see a doctor?",
  intro = "Book an appointment online, or call us now — our team is ready to help.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-evergreen py-20 sm:py-24">
      <span aria-hidden="true" className="absolute inset-y-0 left-8 hidden w-px bg-gold/60 sm:block" />
      <div className="mx-auto max-w-(--container-page) px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">{intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              <CalendarPlus className="h-5 w-5" aria-hidden="true" />
              Book appointment
            </Button>
            <Button
              href={site.contact.emergencyPhoneHref}
              variant="emergency"
              size="lg"
              className="border-white/70 text-white hover:border-emergency"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call now
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
