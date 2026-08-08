/**
 * Single source of truth for business data, navigation, and structured
 * content used across the site. Centralising this here means every page,
 * the header/footer, and JSON-LD structured data stay in sync — update the
 * hospital's real details in one place before launch.
 *
 * NOTE: Phone numbers, WhatsApp, email, hours, HMO list, and stats are
 * placeholders pending confirmation from the hospital (see profile.md).
 * Replace the `TODO` values before going live; everything else (name,
 * address, services, credentials) is sourced from the business profile.
 */

export const site = {
  name: "Ogunsusi Specialist Hospital",
  shortName: "Ogunsusi Hospital",
  tagline: "Specialist care, rooted in Ile-Oluji.",
  description:
    "A registered, HMO-accredited private specialist hospital in Ile-Oluji, Ondo State — offering outpatient, inpatient, surgical and mortuary care under one roof.",
  url: "https://www.ogunsusihospital.ng",
  locale: "en_NG",
  founder: {
    name: "Dr. Josiah Babatunde Ogunsusi",
    title: "Founder & Medical Director",
    bio: "Dr. Josiah Babatunde Ogunsusi founded Ogunsusi Specialist Hospital to bring accessible, dignified specialist care to Ile-Oluji and the surrounding communities of central Ondo State. He leads the hospital's clinical practice and day-to-day operations.",
    credentials: "MBBS · MDCN Registered · Medical Director",
  },
  contact: {
    phone: "+234 803 000 0000", // TODO: confirm primary line
    phoneHref: "tel:+2348030000000",
    emergencyPhone: "+234 803 000 0001", // TODO: confirm 24/7 emergency line
    emergencyPhoneHref: "tel:+2348030000001",
    whatsapp: "+234 803 000 0000", // TODO: confirm WhatsApp Business number
    whatsappHref: "https://wa.me/2348030000000",
    email: "info@ogunsusihospital.ng", // TODO: confirm official email
    address: {
      line1: "No. 1, Zion Estate, Temidire Street",
      line2: "Ile-Oluji, Ondo State, Nigeria",
      postalCode: "351",
      lga: "Ile-Oluji/Okeigbo LGA",
      full: "No. 1, Zion Estate, Temidire Street, Ile-Oluji, Ondo State, Nigeria (351)",
    },
    mapsQuery: "Zion Estate, Temidire Street, Ile-Oluji, Ondo State, Nigeria",
    mapsEmbedSrc:
      "https://www.google.com/maps?q=Zion+Estate,+Temidire+Street,+Ile-Oluji,+Ondo+State,+Nigeria&output=embed",
    mapsDirectionsHref:
      "https://www.google.com/maps/dir/?api=1&destination=Zion+Estate,+Temidire+Street,+Ile-Oluji,+Ondo+State,+Nigeria",
  },
  hours: [
    { day: "Monday – Friday", time: "8:00 AM – 6:00 PM", note: "Outpatient" },
    { day: "Saturday", time: "9:00 AM – 4:00 PM", note: "Outpatient" },
    { day: "Sunday", time: "Emergency only", note: "Outpatient closed" },
    { day: "Emergency & Inpatient", time: "24 hours", note: "Every day" },
  ], // TODO: confirm exact outpatient hours before publishing
  trustSignals: [
    "Ondo State Registered",
    "HMO-Accredited",
    "Category A Facility",
    "Specialist Care",
  ],
  stats: [
    { figure: "4", label: "Core services" },
    { figure: "24/7", label: "Emergency & inpatient care" },
    { figure: "1", label: "Location, Ile-Oluji" },
    { figure: "A", label: "Facility category" },
  ], // Only verified, non-invented figures — see design.md §7.8
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Patients & Visitors", href: "/patients-visitors" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Patients & Visitors", href: "/patients-visitors" },
    { label: "Insurance & HMO", href: "/insurance" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

export type ServiceSlug =
  | "general-outpatient"
  | "inpatient-admission"
  | "surgery"
  | "mortuary-embalming";

export interface ServiceDefinition {
  slug: ServiceSlug;
  shortTitle: string;
  title: string;
  summary: string;
  description: string;
  expect: string[];
  whoFor: string[];
  process: { title: string; description: string }[];
  practicalInfo: { label: string; value: string }[];
  iconKey: "stethoscope" | "bed-double" | "scissors" | "flower-2";
  tone: "clinical" | "supportive";
  image: string;
  imageAlt: string;
}

export const services: ServiceDefinition[] = [
  {
    slug: "general-outpatient",
    shortTitle: "General Outpatient (GOPD)",
    title: "General Outpatient Services",
    summary:
      "Walk-in consultations, diagnosis and treatment for everyday health needs, check-ups and follow-ups.",
    description:
      "Our General Outpatient Department is the front door to care at Ogunsusi Specialist Hospital — for routine check-ups, common illnesses, minor ailments, and follow-up reviews. Our clinicians take the time to listen, diagnose accurately, and guide you to the right next step, including referrals for specialist attention when needed.",
    expect: [
      "A thorough consultation with a qualified clinician",
      "Accurate diagnosis and clear explanation of your condition",
      "Prescriptions and practical health advice",
      "Referrals to the right department or specialist where needed",
    ],
    whoFor: [
      "Everyday illnesses and minor ailments",
      "Routine health check-ups",
      "Follow-up and review appointments",
      "Anyone unsure where to start — GOPD is the right first stop",
    ],
    process: [
      { title: "Register", description: "Walk in or arrive for your booked appointment; front desk registers your visit." },
      { title: "Consult", description: "See a clinician for examination, history-taking and diagnosis." },
      { title: "Treat", description: "Receive prescriptions, treatment or same-visit care." },
      { title: "Follow up", description: "Book a review or get referred onward if further care is needed." },
    ],
    practicalInfo: [
      { label: "HOURS", value: "Mon–Fri 8am–6pm · Sat 9am–4pm" },
      { label: "ACCESS", value: "Walk-in or book ahead" },
      { label: "HMO", value: "Cashless for accredited HMO patients" },
    ],
    iconKey: "stethoscope",
    tone: "clinical",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A doctor reviewing a patient's chart during an outpatient consultation",
  },
  {
    slug: "inpatient-admission",
    shortTitle: "Inpatient & Admission",
    title: "Inpatient & Admission Services",
    summary:
      "Ward beds with 24-hour nursing for monitoring, treatment and recovery.",
    description:
      "When a condition needs closer attention, our inpatient wards provide comfortable beds and round-the-clock nursing care. Whether you're recovering from an illness, undergoing extended treatment, or convalescing after surgery, our team monitors your progress and keeps your family informed every step of the way.",
    expect: [
      "A clean, comfortable ward bed for the duration of your stay",
      "24-hour nursing care and observation",
      "Regular review by your attending clinician",
      "Clear guidance for family and visitors",
    ],
    whoFor: [
      "Patients requiring close monitoring or observation",
      "Extended treatment for medical conditions",
      "Recovery and convalescence after surgery",
    ],
    process: [
      { title: "Admission", description: "Your clinician recommends admission and the ward team prepares your bed." },
      { title: "Care plan", description: "A treatment and monitoring plan is set and reviewed daily." },
      { title: "Recovery", description: "Round-the-clock nursing supports your recovery." },
      { title: "Discharge", description: "You're discharged with clear after-care and follow-up instructions." },
    ],
    practicalInfo: [
      { label: "VISITING HOURS", value: "Confirm with ward reception on arrival" },
      { label: "WHAT TO BRING", value: "ID, HMO card, toiletries, a change of clothes" },
      { label: "HMO", value: "Cashless admission for accredited HMO patients" },
    ],
    iconKey: "bed-double",
    tone: "clinical",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A clean, orderly hospital ward with made-up beds ready for patients",
  },
  {
    slug: "surgery",
    shortTitle: "Surgery",
    title: "Surgical Services",
    summary:
      "On-site theatre for planned and emergency procedures, with pre-op and post-op care.",
    description:
      "Our on-site operating theatre supports both planned (elective) and emergency surgical procedures. Every patient receives a thorough pre-operative assessment, a safely managed procedure, and attentive post-operative recovery care from our surgical and nursing team.",
    expect: [
      "A pre-operative assessment and clear explanation of the procedure",
      "Informed consent before any surgery",
      "A safely managed procedure in our on-site theatre",
      "Post-operative monitoring and recovery support",
    ],
    whoFor: [
      "Planned (elective) surgical procedures",
      "Emergency surgical needs",
      "Patients referred from GOPD or admission for surgical review",
    ],
    process: [
      { title: "Assessment", description: "Pre-operative review, tests and consent discussion." },
      { title: "Preparation", description: "Theatre and anaesthetic preparation ahead of your procedure." },
      { title: "Procedure", description: "Surgery carried out by our surgical team in the on-site theatre." },
      { title: "Recovery", description: "Post-operative monitoring, pain management and follow-up." },
    ],
    practicalInfo: [
      { label: "PREPARATION", value: "Fasting & pre-op instructions provided at assessment" },
      { label: "CONSENT", value: "Required before every procedure" },
      { label: "HMO", value: "Cashless for accredited HMO patients, subject to authorisation" },
    ],
    iconKey: "scissors",
    tone: "clinical",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "An operating theatre prepared for a surgical procedure",
  },
  {
    slug: "mortuary-embalming",
    shortTitle: "Mortuary & Embalming",
    title: "Mortuary & Embalming Services",
    summary:
      "Dignified preservation, embalming and supportive guidance for bereaved families.",
    description:
      "We understand this is a difficult time. Our mortuary offers professional, dignified body preservation and embalming services, and our staff are here to gently guide bereaved families through the practical steps — with patience, respect, and compassion.",
    expect: [
      "Dignified, professional preservation and embalming",
      "A calm, private space to make arrangements",
      "Gentle guidance through the practical next steps",
      "Respectful, unhurried support for your family",
    ],
    whoFor: [
      "Bereaved families arranging preservation or embalming",
      "Families coordinating with funeral directors",
      "Anyone needing guidance during a difficult time",
    ],
    process: [
      { title: "Speak with us", description: "Call or visit — our team listens and explains your options calmly." },
      { title: "Arrangements", description: "We coordinate preservation, embalming and documentation with your family." },
      { title: "Release", description: "Careful handover to your family or funeral director when you're ready." },
    ],
    practicalInfo: [
      { label: "AVAILABILITY", value: "Speak with us any time — 24 hours" },
      { label: "APPROACH", value: "Calm, private, and unhurried" },
      { label: "CONTACT", value: "Call or visit — no booking form needed" },
    ],
    iconKey: "flower-2",
    tone: "supportive",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "A calm, misty landscape reflecting quiet remembrance",
  },
];

export const serviceOptionsForForm = [
  { value: "general-outpatient", label: "General Outpatient" },
  { value: "inpatient-admission", label: "Inpatient & Admission" },
  { value: "surgery", label: "Surgery consult" },
  { value: "mortuary-embalming", label: "Mortuary & Embalming" },
  { value: "other", label: "Other" },
] as const;

export const whyOgunsusi = [
  {
    title: "HMO-accredited, cashless care",
    description:
      "Treatment is covered for insured patients on accredited HMO networks — no out-of-pocket surprises.",
    iconKey: "shield-check" as const,
  },
  {
    title: "Full service under one roof",
    description:
      "Outpatient, admission and surgery in one place — no need to shuttle between facilities.",
    iconKey: "layers" as const,
  },
  {
    title: "Registered & Category A",
    description:
      "Recognised by Ondo State health authorities as a registered Category A specialist hospital.",
    iconKey: "badge-check" as const,
  },
  {
    title: "Led by an experienced Medical Director",
    description:
      "Dr. Josiah Babatunde Ogunsusi leads our clinical practice, day-to-day operations and patient care.",
    iconKey: "user-round" as const,
  },
];

export const patientJourney = [
  { step: "1", title: "Book or walk in", description: "Call, WhatsApp, or simply walk in to General Outpatient." },
  { step: "2", title: "Consult & diagnose", description: "A clinician examines you and explains your diagnosis clearly." },
  { step: "3", title: "Treatment, admission or surgery", description: "Receive the right level of care — same-visit treatment, a ward bed, or theatre." },
  { step: "4", title: "Recovery & follow-up", description: "Recover with our support, with a clear plan for review." },
];

export const beforeVisitChecklist = [
  "A valid means of identification",
  "Your HMO / health-insurance card and authorisation code (for insured patients)",
  "Any previous medical records, test results, or referral letters",
  "A list of current medications, if any",
];

export const accreditations = [
  {
    title: "Ondo State Registered",
    description:
      "Officially listed in the Ondo State register of coded health facilities as a specialist hospital.",
  },
  {
    title: "HMO-Accredited",
    description:
      "An accredited provider on private health-insurance networks, enabling cashless treatment for enrollees.",
  },
  {
    title: "Category A Facility",
    description: "Recognised as a Category A facility on approved-hospital schedules.",
  },
];

export const faqs = [
  {
    group: "Visiting & booking",
    items: [
      {
        q: "Where is Ogunsusi Specialist Hospital located?",
        a: `${site.contact.address.full}, within ${site.contact.address.lga}.`,
      },
      {
        q: "Do I need an appointment or can I walk in?",
        a: "You're welcome to walk in for General Outpatient care, or book ahead by phone or WhatsApp if you'd like to plan your visit.",
      },
    ],
  },
  {
    group: "Services",
    items: [
      {
        q: "What services do you offer?",
        a: "General outpatient care, inpatient admission, surgical procedures, and mortuary & embalming services.",
      },
      {
        q: "Who is the Medical Director?",
        a: "Dr. Josiah Babatunde Ogunsusi, the hospital's founder and owner, leads our clinical practice.",
      },
      {
        q: "How do I get admitted?",
        a: "Admission is arranged by your attending clinician after a consultation, based on your clinical needs.",
      },
    ],
  },
  {
    group: "Insurance / HMO",
    items: [
      {
        q: "Do you accept HMO / health insurance, and which ones?",
        a: "Yes — we are an accredited provider on private health-insurance networks, allowing cashless treatment for enrolled patients. Call us to confirm your specific HMO is on our accepted list.",
      },
    ],
  },
  {
    group: "Emergency",
    items: [
      {
        q: "Are you open 24 hours for emergencies?",
        a: "Emergency and inpatient care is available around the clock. Outpatient consulting follows our published hours.",
      },
      {
        q: "What should I bring for admission?",
        a: "A valid ID, your HMO card and authorisation code (if insured), any previous medical records, and a list of current medications.",
      },
    ],
  },
];
