import { MapPin, Clock, ShieldCheck, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site-config";

/** Component A — thin evergreen utility bar, hidden below 640px (design.md §5). */
export function UtilityBar() {
  const todayHours = site.hours[0];

  return (
    <div className="hidden h-10 bg-evergreen text-white sm:block">
      <div className="mx-auto flex h-full max-w-(--container-page) items-center justify-between px-5 font-mono text-xs sm:px-8">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            Ile-Oluji, Ondo State
          </span>
          <span className="hidden items-center gap-1.5 text-white/70 md:inline-flex">
            <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            Open today: {todayHours.time}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden items-center gap-1.5 md:inline-flex">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            HMO-accredited
          </span>
          <a href={site.contact.whatsappHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
            <MessageCircle className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            WhatsApp
          </a>
          <a href={site.contact.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-gold">
            <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {site.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
