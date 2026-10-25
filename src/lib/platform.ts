/* ==========================================================================
   Platform data: integrations, security posture, company principles.
   Feeds /integrations, /security and /about.
   ========================================================================== */

import type { IconName } from "./icons";

/* --------------------------------------------------------------------------
   Integrations. `status` is shown honestly — planned means planned.
   -------------------------------------------------------------------------- */

export type IntegrationStatus = "Live" | "Beta" | "Planned";

export type IntegrationGroup = {
  heading: string;
  icon: IconName;
  text: string;
  items: { name: string; text: string; status: IntegrationStatus }[];
};

export const integrationGroups: IntegrationGroup[] = [
  {
    heading: "Messaging",
    icon: "whatsapp",
    text: "WhatsApp is the core. These are the channels that land in the same inbox.",
    items: [
      { name: "WhatsApp Business Platform", text: "Official Cloud API. Multi-number, template messages, and display-name handling.", status: "Live" },
      { name: "WhatsApp voice calls", text: "Inbound calls answered by the AI voice agent, recorded and transcribed.", status: "Live" },
      { name: "Instagram Direct", text: "DMs from your business account routed into the same shared inbox.", status: "Beta" },
      { name: "Telegram", text: "For teams whose B2B buyers live on Telegram rather than WhatsApp.", status: "Planned" },
    ],
  },
  {
    heading: "Commerce",
    icon: "cart",
    text: "So the order confirmed in chat and the order in your system are the same order.",
    items: [
      { name: "Shopify", text: "Order lookup inside the conversation, plus abandoned-checkout triggers.", status: "Live" },
      { name: "WooCommerce", text: "Product and stock lookup for the AI agent, order status on the thread.", status: "Live" },
      { name: "Tokopedia & Shopee", text: "Order reference lookup so marketplace buyers do not have to repeat themselves.", status: "Beta" },
      { name: "Midtrans & Xendit", text: "Payment links generated in chat, status written back to the conversation.", status: "Live" },
    ],
  },
  {
    heading: "Work tools",
    icon: "briefcase",
    text: "Notifications and records where your team already looks.",
    items: [
      { name: "Google Sheets", text: "Two-way sync for contacts and deals. The escape hatch that keeps everyone honest.", status: "Live" },
      { name: "Google Calendar", text: "Availability checks and booking confirmations for appointment-led businesses.", status: "Live" },
      { name: "Slack", text: "Alerts for hot leads, escalations and workflow failures.", status: "Live" },
      { name: "Notion", text: "Push conversation summaries into an existing knowledge base.", status: "Planned" },
    ],
  },
  {
    heading: "Build your own",
    icon: "code",
    text: "Everything the UI does, the API does. No feature is gated behind a partner agreement.",
    items: [
      { name: "REST API", text: "Contacts, conversations, messages, deals and scores. Keyed per workspace, rate limited per plan.", status: "Live" },
      { name: "Webhooks", text: "Signed event delivery with retries and a replay window for anything your endpoint missed.", status: "Live" },
      { name: "Zapier & Make", text: "For the long tail of tools we will never build natively.", status: "Beta" },
      { name: "Custom import", text: "CSV and XLSX import with column mapping and a dry-run preview.", status: "Live" },
    ],
  },
];

export const integrationNote =
  "Missing something you depend on? Tell us on the onboarding call. Scale customers get custom integration work as part of the engagement.";

/* --------------------------------------------------------------------------
   Security. Written as claims we can defend, with the gaps stated.
   -------------------------------------------------------------------------- */

export type SecurityGroup = {
  heading: string;
  icon: IconName;
  items: { title: string; text: string }[];
};

