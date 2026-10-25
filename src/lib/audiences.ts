/* ==========================================================================
   The other three ways people arrive at a CRM: by the job they do, by the
   job to be done, and by how many of them there are. Drives the /solutions
   hub sections and the Solutions nav panel.

   Industries live in solutions.ts — this file is deliberately separate so
   neither grows past reading length.
   ========================================================================== */

import type { IconName } from "./icons";
import type { Metric } from "./features";
import type { ModuleSlug } from "./solutions";

/* --------------------------------------------------------------------------
   By team — the person whose week this changes.
   -------------------------------------------------------------------------- */

export type Team = {
  slug: string;
  num: string;
  name: string;
  icon: IconName;
  /** Who is being described, in one line. */
  who: string;
  headline: string;
  /** Three concrete things they get. */
  wins: string[];
  metric: Metric;
};

export const teams: Team[] = [
  {
    slug: "sales",
    num: "01",
    name: "Sales teams",
    icon: "target",
    who: "Closers sharing one number and a pipeline that has to be honest.",
    headline: "Know which chat to open first, and never lose one in a handover.",
    wins: [
      "Leads ranked by intent, with the reasoning shown",
      "Round-robin assignment and a reassign clock on every lead",
      "A pipeline that updates from the conversation, not from memory",
    ],
    metric: { label: "More closed deals per rep", value: "+29%" },
  },
  {
    slug: "support",
    num: "02",
    name: "Customer support",
    icon: "headset",
    who: "Teams answering the same questions faster than they arrive.",
    headline: "Deflect the repeat questions. Keep the hard ones human.",
    wins: [
      "AI agent on your FAQ set, grounded in your own documents",
      "One owner per conversation, with internal notes nobody else sees",
      "First-response and resolution time on a dashboard, per agent",
    ],
    metric: { label: "Repeat questions deflected", value: "71%" },
  },
  {
    slug: "marketing",
    num: "03",
    name: "Marketing",
    icon: "megaphone",
    who: "The people who buy the traffic and want to see what it became.",
    headline: "Prove which campaign produced revenue, not just replies.",
    wins: [
      "Source and campaign tagged on every conversation, automatically",
      "Segmented follow-up with per-contact frequency caps and quiet hours",
      "Cost per qualified conversation, broken out by channel",
    ],
    metric: { label: "Conversations with a known source", value: "94%" },
  },
  {
    slug: "operations",
    num: "04",
    name: "Operations & admin",
    icon: "gauge",
    who: "The people who keep the promise the sales team made.",
    headline: "Bookings, documents and confirmations that need no human typist.",
    wins: [
      "Confirmations, reminders and recalls running on a schedule",
      "Document checklists requested and chased without anyone watching",
      "Webhooks into the order, booking or billing system you already run",
    ],
    metric: { label: "Manual messages removed", value: "1,400", note: "Per week, 12 staff" },
  },
  {
    slug: "founders",
    num: "05",
    name: "Founders & owners",
    icon: "star",
    who: "One person holding sales, support, and the phone.",
    headline: "Get your own number back without dropping a single lead.",
    wins: [
      "The AI agent covers 11pm and Sunday so you do not have to",
      "Everything on one screen, usable from a phone",
      "One number the business owns — not one that leaves when you do",
    ],
    metric: { label: "Hours back per week", value: "11" },
  },
];

/* --------------------------------------------------------------------------
   By use case — the job to be done, in the words people search for.
   -------------------------------------------------------------------------- */

export type UseCase = {
  slug: string;
  num: string;
  title: string;
  /** Nav-width label. The title is written to headline a row, not a menu. */
  short: string;
  icon: IconName;
  problem: string;
  answer: string;
  modules: ModuleSlug[];
};

