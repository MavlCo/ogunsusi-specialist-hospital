# Ogunsusi Specialist Hospital — Detailed Website Design Brief & Stitch AI Prompt Pack

**Prepared for:** Senior UI/UX Designer (Google Stitch AI)
**Client:** Ogunsusi Specialist Hospital, Ile‑Oluji, Ondo State, Nigeria
**Deliverable:** A complete, responsive, standard-grade hospital marketing website (desktop + mobile)
**Version:** 2.0 — expanded, page-by-page detail

---

## 0. How to use this brief in Stitch

Stitch (Gemini-powered) outputs HTML + Tailwind CSS and exports to Figma/code in **Standard Mode**. Work **foundation-first, then screen-by-screen**:

1. Paste the **Foundation Prompt (§10A)** first — it locks the brand, tokens, and the global frame.
2. For each page, paste that page's prompt (§8) and append the **Reusable Style Block (§10B)**.
3. Generate **2–3 screens per batch**, then **multi-select them (Shift+Click)** and re-apply the Style Block as a theme prompt for consistency.
4. Refine **one change per prompt** ("enlarge the emergency button", not "fix everything").
5. Always use **hex codes** and **design-language terms** (sticky header, split hero, side-rail, chips, accordion, stepper, bottom sheet, sticky action bar).

---

## 1. Business snapshot (source of truth)

| Field | Detail |
|---|---|
| Name | **Ogunsusi Specialist Hospital** (also: Ogunsusi Hospital) |
| Type | Private specialist hospital · Category "A" · Ondo State–registered |
| Owner / Medical Director | **Dr. Josiah Babatunde Ogunsusi** |
| Address | No. 1, Zion Estate, Temidire Street, Ile‑Oluji, Ondo State, Nigeria (351) |
| LGA / Region | Ile‑Oluji/Okeigbo LGA, central Ondo State |
| Core services | General Outpatient (GOPD) · Inpatient/Admission · Surgery · Mortuary & Embalming |
| Trust signals | Government-registered · **HMO-accredited** (cashless for insured) · Category "A" |
| Audience | Local families; HMO/insured patients; referrals — **mostly mobile, limited data** |
| Primary actions | Book appointment · Call now · Get directions · Check HMO |
| Fill-in placeholders | Phone, emergency line, WhatsApp, email, exact hours, MD credentials & photo, accepted HMOs, year established, bed count |

**Context that shapes the design:** Ile‑Oluji is an agrarian Yoruba town in Ondo's cocoa country ("Little Jerusalem"). The site must feel **trustworthy, calm, warm, and unmistakably local** — never a generic blue-and-white clinic template — and must be **fast and thumb-friendly on mobile**.

---

## 2. Design concept — "Rooted Care"

**Thesis:** *Specialist care, rooted in Ile‑Oluji.* Clinical and precise, but warm and human — a hospital that belongs to its community.

**Signature (the one memorable element):** the **Care Line** — a thin continuous gold line entering from the hero and threading down a left side-rail as you scroll, dropping a node at each section; it represents the continuity of a patient's care and doubles as scroll navigation. Paired with the **Living Cross** logo (a medical cross whose lower arm becomes a leaf).

Deliberately avoids the three AI defaults (cream + serif + terracotta; black + acid accent; broadsheet hairlines) and the healthcare cliché (blue/white + foreign stock photos).

---

## 3. Design system / tokens

### 3.1 Colour palette (exact hex)

| Token | Hex | Role |
|---|---|---|
| Evergreen | `#14432E` | Primary — header, footer, headings, primary buttons |
| Healing Green | `#2E6B52` | Secondary — hovers, icon strokes, secondary fills |
| Sage Mist | `#E7F0E9` | Soft section backgrounds, cards, tints |
| Clinical White | `#FBFCFB` | Base page background (clean near-white, **not** cream) |
| Warm Gold | `#C9932F` | Signature accent — Care Line, active states, CTA underline, highlights |
| Gold Tint | `#F3E7CE` | Subtle badge/highlight fills |
| Ink | `#16211B` | Body text |
| Line Grey | `#E0E7E2` | Hairline dividers, borders |
| Emergency Red | `#C0392B` | **Emergency-only** control and critical alerts — never decorative |

All text/UI must meet **WCAG AA** (≥4.5:1 body, ≥3:1 large text/UI). Gold is an accent, never body text on white.

### 3.2 Typography (Google Fonts — unique, deliberate)

