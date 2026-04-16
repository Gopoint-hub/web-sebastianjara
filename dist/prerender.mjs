// scripts/prerender.tsx
import { renderToString } from "react-dom/server";
import { Router as Router2 } from "wouter";

// client/src/components/ui/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { jsx } from "react/jsx-runtime";
var Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Sonner,
    {
      theme,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...props
    }
  );
};

// client/src/components/ui/tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

// client/src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// client/src/components/ui/tooltip.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}

// client/src/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx3(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// client/src/pages/NotFound.tsx
import { Home, FileQuestion } from "lucide-react";
import { useLocation as useLocation3 } from "wouter";

// client/src/components/Layout.tsx
import { Link as Link2, useLocation as useLocation2 } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect as useEffect2, useState } from "react";

// client/src/components/Breadcrumbs.tsx
import { Link, useLocation } from "wouter";

// client/src/components/StructuredData.tsx
import { useEffect } from "react";
function StructuredData({ data }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    script.setAttribute("data-structured", "page");
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return null;
}

// client/src/components/Breadcrumbs.tsx
import { Fragment, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var ROUTE_LABELS = {
  "/": "Inicio",
  "/mentoria": "Mentor\xEDa",
  "/sobre-mi": "Sobre m\xED",
  "/postular": "Postular",
  "/faq": "Preguntas frecuentes"
};
function Breadcrumbs() {
  const [location] = useLocation();
  if (location === "/") return null;
  const label = ROUTE_LABELS[location];
  if (!label) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://sebastianjara.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": label,
        "item": `https://sebastianjara.com${location}`
      }
    ]
  };
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    /* @__PURE__ */ jsx4(StructuredData, { data: schema }),
    /* @__PURE__ */ jsx4("nav", { "aria-label": "Breadcrumb", className: "container pt-4 pb-0", children: /* @__PURE__ */ jsxs2("ol", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4(Link, { href: "/", className: "hover:text-foreground transition-colors", children: "Inicio" }) }),
      /* @__PURE__ */ jsx4("li", { "aria-hidden": "true", className: "select-none", children: "/" }),
      /* @__PURE__ */ jsx4("li", { children: /* @__PURE__ */ jsx4("span", { className: "text-foreground font-medium", children: label }) })
    ] }) })
  ] });
}

