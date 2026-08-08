import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { EmergencyCallout } from "@/components/sections/contact/emergency-callout";
import { AppointmentForm } from "@/components/sections/contact/appointment-form";
import { ContactCard } from "@/components/sections/contact/contact-card";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Appointment",
  description:
    "Book an appointment or reach Ogunsusi Specialist Hospital directly — phone, WhatsApp, email, address and map for Ile-Oluji, Ondo State.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-sage">
        <div className="mx-auto max-w-(--container-page) px-5 py-14 sm:px-8 sm:py-20">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <Reveal className="mt-5 max-w-2xl">
            <p className="eyebrow">Contact &amp; appointment</p>
            <h1 className="mt-3 font-display text-4xl font-semibold text-balance text-evergreen sm:text-5xl">
              Book a visit or reach us
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink/70">
              Fill in the form below and we&apos;ll call you back to confirm —
              or reach us directly by phone, WhatsApp or email.
            </p>
          </Reveal>
        </div>
      </section>

      <EmergencyCallout />

      <section className="bg-clinical-white py-16 sm:py-20 order-2">
        <div className="mx-auto grid max-w-(--container-page) grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-5 lg:gap-14">
          <Reveal className="order-1 lg:order-1 lg:col-span-3">
            <h2 className="font-display text-2xl font-medium text-evergreen">Request an appointment</h2>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-2 lg:order-2 lg:col-span-2">
            <ContactCard />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <iframe
          title={`Map to ${site.name}, Ile-Oluji`}
          src={site.contact.mapsEmbedSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[420px] w-full border-0"
        />
      </section>
    </>
  );
}
