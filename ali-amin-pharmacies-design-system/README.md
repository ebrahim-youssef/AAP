# صيدليات علي أمين — Ali Amin Pharmacies Design System

**Direction:** *Clear Shelf* (2b), frozen from the direction exploration in `Directions.html`.
**Scope:** Arabic-first, RTL-first, light theme only. Surfaces: mobile + desktop website, Instagram (posts, carousels, stories), slides.

## Context

Ali Amin Pharmacies is a local Egyptian pharmacy brand. The brand name is **صيدليات علي أمين / Ali Amin Pharmacies**. «د.» is *not* part of the name. The founder is a source of history and trust, not the face of the service.

The website is a tool, not a brochure: **search → see the last known price (with timestamp) → send to confirm availability on WhatsApp → choose branch or delivery.**

Operating values: trust, professionalism, reliability, ease, consistency. There is deliberately no mission/vision copy.

Design goal from the owner: *you walk in and feel trusted; everything is clear and clean; you can get anywhere easily; nothing distracts.*

### Sources
These files were given, and are stored in `uploads/`:
- `uploads/ali-amin-design-system-draft.md`: v0.9 Arabic draft with voice, brand rules, component contracts, UX rules, IA and social system. This is the source of truth for mission, voice and rules.
- `uploads/ali-amin-design-system-v0.10.md`: v0.10 "Useful Shelf" summary.
- `uploads/ali-amin-tokens.css`, `uploads/ali-amin-specimen.{html,css,js}`: the previous visual specimen. It was **superseded**; the owner asked for a full visual revamp.

No logo files, photography, codebase or Figma were supplied.

## Index
- `styles.css`: the single entry point. It holds only `@import` lines, for `tokens/typography.css`, `tokens/colors.css`, `tokens/spacing.css` and `components/components.css`.
- `tokens/`: CSS custom properties, base and semantic.
- `components/`: React primitives plus `components.css` (class styles, prefix `aa-`).
- `guidelines/`: foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/website/`: click-through mobile (`index.html`) and desktop (`desktop.html`) site.
- `templates/instagram/`: Instagram posts, carousel and story template.
- `templates/slides/`: slide-deck template.
- `Directions.html`: the exploration history (1a–1c, 2a, 2b). It is kept for reference and is not part of the system.
- `SKILL.md`: the agent-skill entry.

## Components
Namespace: `window.DesignSystem_032903`.
- **brand/**: `Wordmark` (typeset «علي أمين / صيدليات»), `ShelfEdge` (signature 4-segment edge).
- **core/**: `Button` (primary / secondary / ghost / inverse), `Icon` (Lucide via CDN), `StatusTag` (check / confirmed / unavailable / info), `Divider` (hairline / band).
- **forms/**: `SearchField` (onBrand / sunken), `RadioRow`.
- **pharmacy/**: `PriceTag` (the shelf tag), `ProductRow`, `FactList`, `BranchCard`.
- **navigation/**: `AppHeader`, `TopBar`, `TabBar`, `ListLink`, `SectionTitle`, `BranchButton`.
- **feedback/**: `Notice` (note / warning / danger), `Sheet` + `MessagePreview` (the WhatsApp confirm sheet).

The inventory comes from the draft's component contracts (primary/secondary button, search field, medicine card → `ProductRow`/`PriceTag`, availability badge → `StatusTag`, product detail → `FactList`, branch card, service cue / help card → `ListLink`, alert → `Notice`, dialog → `Sheet`).

**Intentional additions:**
- `Icon`: a wrapper for the Lucide glyph set.
- `Wordmark`, `ShelfEdge`: brand primitives.
- `TabBar`, `TopBar`, `AppHeader`, `BranchButton`, `SectionTitle`, `Divider`, `RadioRow`: the navigation and layout structure of the 2b direction.

---

## CONTENT FUNDAMENTALS

- **Language:** natural Egyptian Arabic («دوّر»، «عايز»، «محتاجين نأكد»). It is not formal MSA and not robotic pharmacy-speak. English is supporting metadata only (Latin drug names, the "ALI AMIN PHARMACIES" line).
- **Voice:** direct, informed, candid, human. Information comes before marketing, and care shows in the action, not in adjectives. No hype, no fake hooks, no slogans such as «صحتك تهمنا».
- **Person:** we speak as «إحنا» to «إنت» («نأكدلك»، «ابعتلنا»). The pharmacist is a person («صيدلي هيرد عليك»), never a bot.
- **Precision rises with risk.** Doses, children, pregnancy, interactions and serious symptoms get fewer casual words and more exact ones, plus a calm escalation: «لو الموضوع محتاج دكتور، هنقولك بوضوح».
- **Mandatory formats:**
  - Price: «آخر سعر معروف: 128 ج.م — محدّث اليوم 10:40 ص». A price with no timestamp cannot be published.
  - Availability: default «يلزم تأكيد» / «محتاجين نأكد من الفرع». Say «متأكدين/متوفر» *only* when it comes from a live, trusted source.
  - Result context: «دي آخر معلومة معروفة، مش مخزون لحظي».
- **Buttons are verbs with an object:** «أكد التوفر على واتساب», «اسأل صيدلي», «افتح واتساب». Never «اضغط هنا».
- **Site copy is shorter than social copy.** Say «دوّر بالاسم», not a paragraph of intro.
- **Casing and numbers:** Western digits (128, 10:40). Drug names, doses, phone numbers and URLs stay LTR inside RTL text.
- **No emoji** anywhere: UI, social or slides.
- **Never invent data:** no made-up branch addresses, hours, delivery times or WhatsApp numbers. Show «بيانات تتوثّق» instead.

## VISUAL FOUNDATIONS

- **Vibe:** a well-organised shelf. It is calm, flat and tool-like, like a banking app, not a lifestyle brand. It avoids an AI-template look: no floating rounded cards on tinted pages, no icon-in-tinted-square feature tiles, no gradients, no decorative steps.
- **Colour:**
  - Core blue `#1265C4` is the shop sign. It is used for the home header, the ONE primary action per screen, links and active tabs.
  - Navy `#082D5C` is for headings, the price-tag rail and inverse buttons.
  - Pages are white. Grey `#F2F4F7` is used for sunken fields and 8px section bands.
  - **Shelf yellow `#FFC629` appears only for «يلزم تأكيد» and one shelf-edge segment.** It is never used for a CTA, a sale badge or a background.
  - Status: green `#087A55` (confirmed), red `#A93546` (unavailable / escalation).