export const useCases: UseCase[] = [
  {
    slug: "first-reply",
    num: "01",
    title: "Reply in seconds, including at 2am",
    short: "Instant first reply",
    icon: "clock",
    problem:
      "Your median first reply is measured in hours, and by then the customer has asked two competitors the same question.",
    answer:
      "The AI agent answers from your own data immediately, hands over the moment the question stops being routine, and the shared inbox makes it obvious who owns what happens next.",
    modules: ["ai-agent", "shared-inbox"],
  },
  {
    slug: "qualify-leads",
    num: "02",
    title: "Stop guessing which lead is real",
    short: "Qualify leads",
    icon: "target",
    problem:
      "Two hundred enquiries a week and no way to tell the financed buyer from the person who is bored on a Sunday.",
    answer:
      "Every conversation is scored on intent signals — budget language, timeline, specifics, response speed — with the reasoning shown so a human can disagree with it.",
    modules: ["lead-scoring", "analytics"],
  },
  {
    slug: "shared-number",
    num: "03",
    title: "Move off personal WhatsApp",
    short: "One shared number",
    icon: "key",
    problem:
      "Your customers live in a salesperson's private chat history, and that history walks out of the building with them.",
    answer:
      "One business number, real assignment, and a transcript the company keeps. The migration happens on the onboarding call, with history imported and nobody re-introducing themselves.",
    modules: ["shared-inbox"],
  },
  {
    slug: "take-bookings",
    num: "04",
    title: "Take bookings without a receptionist",
    short: "Take bookings",
    icon: "calendar",
    problem:
      "Booking requests arrive after hours and get answered the next morning, by which time the slot has been filled elsewhere.",
    answer:
      "Availability rules, slot offers, confirmation and a reminder ladder — all inside the thread, all stopping the moment the customer replies.",
    modules: ["ai-agent", "automation"],
  },
  {
    slug: "follow-up",
    num: "05",
    title: "Follow up without nagging",
    short: "Automated follow-up",
    icon: "refresh",
    problem:
      "Quotes go out and nobody chases them. When somebody finally does, they chase far too hard.",
    answer:
      "Cadences with per-contact frequency caps, quiet hours, and a hard stop on any reply. Two touches and a flag for a human, not eleven messages and a block.",
    modules: ["automation"],
  },
  {
    slug: "after-hours-calls",
    num: "06",
    title: "Answer the phone after hours",
    short: "After-hours calls",
    icon: "phone",
    problem:
      "Calls at 9pm ring out. A missed call is not a missed call — it is a customer phoning somebody else.",
    answer:
      "The voice agent picks up, qualifies, and leaves a summary and full transcript on the contact record for the morning shift to act on.",
    modules: ["ai-agent", "analytics"],
  },
  {
    slug: "campaigns",
    num: "07",
    title: "Send campaigns without getting blocked",
    short: "Bulk campaigns",
    icon: "bell",
    problem:
      "Blasts get reported, and a reported number is a business that has stopped working — usually on the busiest week of the year.",
    answer:
      "Template-approved sends, opt-out honoured on the first request, per-contact caps and quiet hours enforced by the system instead of by everyone's self-discipline.",
    modules: ["automation", "analytics"],
  },
  {
    slug: "reporting",
    num: "08",
    title: "See what the team actually did",
    short: "Team reporting",
    icon: "chart",
    problem:
      "Nobody can say what response time was last week, which agent is carrying the load, or which stage deals die in.",
    answer:
      "Response time, pipeline movement, agent load and revenue in one view — on a scheduled digest, exportable, or pushed to your own warehouse.",
    modules: ["analytics"],
  },
];

/* --------------------------------------------------------------------------
   By company size — the band label is the graphic, so no icon here.
   -------------------------------------------------------------------------- */

export type Size = {
  slug: string;
  /** Seat band, set in mono. Doubles as the section's visual anchor. */
  band: string;
  name: string;
  who: string;
  fit: string[];
  /** The plan band this size lands in. No figure: Replai is invite-only and
      quoted per team, so every one of these leads to a conversation. */
  plan: { label: string; href: string };
};

export const sizes: Size[] = [
  {
    slug: "solo",
    band: "1–5",
    name: "Solo and small teams",
    who: "You are the sales team, the support team, and the phone.",
    fit: [
      "One number, so the business owns the customer rather than the handset",
      "The AI agent covers the hours you cannot stay awake for",
      "No admin overhead: setup is a single call on your real number",
    ],
    plan: { label: "Starter, quoted", href: "/contact" },
  },
  {
    slug: "growing",
    band: "6–25",
    name: "Growing teams",
    who: "Enough people that leads now get lost between them.",
    fit: [
      "Assignment and reassignment rules that stop the quiet drop",
      "Automation for the follow-up nobody has time to remember",
      "A pipeline a manager can read in fifteen seconds",
    ],
    plan: { label: "Growth, quoted", href: "/contact" },
  },
  {
    slug: "multi-branch",
    band: "25+",
    name: "Multi-branch and enterprise",
    who: "Several numbers, several branches, one brand promise.",
    fit: [
      "Multiple WhatsApp numbers and workspaces under one account",
      "SSO (SAML / OIDC), SCIM provisioning and role-based access",
      "Choice of hosting region, plus written data-residency terms",
    ],
    plan: { label: "Scale, quoted", href: "/contact" },
  },
  {
    slug: "agencies",
    band: "Agency",
    name: "Agencies and resellers",
    who: "You run WhatsApp on behalf of other people's brands.",
    fit: [
      "A separate workspace per client, with no data bleed between them",
      "Per-client reporting you can hand over without editing",
      "Commercial terms written for managed accounts",
    ],
    plan: { label: "Talk to sales", href: "/contact" },
  },
];
