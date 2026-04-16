import type { Request, Response, NextFunction } from "express";

const BASE_URL = "https://sebastianjara.com";

/**
 * 301 redirect map for legacy/defunct URLs.
 * These used to be client-side redirects via wouter; now they are
 * proper HTTP 301s so search engines update their index.
 */
const redirectMap: Record<string, string> = {
  "/contacto": "/postular",
  "/blog": "/",
  "/blog/ai-agency-lo-nuevo-para-el-2025/": "/",
  "/consultor-de-marketing-digital": "/",
  "/consultor-de-marketing-digital/": "/",
  "/herramientas": "/",
  "/herramientas/whatsapp-link-generator": "/",
};

export function seoRedirects(req: Request, res: Response, next: NextFunction) {
  const path = req.path;

  // Exact match
  if (redirectMap[path]) {
    return res.redirect(301, redirectMap[path]);
  }

  // Prefix match for /blog/* and /herramientas/*
  if (path.startsWith("/blog/") || path.startsWith("/herramientas/")) {
    return res.redirect(301, "/");
  }

  next();
}

/**
 * Redirect www to non-www at the server level (proper 301).
 * This replaces the client-side JS redirect in index.html.
 */
export function wwwRedirect(req: Request, res: Response, next: NextFunction) {
  const host = req.hostname;
  if (host.startsWith("www.")) {
    const newHost = host.slice(4);
    return res.redirect(301, `${req.protocol}://${newHost}${req.originalUrl}`);
  }
  next();
}

/**
 * Per-route SEO metadata for server-side meta tag injection.
 * This ensures crawlers (Google, Bing, AI) see unique title/description
 * per page even though this is a SPA.
 */
interface RouteMeta {
  title: string;
  description: string;
  canonical: string;
  ogType?: string;
}

const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Sebastián Jara — CMO Fraccionado con IA aplicada",
    description:
      "Dirección de marketing senior con IA aplicada, sin contratar un equipo completo. CMO fraccionado para empresas en Chile, LATAM y EE.UU.",
    canonical: `${BASE_URL}/`,
  },
  "/mentoria": {
    title: "Cómo trabajo — CMO Fraccionado con IA aplicada | Sebastián Jara",
    description:
      "Cómo opero como CMO fraccionado: estrategia, gestión e IA aplicada. Me integro a tu empresa como dirección de marketing senior, sin contratar un equipo completo.",
    canonical: `${BASE_URL}/mentoria`,
  },
  "/sobre-mi": {
    title: "Sobre Sebastián Jara — Consultor de IA & Marketing, CMO Fraccionado",
    description:
      "Founder & CEO de GoPoint. 15+ años en marketing digital, SEO, Ads, automatización e IA aplicada. CMO fraccionado para empresas en LATAM y EE.UU.",
    canonical: `${BASE_URL}/sobre-mi`,
    ogType: "profile",
  },
  "/postular": {
    title: "Trabajemos juntos | Sebastián Jara — CMO Fraccionado",
    description:
      "Cuéntame sobre tu empresa. Proceso breve para evaluar si el rol de CMO fraccionado con IA aplicada encaja con tu momento y equipo.",
    canonical: `${BASE_URL}/postular`,
  },
  "/faq": {
    title: "Preguntas frecuentes | Sebastián Jara — CMO Fraccionado con IA",
    description:
      "Respuestas sobre el servicio de CMO fraccionado con IA aplicada: qué es, para quién, cómo trabajo y cómo postular.",
    canonical: `${BASE_URL}/faq`,
  },
};

/**
 * Inject per-route meta tags into the index.html template.
 * Replaces the default <title>, meta description, OG tags, and canonical
 * URL with route-specific values so crawlers index each page correctly.
 */
export function injectSeoMeta(html: string, url: string): string {
  // Normalize URL: strip query string and trailing slash (except root)
  const cleanUrl = url.split("?")[0].replace(/\/$/, "") || "/";
  const meta = routeMeta[cleanUrl];
  if (!meta) return html;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`,
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`,
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${meta.title}"`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${meta.canonical}"`,
  );
  if (meta.ogType) {
    html = html.replace(
      /<meta property="og:type" content="[^"]*"/,
      `<meta property="og:type" content="${meta.ogType}"`,
    );
  }

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${meta.title}"`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${meta.description}"`,
  );
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"/,
    `<meta name="twitter:url" content="${meta.canonical}"`,
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${meta.canonical}"`,
  );

  return html;
}
