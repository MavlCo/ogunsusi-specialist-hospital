import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site-config";

export interface LegalSection {
  id: string;
  title: string;
  paragraphs: string[];
}

/** Shared long-form layout for Privacy Policy & Terms (§8.9) — anchored TOC, generous line-height. */
export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: title }]}
        eyebrow="Legal"
        title={title}
        intro={intro}
      />
      <section className="bg-clinical-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-(--container-page) grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-4">
          <nav aria-label="Table of contents" className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">On this page</p>
              <ul className="mt-4 space-y-2.5 border-l border-line pl-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-sm text-ink/60 hover:text-evergreen">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-xs text-ink/40">Last updated: {updated}</p>
            </div>
          </nav>

          <div className="space-y-12 lg:col-span-3">
            {sections.map((s) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <Reveal>
                  <h2 className="font-display text-2xl font-medium text-evergreen">{s.title}</h2>
                  <div className="mt-4 space-y-4 text-base leading-loose text-ink/75">
                    {s.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </Reveal>
              </div>
            ))}
            <p className="text-sm text-ink/50">
              Questions about this policy? Contact us at{" "}
              <a href={`mailto:${site.contact.email}`} className="text-evergreen hover:underline">
                {site.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
