import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site-config";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

/** Component G — §7.10 / §8.1. Reused on Home and About. */
export function DirectorFeature({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-sage py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative aspect-4/5 overflow-hidden rounded-card shadow-soft-hover">
              <Image
                src={images.directorPortrait.src}
                alt={images.directorPortrait.alt}
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3">
            <p className="eyebrow">Meet the Medical Director</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-evergreen sm:text-4xl">
              {site.founder.name}
            </h2>
            <p className="mt-1 font-mono text-sm uppercase tracking-[0.08em] text-gold">
              {site.founder.title}
            </p>
            <p className={cn("mt-5 max-w-xl text-lg leading-relaxed text-ink/70")}>
              {site.founder.bio}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-ink/50">
              {site.founder.credentials}
            </p>
            {showLink && (
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1.5 font-semibold text-evergreen hover:text-healing-green"
              >
                Read our story <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
