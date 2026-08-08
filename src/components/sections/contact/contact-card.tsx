import { MapPin, Phone, PhoneCall, MessageCircle, Mail, Clock, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site-config";

/** §8.5 (3) right column — contact card. */
export function ContactCard() {
  return (
    <div className="rounded-card border border-line bg-sage/50 p-8 shadow-soft">
      <h3 className="font-display text-xl font-medium text-evergreen">Reach us directly</h3>

      <ul className="mt-6 space-y-5">
        <li className="flex gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <div>
            <p className="text-ink/80">{site.contact.address.full}</p>
            <a
              href={site.contact.mapsDirectionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-evergreen hover:text-healing-green"
            >
              Get directions <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <a href={site.contact.phoneHref} className="text-ink/80 hover:text-evergreen">
            {site.contact.phone}
          </a>
        </li>
        <li className="flex gap-3">
          <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-emergency" aria-hidden="true" />
          <a href={site.contact.emergencyPhoneHref} className="font-semibold text-emergency hover:underline">
            {site.contact.emergencyPhone} <span className="font-mono text-xs font-normal">— Emergency, 24h</span>
          </a>
        </li>
        <li className="flex gap-3">
          <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <a href={site.contact.whatsappHref} className="text-ink/80 hover:text-evergreen">
            WhatsApp us
          </a>
        </li>
        <li className="flex gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <a href={`mailto:${site.contact.email}`} className="text-ink/80 hover:text-evergreen">
            {site.contact.email}
          </a>
        </li>
        <li className="flex gap-3">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <ul className="space-y-1 font-mono text-sm text-ink/70">
            {site.hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