// client/src/components/Layout.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029Vb5wwAFJZg48RGccvJ0x";
function Layout({ children }) {
  const [location] = useLocation2();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "C\xF3mo trabajo", href: "/mentoria" },
    { label: "Sobre m\xED", href: "/sobre-mi" },
    { label: "FAQ", href: "/faq" }
  ];
  useEffect2(() => {
    if (typeof document === "undefined") return;
    const { body } = document;
    if (isMenuOpen) {
      const prev = body.style.overflow;
      body.style.overflow = "hidden";
      return () => {
        body.style.overflow = prev;
      };
    }
  }, [isMenuOpen]);
  useEffect2(() => {
    setIsMenuOpen(false);
  }, [location]);
  return /* @__PURE__ */ jsxs3("div", { className: "min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground", children: [
    /* @__PURE__ */ jsx5(
      "a",
      {
        href: "#main-content",
        className: "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium",
        children: "Saltar al contenido"
      }
    ),
    /* @__PURE__ */ jsx5(
      "header",
      {
        className: "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50",
        style: { paddingTop: "env(safe-area-inset-top)" },
        children: /* @__PURE__ */ jsxs3("div", { className: "container flex items-center justify-between h-16 md:h-20", children: [
          /* @__PURE__ */ jsx5(
            Link2,
            {
              href: "/",
              className: "flex items-center hover:opacity-80 transition-opacity -ml-1 px-1 py-2",
              "aria-label": "Sebasti\xE1n Jara \u2014 Inicio",
              children: /* @__PURE__ */ jsx5(
                "img",
                {
                  src: "/images/logo-dark.webp",
                  alt: "Sebasti\xE1n Jara",
                  className: "h-7 md:h-8 w-auto",
                  width: "88",
                  height: "32"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs3("nav", { className: "hidden md:flex items-center gap-8", children: [
            navItems.map((item) => /* @__PURE__ */ jsx5(Link2, { href: item.href, children: /* @__PURE__ */ jsx5(
              "span",
              {
                className: cn(
                  "text-sm font-medium hover:text-foreground transition-colors cursor-pointer",
                  location === item.href ? "text-foreground" : "text-muted-foreground"
                ),
                children: item.label
              }
            ) }, item.href)),
            /* @__PURE__ */ jsx5(Link2, { href: "/postular", children: /* @__PURE__ */ jsx5(
              Button,
              {
                size: "sm",
                className: "bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-5 h-10",
                children: "Trabajemos"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx5(
            "button",
            {
              type: "button",
              onClick: () => setIsMenuOpen((v) => !v),
              "aria-expanded": isMenuOpen,
              "aria-controls": "mobile-nav",
              "aria-label": isMenuOpen ? "Cerrar men\xFA" : "Abrir men\xFA",
              className: "md:hidden -mr-2 inline-flex items-center justify-center h-11 w-11 rounded-md text-foreground hover:bg-foreground/5 transition-colors",
              children: isMenuOpen ? /* @__PURE__ */ jsx5(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsx5(Menu, { className: "h-6 w-6" })
            }
          )
        ] })
      }
    ),
    isMenuOpen && /* @__PURE__ */ jsxs3(
      "div",
      {
        id: "mobile-nav",
        className: "fixed inset-0 z-40 bg-background md:hidden flex flex-col",
        style: {
          paddingTop: "calc(4rem + env(safe-area-inset-top))",
          paddingBottom: "env(safe-area-inset-bottom)"
        },
        children: [
          /* @__PURE__ */ jsx5("nav", { className: "flex-1 overflow-y-auto px-6 pt-8 pb-6", children: /* @__PURE__ */ jsx5("ul", { className: "flex flex-col gap-2", children: navItems.map((item) => /* @__PURE__ */ jsx5("li", { children: /* @__PURE__ */ jsx5(Link2, { href: item.href, children: /* @__PURE__ */ jsx5(
            "span",
            {
              className: cn(
                "block py-4 text-2xl font-display border-b border-border/50 cursor-pointer transition-colors",
                location === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              ),
              children: item.label
            }
          ) }) }, item.href)) }) }),
          /* @__PURE__ */ jsx5("div", { className: "px-6 pb-8 pt-4 border-t border-border/50", children: /* @__PURE__ */ jsx5(Link2, { href: "/postular", className: "block", children: /* @__PURE__ */ jsxs3(
            Button,
            {
              size: "lg",
              className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 text-base rounded-full w-full",
              children: [
                "Trabajemos juntos ",
                /* @__PURE__ */ jsx5(ArrowRight, { className: "ml-2 h-4 w-4" })
              ]
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs3("main", { id: "main-content", className: "flex-1 pt-16 md:pt-20", children: [
      /* @__PURE__ */ jsx5(Breadcrumbs, {}),
      children
    ] }),
    /* @__PURE__ */ jsx5(
      "footer",
      {
        className: "border-t border-border/50 py-10 md:py-12",
        style: { paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" },
        children: /* @__PURE__ */ jsx5("div", { className: "container", children: /* @__PURE__ */ jsxs3("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-6", children: [
          /* @__PURE__ */ jsxs3("div", { children: [
            /* @__PURE__ */ jsx5(
              "img",
              {
                src: "/images/logo-dark.webp",
                alt: "Sebasti\xE1n Jara",
                className: "h-6 w-auto mb-4 opacity-60",
                width: "66",
                height: "24",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxs3("p", { className: "text-xs text-muted-foreground", children: [
              "\xA9 ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Sebasti\xE1n Jara \xB7 CMO Fraccionado"
            ] })
          ] }),
          /* @__PURE__ */ jsxs3("div", { className: "flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx5(
              "a",
              {
                href: "https://www.youtube.com/@sebastianjaracom",
                target: "_blank",
                rel: "noreferrer me",
                className: "hover:text-foreground transition-colors py-1",
                children: "YouTube"
              }
            ),
            /* @__PURE__ */ jsx5(
              "a",
              {
                href: "https://www.tiktok.com/@sebastianjara.com",
                target: "_blank",
                rel: "noreferrer me",
                className: "hover:text-foreground transition-colors py-1",
                children: "TikTok"
              }
            ),
            /* @__PURE__ */ jsx5(
              "a",
              {
                href: WHATSAPP_CHANNEL_URL,
                target: "_blank",
                rel: "noreferrer",
                className: "hover:text-foreground transition-colors py-1",
                children: "WhatsApp"
              }
            ),
            /* @__PURE__ */ jsx5(
              "a",
              {
                href: "https://www.linkedin.com/in/sebastianjarabravo/",
                target: "_blank",
                rel: "noreferrer me",
                className: "hover:text-foreground transition-colors py-1",
                children: "LinkedIn"
              }
            )
          ] })
        ] }) })
      }
    )
  ] });
}

// client/src/pages/NotFound.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function NotFound() {
  const [, setLocation] = useLocation3();
  const handleGoHome = () => {
    setLocation("/");
  };
  const usefulLinks = [
    { label: "Sobre m\xED", id: "about" },
    { label: "Enfoque", id: "focus" },
    { label: "M\xE9todo", id: "method" },
    { label: "Recursos", id: "resources" }
  ];
  const handleNavigate = (id) => {
    setLocation("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  return /* @__PURE__ */ jsx6(Layout, { children: /* @__PURE__ */ jsxs4("div", { className: "min-h-[80vh] w-full flex items-center justify-center bg-background relative overflow-hidden", children: [
    /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-[url('/images/hero-bg-orange.webp')] opacity-10 bg-cover bg-center" }),
    /* @__PURE__ */ jsx6("div", { className: "absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" }),
    /* @__PURE__ */ jsx6("div", { className: "container relative z-10 px-4", children: /* @__PURE__ */ jsxs4("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx6("div", { className: "mb-8 flex justify-center", children: /* @__PURE__ */ jsxs4("div", { className: "relative", children: [
        /* @__PURE__ */ jsx6("div", { className: "absolute -inset-4 bg-primary/20 rounded-full blur-xl animate-pulse" }),
        /* @__PURE__ */ jsx6(FileQuestion, { className: "relative h-24 w-24 text-primary" })
      ] }) }),
      /* @__PURE__ */ jsx6("h1", { className: "text-6xl md:text-8xl font-display font-bold text-foreground mb-4 tracking-tighter", children: "404" }),
      /* @__PURE__ */ jsx6("h2", { className: "text-2xl md:text-3xl font-semibold text-foreground mb-6", children: "P\xE1gina no encontrada" }),
      /* @__PURE__ */ jsx6("p", { className: "text-muted-foreground text-lg mb-10 leading-relaxed max-w-lg mx-auto", children: "Parece que has llegado a un punto ciego en la estrategia. La p\xE1gina que buscas no existe o ha sido movida." }),
      /* @__PURE__ */ jsxs4("div", { className: "grid gap-6 mb-10", children: [
        /* @__PURE__ */ jsx6("p", { className: "text-sm font-mono text-primary uppercase tracking-wider", children: "SECCIONES \xDATILES" }),
        /* @__PURE__ */ jsx6("div", { className: "flex flex-wrap justify-center gap-3", children: usefulLinks.map((link) => /* @__PURE__ */ jsx6(
          Button,
          {
            variant: "outline",
            className: "border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all",
            onClick: () => handleNavigate(link.id),
            children: link.label
          },
          link.id
        )) })
      ] }),
      /* @__PURE__ */ jsxs4(
        Button,
        {
          onClick: handleGoHome,
          size: "lg",
          className: "bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-12 text-lg shadow-lg shadow-primary/20",
          children: [
            /* @__PURE__ */ jsx6(Home, { className: "w-5 h-5 mr-2" }),
            "Volver al Inicio"
          ]
        }
      )
    ] }) })
  ] }) });
}

// client/src/App.tsx
import { Route, Switch, Redirect } from "wouter";

// client/src/components/ErrorBoundary.tsx
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component } from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var ErrorBoundary = class extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx7("div", { className: "flex items-center justify-center min-h-screen p-8 bg-background", children: /* @__PURE__ */ jsxs5("div", { className: "flex flex-col items-center w-full max-w-2xl p-8", children: [
        /* @__PURE__ */ jsx7(
          AlertTriangle,
          {
            size: 48,
            className: "text-destructive mb-6 flex-shrink-0"
          }
        ),
        /* @__PURE__ */ jsx7("h2", { className: "text-xl mb-4", children: "An unexpected error occurred." }),
        /* @__PURE__ */ jsx7("div", { className: "p-4 w-full rounded bg-muted overflow-auto mb-6", children: /* @__PURE__ */ jsx7("pre", { className: "text-sm text-muted-foreground whitespace-break-spaces", children: this.state.error?.stack }) }),
        /* @__PURE__ */ jsxs5(
          "button",
          {
            onClick: () => window.location.reload(),
            className: cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg",
              "bg-primary text-primary-foreground",
              "hover:opacity-90 cursor-pointer"
            ),
            children: [
              /* @__PURE__ */ jsx7(RotateCcw, { size: 16 }),
              "Reload Page"
            ]
          }
        )
      ] }) });
    }
    return this.props.children;
  }
};
var ErrorBoundary_default = ErrorBoundary;

// client/src/contexts/ThemeContext.tsx
import { createContext, useContext, useEffect as useEffect3 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var ThemeContext = createContext(void 0);
function ThemeProvider({ children }) {
  useEffect3(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.add("dark");
  }, []);
  return /* @__PURE__ */ jsx8(ThemeContext.Provider, { value: { theme: "dark" }, children });
}

// client/src/pages/Home.tsx
import { motion } from "framer-motion";
import { Link as Link3 } from "wouter";
import { ArrowRight as ArrowRight3, Check } from "lucide-react";

// client/src/components/SEO.tsx
import { useEffect as useEffect4 } from "react";
import { useLocation as useLocation4 } from "wouter";
function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (el) {
    el.setAttribute("content", content);
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}
function SEO({
  title,
  description,
  canonical,
  keywords = [],
  image = "https://sebastianjara.com/images/profile.webp",
  type = "website"
}) {
  const [location] = useLocation4();
  const baseUrl = "https://sebastianjara.com";
  const currentUrl = canonical || `${baseUrl}${location}`;
  useEffect4(() => {
    document.title = title;
    setMeta("name", "description", description);
    if (keywords.length) {
      setMeta("name", "keywords", keywords.join(", "));
    }
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", currentUrl);
    setMeta("property", "og:image", image);
    setMeta("property", "og:type", type);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:url", currentUrl);
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (linkCanonical) {
      linkCanonical.setAttribute("href", currentUrl);
    } else {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      linkCanonical.setAttribute("href", currentUrl);
      document.head.appendChild(linkCanonical);
    }
  }, [title, description, currentUrl, keywords, image, type]);
  return null;
}

// client/src/pages/Home.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};
var stagger = {
  animate: { transition: { staggerChildren: 0.08 } }
};
var itemFade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
function Home2() {
  return /* @__PURE__ */ jsxs6(Layout, { children: [
    /* @__PURE__ */ jsx9(
      SEO,
      {
        title: "Sebasti\xE1n Jara \u2014 CMO Fraccionado",
        description: "CMO fraccionado para empresas que necesitan direcci\xF3n de marketing senior sin contratar un equipo completo. Chile, LATAM y EE.UU.",
        keywords: [
          "CMO fraccionado",
          "fractional CMO",
          "direcci\xF3n de marketing",
          "consultor de marketing",
          "Sebasti\xE1n Jara",
          "GoPoint",
          "marketing senior",
          "escalar empresa"
        ]
      }
    ),
    /* @__PURE__ */ jsxs6("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx9(
        "div",
        {
          "aria-hidden": "true",
          className: "pointer-events-none absolute inset-0 -z-10",
          style: {
            background: "radial-gradient(circle at 85% 15%, oklch(0.65 0.22 40 / 0.18), transparent 45%), radial-gradient(circle at 10% 90%, oklch(0.65 0.22 40 / 0.10), transparent 40%)"
          }
        }
      ),
      /* @__PURE__ */ jsx9("div", { className: "container pt-14 pb-16 md:pt-24 md:pb-24", children: /* @__PURE__ */ jsxs6("div", { className: "grid md:grid-cols-[1.35fr_1fr] items-center gap-10 md:gap-16", children: [
        /* @__PURE__ */ jsxs6(
          motion.div,
          {
            initial: "initial",
            animate: "animate",
            variants: fadeInUp,
            className: "order-2 md:order-1",
            children: [
              /* @__PURE__ */ jsxs6("p", { className: "inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6", children: [
                /* @__PURE__ */ jsx9("span", { className: "h-px w-6 bg-primary" }),
                "CMO Fraccionado"
              ] }),
              /* @__PURE__ */ jsxs6("h1", { className: "font-display font-semibold uppercase leading-[0.9] tracking-[0.005em] text-[clamp(2.75rem,10vw,6.75rem)] mb-6", children: [
                "Sebasti\xE1n",
                /* @__PURE__ */ jsx9("br", {}),
                /* @__PURE__ */ jsx9("span", { className: "text-primary", children: "Jara" })
              ] }),
              /* @__PURE__ */ jsxs6("p", { className: "text-base md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8", children: [
                "Direcci\xF3n de marketing senior para tu empresa",
                " ",
                /* @__PURE__ */ jsx9("span", { className: "text-foreground", children: "sin contratar un equipo completo" }),
                ". Estrategia, gesti\xF3n y ejecuci\xF3n desde adentro."
              ] }),
              /* @__PURE__ */ jsxs6("div", { className: "flex flex-col sm:flex-row gap-3", children: [
                /* @__PURE__ */ jsx9(Link3, { href: "/postular", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxs6(
                  Button,
                  {
                    size: "lg",
                    className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base rounded-full w-full sm:w-auto",
                    children: [
                      "Trabajemos juntos ",
                      /* @__PURE__ */ jsx9(ArrowRight3, { className: "ml-2 h-4 w-4" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx9(Link3, { href: "/mentoria", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsx9(
                  Button,
                  {
                    size: "lg",
                    variant: "ghost",
                    className: "h-14 px-6 text-base rounded-full w-full sm:w-auto hover:bg-foreground/5",
                    children: "C\xF3mo trabajo"
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx9("p", { className: "text-xs text-muted-foreground mt-6", children: "Chile \xB7 LATAM \xB7 EE.UU. \u2014 Trabajo con pocos clientes a la vez." })
            ]
          }
        ),
        /* @__PURE__ */ jsx9(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.96 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            className: "order-1 md:order-2 flex justify-center md:justify-end",
            children: /* @__PURE__ */ jsxs6("div", { className: "relative", children: [
              /* @__PURE__ */ jsx9(
                "div",
                {
                  "aria-hidden": "true",
                  className: "absolute -inset-4 md:-inset-6 rounded-full bg-primary/10 blur-3xl"
                }
              ),
              /* @__PURE__ */ jsx9(
                "img",
                {
                  src: "/images/sebastian-jara.webp",
                  alt: "Retrato de Sebasti\xE1n Jara",
                  width: "320",
                  height: "320",
                  loading: "eager",
                  className: "relative w-52 h-52 md:w-80 md:h-80 rounded-full object-cover border border-border/50 shadow-2xl"
                }
              )
            ] })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx9("section", { className: "py-16 md:py-24 border-t border-border/30", children: /* @__PURE__ */ jsx9("div", { className: "container max-w-4xl", children: /* @__PURE__ */ jsxs6(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsx9("p", { className: "text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6", children: "Qu\xE9 hago" }),
          /* @__PURE__ */ jsxs6("h2", { className: "font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-8", children: [
            "Me sumo a tu empresa como",
            " ",
            /* @__PURE__ */ jsx9("span", { className: "text-primary", children: "CMO" }),
            ", sin el costo de uno interno."
          ] }),
          /* @__PURE__ */ jsxs6("div", { className: "grid md:grid-cols-2 gap-8 mt-12", children: [
            /* @__PURE__ */ jsx9("p", { className: "text-muted-foreground leading-relaxed", children: "No soy agencia. No soy freelance. No soy consultor de un workshop. Asumo la direcci\xF3n de tu marketing como si fuera parte de tu organizaci\xF3n \u2014 con la experiencia de un CMO senior, por una fracci\xF3n del costo." }),
            /* @__PURE__ */ jsx9("p", { className: "text-muted-foreground leading-relaxed", children: "Defino la estrategia, priorizo, coordino equipos internos o proveedores, mido y ajusto. El foco es uno: que el marketing deje de ser una suma de t\xE1cticas y se convierta en un sistema que escala." })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx9("section", { className: "py-16 md:py-24 border-t border-border/30", children: /* @__PURE__ */ jsxs6("div", { className: "container max-w-3xl", children: [
      /* @__PURE__ */ jsxs6(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsx9("p", { className: "text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 text-center", children: "Para qui\xE9n" }),
            /* @__PURE__ */ jsx9("h2", { className: "font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-12 text-center", children: "Esto encaja si\u2026" })
          ]
        }
      ),
      /* @__PURE__ */ jsx9(
        motion.ul,
        {
          variants: stagger,
          initial: "initial",
          whileInView: "animate",
          viewport: { once: true, margin: "-80px" },
          className: "space-y-4",
          children: [
            "Tu empresa factura, pero el marketing depende de ti o de un junior sin direcci\xF3n.",
            "Contrataste agencia y sentiste que faltaba alguien que decidiera por tu lado.",
            "Necesitas visi\xF3n estrat\xE9gica, no solo t\xE1cticas sueltas.",
            "Buscas resultados medibles y un sistema que no colapse si t\xFA te vas una semana.",
            "Prefieres pagar por una cabeza senior antes que por un equipo completo."
          ].map((text, i) => /* @__PURE__ */ jsxs6(
            motion.li,
            {
              variants: itemFade,
              className: "flex items-start gap-4 py-2",
              children: [
                /* @__PURE__ */ jsx9("div", { className: "mt-1.5 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx9(Check, { className: "h-3 w-3 text-primary" }) }),
                /* @__PURE__ */ jsx9("p", { className: "text-base md:text-lg text-foreground/90 leading-relaxed", children: text })
              ]
            },
            i
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx9("section", { className: "py-16 md:py-24 border-t border-border/30", children: /* @__PURE__ */ jsxs6("div", { className: "container max-w-5xl", children: [
      /* @__PURE__ */ jsxs6(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsx9("p", { className: "text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 text-center", children: "C\xF3mo trabajo" }),
            /* @__PURE__ */ jsx9("h2", { className: "font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 text-center", children: "Tres pilares, un sistema." })
          ]
        }
      ),
      /* @__PURE__ */ jsx9("div", { className: "grid md:grid-cols-3 gap-8 md:gap-12", children: [
        {
          n: "01",
          title: "Estrategia",
          body: "Diagn\xF3stico, mercado, posicionamiento y plan. Qu\xE9 hacer, qu\xE9 dejar de hacer, en qu\xE9 orden."
        },
        {
          n: "02",
          title: "Gesti\xF3n",
          body: "Coordinaci\xF3n de equipos internos y proveedores. Procesos, KPIs y rituales de ejecuci\xF3n."
        },
        {
          n: "03",
          title: "Ejecuci\xF3n",
          body: "Campa\xF1as, contenido, automatizaci\xF3n e IA aplicada. Salir con algo cada semana, medir, iterar."
        }
      ].map((item, i) => /* @__PURE__ */ jsxs6(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.5, delay: i * 0.1 },
          children: [
            /* @__PURE__ */ jsx9("div", { className: "font-display text-5xl md:text-6xl text-primary/30 mb-4", children: item.n }),
            /* @__PURE__ */ jsx9("h3", { className: "font-display text-2xl md:text-3xl mb-3", children: item.title }),
            /* @__PURE__ */ jsx9("p", { className: "text-muted-foreground leading-relaxed", children: item.body })
          ]
        },
        item.n
      )) })
    ] }) }),
    /* @__PURE__ */ jsx9("section", { className: "py-16 md:py-24 border-t border-border/30", children: /* @__PURE__ */ jsx9("div", { className: "container max-w-3xl", children: /* @__PURE__ */ jsxs6(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.6 },
        className: "text-center",
        children: [
          /* @__PURE__ */ jsx9("p", { className: "text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4", children: "Qui\xE9n hay detr\xE1s" }),
          /* @__PURE__ */ jsx9("h2", { className: "font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-8", children: "15+ a\xF1os dise\xF1ando sistemas de crecimiento." }),
          /* @__PURE__ */ jsxs6("p", { className: "text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: [
            "Founder & CEO de",
            " ",
            /* @__PURE__ */ jsx9(
              "a",
              {
                href: "https://gopointagency.com",
                target: "_blank",
                rel: "noreferrer",
                className: "text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors",
                children: "GoPoint Agency"
              }
            ),
            ". He liderado marketing para empresas en LATAM y Estados Unidos \u2014 SEO, Ads, automatizaci\xF3n, IA aplicada y sistemas comerciales. Trabajo con pocos clientes a la vez para dar profundidad, no volumen."
          ] }),
          /* @__PURE__ */ jsx9("div", { className: "mt-8", children: /* @__PURE__ */ jsxs6(
            Link3,
            {
              href: "/sobre-mi",
              className: "inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all",
              children: [
                "Con\xF3ceme m\xE1s ",
                /* @__PURE__ */ jsx9(ArrowRight3, { className: "h-4 w-4" })
              ]
            }
          ) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxs6("section", { className: "py-16 md:py-28 border-t border-border/30 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx9(
        "div",
        {
          "aria-hidden": "true",
          className: "pointer-events-none absolute inset-0 -z-10",
          style: {
            background: "radial-gradient(circle at 50% 50%, oklch(0.65 0.22 40 / 0.12), transparent 60%)"
          }
        }
      ),
      /* @__PURE__ */ jsx9("div", { className: "container max-w-2xl", children: /* @__PURE__ */ jsxs6(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsx9("h2", { className: "font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6", children: "\xBFNecesitas un CMO?" }),
            /* @__PURE__ */ jsx9("p", { className: "text-base md:text-lg text-muted-foreground mb-10 leading-relaxed", children: "Cu\xE9ntame sobre tu empresa y el momento en que est\xE1s. Revisar\xE9 si encaja y te respondo personalmente." }),
            /* @__PURE__ */ jsx9(Link3, { href: "/postular", className: "inline-block w-full sm:w-auto", children: /* @__PURE__ */ jsxs6(
              Button,
              {
                size: "lg",
                className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-10 text-base rounded-full w-full sm:w-auto",
                children: [
                  "Trabajemos juntos ",
                  /* @__PURE__ */ jsx9(ArrowRight3, { className: "ml-2 h-4 w-4" })
                ]
              }
            ) })
          ]
        }
      ) })
    ] })
  ] });
}

// client/src/pages/About.tsx
import { motion as motion2 } from "framer-motion";
import { Link as Link4 } from "wouter";
import { ArrowRight as ArrowRight4 } from "lucide-react";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  return /* @__PURE__ */ jsxs7(Layout, { children: [
    /* @__PURE__ */ jsx10(
      SEO,
      {
        title: "Sobre Sebasti\xE1n Jara | Mentor Ejecutivo y Fundador de GoPoint",
        description: "Founder & CEO de GoPoint. 15+ a\xF1os en marketing digital, SEO, Ads y automatizaci\xF3n. Mentor\xEDa ejecutiva 1 a 1 para due\xF1os de empresa en LATAM y EE.UU.",
        keywords: ["Sebasti\xE1n Jara", "mentor ejecutivo", "GoPoint Agency", "consultor marketing digital", "mentor\xEDa empresarial", "automatizaci\xF3n con IA"],
        type: "profile"
      }
    ),
    /* @__PURE__ */ jsx10("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsx10("div", { className: "container", children: /* @__PURE__ */ jsxs7("div", { className: "grid md:grid-cols-2 gap-12 md:gap-16 items-center", children: [
      /* @__PURE__ */ jsx10(
        motion2.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5 },
          className: "order-1 md:order-2",
          children: /* @__PURE__ */ jsx10("div", { className: "relative max-w-md mx-auto md:mx-0 md:ml-auto", children: /* @__PURE__ */ jsx10(
            "img",
            {
              src: "/images/sebastian-jara.webp",
              alt: "Sebasti\xE1n Jara \u2014 Mentor Ejecutivo",
              className: "w-full rounded-2xl",
              width: "1068",
              height: "1346",
              fetchPriority: "high"
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsxs7(
        motion2.div,
        {
          initial: "initial",
          animate: "animate",
          variants: fadeIn,
          className: "order-2 md:order-1",
          children: [
            /* @__PURE__ */ jsx10("h1", { className: "text-3xl md:text-5xl font-display font-bold mb-8 leading-tight", children: "Sebasti\xE1n Jara" }),
            /* @__PURE__ */ jsxs7("div", { className: "space-y-5 text-lg text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsx10("p", { children: "Founder & CEO @GoPoint. 15+ a\xF1os en marketing digital, SEO, Ads y automatizaci\xF3n. Trabajo con empresas en LATAM y EE.UU." }),
              /* @__PURE__ */ jsx10("p", { children: "Mi enfoque es construir sistemas: atraer demanda, convertirla en ventas y ordenar la operaci\xF3n. Uso automatizaci\xF3n e IA como aceleradores, no como oferta principal." }),
              /* @__PURE__ */ jsx10("p", { children: "Hoy trabajo con pocos clientes de forma directa a trav\xE9s de la mentor\xEDa ejecutiva 1 a 1. Prefiero profundidad sobre volumen." })
            ] })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx10("section", { className: "py-16 border-t border-border/30", children: /* @__PURE__ */ jsx10("div", { className: "container", children: /* @__PURE__ */ jsxs7(
      motion2.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsx10("h2", { className: "text-2xl font-semibold mb-10", children: "Proyectos" }),
          /* @__PURE__ */ jsxs7("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs7("div", { className: "border-l-2 border-primary/40 pl-6", children: [
              /* @__PURE__ */ jsx10("h3", { className: "font-semibold", children: "GoPoint Agency" }),
              /* @__PURE__ */ jsx10("p", { className: "text-sm text-muted-foreground", children: "Founder & CEO \u2014 Agencia de marketing digital y automatizaci\xF3n." })
            ] }),
            /* @__PURE__ */ jsxs7("div", { className: "border-l-2 border-border/50 pl-6", children: [
              /* @__PURE__ */ jsx10("h3", { className: "font-semibold", children: "FrutillarHoy" }),
              /* @__PURE__ */ jsx10("p", { className: "text-sm text-muted-foreground", children: "Director \u2014 Portal de contenido local." })
            ] }),
            /* @__PURE__ */ jsxs7("div", { className: "border-l-2 border-border/50 pl-6", children: [
              /* @__PURE__ */ jsx10("h3", { className: "font-semibold", children: "MarketingHoy.com" }),
              /* @__PURE__ */ jsx10("p", { className: "text-sm text-muted-foreground", children: "Director \u2014 Medio de marketing digital en espa\xF1ol." })
            ] })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx10("section", { className: "py-16 border-t border-border/30", children: /* @__PURE__ */ jsx10("div", { className: "container", children: /* @__PURE__ */ jsxs7(
      motion2.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsx10("h2", { className: "text-2xl font-semibold mb-10", children: "\xC1reas de expertise" }),
          /* @__PURE__ */ jsx10("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            "Sistema comercial y captaci\xF3n de leads",
            "SEO, Ads y estrategia de tr\xE1fico",
            "Automatizaci\xF3n de procesos con IA",
            "CRM y gesti\xF3n de pipeline",
            "Dashboard de control y m\xE9tricas",
            "Newsletter y retenci\xF3n con IA"
          ].map((area, i) => /* @__PURE__ */ jsx10("div", { className: "glass-panel rounded-lg p-4", children: /* @__PURE__ */ jsx10("p", { className: "text-sm text-foreground/90", children: area }) }, i)) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx10("section", { className: "py-20 border-t border-border/30", children: /* @__PURE__ */ jsx10("div", { className: "container", children: /* @__PURE__ */ jsxs7(
      motion2.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-2xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsx10("h2", { className: "text-2xl font-semibold mb-8", children: "Si quieres trabajar conmigo, postula a la mentor\xEDa." }),
          /* @__PURE__ */ jsx10("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsx10(Link4, { href: "/postular", children: /* @__PURE__ */ jsxs7(
            Button,
            {
              size: "lg",
              className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base rounded-full",
              children: [
                "Postular a la mentor\xEDa ",
                /* @__PURE__ */ jsx10(ArrowRight4, { className: "ml-2 h-4 w-4" })
              ]
            }
          ) }) })
        ]
      }
    ) }) })
  ] });
}

// client/src/pages/Mentoria.tsx
import { motion as motion3 } from "framer-motion";
import { Link as Link5 } from "wouter";
import { ArrowRight as ArrowRight5, Check as Check2 } from "lucide-react";
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
var stagger2 = {
  animate: { transition: { staggerChildren: 0.08 } }
};
var itemFade2 = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};
function Mentoria() {
  return /* @__PURE__ */ jsxs8(Layout, { children: [
    /* @__PURE__ */ jsx11(
      SEO,
      {
        title: "Mentor\xEDa Ejecutiva 1 a 1 \u2014 Detalle del servicio | Sebasti\xE1n Jara",
        description: "Mentor\xEDa ejecutiva privada para due\xF1os de empresa. Dise\xF1amos tu sistema comercial, automatizaci\xF3n y roadmap para escalar con orden, datos y ejecuci\xF3n.",
        keywords: ["mentor\xEDa ejecutiva", "consultor\xEDa 1 a 1", "sistema comercial", "automatizaci\xF3n con IA", "mentor\xEDa empresarial", "escalar negocio"]
      }
    ),
    /* @__PURE__ */ jsx11("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsx11("div", { className: "container", children: /* @__PURE__ */ jsxs8(
      motion3.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsx11("h1", { className: "text-3xl md:text-5xl font-display font-bold mb-6 leading-tight", children: "Mentor\xEDa Ejecutiva 1 a 1" }),
          /* @__PURE__ */ jsx11("p", { className: "text-lg text-muted-foreground leading-relaxed mb-4", children: "Sesi\xF3n privada estrat\xE9gica donde dise\xF1amos el sistema comercial y operativo que tu empresa necesita. No es teor\xEDa: es trabajo aplicado, con foco en decisiones y plan de acci\xF3n." }),
          /* @__PURE__ */ jsx11("p", { className: "text-sm text-primary font-medium", children: "Cupos limitados por agenda." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx11("section", { className: "py-16 border-t border-border/30", children: /* @__PURE__ */ jsx11("div", { className: "container", children: /* @__PURE__ */ jsxs8(
      motion3.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsx11("h2", { className: "text-2xl font-semibold mb-10", children: "Qu\xE9 trabajamos en la sesi\xF3n" }),
          /* @__PURE__ */ jsx11("div", { className: "space-y-8", children: [
            { title: "Arquitectura del sistema comercial", desc: "Dise\xF1o del flujo completo: captaci\xF3n \u2192 lead \u2192 cierre. Estructura que funcione sin depender de la improvisaci\xF3n." },
            { title: "Gesti\xF3n de leads y seguimiento", desc: "C\xF3mo captar, clasificar y hacer seguimiento de cada oportunidad de forma sistem\xE1tica." },
            { title: "Cotizaci\xF3n r\xE1pida con IA", desc: "Cuando aplique, dise\xF1amos un sistema de cotizaci\xF3n asistido por IA para responder m\xE1s r\xE1pido." },
            { title: "Dashboard de control", desc: "Ventas, leads, actividad y resultados en un solo lugar. Decisiones basadas en datos, no en intuici\xF3n." },
            { title: "Newsletter y retenci\xF3n con IA", desc: "Sistema de comunicaci\xF3n con tu base que funcione de forma semi-autom\xE1tica." },
            { title: "Integraci\xF3n de herramientas", desc: "CRM, email, gesti\xF3n de tareas, documentaci\xF3n. Todo conectado y trabajando como un sistema." },
            { title: "Roadmap de implementaci\xF3n", desc: "Prioridades claras, orden de ejecuci\xF3n y pr\xF3ximos pasos concretos." }
          ].map((item, i) => /* @__PURE__ */ jsxs8(
            motion3.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: i * 0.05 },
              className: "border-l-2 border-primary/30 pl-6",
              children: [
                /* @__PURE__ */ jsx11("h3", { className: "font-semibold mb-2", children: item.title }),
                /* @__PURE__ */ jsx11("p", { className: "text-muted-foreground text-sm", children: item.desc })
              ]
            },
            i
          )) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx11("section", { className: "py-16 border-t border-border/30", children: /* @__PURE__ */ jsx11("div", { className: "container", children: /* @__PURE__ */ jsxs8(
      motion3.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsx11("h2", { className: "text-2xl font-semibold mb-10", children: "Te vas con" }),
          /* @__PURE__ */ jsx11(
            motion3.div,
            {
              variants: stagger2,
              initial: "initial",
              whileInView: "animate",
              viewport: { once: true },
              className: "space-y-4",
              children: [
                "Diagn\xF3stico claro de tu situaci\xF3n actual.",
                "Cuellos de botella identificados.",
                "Dise\xF1o del sistema a implementar.",
                "Prioridades definidas por impacto.",
                "Pr\xF3ximos pasos accionables con timeline."
              ].map((text, i) => /* @__PURE__ */ jsxs8(motion3.div, { variants: itemFade2, className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx11("div", { className: "mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx11(Check2, { className: "h-3 w-3 text-primary" }) }),
                /* @__PURE__ */ jsx11("p", { className: "text-foreground", children: text })
              ] }, i))
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx11("section", { className: "py-16 border-t border-border/30", children: /* @__PURE__ */ jsx11("div", { className: "container", children: /* @__PURE__ */ jsxs8(
      motion3.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsx11("h2", { className: "text-2xl font-semibold mb-10", children: "Para qui\xE9n es" }),
          /* @__PURE__ */ jsx11("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            "Due\xF1os de empresa que ya venden.",
            "Socios o directores que lideran el \xE1rea comercial.",
            "Negocios con herramientas desconectadas.",
            "Empresas que quieren escalar con orden.",
            "Quienes necesitan un plan claro y accionable.",
            "Quienes buscan sistemas, no dependencia."
          ].map((text, i) => /* @__PURE__ */ jsxs8("div", { className: "flex items-start gap-3 glass-panel rounded-lg p-4", children: [
            /* @__PURE__ */ jsx11(Check2, { className: "h-4 w-4 text-primary mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsx11("p", { className: "text-sm text-foreground/90", children: text })
          ] }, i)) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx11("section", { className: "py-16 border-t border-border/30", children: /* @__PURE__ */ jsx11("div", { className: "container", children: /* @__PURE__ */ jsxs8(
      motion3.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsx11("h2", { className: "text-2xl font-semibold mb-10", children: "C\xF3mo funciona" }),
          /* @__PURE__ */ jsx11("div", { className: "space-y-8", children: [
            { step: "01", title: "Postula", desc: "Completas un formulario breve con la informaci\xF3n de tu empresa y tu desaf\xEDo actual." },
            { step: "02", title: "Revisi\xF3n", desc: "Reviso tu caso personalmente y confirmo si la mentor\xEDa encaja con tu situaci\xF3n." },
            { step: "03", title: "Sesi\xF3n", desc: "Agendamos la sesi\xF3n y trabajamos con foco total en decisiones, dise\xF1o del sistema y plan de acci\xF3n." }
          ].map((item, i) => /* @__PURE__ */ jsxs8("div", { className: "flex items-start gap-6", children: [
            /* @__PURE__ */ jsx11("span", { className: "text-3xl font-bold text-primary/30 font-mono flex-shrink-0", children: item.step }),
            /* @__PURE__ */ jsxs8("div", { children: [
              /* @__PURE__ */ jsx11("h3", { className: "font-semibold mb-1", children: item.title }),
              /* @__PURE__ */ jsx11("p", { className: "text-muted-foreground text-sm", children: item.desc })
            ] })
          ] }, i)) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx11("section", { className: "py-20 border-t border-border/30", children: /* @__PURE__ */ jsx11("div", { className: "container", children: /* @__PURE__ */ jsxs8(
      motion3.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-2xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsx11("h2", { className: "text-2xl font-semibold mb-8", children: "Si quieres orden y escalabilidad, postula." }),
          /* @__PURE__ */ jsx11("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsx11(Link5, { href: "/postular", children: /* @__PURE__ */ jsxs8(
            Button,
            {
              size: "lg",
              className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base rounded-full",
              children: [
                "Postular a la mentor\xEDa ",
                /* @__PURE__ */ jsx11(ArrowRight5, { className: "ml-2 h-4 w-4" })
              ]
            }
          ) }) })
        ]
      }
    ) }) })
  ] });
}

// client/src/pages/Postular.tsx
import { motion as motion4 } from "framer-motion";
import { ArrowRight as ArrowRight6 } from "lucide-react";
import { useState as useState2 } from "react";
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var TOOLS_OPTIONS = [
  "Pipedrive",
  "HubSpot",
  "Mailchimp",
  "ActiveCampaign",
  "Monday",
  "Notion",
  "Google Sheets",
  "Discord",
  "Otro"
];
var ROL_OPTIONS = ["Due\xF1o", "Socio", "Director", "Gerente"];
var FACTURACION_OPTIONS = [
  "Menos de $5.000 USD/mes",
  "$5.000 \u2013 $20.000 USD/mes",
  "$20.000 \u2013 $50.000 USD/mes",
  "$50.000 \u2013 $100.000 USD/mes",
  "M\xE1s de $100.000 USD/mes"
];
function Postular() {
  const [formData, setFormData] = useState2({
    nombre: "",
    email: "",
    whatsapp: "",
    empresa: "",
    rol: "",
    facturacion: "",
    desafio: "",
    herramientas: [],
    objetivo90: ""
  });
  const [submitted, setSubmitted] = useState2(false);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  const inputClasses = "w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 min-h-[48px]";
  const handleToolToggle = (tool) => {
    setFormData((prev) => ({
      ...prev,
      herramientas: prev.herramientas.includes(tool) ? prev.herramientas.filter((t) => t !== tool) : [...prev.herramientas, tool]
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Hola Seba, quiero explorar trabajar contigo como CMO fraccionado.

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}
*Empresa:* ${formData.empresa}
*Rol:* ${formData.rol}
*Facturaci\xF3n mensual:* ${formData.facturacion}
*Principal desaf\xEDo:* ${formData.desafio}
*Herramientas actuales:* ${formData.herramientas.join(", ") || "No especificado"}
*Objetivo en 90 d\xEDas:* ${formData.objetivo90}`;
    const url = `https://wa.me/56958585362?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };
  return /* @__PURE__ */ jsxs9(Layout, { children: [
    /* @__PURE__ */ jsx12(
      SEO,
      {
        title: "Trabajemos juntos | Sebasti\xE1n Jara \u2014 CMO Fraccionado",
        description: "Cu\xE9ntame sobre tu empresa. Proceso de postulaci\xF3n breve para evaluar si el rol de CMO fraccionado encaja con tu momento y equipo.",
        keywords: ["CMO fraccionado", "contratar CMO", "fractional CMO", "direcci\xF3n de marketing", "Sebasti\xE1n Jara"]
      }
    ),
    /* @__PURE__ */ jsx12("section", { className: "py-14 md:py-24", children: /* @__PURE__ */ jsx12("div", { className: "container", children: /* @__PURE__ */ jsxs9(
      motion4.div,
      {
        initial: "initial",
        animate: "animate",
        variants: fadeIn,
        className: "max-w-2xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsx12("p", { className: "text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-primary mb-5", children: "Trabajemos juntos" }),
          /* @__PURE__ */ jsx12("h1", { className: "font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6", children: "Cu\xE9ntame sobre tu empresa." }),
          /* @__PURE__ */ jsx12("p", { className: "text-base md:text-lg text-muted-foreground mb-2", children: "Reviso cada caso personalmente y te respondo si encaja." }),
          /* @__PURE__ */ jsx12("p", { className: "text-sm text-muted-foreground", children: "Trabajo con pocos clientes a la vez." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx12("section", { className: "pb-20", children: /* @__PURE__ */ jsx12("div", { className: "container", children: /* @__PURE__ */ jsx12(
      motion4.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-2xl mx-auto",
        children: submitted ? /* @__PURE__ */ jsxs9("div", { className: "glass-panel rounded-xl p-10 text-center", children: [
          /* @__PURE__ */ jsx12("h2", { className: "text-2xl font-semibold mb-4", children: "Postulaci\xF3n enviada" }),
          /* @__PURE__ */ jsx12("p", { className: "text-muted-foreground", children: "Recib\xED tu postulaci\xF3n. Te responder\xE9 a la brevedad." })
        ] }) : /* @__PURE__ */ jsxs9("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx12("label", { className: "block text-sm font-medium mb-2", children: "Nombre" }),
            /* @__PURE__ */ jsx12(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Tu nombre completo",
                className: inputClasses,
                value: formData.nombre,
                onChange: (e) => setFormData({ ...formData, nombre: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx12("label", { className: "block text-sm font-medium mb-2", children: "Email" }),
            /* @__PURE__ */ jsx12(
              "input",
              {
                type: "email",
                required: true,
                placeholder: "tu@empresa.com",
                className: inputClasses,
                value: formData.email,
                onChange: (e) => setFormData({ ...formData, email: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx12("label", { className: "block text-sm font-medium mb-2", children: "WhatsApp" }),
            /* @__PURE__ */ jsx12(
              "input",
              {
                type: "tel",
                required: true,
                placeholder: "+56 9 XXXX XXXX",
                className: inputClasses,
                value: formData.whatsapp,
                onChange: (e) => setFormData({ ...formData, whatsapp: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx12("label", { className: "block text-sm font-medium mb-2", children: "Empresa" }),
            /* @__PURE__ */ jsx12(
              "input",
              {
                type: "text",
                required: true,
                placeholder: "Nombre de tu empresa",
                className: inputClasses,
                value: formData.empresa,
                onChange: (e) => setFormData({ ...formData, empresa: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx12("label", { className: "block text-sm font-medium mb-2", children: "Rol" }),
            /* @__PURE__ */ jsxs9(
              "select",
              {
                required: true,
                className: inputClasses,
                value: formData.rol,
                onChange: (e) => setFormData({ ...formData, rol: e.target.value }),
                children: [
                  /* @__PURE__ */ jsx12("option", { value: "", children: "Selecciona tu rol" }),
                  ROL_OPTIONS.map((rol) => /* @__PURE__ */ jsx12("option", { value: rol, children: rol }, rol))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx12("label", { className: "block text-sm font-medium mb-2", children: "Facturaci\xF3n mensual aproximada" }),
            /* @__PURE__ */ jsxs9(
              "select",
              {
                required: true,
                className: inputClasses,
                value: formData.facturacion,
                onChange: (e) => setFormData({ ...formData, facturacion: e.target.value }),
                children: [
                  /* @__PURE__ */ jsx12("option", { value: "", children: "Selecciona un rango" }),
                  FACTURACION_OPTIONS.map((opt) => /* @__PURE__ */ jsx12("option", { value: opt, children: opt }, opt))
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx12("label", { className: "block text-sm font-medium mb-2", children: "Principal desaf\xEDo" }),
            /* @__PURE__ */ jsx12(
              "textarea",
              {
                required: true,
                placeholder: "\xBFCu\xE1l es el mayor desaf\xEDo de tu empresa hoy?",
                rows: 3,
                className: inputClasses + " resize-none",
                value: formData.desafio,
                onChange: (e) => setFormData({ ...formData, desafio: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx12("label", { className: "block text-sm font-medium mb-3", children: "Herramientas actuales" }),
            /* @__PURE__ */ jsx12("div", { className: "flex flex-wrap gap-2", children: TOOLS_OPTIONS.map((tool) => /* @__PURE__ */ jsx12(
              "button",
              {
                type: "button",
                onClick: () => handleToolToggle(tool),
                className: `min-h-[44px] px-4 py-2 rounded-full text-sm border transition-colors ${formData.herramientas.includes(tool) ? "bg-primary text-primary-foreground border-primary" : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50"}`,
                children: tool
              },
              tool
            )) })
          ] }),
          /* @__PURE__ */ jsxs9("div", { children: [
            /* @__PURE__ */ jsx12("label", { className: "block text-sm font-medium mb-2", children: "Objetivo en 90 d\xEDas" }),
            /* @__PURE__ */ jsx12(
              "textarea",
              {
                required: true,
                placeholder: "\xBFQu\xE9 quieres lograr en los pr\xF3ximos 90 d\xEDas?",
                rows: 3,
                className: inputClasses + " resize-none",
                value: formData.objetivo90,
                onChange: (e) => setFormData({ ...formData, objetivo90: e.target.value })
              }
            )
          ] }),
          /* @__PURE__ */ jsx12("div", { className: "pt-4", children: /* @__PURE__ */ jsxs9(
            Button,
            {
              type: "submit",
              size: "lg",
              className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base rounded-full w-full sm:w-auto",
              children: [
                "Enviar postulaci\xF3n ",
                /* @__PURE__ */ jsx12(ArrowRight6, { className: "ml-2 h-4 w-4" })
              ]
            }
          ) })
        ] })
      }
    ) }) })
  ] });
}

// client/src/pages/FAQ.tsx
import { motion as motion5 } from "framer-motion";
import { Link as Link6 } from "wouter";
import { ArrowRight as ArrowRight7 } from "lucide-react";
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
var faqs = [
  {
    category: "Sobre la mentor\xEDa",
    items: [
      {
        q: "\xBFQu\xE9 es la Mentor\xEDa Ejecutiva 1 a 1 de Sebasti\xE1n Jara?",
        a: "Es una sesi\xF3n privada estrat\xE9gica donde trabajo directamente con el due\xF1o o director de una empresa para dise\xF1ar su sistema comercial y operativo. No es un curso ni asesor\xEDa gen\xE9rica: es trabajo aplicado a tu negocio espec\xEDfico, con foco en decisiones y plan de acci\xF3n concreto."
      },
      {
        q: "\xBFEn qu\xE9 se diferencia de una consultor\xEDa tradicional?",
        a: "No entrego un informe ni recomendaciones gen\xE9ricas. En la sesi\xF3n dise\xF1amos juntos el sistema: vemos tu negocio, identificamos cuellos de botella espec\xEDficos y salimos con un plan accionable y priorizado. El foco es ejecuci\xF3n, no teor\xEDa."
      },
      {
        q: "\xBFQu\xE9 se trabaja en la sesi\xF3n?",
        a: "Dise\xF1amos el sistema comercial completo: captaci\xF3n de leads, seguimiento, cierre, cotizaci\xF3n con IA cuando aplica, dashboard de control con tus m\xE9tricas reales, sistema de newsletter y retenci\xF3n, integraci\xF3n de herramientas (CRM, email, gesti\xF3n, documentaci\xF3n) y roadmap de implementaci\xF3n por prioridades."
      },
      {
        q: "\xBFQu\xE9 resultados obtengo al finalizar?",
        a: "Sales con diagn\xF3stico claro de tu situaci\xF3n actual, cuellos de botella identificados, dise\xF1o del sistema a implementar, prioridades definidas por impacto y pr\xF3ximos pasos accionables con timeline."
      },
      {
        q: "\xBFLa mentor\xEDa es presencial o remota?",
        a: "La sesi\xF3n es remota, lo que me permite trabajar con empresas en Chile, Per\xFA, Colombia, M\xE9xico y Estados Unidos sin restricci\xF3n geogr\xE1fica."
      }
    ]
  },
  {
    category: "Para qui\xE9n es",
    items: [
      {
        q: "\xBFPara qui\xE9n es esta mentor\xEDa?",
        a: "Para due\xF1os de empresa, socios o directores de \xE1rea comercial que ya venden pero tienen desorden en procesos, herramientas desconectadas o necesitan un plan claro para escalar. Es para quienes buscan sistemas, no dependencia."
      },
      {
        q: "\xBFPara qui\xE9n NO es?",
        a: "No es para estudiantes, personas sin empresa activa, quienes buscan un curso o teor\xEDa, ni para quienes quieren asesor\xEDa general sin compromiso de ejecuci\xF3n."
      },
      {
        q: "\xBFNecesito tener experiencia en tecnolog\xEDa o automatizaci\xF3n?",
        a: "No. El objetivo es dise\xF1ar el sistema adecuado para tu nivel actual y tus recursos. Trabajamos con las herramientas que ya tienes o con las m\xE1s simples que sirvan para tu caso."
      },
      {
        q: "\xBFFunciona para cualquier industria?",
        a: "S\xED, siempre que tengas un proceso comercial activo. He trabajado con empresas de servicios, tecnolog\xEDa, retail, consultor\xEDa y m\xE1s, en Chile, Per\xFA, Colombia, M\xE9xico y EE.UU."
      }
    ]
  },
  {
    category: "Proceso de postulaci\xF3n",
    items: [
      {
        q: "\xBFC\xF3mo funciona el proceso para trabajar con Sebasti\xE1n Jara?",
        a: "Tres pasos: (1) Completas el formulario de postulaci\xF3n con informaci\xF3n de tu empresa y tu desaf\xEDo actual. (2) Reviso tu caso personalmente y te confirmo si la mentor\xEDa encaja con tu situaci\xF3n. (3) Agendamos la sesi\xF3n y trabajamos con foco total."
      },
      {
        q: "\xBFPor qu\xE9 hay un proceso de postulaci\xF3n?",
        a: "Porque los cupos son limitados por agenda. Prefiero trabajar con pocos clientes de forma directa y garantizar profundidad sobre volumen. El formulario me permite evaluar si tu caso es el adecuado para que la mentor\xEDa genere valor real."
      },
      {
        q: "\xBFCu\xE1nto tiempo tarda el proceso desde la postulaci\xF3n?",
        a: "Reviso cada postulaci\xF3n personalmente. El tiempo depende de la disponibilidad de agenda en el momento en que aplicas."
      },
      {
        q: "\xBFC\xF3mo postulo?",
        a: "Completa el formulario en sebastianjara.com/postular con tu nombre, empresa, rol, facturaci\xF3n mensual aproximada, principal desaf\xEDo y objetivo en 90 d\xEDas."
      }
    ]
  },
  {
    category: "Sobre Sebasti\xE1n Jara",
    items: [
      {
        q: "\xBFQui\xE9n es Sebasti\xE1n Jara?",
        a: "Soy Founder & CEO de GoPoint Agency, con 15+ a\xF1os de experiencia en marketing digital, SEO, Ads y automatizaci\xF3n. Trabajo con empresas en LATAM y EE.UU. Mi enfoque es construir sistemas: atraer demanda, convertirla en ventas y ordenar la operaci\xF3n, usando IA y automatizaci\xF3n como aceleradores."
      },
      {
        q: "\xBFQu\xE9 es GoPoint Agency?",
        a: "GoPoint es la agencia de marketing digital y automatizaci\xF3n que fund\xE9, especializada en sistemas de crecimiento para empresas. Tambi\xE9n soy director de FrutillarHoy y MarketingHoy.com."
      },
      {
        q: "\xBFCon qu\xE9 pa\xEDses trabaja Sebasti\xE1n Jara?",
        a: "Trabajo remotamente con empresas en Chile, Per\xFA, Colombia, M\xE9xico y Estados Unidos."
      },
      {
        q: "\xBFD\xF3nde puedo seguir a Sebasti\xE1n Jara?",
        a: "En LinkedIn (linkedin.com/in/sebastianjarabravo), YouTube (@sebastianjaracom), TikTok (@sebastianjara.com) y el canal de WhatsApp de sebastianjara.com."
      }
    ]
  }
];
var FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.flatMap(
    (cat) => cat.items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  )
};
function FAQ() {
  return /* @__PURE__ */ jsxs10(Layout, { children: [
    /* @__PURE__ */ jsx13(
      SEO,
      {
        title: "Preguntas frecuentes | Sebasti\xE1n Jara \u2014 Mentor\xEDa Ejecutiva",
        description: "Respuestas a las preguntas m\xE1s comunes sobre la Mentor\xEDa Ejecutiva 1 a 1 de Sebasti\xE1n Jara: qu\xE9 es, para qui\xE9n es, c\xF3mo postular y qu\xE9 resultados esperar.",
        keywords: ["preguntas frecuentes mentor\xEDa ejecutiva", "FAQ mentor\xEDa 1 a 1", "c\xF3mo postular mentor\xEDa Sebasti\xE1n Jara", "mentor\xEDa ejecutiva Chile", "consultor\xEDa empresarial LATAM"],
        canonical: "https://sebastianjara.com/faq"
      }
    ),
    /* @__PURE__ */ jsx13(StructuredData, { data: FAQ_SCHEMA }),
    /* @__PURE__ */ jsx13("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsx13("div", { className: "container", children: /* @__PURE__ */ jsxs10(
      motion5.div,
      {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsx13("h1", { className: "text-3xl md:text-5xl font-display font-bold mb-6 leading-tight", children: "Preguntas frecuentes" }),
          /* @__PURE__ */ jsx13("p", { className: "text-lg text-muted-foreground", children: "Todo lo que necesitas saber sobre la Mentor\xEDa Ejecutiva 1 a 1 y c\xF3mo trabajar conmigo." })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx13("section", { className: "pb-20", children: /* @__PURE__ */ jsx13("div", { className: "container", children: /* @__PURE__ */ jsx13("div", { className: "max-w-3xl space-y-16", children: faqs.map((category, ci) => /* @__PURE__ */ jsxs10(
      motion5.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx13("h2", { className: "text-xl font-semibold mb-8 text-primary", children: category.category }),
          /* @__PURE__ */ jsx13("div", { className: "space-y-6", children: category.items.map((item, ii) => /* @__PURE__ */ jsxs10(
            motion5.div,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: ii * 0.05 },
              className: "border-b border-border/40 pb-6",
              children: [
                /* @__PURE__ */ jsx13("h3", { className: "font-semibold mb-3", children: item.q }),
                /* @__PURE__ */ jsx13("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.a })
              ]
            },
            ii
          )) })
        ]
      },
      ci
    )) }) }) }),
    /* @__PURE__ */ jsx13("section", { className: "py-20 border-t border-border/30", children: /* @__PURE__ */ jsx13("div", { className: "container", children: /* @__PURE__ */ jsxs10(
      motion5.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 },
        className: "max-w-2xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsx13("h2", { className: "text-2xl font-semibold mb-4", children: "\xBFTienes m\xE1s preguntas?" }),
          /* @__PURE__ */ jsx13("p", { className: "text-muted-foreground mb-8", children: "Postula y me cuentas tu caso directamente." }),
          /* @__PURE__ */ jsx13(Link6, { href: "/postular", children: /* @__PURE__ */ jsxs10(
            Button,
            {
              size: "lg",
              className: "bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base rounded-full",
              children: [
                "Postular a la mentor\xEDa ",
                /* @__PURE__ */ jsx13(ArrowRight7, { className: "ml-2 h-4 w-4" })
              ]
            }
          ) })
        ]
      }
    ) }) })
  ] });
}

// client/src/components/ScrollToTop.tsx
import { useLayoutEffect } from "react";
import { useLocation as useLocation5 } from "wouter";
function ScrollToTop() {
  const [location] = useLocation5();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

// client/src/App.tsx
import { Fragment as Fragment2, jsx as jsx14, jsxs as jsxs11 } from "react/jsx-runtime";
function Router() {
  return /* @__PURE__ */ jsxs11(Fragment2, { children: [
    /* @__PURE__ */ jsx14(ScrollToTop, {}),
    /* @__PURE__ */ jsxs11(Switch, { children: [
      /* @__PURE__ */ jsx14(Route, { path: "/", component: Home2 }),
      /* @__PURE__ */ jsx14(Route, { path: "/mentoria", component: Mentoria }),
      /* @__PURE__ */ jsx14(Route, { path: "/sobre-mi", component: About }),
      /* @__PURE__ */ jsx14(Route, { path: "/postular", component: Postular }),
      /* @__PURE__ */ jsx14(Route, { path: "/faq", component: FAQ }),
      /* @__PURE__ */ jsx14(Route, { path: "/aplicar", children: () => /* @__PURE__ */ jsx14(Redirect, { to: "/postular" }) }),
      /* @__PURE__ */ jsx14(Route, { path: "/metodo", children: () => /* @__PURE__ */ jsx14(Redirect, { to: "/mentoria" }) }),
      /* @__PURE__ */ jsx14(Route, { path: "/con-quien-trabajo", children: () => /* @__PURE__ */ jsx14(Redirect, { to: "/" }) }),
      /* @__PURE__ */ jsx14(Route, { path: "/404", component: NotFound }),
      /* @__PURE__ */ jsx14(Route, { component: NotFound })
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx14(ErrorBoundary_default, { children: /* @__PURE__ */ jsx14(ThemeProvider, { children: /* @__PURE__ */ jsxs11(TooltipProvider, { children: [
    /* @__PURE__ */ jsx14(Toaster, {}),
    /* @__PURE__ */ jsx14(Router, {})
  ] }) }) });
}
var App_default = App;

// scripts/prerender.tsx
import fs from "fs";
import path from "path";

// server/_core/seo.ts
var BASE_URL = "https://sebastianjara.com";
var routeMeta = {
  "/": {
    title: "Sebasti\xE1n Jara \u2014 CMO Fraccionado",
    description: "Sebasti\xE1n Jara: CMO fraccionado para empresas que necesitan direcci\xF3n de marketing senior sin contratar un equipo completo. Chile, LATAM y EE.UU.",
    canonical: `${BASE_URL}/`
  },
  "/mentoria": {
    title: "Mentor\xEDa Ejecutiva 1 a 1 \u2014 Detalle del servicio | Sebasti\xE1n Jara",
    description: "Mentor\xEDa ejecutiva privada para due\xF1os de empresa. Dise\xF1amos tu sistema comercial, automatizaci\xF3n y roadmap para escalar con orden, datos y ejecuci\xF3n.",
    canonical: `${BASE_URL}/mentoria`
  },
  "/sobre-mi": {
    title: "Sobre Sebasti\xE1n Jara | Mentor Ejecutivo y Fundador de GoPoint",
    description: "Founder & CEO de GoPoint. 15+ a\xF1os en marketing digital, SEO, Ads y automatizaci\xF3n. Mentor\xEDa ejecutiva 1 a 1 para due\xF1os de empresa en LATAM y EE.UU.",
    canonical: `${BASE_URL}/sobre-mi`,
    ogType: "profile"
  },
  "/postular": {
    title: "Postular a la Mentor\xEDa Ejecutiva 1 a 1 | Sebasti\xE1n Jara",
    description: "Postula a la mentor\xEDa ejecutiva 1 a 1. Proceso selectivo para due\xF1os de empresa que buscan dise\xF1ar su sistema comercial y escalar con orden.",
    canonical: `${BASE_URL}/postular`
  },
  "/faq": {
    title: "Preguntas frecuentes | Sebasti\xE1n Jara \u2014 Mentor\xEDa Ejecutiva",
    description: "Respuestas a las preguntas m\xE1s comunes sobre la Mentor\xEDa Ejecutiva 1 a 1 de Sebasti\xE1n Jara: qu\xE9 es, para qui\xE9n es, c\xF3mo postular y qu\xE9 resultados esperar.",
    canonical: `${BASE_URL}/faq`
  }
};
function injectSeoMeta(html, url) {
  const cleanUrl = url.split("?")[0].replace(/\/$/, "") || "/";
  const meta = routeMeta[cleanUrl];
  if (!meta) return html;
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${meta.title}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${meta.canonical}"`
  );
  if (meta.ogType) {
    html = html.replace(
      /<meta property="og:type" content="[^"]*"/,
      `<meta property="og:type" content="${meta.ogType}"`
    );
  }
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${meta.title}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${meta.description}"`
  );
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"/,
    `<meta name="twitter:url" content="${meta.canonical}"`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${meta.canonical}"`
  );
  return html;
}

// scripts/prerender.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var routes = ["/", "/mentoria", "/sobre-mi", "/postular", "/faq"];
var distPath = path.resolve("dist/public");
var outDir = path.resolve(distPath, "_prerendered");
var template = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");
fs.mkdirSync(outDir, { recursive: true });
var success = 0;
for (const route of routes) {
  try {
    const rendered = renderToString(
      /* @__PURE__ */ jsx15(Router2, { ssrPath: route, children: /* @__PURE__ */ jsx15(App_default, {}) })
    );
    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${rendered}</div>`
    );
    page = injectSeoMeta(page, route);
    const routeName = route === "/" ? "index" : route.slice(1);
    fs.writeFileSync(path.resolve(outDir, `${routeName}.html`), page);
    success++;
    console.log(`  \u2713 ${route} \u2192 _prerendered/${routeName}.html`);
  } catch (e) {
    console.warn(`  \u2717 ${route} \u2014 ${e.message}`);
  }
}
console.log(`
Pre-rendered ${success}/${routes.length} pages.`);
