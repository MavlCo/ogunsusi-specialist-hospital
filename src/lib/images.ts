/**
 * Curated image library.
 *
 * Every hospital, staff and facility photo the client can supply is still a
 * placeholder at the time of this build (see profile.md §9/§12) — so this
 * library uses honest, verified-live, high-quality editorial photography
 * (Unsplash) chosen to reflect the hospital's real services and warm,
 * community tone, until real photography is supplied. Swap any entry below
 * for the client's real photo by replacing the `src` — every consumer reads
 * from this single manifest.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function unsplash(id: string, width = 1600): string {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${width}&auto=format&fit=crop`;
}

export const images = {
  heroDoctor: {
    src: unsplash("1622253692010-333f2da6031d", 1400),
    alt: "A smiling doctor in scrubs with a stethoscope, representing the warm clinical care at Ogunsusi Specialist Hospital",
    width: 1400,
    height: 1750,
  },
  directorPortrait: {
    src: unsplash("1622253692010-333f2da6031d", 1200),
    alt: "Portrait representing Dr. Josiah Babatunde Ogunsusi, Founder & Medical Director",
    width: 1200,
    height: 1500,
  },
  gopdConsult: {
    src: unsplash("1631217868264-e5b90bb7e133", 1600),
    alt: "A doctor reviewing a patient's chart during an outpatient consultation",
    width: 1600,
    height: 1067,
  },
  inpatientWard: {
    src: unsplash("1538108149393-fbbd81895907", 1600),
    alt: "A clean, orderly hospital ward with made-up beds",
    width: 1600,
    height: 1067,
  },
  inpatientRoom: {
    src: unsplash("1580281657702-257584239a55", 1600),
    alt: "A private inpatient room with a hospital bed and monitoring equipment",
    width: 1600,
    height: 1067,
  },
  surgeryTheatre: {
    src: unsplash("1551076805-e1869033e561", 1600),
    alt: "An operating theatre prepared for a surgical procedure",
    width: 1600,
    height: 1067,
  },
  surgeryTeam: {
    src: unsplash("1579684385127-1ef15d508118", 1600),
    alt: "A surgical team gathered around the operating table, viewed from below",
    width: 1600,
    height: 1600,
  },
  surgeryHuddle: {
    src: unsplash("1504813184591-01572f98c85f", 1600),
    alt: "Surgeons in scrubs reviewing instruments before a procedure",
    width: 1600,
    height: 1067,
  },
  mortuaryMist: {
    src: unsplash("1518199266791-5375a83190b7", 1600),
    alt: "A calm, misty landscape reflecting quiet remembrance",
    width: 1600,
    height: 900,
  },
  mortuaryFlowers: {
    src: unsplash("1465146344425-f00d5f5c8f07", 1600),
    alt: "A soft field of wildflowers, a gentle symbol of remembrance",
    width: 1600,
    height: 1067,
  },
  receptionLobby: {
    src: unsplash("1519494026892-80bbd2d6fd0d", 1600),
    alt: "A calm, well-lit hospital reception area",
    width: 1600,
    height: 1067,
  },
  waitingRoom: {
    src: unsplash("1519494140681-8b17d830a3e9", 1400),
    alt: "A quiet hospital waiting area with seating",
    width: 1400,
    height: 1867,
  },
  handsWithPhone: {
    src: unsplash("1576091160399-112ba8d25d1d", 1400),
    alt: "A clinician in a white coat holding a phone, ready to take a call",
    width: 1400,
    height: 1400,
  },
  whyChooseUs: {
    src: unsplash("1666214280391-8ff5bd3c0bf0", 1600),
    alt: "Two clinicians reviewing diagnostic imaging together",
    width: 1600,
    height: 1067,
  },
  stethoscopeBw: {
    src: unsplash("1505751172876-fa1923c5c528", 1200),
    alt: "A stethoscope resting on a clinical surface",
    width: 1200,
    height: 800,
  },
  ivDrip: {
    src: unsplash("1516574187841-cb9cc2ca948b", 1600),
    alt: "An IV drip stand against a soft teal background",
    width: 1600,
    height: 2133,
  },
  aboutStory: {
    src: unsplash("1516841273335-e39b37888115", 1600),
    alt: "Clinical staff walking together down a bright hospital corridor",
    width: 1600,
    height: 1067,
  },
} as const satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