| Role | Font | Usage |
|---|---|---|
| Display / Headings | **Fraunces** | Hero, section & page titles. Weights 400–600, soft optical, tightened tracking at large sizes. |
| Body / UI | **Hanken Grotesk** | Paragraphs, nav, buttons, forms. Weights 400/500/600. High legibility for older users. |
| Utility / Labels / Data | **IBM Plex Mono** | Eyebrows (ALL-CAPS), stat figures, phone/hours, form labels, footer meta. 500, +0.08em. |

**Type scale (desktop → mobile):** Display XL 64/40 (Fraunces 600, lh 1.05) · H1 48/32 · H2 36/26 · H3 22/20 · Body-L 18/17 (lh 1.6) · Body 16/16 · Eyebrow 13 (mono, uppercase, +0.1em) · Stat 44 (mono). **Never set body below 16px.**

### 3.3 Spacing, grid, shape, elevation

- **Spacing scale (4px base):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 120.
- **Grid:** 12-col desktop, container max **1240px**, 80px outer margins; tablet 8-col; mobile single-col, 20px margins.
- **Section rhythm:** desktop 96–120px vertical padding; mobile 56–72px. White space is a feature.
- **Breakpoints:** mobile <640 · tablet 640–1024 · desktop >1024.
- **Radius:** cards/buttons 14px · inputs 12px · chips/pills 999px.
- **Elevation:** soft only — `0 8px 24px rgba(20,67,46,0.06)`; hover `0 12px 32px rgba(20,67,46,0.10)`.
- **Left side-rail (desktop ≥1024):** ~72px, carries the gold Care Line + section nodes + rotated "EMERGENCY" click-to-call; collapses into the sticky header on mobile.

### 3.4 Component state tokens

- **Primary button:** default Evergreen fill/white text → hover Healing Green + gold underline grows in → active darken 6% → focus 2px gold ring (2px offset) → disabled 40% opacity.
- **Secondary button:** Evergreen 1.5px outline/Evergreen text → hover Sage Mist fill.
- **Emergency button:** Red outline + phone icon → hover Red fill/white.
- **Input:** default Line-Grey border on white → focus gold border + soft gold glow → error Red border + helper text + icon → success green check. Labels always visible (never placeholder-only). Min height 48px.
- **Card:** Sage Mist or white, soft shadow → hover lift + gold left-edge accent.
- **Nav link:** Ink → hover gold underline → active gold underline persistent.
- **Accordion:** row with + / − icon; open reveals answer, gold left border; one open at a time.

### 3.5 Imagery, icons, motion

- **Photography:** real hospital/staff/(consented) patient photos, natural light, authentic — not glossy foreign stock. Duotone some toward Evergreen. Clearly-labelled placeholders where photos are pending.
- **Icons:** single-weight line, ~1.75px stroke, rounded caps, Evergreen/Healing Green with occasional gold.
- **Motion (restrained):** scroll-reveal (fade + 12px rise); Care Line "draws" downward on scroll, nodes light gold when active; 150ms hover micro-interactions. **Respect `prefers-reduced-motion`.** Keep light for low-end devices.

---

## 4. Global UX rules (every screen)

1. **Mobile-first & fast** — assume mid-range Android on limited data; optimise/lazy-load images.
2. **Emergency is always one tap away** — red "Emergency — Call now" in header/side-rail + mobile sticky bar.
3. **Click-to-call & WhatsApp everywhere** — `tel:` and `wa.me` links.
4. **Trust before persuasion** — surface Registered / HMO-accredited / Category A / MD early.
5. **Plain, active language** — "Book an appointment", "Find us". Sentence-case buttons.
6. **WCAG AA** — visible gold focus rings, semantic headings, alt text, ≥16px body, ≥44px tap targets, labelled fields.
7. **Consistent global frame** — same header, side-rail, emergency control, footer on all pages.
8. **Local details** — Nigerian phone format, address + LGA, map to Zion Estate/Temidire Street.
9. **Dignity of tone** — Mortuary & Embalming presented calmly and supportively, never as a "shop".
10. **Directional empty/finished states** — e.g. "Patient reviews will appear here", not a broken-looking gap.

---

## 5. Global components (detailed)

**A. Announcement/utility bar** (thin, Evergreen, 40px): left — "Ile‑Oluji, Ondo State" + "Open today: [hours]" (mono); right — "HMO-accredited" chip · WhatsApp · phone. Hidden <640px.

