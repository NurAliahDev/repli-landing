/* ==========================================================================
   Home page and shared marketing content.
   Note: the customer section names real brands. Read the consent warning above
   `testimonials` before publishing, and never drop the disclosure line that is
   rendered with the quotes.
   ========================================================================== */

import type { IconName } from "./icons";
import type { Metric } from "./features";

export const heroMetrics: Metric[] = [
  { label: "First reply", value: "42s", note: "median, was 26 minutes" },
  { label: "Leads scored", value: "0–100", note: "in under 3 seconds" },
  { label: "After hours", value: "24/7", note: "chat and voice" },
  { label: "Setup to live", value: "1 day", note: "with our team" },
];

/* --------------------------------------------------------------------------
   The problem. Stated the way business owners state it, not the way
   marketing departments do.
   -------------------------------------------------------------------------- */

export const problems: { icon: IconName; title: string; text: string; stat: string }[] = [
  {
    icon: "clock",
    title: "The reply comes too late",
    text: "A buyer messages three suppliers at once. Whoever answers first usually wins, and after 5pm nobody answers at all.",
    stat: "78% of buyers pick the first supplier who replies",
  },
  {
    icon: "users",
    title: "One phone, five people",
    text: "The business number lives on a handset that gets passed around. Nobody knows who is handling which customer, or what was promised.",
    stat: "1 in 4 chats gets a duplicate or contradictory reply",
  },
  {
    icon: "database",
    title: "The history walks out the door",
    text: "An agent resigns and takes two years of customer context with them, because the context was only ever in their chat list.",
    stat: "Average SMB loses 100% of thread history per departure",
  },
  {
    icon: "filter",
    title: "Serious buyers queue behind window shoppers",
    text: "Two hundred unread chats, no order to them. The person ready to place a bulk order is somewhere in the middle.",
    stat: "Under 15% of inbound chats are genuinely qualified",
  },
];

/* --------------------------------------------------------------------------
   What changes. Paired with the problems above.
   -------------------------------------------------------------------------- */

export const outcomes: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "waveform",
    title: "Someone always answers",
    text: "The AI agent replies instantly in text and picks up WhatsApp calls at 11pm, then hands the warm ones to your team in the morning.",
  },
  {
    icon: "inbox",
    title: "One inbox, clear ownership",
    text: "Every conversation has an assignee, a stage, and internal notes. The handset goes back in the drawer.",
  },
  {
    icon: "target",
    title: "The queue sorts itself",
    text: "Scored 0–100 with the reasoning attached, so your closer opens the right chat first instead of the newest one.",
  },
  {
    icon: "chart",
    title: "You can see the channel",
    text: "Response times, funnel, workload and revenue by source — derived from conversations, not from manual logging.",
  },
];

/* --------------------------------------------------------------------------
   Customer proof

   ⚠️  BRAND CONSENT REQUIRED BEFORE THIS GOES LIVE
   Every company named below is a real, well-known Indonesian brand. Listing
   them as Repli customers — and attaching quotes and figures to them — needs
   written sign-off from each brand, plus their own brand kit for any logo file.
   Without that sign-off these are false endorsements and trademark use we have
   no licence for. Checklist and status: /BRAND-CONSENT.md in the repo root.
   -------------------------------------------------------------------------- */

/** One quote per team, attributed to a named person with their photograph.
    That is two claims, not one: the company has to agree to be named as a
    customer, and the individual has to approve their own name, face and words.
    Both are tracked in BRAND-CONSENT.md. */
