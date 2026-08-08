"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarPlus, Phone, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { site } from "@/lib/site-config";
import { images } from "@/lib/images";

/** §7.3 — asymmetric 60/40 hero, NOT centered. The gold Care Line enters the image frame. */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative -mt-[60px] overflow-hidden bg-evergreen lg:-mt-[72px]">
      {/* Soft radial texture, purely decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 15%, rgba(46,107,82,0.55) 0%, transparent 60%), radial-gradient(50% 40% at 90% 90%, rgba(201,147,47,0.18) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-(--container-page) grid-cols-1 gap-12 px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-24 lg:grid-cols-5 lg:items-center lg:pt-36 lg:pb-28">
        <div className="lg:col-span-3">
          <motion.p {...rise(0)} className="eyebrow text-gold">
            Ile-Oluji · Ondo State
          </motion.p>
          <motion.h1
            {...rise(0.08)}
            className="mt-4 font-display text-[2.5rem] leading-[1.08] font-semibold text-balance text-white sm:text-6xl lg:text-[3.75rem]"
          >
            Specialist care, rooted in Ile-Oluji.
          </motion.h1>
          <motion.p {...rise(0.16)} className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            General outpatient, admissions, surgery and more — trusted,
            HMO-accredited care close to home.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-7 flex flex-wrap gap-2.5">
            {site.trustSignals.slice(0, 3).map((t) => (
              <Chip key={t} className="bg-white/10 text-white [&_svg]:text-gold">
                {t}
              </Chip>
            ))}
          </motion.div>

          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap gap-4">
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
              Emergency — Call now
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-2"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-card shadow-soft-hover ring-1 ring-white/10">
            <Image
              src={images.heroDoctor.src}
              alt={images.heroDoctor.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-evergreen/40 via-transparent to-transparent" />
          </div>
          {/* The Care Line entering the frame corner */}
          <span
            aria-hidden="true"
            className="absolute -top-6 -left-2 hidden h-16 w-px bg-gold lg:block"
          />
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 bg-evergreen/70">
        <p className="mx-auto max-w-(--container-page) px-5 py-3 text-center font-mono text-xs tracking-wide text-white/80 sm:px-8">
          <PhoneCall className="mr-1.5 inline h-3.5 w-3.5 text-gold" aria-hidden="true" />
          Open 24 hours for emergencies · Call{" "}
          <a href={site.contact.emergencyPhoneHref} className="font-semibold text-gold underline underline-offset-2">
            {site.contact.emergencyPhone}
          </a>
        </p>
      </div>
    </section>
  );
}