**B. Sticky header** (72px desktop / 60px mobile, white, soft shadow on scroll): Living Cross logo + wordmark (left) · nav (Home, About, Services, Patients & Visitors, Contact) · **"Book appointment"** (primary) · **"Emergency — Call now"** (red). Mobile: logo + red emergency-call icon + hamburger → full-screen menu with the same links and both CTAs.

**C. Care-Line side-rail** (desktop): vertical gold line, labelled section nodes (scroll-spy), rotated "EMERGENCY" click-to-call at the base.

**D. Buttons** — see §3.4 states. Min height 48px, tap ≥44px.

**E. Service card:** line icon (gold accent), H3, one-line plain description, "Learn more →"; hover lift + gold left edge.

**F. Trust/accreditation strip:** gold-tint pills with check icons — "Ondo State Registered", "HMO-Accredited", "Category A Facility", "Specialist Care".

**G. Doctor/leadership card:** portrait placeholder, "Dr. Josiah Babatunde Ogunsusi", "Founder & Medical Director", short bio, credentials in mono.

**H. Insurance/HMO block:** short explainer, accepted-HMO logo row placeholder, "Check your HMO" CTA.

**I. Appointment form:** labelled fields — Full name · Phone · WhatsApp (optional) · Service needed (select) · Preferred date & time · Message; **"Request appointment"** button; reassurance "We'll call you back to confirm." Inline validation + success state.

**J. Testimonial card:** star rating, Fraunces-italic quote, name/initials + date. **Real reviews only** — labelled empty state otherwise.

**K. CTA band:** full-width Evergreen with gold Care-Line motif — headline + Book/Call buttons.

**L. Footer** (Evergreen): logo + one-line mission; columns — Quick links · Services · Contact (address, phone, emergency, WhatsApp, email, hours) · mini-map; accreditation line; socials; copyright + "Ile‑Oluji, Ondo State" (mono).

**M. Mobile sticky action bar:** big **Call** + **Book** buttons + red **Emergency** tap.

**N. Breadcrumbs** (interior pages): Home / Section / Page, mono, gold active.

**O. Section header pattern:** mono eyebrow → Fraunces H2 → optional one-line intro; left-aligned, Care-Line node at left.

---

## 6. Sitemap (standard, complete)

**Core (design in full detail):**
1. Home
2. About Us
3. Services (overview)
4. Service Detail (template → GOPD · Inpatient · Surgery · Mortuary & Embalming)
5. Patients & Visitors
6. Contact & Appointment

**Recommended standard pages:**
7. Insurance & HMO
8. FAQ
9. Testimonials / Reviews

**Standard utility/legal:**
10. Health Tips / News (blog index + post template) — optional, SEO
11. 404 Not Found
12. Privacy Policy & Terms

> **Page count:** 6 core designs + 1 reusable service-detail template (×4 live pages) + 3 recommended + utility/legal. Generate the 6 core first.

---

## 7. HOME PAGE — detailed section-by-section

The homepage is the single most important screen: in one scroll it must build trust, show services, and make booking or calling effortless. Sections top → bottom:

### 7.1 Announcement/utility bar
Component A. "Ile‑Oluji, Ondo State · Open today: [hours]" (left) — "HMO-accredited ✓ · WhatsApp · [phone]" (right).

### 7.2 Sticky header
Component B. Turns from transparent-over-hero to solid white with soft shadow after 40px scroll.

### 7.3 Hero — split, asymmetric (60/40), NOT centered
- **Left (60%):** mono eyebrow "ILE‑OLUJI · ONDO STATE" → Fraunces Display-XL **"Specialist care, rooted in Ile‑Oluji."** → supporting line *"General outpatient, admissions, surgery and more — trusted, HMO-accredited care close to home."* → three trust chips (Registered · HMO-accredited · Category A) → two buttons: **Book appointment** (primary) + **Emergency — Call now** (red).
- **Right (40%):** warm real-photo placeholder in a rounded frame; the gold **Care Line** enters the frame corner and continues down into the side-rail.
- **Under hero:** a slim **"Open 24 hours for emergencies · Call [emergency line]"** ribbon (confirm 24h).
- **Responsive:** stacks to single column on mobile (headline → chips → buttons → image); Display-XL drops to 40px.

### 7.4 Quick-access "How can we help?" tiles
Three large tap tiles directly under the hero for the top intents: **Book an appointment** · **Our services** · **Find & call us**. Each: icon, label, one-line, arrow. High-contrast, thumb-sized — this is the fast path for mobile users.