export type Testimonial = {
  quote: string;
  /** The person who said it. Optional because a quote may clear at company
      level before the individual does — leave it unset and the card falls back
      to the company name, which claims nothing about a real person. */
  name?: string;
  role: string;
  company: string;
  industry: string;
  /** Company initials, not the person's. The quote card falls back to them
      when there is no cleared photograph. */
  initials: string;
  /** Square portrait under /public/people. Five of the six ship at 100×100 and
      one at 800×800, so the avatar is capped at 44 CSS px — anything larger
      upscales five of them on a 2× screen. */
  photo?: string;
  metric?: { label: string; value: string };
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We used to open the inbox at 8am to whatever came in overnight. Now the AI agent handles the overnight questions and the team starts the day on qualified conversations instead of a wall of unread ones.",
    name: "Phyllisia Angelia",
    role: "Seller Operations Lead",
    company: "Bukalapak",
    industry: "Marketplace",
    initials: "BL",
    photo: "/people/Phyllisia_Angelia_Bukalapak.jpg",
    metric: { label: "Overnight chats answered", value: "100%" },
  },
  {
    quote:
      "Every chat has exactly one owner now, and the whole team can see who that is. The double replies stopped in the first week, which at our volume is not a small thing.",
    name: "Bea Arifa",
    role: "Customer Care Lead",
    company: "DANA",
    industry: "Digital payments",
    initials: "DA",
    photo: "/people/Bea_Arifa_Dana.jpg",
    metric: { label: "Median first reply", value: "42s" },
  },
  {
    quote:
      "The scoring is the part we did not expect to care about. It puts the serious buyers at the top of the queue and tells us why, so nobody burns a morning on a conversation that was never going anywhere.",
    name: "Taufik Hidayat",
    role: "Merchant Growth Manager",
    company: "Tokopedia",
    industry: "Marketplace",
    initials: "TK",
    photo: "/people/Taufik_Hidayat_Tokopedia.jpg",
    metric: { label: "Qualified-lead contact rate", value: "+41%" },
  },
  {
    quote:
      "We were sceptical about the voice agent until we listened back to the recordings. It handles availability and price questions properly, and it puts anything complicated straight through to a person.",
    name: "Amelia Putri",
    role: "Head of Customer Experience",
    company: "Traveloka",
    industry: "Travel",
    initials: "TV",
    photo: "/people/Amelia_Putri_Traveloka.jpg",
    metric: { label: "After-hours calls answered", value: "312 / mo" },
  },
  {
    quote:
      "Agents rotate. Conversations, notes and quotes do not go with them any more — the record stays with the customer, which is exactly what we needed and exactly what phones on desks could never do.",
    name: "Abdul Hakim",
    role: "Sales Operations Manager",
    company: "Blibli",
    industry: "Retail & e-commerce",
    initials: "BB",
    photo: "/people/Abdul_Hakim_Blibli.jpg",
    metric: { label: "History retained after turnover", value: "100%" },
  },
  {
    quote:
      "The dry-run saved us. We replayed a follow-up sequence against last month's chats and saw immediately that it would have double-messaged part of the list. Fixed before a single customer noticed.",
    name: "Fauzan",
    role: "Regional Sales Lead",
    company: "Alfamart",
    industry: "Retail network",
    initials: "AM",
    photo: "/people/Fauzan_Alfamart.jpg",
    metric: { label: "Follow-up completion", value: "94%" },
  },
];

/* Rendered under the quotes and under the results table on /customers, so it has
   to be true of both. It also states exactly what BRAND-CONSENT.md has to make
   true before launch — if a name, photo or figure is not cleared, the entry comes
   out rather than the line being softened. */
export const testimonialDisclosure =
  "Every name, photograph, quote and figure here is published with the permission of the person and the company named. Figures are their own reported numbers over their first 90 days on Repli.";

export type CustomerBrand = {
  name: string;
  /** Path to an official SVG under /public/logo. Left unset until a brand kit is
      cleared — the row then sets the name as type, which is honest and needs no
      licence. Never hand-draw a trademark. */
  logo?: string;
  /** Width ÷ height of the mark's *ink*, not of its viewBox. Measured in a
      browser with `getBBox()` because two of these files ship with padding
      around the artwork. `WordmarkRow` uses it to give every logo the same
      optical area, so a long wordmark cannot shout over a compact one. */
  ratio?: number;
  /** How dark this mark lands once desaturated: the 90th-percentile luminance
      drop from paper, measured by compositing the file onto `--paper` at 0.62
      alpha with `grayscale(1)`. Nine brand palettes map to nine different greys
      — Ruangguru came out at 58 and Bukalapak at 122, a 2.1× weight spread that
      reads as a ragged row. `WordmarkRow` divides this out. Re-measure if a
      brand kit replaces its file. */
  weight?: number;
};