export const securityGroups: SecurityGroup[] = [
  {
    heading: "Data protection",
    icon: "lock",
    items: [
      { title: "Encrypted in transit and at rest", text: "TLS 1.3 on every connection. AES-256 for stored data, media and backups, with keys managed by our cloud provider's KMS and rotated on a schedule." },
      { title: "Regional hosting", text: "Singapore by default; Jakarta available on Scale. Backups stay in the same region as primary data — they never cross a border you did not agree to." },
      { title: "Isolation per workspace", text: "Every query is scoped to a workspace at the data layer, not just in application code. Cross-workspace reads are structurally impossible." },
      { title: "Deletion that finishes", text: "Deleting a contact or workspace clears messages, media, notes and scores within 30 days, backups included, with written confirmation on request." },
    ],
  },
  {
    heading: "Access control",
    icon: "key",
    items: [
      { title: "Roles you define", text: "Owner, manager, agent and read-only out of the box; custom roles on Growth and above, scoped per pipeline." },
      { title: "Two-factor authentication", text: "TOTP for every account, enforceable workspace-wide. SSO via SAML or OIDC, with SCIM provisioning, on Scale." },
      { title: "Audit log", text: "Sign-ins, permission changes, exports, workflow edits and AI kill-switch events, each with actor, timestamp and IP." },
      { title: "Our own access is narrow", text: "A small on-call group, two-factor required, every access logged. We look at your data when you ask us to, and we tell you when we did." },
    ],
  },
  {
    heading: "AI handling",
    icon: "sparkle",
    items: [
      { title: "No shared-model training", text: "Your conversations are never used to train models that serve anyone else. Your lead-scoring model is yours and runs only in your workspace." },
      { title: "Grounded answers only", text: "The AI agent answers from documents you uploaded and cites them. Out-of-scope questions escalate to a human instead of being guessed at." },
      { title: "Retention you control", text: "Set how long transcripts and call recordings are kept — from 7 days to your full plan retention — per workspace." },
      { title: "Kill switch", text: "Disable the AI agent globally or per pipeline, instantly. No deploy, no support ticket, no waiting period." },
    ],
  },
  {
    heading: "Operations",
    icon: "refresh",
    items: [
      { title: "Backups and recovery", text: "Continuous backup with point-in-time recovery to any moment in the last 14 days. Restores are rehearsed, not theoretical." },
      { title: "Dependency and secret hygiene", text: "Automated dependency scanning on every build. Secrets live in a managed secret store, never in source control or images." },
      { title: "Uptime", text: "Published status page. A 99.9% SLA with service credits comes with Scale; the same infrastructure serves every plan." },
      { title: "Independent testing", text: "Annual third-party penetration test. Summary letter available under NDA on request." },
    ],
  },
];

export const securityHonesty = {
  heading: "What we do not claim yet",
  body: "We are a pre-seed company and will not pretend otherwise. Replai is not SOC 2 or ISO 27001 certified today — an SOC 2 Type I readiness assessment is scheduled, and we will publish the report when we have it rather than before. If your procurement process requires a certificate we do not hold, tell us early and we will tell you honestly whether we can meet the deadline.",
  contact: "Security questions, DPAs and questionnaires go straight to a founder.",
};

/* --------------------------------------------------------------------------
   Company. No invented headshots — principles and story only.
   -------------------------------------------------------------------------- */

export const companyStory: string[] = [
  "Replai started because of a spreadsheet. A friend running a printing business in Bandung was tracking sixty active quotes in one sheet, cross-referencing them against four phones, and losing roughly one deal a week to a message nobody answered.",
  "Every CRM we looked at for them assumed the deal starts with an email and a form. Theirs started — and finished — inside WhatsApp. The tools that did handle WhatsApp treated it as a broadcast channel for marketing blasts, which is close to the opposite of what a sales team needs.",
  "So we built the thing that was missing: a CRM where the WhatsApp conversation is the record, not an attachment to it. Then we put an AI agent inside it, because a five-person team cannot answer messages at 11pm and should not have to.",
];

export const principles: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "phone",
    title: "Sell on a call, not through a funnel",
    text: "Every account starts with a conversation, and we will tell you when Replai is the wrong fit. It costs us signups and saves everyone a bad quarter.",
  },
  {
    icon: "eye",
    title: "Show the reasoning",
    text: "Any number the product generates — a score, a metric, an estimate — comes with what produced it. Black boxes get switched off by the third week.",
  },
  {
    icon: "shield",
    title: "Boring where it counts",
    text: "The inbox loads fast on a mid-range Android, the automation refuses to double-message, and the export button always works. Reliability is the feature.",
  },
  {
    icon: "users",
    title: "Build with a handful, then widen",
    text: "We take on design partners deliberately slowly. Fewer customers, each one properly supported, beats a waitlist we cannot serve.",
  },
];

export const companyFacts: { label: string; value: string }[] = [
  { label: "Founded", value: "2025" },
  { label: "Stage", value: "Pre-seed" },
  { label: "Base", value: "Surabaya, ID" },
  { label: "Serving", value: "ASEAN" },
];
