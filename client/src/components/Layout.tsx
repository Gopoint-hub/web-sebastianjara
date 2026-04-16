import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

const WHATSAPP_CHANNEL_URL =
  "https://whatsapp.com/channel/0029Vb5wwAFJZg48RGccvJ0x";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Cómo trabajo", href: "/mentoria" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Preguntas", href: "/preguntas" },
  ];

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
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

  // Close the menu automatically on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Skip to content, accessibility + SEO */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
      >
        Saltar al contenido
      </a>

      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity -ml-1 px-1 py-2"
            aria-label="Sebastián Jara, Inicio"
          >
            <img
              src="/images/logo-dark.webp"
              alt="Sebastián Jara"
              className="h-7 md:h-8 w-auto"
              width="88"
              height="32"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={cn(
                    "text-sm font-medium hover:text-foreground transition-colors cursor-pointer",
                    location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}

            <Link href="/trabajemos">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-5 h-10"
              >
                Trabajemos
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle, min 44px touch target */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden -mr-2 inline-flex items-center justify-center h-11 w-11 rounded-md text-foreground hover:bg-foreground/5 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-background md:hidden flex flex-col"
          style={{
            paddingTop: "calc(4rem + env(safe-area-inset-top))",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <nav className="flex-1 overflow-y-auto px-6 pt-8 pb-6">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span
                      className={cn(
                        "block py-4 text-2xl font-display border-b border-border/50 cursor-pointer transition-colors",
                        location === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 pb-8 pt-4 border-t border-border/50">
            <Link href="/trabajemos" className="block">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 text-base rounded-full w-full"
              >
                Trabajemos juntos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-1 pt-16 md:pt-20">
        <Breadcrumbs />
        {children}
      </main>

      {/* Footer */}
      <footer
        className="border-t border-border/50 py-10 md:py-12"
        style={{ paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-6">
            <div>
              <img
                src="/images/logo-dark.webp"
                alt="Sebastián Jara"
                className="h-6 w-auto mb-4 opacity-60"
                width="66"
                height="24"
                loading="lazy"
              />
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Sebastián Jara · CMO Fraccionado
              </p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <a
                href="https://www.youtube.com/@sebastianjaracom"
                target="_blank"
                rel="noreferrer me"
                className="hover:text-foreground transition-colors py-1"
              >
                YouTube
              </a>
              <a
                href="https://www.tiktok.com/@sebastianjara.com"
                target="_blank"
                rel="noreferrer me"
                className="hover:text-foreground transition-colors py-1"
              >
                TikTok
              </a>
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors py-1"
              >
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/sebastianjarabravo/"
                target="_blank"
                rel="noreferrer me"
                className="hover:text-foreground transition-colors py-1"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
