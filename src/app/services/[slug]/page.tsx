import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/site-config";
import { ServiceDetailHero } from "@/components/sections/services/service-detail-hero";
import { ExpectWhoFor } from "@/components/sections/services/expect-who-for";
import { ProcessSteps } from "@/components/sections/services/process-steps";
import { PracticalInfoRelated } from "@/components/sections/services/practical-info-related";
import { CtaBand } from "@/components/sections/shared/cta-band";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const supportive = service.tone === "supportive";

  return (
    <>
      <ServiceDetailHero service={service} />
      <ExpectWhoFor service={service} />
      <ProcessSteps service={service} />
      <PracticalInfoRelated service={service} />
      <CtaBand
        title={supportive ? "We're here for your family." : `Ready to book ${service.shortTitle}?`}
        intro={
          supportive
            ? "Call or visit us any time — our team will guide you gently through every step."
            : "Reserve your visit in minutes, or call our team directly."
        }
      />
    </>
  );
}
