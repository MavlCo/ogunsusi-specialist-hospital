import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Accordion, type AccordionItemData } from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";

/** §7.14 home preview, and the base for the standalone /faq page (§8.8). */
export function FaqSection({
  items,
  title = "Common questions.",
  eyebrow = "FAQ",
  seeAllHref,
}: {
  items: AccordionItemData[];
  title?: string;
  eyebrow?: string;
  seeAllHref?: string;
}) {
  return (
    <section className="bg-clinical-white py-24 sm:py-28">
      <div className="mx-auto max-w-(--container-page) px-5 sm:px-8">
        <SectionHeader eyebrow={eyebrow} title={title} align="center" />
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={items} />
          {seeAllHref && (
            <div className="mt-6 text-center">
              <Link
                href={seeAllHref}
                className="inline-flex items-center gap-1.5 font-semibold text-evergreen hover:text-healing-green"
              >
                See all FAQs <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
