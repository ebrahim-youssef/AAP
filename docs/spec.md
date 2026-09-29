# AAP website spec

Website for Ali Amin Pharmacies (صيدليات علي أمين), a chain with two branches in Egypt.
Approved 2026-09-30.

## Goal

A visitor lands, sees who we are in a few seconds, searches for a medicine, sees its last known
price, and contacts us on WhatsApp or by phone to confirm it is in stock. Nothing more for now.
The site must be simple to navigate, follow the design system, and rank well in search.

## Stack

- Astro, plain CSS from the design system tokens and `components.css`. No React.
- Hosted on Cloudflare Workers (static assets plus a Worker), free plan.
- Static pages: home, search, branches, about, terms, privacy.
- Medicine pages: rendered on demand by the Worker from a Cloudflare D1 database, then cached.
- Search: a compressed static index file (name, slug, price), loaded only on the search page and
  searched in the browser. Search never queries D1 (a full-table scan per search would exhaust the
  free read quota).
- Analytics: Cloudflare Web Analytics (no cookies, no consent banner).
- Domain: not decided. Build on the default workers.dev address until one is bought.

### Free plan budget

| Limit | Expected use |
|---|---|
| 100k Worker requests/day | one per medicine page view |
| 10 ms CPU/request | one indexed D1 lookup plus render |
| D1 500 MB/database | about 25 MB |
| D1 5M rows read/day | one row per medicine page view |

Static asset requests are free and unlimited. If the Worker limit is ever hit, only medicine pages
fail until midnight UTC; everything else keeps working. Upgrade path: Workers Paid, $5/month.

## Language

- Arabic, RTL, at `/` (default).
- English at `/en`.
- `hreflang` links between the two.

## Brand

- Design system `ali-amin-pharmacies-design-system` is used unchanged: Almarai, blue `#1265C4`,
  navy `#082D5C`, yellow only for «يلزم تأكيد», no gradients, no emoji.
- Name: «صيدليات علي أمين» / "Ali Amin Pharmacies", as typeset by the design system `Wordmark`.
- Logo: a new SVG of the capsule-and-leaves icon only (no text), drawn using `logo.jpg` as a
  reference. The JPG itself is not used on the site. Colours: `#1265C4` on white, white on the
  blue header. It sits next to the typeset wordmark.
- Voice: Egyptian Arabic, direct, no hype, as described in the design system voice guide.

## Pages

1. **Home** (`/`): short «مين إحنا», large medicine search, the two branches, WhatsApp and call
   actions, one delivery line.
2. **Search** (`/medicines`): results as the visitor types.
3. **Medicine** (`/medicines/<slug>`): name (Arabic and English), active ingredient, maker, price
   tag, contact actions, notices. One page per medicine, all listed in the sitemap.
4. **Branch** (`/branches/<slug>`): map, address, hours, phone, delivery info. One page per branch.
5. **About** (`/about`).
6. **Terms** (`/terms`) and **Privacy** (`/privacy`).

Mobile has the design system's four-tab bar: الرئيسية، بحث، صيدلي، الفروع. The «صيدلي» tab opens
the central WhatsApp line with «عايز أسأل صيدلي».

## Contact flow

- **WhatsApp:** one central number for everything. On a medicine page, the message is pre-filled
  with the medicine name, for example «هل [اسم الدواء] متوفر؟». No branch choice.
- **Call:** the visitor picks a branch, then sees that branch's number with a tap-to-call link.
- **Delivery:** one line, «فيه توصيل، اطلب على واتساب». Areas, fee and hours show «بيانات تتوثّق»
  until provided.

## Medicine data

- Source: `karem505/egyptian-drug-database` (CC0), about 25,000 medicines, Arabic and English
  names, active ingredient, maker, EGP price. Snapshot dated June 2026.
- Imported into D1 and into the static search index by a script. A price update is a re-import,
  not a site rebuild.
- Prices shown as «آخر سعر معروف: 128 ج.م، حسب قائمة يونيو 2026».
- Availability always shows «يلزم تأكيد». The site never claims stock.
- Before launch: check about 20 prices against real shelf prices.
- Later option: a paid feed from dwaprices.com if staleness becomes a problem.

## Notices and legal

Shown on every medicine page and in full on `/terms`:

1. Prices are official list prices and may change.
2. The site does not give medical advice. Ask a pharmacist or doctor.
3. Prescription medicines need a prescription at pickup or delivery.

Footer on every page: «© 2026 صيدليات علي أمين».

## SEO

- Static HTML, fast, mobile first.
- Per-page title and description, canonical URL, `hreflang`.
- JSON-LD: `Pharmacy` with one `LocalBusiness` location per branch, `Drug` or `Product` with
  `Offer` on medicine pages.
- `sitemap.xml` including all medicine pages, `robots.txt`.
- Images through Astro's image pipeline when images are added.

## Pending from the owner

- Branch names, addresses, map locations, hours, phone numbers.
- Central WhatsApp number.
- Delivery areas, fee, hours.
- Domain.
- Review of the copy drafted for «مين إحنا», about, terms, privacy.

Until then the site shows «بيانات تتوثّق» and never invents branch data.
