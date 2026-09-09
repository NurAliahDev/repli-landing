import type { APIRoute } from "astro";
import { features } from "../lib/features";
import { industries } from "../lib/solutions";
import { site } from "../lib/site";

/**
 * Hand-rolled so there is no extra dependency for thirty URLs.
 * `/login` and `/404` are deliberately absent — both are noindex. `/pricing`
 * and `/register` are gone entirely; both now redirect to `/contact`, and a
 * sitemap that advertises a redirect is a sitemap nobody trusts.
 */
const paths = [
  "/",
  "/product",
  ...features.map((feature) => `/product/${feature.slug}`),
  "/solutions",
  ...industries.map((industry) => `/solutions/${industry.slug}`),
  "/integrations",
  "/customers",
  "/security",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

export const GET: APIRoute = () => {
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site.url).href}</loc></url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
