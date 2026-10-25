# Brand consent — required before launch

**Status: NOT CLEARED. Do not publish this site to `usereplai.site` until every row
in the table below says `yes`.**

This site names real, well-known Indonesian companies as Replai customers, and
attaches quotes, named individuals with their photographs, and performance
figures to them. As shipped, that content is placeholder: it was written to the
requested design, not from signed reference agreements. Publishing it as-is means

- **false endorsement** — presenting a company as a customer when it is not, or
  when it has not agreed to be named,
- **unlicensed trademark use** — a company name or logo used to imply a
  commercial relationship, which is exactly the use trademark law exists to
  control, and
- **use of someone's name and likeness without consent** — each quote now
  carries a real person's name and face, which is personal data under UU 27/2022
  (PDP) on top of being an endorsement they never gave.

All three are actionable, and in Indonesia the first two also fall under consumer
protection rules on misleading advertising (UU 8/1999) and the ITE law's
provisions on misleading electronic information. The fix is paperwork, not code.

## What each brand has to sign off

For every company named on the site, get **written** permission covering all
five of these. Email from someone with authority (marketing, comms, or legal —
not the person you happen to know there) is enough to start; a countersigned
reference agreement is what you actually want on file.

1. **Being named as a customer** — the company agrees to appear on the customer
   page and the logo row.
2. **The quote** — the exact wording, reviewed and approved by them.
3. **The named person and their photograph** — this needs **two** approvals, the
   company's and the individual's own. The names and portraits in
   `src/lib/content.ts` and `public/people/` were supplied as placeholder assets;
   nobody pictured has agreed to endorse anything. Get the person's own written
   consent to their name, their job title, the photograph, and the words put in
   their mouth. Leaving `name` and `photo` unset makes the card fall back to the
   company name and initials, which claims nothing about an individual.
4. **The figure** — the metric and its value, confirmed as their own number. The
   page states these are self-reported over the first 90 days; that has to be
   true of each one.
5. **The logo** — an official file from their brand kit, plus the usage rules
   that come with it (clear space, minimum size, monochrome permitted or not).

## Where the content lives

| What | File |
| --- | --- |
| Quotes, names, roles, companies, metrics | `src/lib/content.ts` → `testimonials` |
| Portrait photographs | `public/people/` |
| Logo-row brand list | `src/lib/content.ts` → `customerBrands` |
| Footer partner row | `src/lib/content.ts` → `businessPartners` |
| The disclosure line under the figures | `src/lib/content.ts` → `testimonialDisclosure` |
| Customer page copy | `src/pages/customers.astro` |
| Logo-row component | `src/components/WordmarkRow.astro` |
| Quote cards | `src/components/Testimonials.astro` |
| Footer | `src/components/Footer.astro` |

Logo files **are** in the repo, under `public/logo/`, and `CustomerBrand.logo`
points at them. That is a file, not a licence: having the SVG says nothing about
being allowed to display it, so the "Logo file + rules" column below is about
**written permission and the usage rules that come with the brand kit** (clear
space, minimum size, monochrome permitted or not), not about whether the file
exists. Two of them were cropped — `halodoc.svg` and `traveloka.svg` shipped with
padding baked into the `viewBox`, so the `viewBox` was tightened to the artwork's
real bounds; no path data was touched. `indomaret.svg` additionally carries an
opaque white plate behind the mark rather than a transparent background, which was
left alone because trimming it is a judgement call about someone else's trademark;
ask for a transparent version when you request the kit. `meta.svg` shipped with no
`viewBox`, so it would not scale at all; `viewBox="0 0 948 191"` was added to match
its existing `width`/`height`, again without touching path data. It is also the
light-background variant — its wordmark is nearly invisible on the dark footer — so
the footer sets it on a paper plate rather than recolouring it. If a brand kit
arrives with its own file, replace ours with theirs — and re-measure `ratio` and
`weight` in `src/lib/content.ts`, since both are properties of the specific file.

Leaving `logo` unset makes `WordmarkRow` render the company name as type instead,
which is the honest fallback for a brand that has not cleared its mark. Never
hand-draw or approximate a trademark.

## Sign-off tracker

| Brand | Named as customer | Quote approved | Person + photo approved | Figure confirmed | Logo file + rules | Contact / date |
| --- | --- | --- | --- | --- | --- | --- |
| Bukalapak | no | no | no — Phyllisia Angelia | no | no | |
| DANA | no | no | no — Bea Arifa | no | no | |
| Tokopedia | no | no | no — Taufik Hidayat | no | no | |
| Traveloka | no | no | no — Amelia Putri | no | no | |
| Blibli | no | no | no — Abdul Hakim | no | no | |
| Alfamart | no | no | no — Fauzan | no | no | |
| Indomaret | no | — | — | — | no | |
| Halodoc | no | — | — | — | no | |
| Ruangguru | no | — | — | — | no | |

Indomaret, Halodoc and Ruangguru appear in the logo row only, so they need
consent to be named and to have their mark shown, but no quote, person or figure.
The "Person + photo" column needs the individual's own sign-off, not their
employer's — see point 3 above.

### Business partners

| Partner | Approved partner status | Correct badge asset | Contact / date |
| --- | --- | --- | --- |
| Meta | no | no | |

The footer says "Business Partners" and shows the Meta corporate logo. Two
separate problems: Replai is not a listed Meta Business Partner, and even once
it is, the programme requires **their** partner badge, not the corporate mark —
using the corporate logo to imply a partnership is the trademark issue above in a
different coat. Until both cells say `yes`, drop `businessPartners` to an empty
array; the footer row disappears on its own when it is empty.

## If consent does not come through

Remove the entry rather than soften it. "Trusted by leading Indonesian
marketplaces" with the logos still showing is the same claim in a thinner
disguise. Options that need nobody's permission:

- Drop `customerBrands` to only the brands that have signed.
- Clear `name` and `photo` on any quote where the individual has not signed. The
  card falls back to the company name and initials with no code change.
- Replace named quotes with anonymised ones (`"A national marketplace, 400
  seats"`), which is honest if the customer is real and has agreed to be
  described that way.
- Set `businessPartners` to `[]` if the Meta partner badge is not cleared.
- Cut the section. The results table and the security page carry the argument on
  their own.
