import { Fraunces, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";

/** Display/heading serif — warm, literary, humanist. */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/** Body / UI sans — high legibility for all ages. */
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** Utility / labels / data — the "clinical record" mono voice. */
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-plex",
  weight: ["400", "500", "600"],
  display: "swap",
});
