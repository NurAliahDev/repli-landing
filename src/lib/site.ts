/* ==========================================================================
   Site identity, navigation and contact details.
   Single source of truth — pages and components must not hardcode these.
   ========================================================================== */

import type { IconName } from "./icons";
import { industries } from "./solutions";
import { teams, useCases } from "./audiences";

export const site = {
  name: "Ainnect",
  /* The contracting entity. Used in the footer, the legal pages and the
     Organization node — Ainnect is the product, this is who signs. */
  legalName: "PT Nexa Telekomunikasi Indonesia",
  url: "https://ainnect.site",
  tagline: "The WhatsApp CRM with an AI agent that answers",
  description:
    "Ainnect turns WhatsApp into a real sales system: one shared inbox for your team, AI lead scoring, no-code follow-up automation, and an AI agent that replies to chats and answers voice calls.",
  founded: 2025,
  stage: "Pre-seed",
} as const;

export const contact = {
  salesEmail: "sales@ainnect.site",
  supportEmail: "support@ainnect.site",
  pressEmail: "press@ainnect.site",
  privacyEmail: "privacy@ainnect.site",
  /* Registered office, split one line per line of the printed address, with the
     wording exactly as the company gave it to us. `officeShort` is the one-line
     form for tight spots like the footer rail. */
  officeLines: [
    "SCBD, Treasury Office Tower",
    "District 8 14th Floor",
    "Jl. Tulodong Atas 2 No.28, RT.5/RW.3",
    "Senayan, Kec. Kebayoran Baru",
    "Kota Jakarta Selatan",
    "Daerah Khusus Ibukota Jakarta 12190",
  ],
  officeShort: "Treasury Office Tower, SCBD Jakarta",
  /* The same office in the shape schema.org's PostalAddress wants. Two
     representations because two consumers need different things — keep them in
     step if the office ever moves. */
  officeAddress: {
    street: "Treasury Office Tower, District 8 14th Floor, Jl. Tulodong Atas 2 No.28, RT.5/RW.3, Senayan",
    locality: "Kota Jakarta Selatan",
    region: "Daerah Khusus Ibukota Jakarta",
    postalCode: "12190",
    country: "ID",
  },
  hours: "Mon–Fri, 09:00–18:00 WIB",
  responseTime: "Under 1 business day",
} as const;

/* --------------------------------------------------------------------------
   Primary navigation. `panel` items render inside the desktop dropdown and
   are flattened into the mobile drawer.
   -------------------------------------------------------------------------- */

export type NavLink = {
  label: string;
  href: string;
  summary?: string;
  icon?: IconName;
};

export type NavItem =
  | { label: string; href: string; panel?: never }
  | {
      label: string;
      href: string;
      panel: {
        columns: { heading: string; links: NavLink[] }[];
        footer?: { label: string; href: string; text: string };
      };
    };

/* The Solutions sheet is built from the data rather than retyped, so the menu
   can never advertise a configuration the page does not have. Six industries
   fit the column; the seventh link opens the full set. */
const NAV_INDUSTRY_COUNT = 6;

const industryLinks: NavLink[] = [
  ...industries.slice(0, NAV_INDUSTRY_COUNT).map((industry) => ({
    label: industry.name,
    href: `/solutions/${industry.slug}`,
    icon: industry.icon,
  })),
  { label: `All ${industries.length} industries`, href: "/solutions#by-industry", icon: "layers" },
];

const teamLinks: NavLink[] = teams.map((team) => ({
  label: team.name,
  href: `/solutions#${team.slug}`,
  icon: team.icon,
}));

const useCaseLinks: NavLink[] = useCases.map((useCase) => ({
  label: useCase.short,
  href: `/solutions#${useCase.slug}`,
  icon: useCase.icon,
}));

export const nav: NavItem[] = [
  {
    label: "Product",
    href: "/product",
    panel: {
      columns: [
        {
          heading: "Capabilities",
          links: [
            {
              label: "Shared WhatsApp inbox",
              href: "/product/shared-inbox",
              summary: "One number, your whole team, no phone passing",
              icon: "inbox",
            },
            {
              label: "AI lead scoring",
              href: "/product/lead-scoring",
              summary: "See who is ready to buy before you reply",
              icon: "target",
            },
            {
              label: "AI agent: chat & voice",
              href: "/product/ai-agent",
              summary: "Answers messages and picks up voice calls",
              icon: "waveform",
            },
            {
              label: "Workflow automation",
              href: "/product/automation",
              summary: "Follow-ups that fire without anyone remembering",
              icon: "flow",
            },
            {
              label: "Sales analytics",
              href: "/product/analytics",
              summary: "Response time, pipeline and revenue in one view",
              icon: "chart",
            },
          ],
        },
        {
          heading: "Platform",
          links: [
            { label: "Product overview", href: "/product", summary: "How the pieces fit together", icon: "layers" },
            { label: "Integrations", href: "/integrations", summary: "Connect the tools you already run", icon: "plug" },
            { label: "Security & compliance", href: "/security", summary: "How we handle your customer data", icon: "shield" },
          ],
        },
      ],
      footer: {
        label: "Book a walkthrough",
        href: "/contact",
        text: "30 minutes, your own data, no slide deck.",
      },
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    panel: {
      columns: [
        { heading: "By industry", links: industryLinks },
        { heading: "By team", links: teamLinks },
        { heading: "By use case", links: useCaseLinks },
      ],
      footer: {
        label: "Pick by team size",
        href: "/solutions#by-size",
        text: "Four seat bands, from a single seat to multi-branch.",
      },
    },
  },
  { label: "Customers", href: "/customers" },
  {
    label: "Company",
    href: "/about",
    panel: {
      columns: [
        {
          heading: "Company",
          links: [
            { label: "About Ainnect", href: "/about", summary: "Why we build for WhatsApp-first teams", icon: "users" },
            { label: "Contact us", href: "/contact", summary: "Talk to sales, or ask for pricing", icon: "mail" },
            { label: "Sign in", href: "/login", summary: "Already have a workspace", icon: "key" },
          ],
        },
        {
          heading: "Resources",
          links: [
            { label: "FAQ", href: "/faq", summary: "Billing, data, migration, limits", icon: "doc" },
            { label: "Security", href: "/security", summary: "Encryption, access control, hosting", icon: "lock" },
          ],
        },
      ],
    },
  },
];

/* --------------------------------------------------------------------------
   Footer
   -------------------------------------------------------------------------- */

export const footerGroups: { heading: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Overview", href: "/product" },
      { label: "Shared inbox", href: "/product/shared-inbox" },
      { label: "AI lead scoring", href: "/product/lead-scoring" },
      { label: "AI agent", href: "/product/ai-agent" },
      { label: "Automation", href: "/product/automation" },
      { label: "Analytics", href: "/product/analytics" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "By industry", href: "/solutions#by-industry" },
      { label: "By team", href: "/solutions#by-team" },
      { label: "By use case", href: "/solutions#by-use-case" },
      { label: "By company size", href: "/solutions#by-size" },
      { label: "Customer stories", href: "/customers" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Security", href: "/security" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Sign in", href: "/login" },
    ],
  },
];

/* --------------------------------------------------------------------------
   Copy fragments reused across pages — changing the pitch in one place.
   -------------------------------------------------------------------------- */

export const cta = {
  primary: { label: "Contact us", href: "/contact" },
  secondary: { label: "See the product tour", href: "/product" },
  note: "Ainnect is invite-only and quoted per team, so there is no signup form and no public price list. Both start with the same call.",
} as const;