- **Type:** Almarai only (Arabic + Latin). 800 for headings and prices, 700 for labels, 400 for body. Scale: display 38, h1 26, h2 20, title 16, body 15, small 13, caption 12, micro 11. Headings are never decorated; hierarchy comes from size and weight.
- **Layout:**
  - Mobile gutter 16px. Desktop max width 1120px with a 40px gutter.
  - Lists, not cards: rows have 14–15px vertical padding and 1px `#E6EAF0` hairlines inset 16px. Sections are separated by an 8px grey band.
  - Mobile has a four-tab bottom bar (الرئيسية، بحث، صيدلي، الفروع), 74px high. The active tab gets a 3px blue top bar.
  - The branch selector is always in the header.
- **Signature elements:**
  1. **Shelf edge:** four uneven segments (3fr 1fr 2fr 1.2fr, 3px gaps), navy with the second one yellow. It sits flush under the blue home header, once per screen.
  2. **Shelf tag:** the evolved "Useful Shelf" rail. A 1.5px ink border, 10px radius, a large price, and a navy rail carrying timestamp · branch · status.
- **Radii:** 4px tags, 10px controls / fields / price tag / branch cards, 18px on the sheet's top corners only. Nothing larger, no pills except round radio dots.
- **Borders and shadows:** flat by default. Hairlines separate; a 1px `#D7DEE7` border is used for branch cards and light chips. The **only shadow** is the bottom sheet (`0 -8px 24px` navy 12%). Desktop mock frames use a soft panel shadow for presentation only.
- **Backgrounds:** solid colour only (white, grey band, core blue header, navy rail). No gradients, patterns, textures or glassmorphism. Blur is never used. Transparency appears only in the sheet overlay (navy 45%) and the white hairlines on blue.
- **Imagery (when supplied):** real branches, organised shelves, team members helping. Daylight or neutral light, realistic angles; blue should come from the environment, not a filter. No stock doctors, product collages or founder portraits as the main template. No photography has been provided yet, so the system works without it.
- **Hover:**
  - Primary buttons darken (`#0E57AB`).
  - List rows get a `#F7F8FA` fill.
  - Secondary button borders go navy.
  - Nav links go from 80% to 100% opacity.
- **Press:** a darker blue (`#0B4A91`) and scale .98.
- **Focus:** a 2px navy outline with 2px offset (white on blue surfaces).
- **Motion:** quiet. 140ms for colour, 200ms for the overlay fade, 280ms for the sheet slide-up, all with `cubic-bezier(.2,0,0,1)`. No bounces, parallax or looping motion. `prefers-reduced-motion` removes all of it.
- **Accessibility:** WCAG 2.2 AA text contrast, 44px minimum touch targets, and errors never conveyed by colour alone. Native RTL reading, focus order and arrows (forward = ←).

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) line icons (lucide-static 0.454.0 via unpkg CDN), 2px stroke with round caps, rendered in `currentColor` through the `Icon` component (CSS mask).
- **This is a substitution.** No icon set was supplied, and the draft only specified "precise line icons, 1.75px, rounded ends". Lucide is the closest CDN match; swap it if the brand adopts its own set.
- **Colour:** brand blue in list rows, secondary grey in fields, and inherited colour inside buttons, tags and rails. Icons are never placed in tinted squares or circles.
- **Common glyphs:** `search`, `map-pin`, `message-circle` (WhatsApp / pharmacist), `clock` (timestamps), `phone`, `navigation`, `house`, `info`, `triangle-alert`, `x`, and `chevron-left` / `arrow-left` for forward (RTL), `arrow-right` for back.
- **Banned:** medical crosses, capsules, leaves, hearts or heartbeats, emoji, and unicode symbols used as icons.
- **Logo:** none has been supplied, so the brand name is typeset (`Wordmark`, Almarai 800). No mark was drawn.

## Fonts
**Almarai** is loaded from Google Fonts (`tokens/typography.css`) and has no local font files. If the brand licenses a custom Arabic wordmark or typeface, add its `@font-face` there.