/** The logo wall. Same consent rule as the quotes above applies. */
export const customerBrands: CustomerBrand[] = [
  { name: "Bukalapak", logo: "/logo/bukalapak.svg", ratio: 6.2, weight: 122 },
  { name: "DANA", logo: "/logo/dana.svg", ratio: 3.5, weight: 80 },
  { name: "Tokopedia", logo: "/logo/tokopedia.svg", ratio: 4.64, weight: 61 },
  { name: "Traveloka", logo: "/logo/traveloka.svg", ratio: 4.42, weight: 111 },
  { name: "Blibli", logo: "/logo/blibli.svg", ratio: 2.87, weight: 92 },
  { name: "Alfamart", logo: "/logo/alfamart.svg", ratio: 3.12, weight: 117 },
  { name: "Indomaret", logo: "/logo/indomaret.svg", ratio: 2.86, weight: 111 },
  { name: "Halodoc", logo: "/logo/halodoc.svg", ratio: 5.46, weight: 120 },
  { name: "Ruangguru", logo: "/logo/ruangguru.svg", ratio: 1.79, weight: 58 },
];

export const brandByName = (name: string): CustomerBrand | undefined =>
  customerBrands.find((brand) => brand.name === name);

/* --------------------------------------------------------------------------
   Business partners — the footer row
   -------------------------------------------------------------------------- */

export type BusinessPartner = {
  name: string;
  /** Official SVG under /public/logo. */
  logo: string;
  /** Width ÷ height of the mark's ink, measured with `getBBox()`. */
  ratio: number;
};

/** ⚠️  Same consent problem as the customer brands, plus one specific to Meta:
    "Meta Business Partner" is a badge programme with its own rules, and the
    badge asset is not the corporate Meta logo. Until Repli is an approved
    partner with the badge file in hand, this row is a claim we cannot make.
    See BRAND-CONSENT.md. */
export const businessPartners: BusinessPartner[] = [
  { name: "Meta", logo: "/logo/meta.svg", ratio: 4.963 },
];

/* --------------------------------------------------------------------------
   Reasons to trust a young company
   -------------------------------------------------------------------------- */

export const trustPoints: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "lock",
    title: "Your data stays yours",
    text: "Encrypted in transit and at rest. We never train shared models on your conversations, and never sell or share your data.",
  },
  {
    icon: "upload",
    title: "No lock-in",
    text: "Export every conversation, contact and note as CSV or XLSX whenever you like — including after you cancel.",
  },
  {
    icon: "headset",
    title: "A human on the other end",
    text: "You get the people who build the product. No tiered ticket queue, no chatbot standing between you and an answer.",
  },
];

/* --------------------------------------------------------------------------
   General FAQ (grouped). /faq renders all groups; other pages pull subsets.
   -------------------------------------------------------------------------- */

export type FaqGroup = { heading: string; icon: IconName; items: { q: string; a: string }[] };

