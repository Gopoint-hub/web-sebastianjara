import { Link, useLocation } from "wouter";
import StructuredData from "./StructuredData";

const ROUTE_LABELS: Record<string, string> = {
  "/": "Inicio",
  "/mentoria": "Cómo trabajo",
  "/sobre-mi": "Sobre mí",
  "/trabajemos": "Trabajemos",
  "/preguntas": "Preguntas frecuentes",
};

export default function Breadcrumbs() {
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
        "item": "https://sebastianjara.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": label,
        "item": `https://sebastianjara.com${location}`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={schema} />
      <nav aria-label="Breadcrumb" className="container pt-4 pb-0">
        <ol className="flex items-center gap-2 text-xs text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Inicio
            </Link>
          </li>
          <li aria-hidden="true" className="select-none">/</li>
          <li>
            <span className="text-foreground font-medium">{label}</span>
          </li>
        </ol>
      </nav>
    </>
  );
}