### 7.5 Trust / accreditation strip
Component F — the four credential pills on a Sage Mist band. Reassurance headline (mono): "A registered, accredited specialist hospital."

### 7.6 Services — the "Care Journey"
- **Intro** (Component O): eyebrow "OUR SERVICES", H2 "Complete care, under one roof."
- **Clinical services as a connected path** linked by the gold line, staggered (not an identical 4-up grid):
  - **General Outpatient (GOPD)** — "Walk-in consultations, diagnosis and treatment for everyday health needs, check-ups and follow-ups."
  - **Inpatient & Admission** — "Ward beds with 24-hour nursing for monitoring, treatment and recovery."
  - **Surgery** — "On-site theatre for planned and emergency procedures, with pre-op and post-op care."
  Each node: icon, title, one-line, "Learn more →".
- **Mortuary & Embalming** — a **separate, calm, respectful full-width card below** (softer copy, "Speak with us" link, not a sales CTA).
- **Responsive:** the path becomes a vertical stepper on mobile.

### 7.7 "Why Ogunsusi" — differentiators
Eyebrow "WHY OGUNSUSI" → H2 "Care you can trust, close to home." → 4 icon+text blocks:
1. **HMO-accredited, cashless care** — treatment covered for insured patients.
2. **Full service under one roof** — outpatient, admission and surgery in one place.
3. **Registered & Category A** — recognised by Ondo State health authorities.
4. **Led by an experienced Medical Director** — Dr. Josiah Babatunde Ogunsusi.