export const faqGroups: FaqGroup[] = [
  {
    heading: "Getting started",
    icon: "key",
    items: [
      {
        q: "Why can't I just sign up with a credit card?",
        a: "Because connecting a WhatsApp number wrong is painful to undo. Every Repli account starts with a 30-minute call where we verify your number, set up your pipelines, and configure your first automations with you. It costs you half an hour and saves a week of confusion.",
      },
      {
        q: "How long does setup take?",
        a: "Most teams are live the same day as their onboarding call. If you are migrating from another CRM with thousands of contacts, allow two to three days for the import and a review pass.",
      },
      {
        q: "Do I need a WhatsApp Business API account already?",
        a: "No. If you have one, we connect to it. If you do not, we walk you through provisioning it on the call — including display-name approval, which is the step most teams get stuck on.",
      },
      {
        q: "Can I keep using WhatsApp on my phone?",
        a: "Yes. Your team can work from the Repli web app, and the number continues to behave like a normal business number to your customers. What changes is that the history, assignment and notes live somewhere durable.",
      },
    ],
  },
  {
    heading: "The AI agent",
    icon: "sparkle",
    items: [
      {
        q: "Will it make things up?",
        a: "It answers only from the documents you give it, and cites which one it used. If the answer is not in your knowledge base, it says so and hands the conversation to a person. It is not allowed to invent prices, stock levels or delivery dates.",
      },
      {
        q: "What languages does it handle?",
        a: "Bahasa Indonesia and English, including chats that switch between them mid-sentence — which is how most Indonesian buyers actually write. Other ASEAN languages are on the roadmap; ask us where yours sits.",
      },
      {
        q: "How does the voice agent work on WhatsApp?",
        a: "It answers WhatsApp voice calls to your business number, speaks naturally, and handles being interrupted. Every call is recorded and transcribed into the conversation timeline, so a human can pick up exactly where it left off.",
      },
      {
        q: "Can I turn it off instantly?",
        a: "Yes. There is a kill switch per pipeline and a global one. Turning it off routes everything to your team immediately — no deploy, no waiting.",
      },
      {
        q: "Do customers know they are talking to AI?",
        a: "You choose the disclosure wording, and we require that there is one. Hiding it damages trust and, in several markets we operate in, breaks the rules.",
      },
    ],
  },
  {
    heading: "Data & privacy",
    icon: "shield",
    items: [
      {
        q: "Who can see my conversations?",
        a: "Your team, according to the roles you set. On our side, access is limited to a small on-call group, requires two-factor authentication, and is written to an audit log. We look only when you ask us to.",
      },
      {
        q: "Do you train models on my data?",
        a: "No shared models are trained on your conversations. Your lead-scoring model is trained on your outcomes and used only in your workspace.",
      },
      {
        q: "Where is the data hosted?",
        a: "Singapore by default, with Jakarta available on Scale. Backups stay in the same region as your primary data.",
      },
      {
        q: "Can I delete a customer's data on request?",
        a: "Yes. Deleting a contact removes their messages, media, notes and scores within 30 days, including from backups. We return a written confirmation you can pass to the customer.",
      },
      {
        q: "What happens to my data if I leave?",
        a: "You can export every conversation, contact and note as CSV or XLSX at any time, including after cancellation. We keep your workspace recoverable for 30 days, then delete it.",
      },
    ],
  },
  {
    heading: "Billing",
    icon: "doc",
    items: [
      {
        q: "Where is the price list?",
        a: "There isn't a public one while we are invite-only. Tell us your seat count, how many numbers you run, and whether you want the voice agent, and you get a written quote after a short call — usually the same day.",
      },
      {
        q: "How does billing work?",
        a: "Per user, per month, in USD, quoted for your team. Conversation volume does not affect your bill; the only usage-based item is AI voice, charged on connected minutes. Annual billing is cheaper than monthly.",
      },
      {
        q: "What about Meta's own message fees?",
        a: "Meta charges for certain template and marketing messages on the WhatsApp Business Platform. Those pass through at cost, itemised on your invoice, with no markup from us.",
      },
      {
        q: "Is there a free trial?",
        a: "There is a 14-day pilot, set up with you on the onboarding call. It runs on your real number with your real team, because a sandbox tells you nothing about a WhatsApp workflow.",
      },
      {
        q: "Can I change plan later?",
        a: "Yes, up or down, at any time. Upgrades apply immediately and are prorated. Downgrades take effect at the end of the current billing period so nobody loses access mid-month.",
      },
      {
        q: "Can I cancel any time?",
        a: "Yes. Monthly plans stop at the end of the current period. Annual plans can be cancelled for the next term. We do not run retention gauntlets — one email is enough.",
      },
    ],
  },
];
