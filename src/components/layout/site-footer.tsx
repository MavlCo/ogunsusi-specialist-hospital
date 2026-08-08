import Link from "next/link";
import { MapPin, Phone, PhoneCall, MessageCircle, Mail, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Logo } from "@/components/logo";
import { Chip } from "@/components/ui/chip";
import { site, footerLinks, services } from "@/lib/site-config";

/** Component L — evergreen footer: mission, quick links, services, contact, accreditation. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-evergreen text-white lg:pl-[72px]">
      <div className="mx-auto max-w-(--container-page) px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Accessible, compassionate specialist care for Ile-Oluji and the
              surrounding communities of Ondo State.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold"
              >
                <FaFacebookF className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-gold hover:text-gold"
              >
                <FaInstagram className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Quick links</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/80 transition-colors hover:text-white">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{site.contact.address.full}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={site.contact.phoneHref} className="hover:text-white">{site.contact.phone}</a>
              </li>
              <li className="flex gap-2.5">
                <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={site.contact.emergencyPhoneHref} className="hover:text-white">
                  {site.contact.emergencyPhone} <span className="font-mono text-xs">(emergency)</span>
                </a>
              </li>
              <li className="flex gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={site.contact.whatsappHref} className="hover:text-white">WhatsApp</a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">{site.contact.email}</a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="font-mono text-xs">{site.hours[0].time} · Mon–Fri</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-2.5 border-t border-white/15 pt-8">
          {site.trustSignals.map((t) => (
            <Chip key={t} className="bg-white/10 text-white [&_svg]:text-gold">
              {t}
            </Chip>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">
            © {year} {site.name} · Ile-Oluji, Ondo State
          </p>
          <div className="flex gap-4">
            {footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
