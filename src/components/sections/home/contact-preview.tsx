import { MapPin, Phone, PhoneCall, Clock, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site-config";

/** §7.16 — two columns: contact details + hours | embedded mini-map. */
export function ContactPreview() {
  return (
    <section className="bg-sage py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow="Find us" title="Visit or reach out any time." />
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal className="space-y-5 rounded-card border border-line bg-clinical-white p-8 shadow-soft">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <p className="text-ink/80">{site.contact.address.full}</p>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <a href={site.contact.phoneHref} className="text-ink/80 hover:text-evergreen">
                {site.contact.phone}
              </a>
            </div>
            <div className="flex gap-3">
              <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-emergency" aria-hidden="true" />
              <a href={site.contact.emergencyPhoneHref} className="text-emergency hover:underline">
                {site.contact.emergencyPhone} (Emergency)
              </a>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <ul className="font-mono text-sm text-ink/70">
                {site.hours.map((h) => (
                  <li key={h.day}>
                    {h.day}: {h.time}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={site.contact.mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-evergreen hover:text-healing-green"
            >
              Get directions <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
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
