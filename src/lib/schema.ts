/* ==========================================================================
   JSON-LD builders. Pages compose these into the `schema` prop on BaseLayout
   so the same Organization / WebSite facts are never retyped.
   ========================================================================== */

import { site, contact } from "./site";

type Node = Record<string, unknown>;

const abs = (path: string): string => new URL(path, site.url).href;

export const organizationNode: Node = {
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: abs("/favicon.svg"),
  description: site.description,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.officeAddress.street,
    addressLocality: contact.officeAddress.locality,
    addressRegion: contact.officeAddress.region,
    postalCode: contact.officeAddress.postalCode,
    addressCountry: contact.officeAddress.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: contact.salesEmail,
      availableLanguage: ["en", "id"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: contact.supportEmail,
      availableLanguage: ["en", "id"],
    },
  ],
};

export const websiteNode: Node = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en",
};

/**
 * The product itself. No `offers` node: Ainnect is quoted per team and there is
 * no public price list, and a price-free Offer is worse than none at all.
 */
export const softwareNode: Node = {
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description: site.description,
  url: site.url,
  publisher: { "@id": `${site.url}/#organization` },
};

/**
 * `trail` holds ancestors only; `current` is appended as the last crumb.
 * Mirrors what <Breadcrumbs /> renders, so the two cannot disagree.
 */
export const breadcrumbNode = (
  trail: readonly { label: string; href: string }[],
  current: string,
  currentHref: string,
): Node => ({
  "@type": "BreadcrumbList",
  itemListElement: [{ label: "Home", href: "/" }, ...trail, { label: current, href: currentHref }].map(
    (crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: abs(crumb.href),
    }),
  ),
});

export const faqNode = (items: readonly { q: string; a: string }[]): Node => ({
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});
