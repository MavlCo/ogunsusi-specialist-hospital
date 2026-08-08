import type { Metadata, Viewport } from "next";
import { fraunces, hankenGrotesk, ibmPlexMono } from "@/lib/fonts";
import { site } from "@/lib/site-config";
import { UtilityBar } from "@/components/layout/utility-bar";
import { SiteHeader } from "@/components/layout/site-header";
import { CareLineRail } from "@/components/layout/care-line-rail";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileStickyBar } from "@/components/layout/mobile-sticky-bar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Specialist care in Ile-Oluji, Ondo State`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Ogunsusi Specialist Hospital",
    "Ile-Oluji hospital",
    "Ondo State hospital",
    "HMO hospital Nigeria",
    "specialist hospital Ondo State",
    "GOPD Ile-Oluji",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Specialist care in Ile-Oluji, Ondo State`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#14432e",
  width: "device-width",
  initialScale: 1,
};

function HospitalJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.line1,
      addressLocality: "Ile-Oluji",
      addressRegion: "Ondo State",
      postalCode: site.contact.address.postalCode,
      addressCountry: "NG",
    },
    medicalSpecialty: [
      "General Practice",
      "Surgery",
      "Inpatient Care",
    ],
    founder: {
      "@type": "Person",
      name: site.founder.name,
      jobTitle: site.founder.title,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      className={`${fraunces.variable} ${hankenGrotesk.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-clinical-white text-ink font-body">
        <HospitalJsonLd />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-input focus:bg-evergreen focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <UtilityBar />
        <SiteHeader />
        <CareLineRail />
        <main id="main-content" className="flex-1 pb-14 lg:pb-0 lg:pl-[72px]">
          {children}
        </main>
        <SiteFooter />
        <MobileStickyBar />
      </body>
    </html>
  );
}
