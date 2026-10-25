import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://usereplai.site',
  compressHTML: true,
  /* Paths people type, or that we used to ship, which are not routes any more.
     Access and pricing are both handled on a call now, so every one of those
     lands on /contact. Every real route on this site is English; the Indonesian
     ones the first version shipped with (/harga, /kebijakan-privasi,
     /syarat-ketentuan) are gone rather than redirected. */
  redirects: {
    '/signup': '/contact',
    '/sign-up': '/contact',
    '/register': '/contact',
    '/pricing': '/contact',
    '/features': '/product',
  },
});
