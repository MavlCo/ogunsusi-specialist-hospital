import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion/reveal";
import { DynamicIcon } from "@/components/icon-map";
import { services } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const clinicalServices = services.filter((s) => s.tone === "clinical");
const mortuary = services.find((s) => s.tone === "supportive")!;

/**
 * §7.6 — clinical services as a connected, staggered "care journey" path
 * (not an identical 4-up grid), plus a separate calm full-width Mortuary
 * & Embalming card below.
 */
export function CareJourney() {
  return (
    <section className="bg-clinical-white py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader
          eyebrow="Our services"
          title="Complete care, under one roof."
          intro="From a routine check-up to surgical recovery, your care follows one connected path at Ogunsusi Specialist Hospital."
        />

        <div className="relative mt-16">
          {/* The connecting Care Line, desktop only */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-line md:block"
          />

          <ol className="space-y-10 md:space-y-16">
            {clinicalServices.map((service, index) => {
              const reversed = index % 2 === 1;
              return (
                <Reveal key={service.slug} as="li" delay={index * 0.06} className="relative">
                  <div
                    className={cn(
                      "grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12",
                      reversed && "md:[&>*:first-child]:order-2",
                    )}
                  >
                    <div className="relative aspect-16/10 overflow-hidden rounded-card shadow-soft">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(min-width: 768px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </div>

                    <div className={cn(reversed && "md:text-right")}>
                      <div className={cn("flex items-center gap-3", reversed && "md:flex-row-reverse")}>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-evergreen">
                          <DynamicIcon name={service.iconKey} className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-xs uppercase tracking-[0.1em] text-gold">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-medium text-evergreen">
                        {service.shortTitle}
                      </h3>
                      <p className="mt-2 text-ink/70 leading-relaxed">{service.summary}</p>
                      <Link
                        href={`/services/${service.slug}`}
                        className={cn(
                          "mt-4 inline-flex items-center gap-1.5 font-semibold text-evergreen hover:text-healing-green",
                          reversed && "md:flex-row-reverse",
                        )}
                      >
                        Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Node marker on the center line */}
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold bg-clinical-white md:block"
                  />
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* Mortuary & Embalming — separate, calm, respectful */}
        <Reveal delay={0.1} className="mt-16">
          <div className="overflow-hidden rounded-card border border-line bg-sage shadow-soft md:grid md:grid-cols-5">
            <div className="relative aspect-16/9 md:col-span-2 md:aspect-auto">
              <Image
                src={mortuary.image}
                alt={mortuary.imageAlt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 md:col-span-3 md:p-10">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clinical-white text-healing-green">
                  <DynamicIcon name={mortuary.iconKey} className="h-5 w-5" />
                </span>
                <span className="eyebrow">Mortuary &amp; Embalming</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-medium text-evergreen">
                {mortuary.title}
              </h3>
              <p className="mt-2 max-w-xl text-ink/70 leading-relaxed">{mortuary.summary}</p>
              <Link
                href={`/services/${mortuary.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 font-semibold text-evergreen hover:text-healing-green"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Speak with us
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