### 7.8 "At a glance" facts band *(use only true numbers — confirm before publishing)*
Evergreen band, four mono stat figures + labels: **[Est. year]** Serving Ile‑Oluji · **4** Core services · **[N]** HMO partners · **[N]** Inpatient beds. *(Omit any figure you can't verify — do not invent stats.)*

### 7.9 How it works — patient journey (4-step stepper)
Eyebrow "YOUR VISIT" → H2 "Getting care is simple." → steps tied to the gold line: **1 Book or walk in → 2 Consult & diagnose → 3 Treatment, admission or surgery → 4 Recovery & follow-up.** Each: number (mono), title, one line.

### 7.10 Meet the Medical Director
Component G — large portrait placeholder (left) + bio (right): name, "Founder & Medical Director", 2–3 sentences, credentials in mono, "Read our story →" link to About.

### 7.11 Insurance / HMO
Component H — H2 "Are you covered? We accept HMO patients." + explainer + accepted-HMO logo-row placeholder + **"Check your HMO"** button.

### 7.12 Testimonials
Component J — H2 "What our patients say." Real reviews only; ship the labelled empty state ("Patient reviews will appear here soon") until the client supplies them.

### 7.13 Health tips / news preview *(optional, SEO)*
Eyebrow "HEALTH TIPS" → 3 article-card placeholders (image, category, title, date) → "View all →". Mark optional.

### 7.14 FAQ preview
H2 "Common questions." → 4-row accordion (see §8.8) → "See all FAQs →".

### 7.15 CTA band
Component K — "Need to see a doctor?" + **Book appointment** + **Call now**, gold Care-Line motif.

### 7.16 Contact preview
Two columns: contact details + hours (mono) | embedded mini-map to Zion Estate/Temidire Street + "Get directions".

### 7.17 Footer + mobile sticky bar
Components L and M.

**Home Stitch prompt:**
```text
Design a detailed, responsive HOMEPAGE (desktop + mobile) for "Ogunsusi Specialist Hospital", a warm, trustworthy private specialist hospital in Ile-Oluji, Ondo State, Nigeria. Calm, clean, human, lots of white space, mobile-first, fast for low bandwidth. NOT a generic blue-and-white clinic template.
Colours (hex): bg #FBFCFB, primary #14432E, secondary #2E6B52, soft bg #E7F0E9, gold accent #C9932F, gold tint #F3E7CE, text #16211B, line #E0E7E2, emergency red #C0392B.
Fonts: headings "Fraunces" (serif); body/UI "Hanken Grotesk"; ALL-CAPS labels, stat numbers, phone & hours in "IBM Plex Mono".
Global frame: thin evergreen utility bar (location + open hours left; HMO chip, WhatsApp, phone right); sticky white header with a leaf-cross logo, nav (Home, About, Services, Patients & Visitors, Contact), a green "Book appointment" button and a red outline "Emergency — Call now" button; a thin GOLD vertical "Care Line" in a left side-rail as a scroll index; evergreen footer.
Build these sections in order:
1) HERO: asymmetric 60/40 split, not centered — left has mono eyebrow "ILE-OLUJI · ONDO STATE", a large Fraunces headline "Specialist care, rooted in Ile-Oluji.", a supporting line, three pill chips (Ondo State Registered, HMO-Accredited, Category A) and two buttons (green "Book appointment", red "Emergency — Call now"); right has a warm real-photo placeholder in a rounded frame with the gold Care Line entering its corner; a slim "Open 24 hours for emergencies — call [number]" ribbon under it.
2) Three big quick-access tiles: "Book an appointment", "Our services", "Find & call us".
3) Accreditation chip strip on a sage band.
4) SERVICES as a connected horizontal "care journey" path (gold line) with staggered nodes for General Outpatient (GOPD), Inpatient & Admission, and Surgery — each with icon, title, one line, "Learn more →" — then a SEPARATE, calm, respectful full-width card for "Mortuary & Embalming" with a "Speak with us" link (no sales CTA).
5) "Why Ogunsusi" band: 4 icon+text differentiators (HMO-accredited cashless care; full service under one roof; registered & Category A; experienced Medical Director).
6) An evergreen "At a glance" facts band with 4 mono stat figures + labels.
7) "How it works" 4-step stepper tied to the gold line (Book/walk in → Consult → Treatment/admission/surgery → Recovery).
8) "Meet the Medical Director" card for Dr. Josiah Babatunde Ogunsusi (portrait placeholder, credentials in mono).
9) Insurance/HMO block with accepted-HMO logo-row placeholder and a "Check your HMO" button.
10) Testimonials row with a labelled empty state.
11) Optional "Health Tips" 3-card preview.
12) FAQ accordion (4 rows) + "See all FAQs".
13) Evergreen CTA band "Need to see a doctor?" with Book/Call.
14) Contact preview with details, hours (mono) and an embedded map to "No. 1, Zion Estate, Temidire Street, Ile-Oluji".
Mobile: single column, hamburger menu, and a sticky bottom bar with big "Call" and "Book" buttons plus a red emergency tap. Soft 14px card radius, gentle shadows, WCAG AA contrast, visible gold focus rings, 16px minimum body text, 44px+ tap targets.
```

---

## 8. INTERIOR PAGES — detailed specs + prompts

Each interior page opens with: breadcrumbs (N) → compact page hero (mono eyebrow + Fraunces H1 + one-line intro + Care-Line node). Same header, side-rail, footer throughout.

### 8.1 About Us
**Sections:** (1) Page hero "About Ogunsusi Specialist Hospital". (2) **Our story** — two columns (warm narrative grounded in Ile‑Oluji + real photo). (3) **Mission / Vision / Values** — three calm blocks tied by the gold line. (4) **Medical Director feature** — large portrait, bio, credentials (mono). (5) **Accreditation & recognition** — badge cards (Ondo State Registered, HMO-Accredited, Category A) with short explanations. (6) **Our facility** — small gallery placeholder (wards, theatre, reception). (7) CTA band.

```text
Design a detailed, responsive ABOUT US page for Ogunsusi Specialist Hospital. Reuse the brand: colours #FBFCFB/#14432E/#2E6B52/#E7F0E9/#C9932F/#F3E7CE/#16211B/#E0E7E2/#C0392B; fonts Fraunces headings, Hanken Grotesk body, IBM Plex Mono labels; same utility bar, sticky header, gold Care-Line side-rail, footer.
Sections: breadcrumbs; a compact page hero with eyebrow "OUR STORY" and Fraunces H1 "About Ogunsusi Specialist Hospital"; a two-column "Our story" block (warm narrative about a specialist hospital rooted in Ile-Oluji, Ondo State + real-photo placeholder); "Mission / Vision / Values" as three calm blocks connected by the gold line; a large Medical Director feature for Dr. Josiah Babatunde Ogunsusi (portrait placeholder, bio, credentials in mono); an "Accreditation & Recognition" section with gold-tint badge cards each with a one-line explanation; an "Our facility" small gallery placeholder (reception, ward, theatre); and an evergreen CTA band. Calm, trustworthy, generous white space, WCAG AA, mobile-first.
```

### 8.2 Services (overview)
**Sections:** (1) Page hero "Complete care, under one roof". (2) **Care-journey path** — GOPD, Inpatient, Surgery as staggered gold-linked blocks, each with icon, 2–3 line description, key points, "Learn more →". (3) **Mortuary & Embalming** — separate respectful full-width block with supportive copy + "Speak with us". (4) **Other services** note (lab, pharmacy, maternity, imaging, ambulance — only if confirmed). (5) **How to access care** mini-steps. (6) CTA band.

```text
Design a detailed, responsive SERVICES OVERVIEW page for Ogunsusi Specialist Hospital (same brand, colours, fonts, header, gold Care-Line side-rail, footer).
Sections: breadcrumbs; page hero eyebrow "OUR SERVICES", Fraunces H1 "Complete care, under one roof"; the clinical services as a connected vertical "care journey" with the gold line linking staggered, alternating left/right blocks — General Outpatient (GOPD), Inpatient & Admission, Surgery — each with a line icon, a 2–3 line description, 3 bullet key-points and a "Learn more →" link; a SEPARATE calm, respectful full-width card for "Mortuary & Embalming Services" with supportive language and a "Speak with us" contact link (not a sales CTA); a small "Other services" note area; a "How to access care" 3-step mini-stepper; and an evergreen CTA band. Avoid an identical 4-up card grid. WCAG AA, mobile-first, 16px min body.
```

### 8.3 Service Detail (reusable template ×4)
**Template sections:** (1) Breadcrumbs + compact hero (service icon + Fraunces title + one-line summary + Book/Call). (2) **What to expect** (plain language). (3) **Who this is for**. (4) **What's included / typical process** (bullets or mini-steps). (5) **Practical info card** — hours, walk-in vs appointment, how to access, HMO note (mono labels). (6) **Related services** row. (7) Book CTA.
**Per-service copy:**
- **GOPD** — expect: consult, diagnosis, prescriptions, referrals; for: everyday illnesses, check-ups, follow-ups. CTA: Book/Walk in.
- **Inpatient & Admission** — expect: admission, ward bed, 24-hr nursing, monitoring; for: patients needing treatment/observation/recovery. Info: visiting hours, what to bring.
- **Surgery** — expect: pre-op assessment, theatre procedure, recovery; for: planned & emergency surgical needs. Info: preparation, consent, follow-up.
- **Mortuary & Embalming** — **supportive, gentle tone**: dignified preservation & embalming; guidance for bereaved families; CTA becomes "Speak with us" (call/visit), no booking form.

```text
Design a reusable, detailed SERVICE DETAIL page template for Ogunsusi Specialist Hospital, filled in for "General Outpatient Services (GOPD)" (same brand, colours, fonts, header, gold Care-Line side-rail, footer).
Sections: breadcrumbs; a compact hero (service line icon + Fraunces title "General Outpatient Services" + one-line summary + green "Book appointment" and red "Call now" buttons); a "What to expect" section in plain language; a "Who this is for" list; a "Typical process" 3–4 step mini-stepper; a practical-info card with mono labels (opening hours, walk-in vs appointment, how to access, HMO/insurance note); a "Related services" row (Inpatient, Surgery, Mortuary & Embalming); and a closing Book-appointment CTA band. Keep the same global frame. WCAG AA, mobile-first.
Note: this template will be reused for Inpatient & Admission, Surgery, and — with a gentler, supportive tone and a "Speak with us" contact CTA instead of a booking form — Mortuary & Embalming.
```

### 8.4 Patients & Visitors
**Sections:** (1) Page hero "Everything you need for your visit". (2) **Before your visit** checklist (valid ID; HMO card + authorisation code; previous records/results; current medication list). (3) **Booking & walk-ins** (how to book, what happens on arrival). (4) **Admissions & inpatient** (what to bring, expectations). (5) **Visiting hours & guidance**. (6) **Payments & insurance** (self-pay + HMO cashless, accepted-HMO placeholder, "Check your HMO"). (7) **Getting here** (address, map, transport). (8) **FAQ accordion**. (9) CTA.

```text
Design a detailed, responsive PATIENTS & VISITORS page for Ogunsusi Specialist Hospital (same brand, colours, fonts, header, gold Care-Line side-rail, footer).
Sections: breadcrumbs; page hero eyebrow "PATIENTS & VISITORS", Fraunces H1 "Everything you need for your visit"; a "Before your visit" checklist card (valid ID, HMO card and authorisation code, previous records/results, current medication list); a "Booking & walk-ins" block; an "Admissions & inpatient care" block (what to bring, what to expect); a "Visiting hours & guidance" block; a "Payments & insurance" section (self-pay and HMO cashless, accepted-HMO logo-row placeholder, "Check your HMO" button); a "Getting here" block with address and an embedded map to "No. 1, Zion Estate, Temidire Street, Ile-Oluji"; a FAQ accordion; and a Book/Call CTA band. Warm, reassuring, plain active language, WCAG AA, mobile-first.
```

### 8.5 Contact & Appointment
**Sections:** (1) Page hero "Book a visit or reach us". (2) **Emergency callout** (red bar, big click-to-call). (3) **Two-column split** — LEFT appointment form (Component I; select includes all 4 services + Other; inline validation; success state "Request received — we'll call you back"); RIGHT contact card (address + "Get directions"; click-to-call phone; red emergency line; WhatsApp; email; hours in mono). (4) **Full-width embedded map** pinned to Ile‑Oluji. (5) Footer. **Mobile:** form → contact → map; sticky Call/Book bar.

```text
Design a detailed, responsive CONTACT & APPOINTMENT page for Ogunsusi Specialist Hospital (same brand, colours, fonts, header, gold Care-Line side-rail, footer).
Layout: breadcrumbs; a compact hero with Fraunces H1 "Book a visit or reach us"; a prominent red "Emergency — Call now" callout bar with a big click-to-call number. Below, a two-column split: LEFT is an appointment form with visible labels — Full name, Phone, WhatsApp (optional), Service needed (select: General Outpatient / Inpatient & Admission / Surgery consult / Mortuary & Embalming / Other), Preferred date & time, Message — with inline validation, a big green "Request appointment" button, reassurance text "We'll call you back to confirm", and a success state message. RIGHT is a contact card: address "No. 1, Zion Estate, Temidire Street, Ile-Oluji, Ondo State (351)" with a "Get directions" button, click-to-call phone, a red emergency line, WhatsApp link, email, and opening hours in mono. Then a full-width embedded map pinned to Ile-Oluji. Mobile: form first, then contact, then map; sticky bottom Call/Book bar. WCAG AA, 44px+ tap targets, visible gold focus rings, 16px min body.
```

### 8.6 Insurance & HMO (recommended)
**Sections:** hero "HMO & insurance made simple" → how cashless care works (3 steps) → accepted HMOs (logo grid placeholder) → "Check your HMO" lookup/CTA → self-pay note → FAQ → CTA.

### 8.7 Testimonials / Reviews (recommended)
**Sections:** hero "What our patients say" → overall rating summary (once real) → grid of real-review cards → "Leave a review" prompt with the Google-review link. **Real reviews only; labelled empty state until supplied.**

### 8.8 FAQ (recommended, standalone)
Accordion grouped by theme (Visiting & booking · Services · Insurance/HMO · Emergency). Sample questions: Where are you located? · What services do you offer? · Do you accept HMO/insurance and which ones? · Are you open 24 hours for emergencies? · Do I need an appointment or can I walk in? · Who is the Medical Director? · How do I get admitted? · What should I bring? One open at a time; gold left border on open.

### 8.9 Utility/legal (standard)
- **Health Tips / News** *(optional SEO)* — blog index (filter chips + article-card grid + pagination) and a post template (hero image, title, meta, prose body, related posts). Mono meta, Fraunces titles.
- **404** — friendly Fraunces "This page took a wrong turn." + Care-Line motif + buttons back to Home / Services / Contact + emergency call.
- **Privacy Policy & Terms** — simple readable long-form (Fraunces headings, Hanken body, generous line-height, anchored table of contents).

---

## 9. Responsive behaviour (all pages)

- **Desktop >1024:** 12-col, side-rail Care Line visible, split heroes, multi-column bands.
- **Tablet 640–1024:** 8-col, side-rail collapses, heroes stack or 50/50, 2-col bands.
- **Mobile <640:** single column, hamburger menu, hero image below headline, care-journey becomes a vertical stepper, sticky bottom Call/Book/Emergency bar, tables/step rows stack, tap targets ≥44px.

---

## 10. The two workhorse prompts (copy-paste)

### 10A. Foundation prompt (paste FIRST)
```text
I'm designing a detailed, responsive marketing website for "Ogunsusi Specialist Hospital", a warm, trustworthy private specialist hospital in Ile-Oluji, Ondo State, Nigeria. Audience: local families and HMO/insured patients, mostly on mobile with limited data. Tone: calm, clean, human, clinical-but-warm — NOT a generic blue-and-white clinic template.
Design system (use exactly):
- Colours: bg #FBFCFB, primary #14432E (evergreen), secondary #2E6B52, soft bg #E7F0E9, gold accent #C9932F, gold tint #F3E7CE, text #16211B, line #E0E7E2, emergency-only red #C0392B.
- Fonts: headings "Fraunces" (warm serif); body & UI "Hanken Grotesk"; ALL-CAPS labels, numbers, phone and hours in "IBM Plex Mono".
- Shape: 14px card/button radius, 12px inputs, pill chips, soft low shadows, hairline dividers, generous white space; spacing scale 4/8/12/16/24/32/48/64/80/96/120; container max 1240px.
- Signature: a thin continuous GOLD "Care Line" running vertically down a left side-rail as a scroll index, plus a leaf-cross logo.
Global frame on every page: thin evergreen utility bar; sticky header (leaf-cross logo, nav: Home / About / Services / Patients & Visitors / Contact, green "Book appointment" button, red "Emergency — Call now" button); the gold Care-Line side-rail on desktop; evergreen footer with address, click-to-call phone, WhatsApp, email, hours (mono) and accreditation badges. Mobile: hamburger menu + sticky bottom bar with big "Call" and "Book" buttons and a red emergency tap.
Accessibility & quality: mobile-first, WCAG AA contrast, visible gold keyboard focus rings, 16px minimum body, 44px+ tap targets, click-to-call on all numbers, respect reduced motion, lightweight for low bandwidth. Confirm you'll use this system, then I'll ask for each page one at a time.
```

### 10B. Reusable style block (APPEND to every page prompt / apply to multi-selected screens)
```text
Keep the exact same brand system: bg #FBFCFB, evergreen #14432E, green #2E6B52, sage #E7F0E9, gold #C9932F, gold tint #F3E7CE, text #16211B, line #E0E7E2, emergency red #C0392B; Fraunces headings, Hanken Grotesk body, IBM Plex Mono labels/numbers; 14px radius (12px inputs), soft shadows, pill chips, generous white space, 1240px max width; the same utility bar, sticky header, gold Care-Line left side-rail, and evergreen footer; breadcrumbs and a compact page hero on interior pages; mobile-first; WCAG AA; visible gold focus rings; 16px min body; 44px+ tap targets; a red "Emergency — Call now" control on every screen.
```

---

## 11. Build & refinement workflow

1. Paste **10A**. Generate **Home + About**; multi-select and apply **10B**.
2. Add **Services + Service Detail**, then **Patients & Visitors**, then **Contact** — 2–3 at a time, re-applying **10B**.
3. Then **Insurance & HMO**, **FAQ**, **Testimonials**; then utility/legal.
4. Refine **one change per prompt** (e.g. "swap the 4-card grid for the connected care-journey path"; "enlarge the emergency button and move it left of Book"; "hero headline to 64px").
5. Replace all image placeholders with the client's real photos before export.
6. Export in **Standard Mode** (HTML/Tailwind → Vercel, or → Figma for polish).

---

## 12. Pre-launch checklist

- [ ] Real photos of the hospital, staff, facility, and Dr. Ogunsusi added (no placeholders left).
- [ ] Real phone, emergency line, WhatsApp, email and exact hours filled in; click-to-call tested.
- [ ] Accepted HMOs listed; "Check your HMO" wired up.
- [ ] Map pinned to Zion Estate / Temidire Street, Ile‑Oluji; "Get directions" works.
- [ ] Appointment form delivers to the hospital (email/WhatsApp) with a callback promise + success state.
- [ ] Only **real** patient reviews shown; empty state otherwise.
- [ ] "At a glance" band uses only verified numbers (no invented stats).
- [ ] Mobile pass: sticky Call/Book bar, tap targets, load speed on limited data.
- [ ] Accessibility pass: contrast, focus, headings, alt text, reduced motion.
- [ ] Legal pages (Privacy/Terms) present; 404 in place.

---

*Design concept, tokens, and copy are grounded in the Ogunsusi Specialist Hospital business profile and tailored to Ile‑Oluji, Ondo State. Placeholders must be completed with real client-supplied details and photos before launch.*
