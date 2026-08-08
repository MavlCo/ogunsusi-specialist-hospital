import { CalendarPlus, Phone, MessageCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { DynamicIcon } from "@/components/icon-map";
import { site, type ServiceDefinition } from "@/lib/site-config";

/** §8.3 (1) — compact hero: icon + title + summary + Book/Call (or "Speak with us" for mortuary). */
export function ServiceDetailHero({ service }: { service: ServiceDefinition }) {
  const supportive = service.tone === "supportive";

  return (
    <section className={supportive ? "border-b border-line bg-sage" : "border-b border-line bg-evergreen"}>
      <div className="mx-auto max-w-(--container-page) px-5 py-16 sm:px-8 sm:py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.shortTitle },
          ]}
        />
        <Reveal className="mt-6 max-w-2xl">
          <span
            className={
              "flex h-14 w-14 items-center justify-center rounded-full " +
              (supportive ? "bg-clinical-white text-healing-green" : "bg-white/10 text-gold")
            }
          >
            <DynamicIcon name={service.iconKey} className="h-6 w-6" />
          </span>
          <h1
            className={
              "mt-5 font-display text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl " +
              (supportive ? "text-evergreen" : "text-white")
            }
          >
            {service.title}
          </h1>
          <p className={"mt-4 text-lg leading-relaxed " + (supportive ? "text-ink/70" : "text-white/80")}>
            {service.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {supportive ? (
              <Button href={site.contact.phoneHref} size="lg">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Speak with us
              </Button>
            ) : (
              <>
                <Button href="/contact" size="lg">
                  <CalendarPlus className="h-5 w-5" aria-hidden="true" />
                  Book appointment
                </Button>
                <Button
                  href={site.contact.phoneHref}
                  variant="secondary"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call now
                </Button>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
