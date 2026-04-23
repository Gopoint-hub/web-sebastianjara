import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "@/App";
import fs from "fs";
import path from "path";
import { injectSeoMeta } from "../server/_core/seo";

const routes = [
  "/",
  "/mentoria",
  "/sobre-mi",
  "/trabajemos",
  "/preguntas",
  "/mcp",
];

const distPath = path.resolve("dist/public");
const outDir = path.resolve(distPath, "_prerendered");
const template = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");

fs.mkdirSync(outDir, { recursive: true });

let success = 0;

for (const route of routes) {
  try {
    const rendered = renderToString(
      <Router ssrPath={route}>
        <App />
      </Router>
    );

    let page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${rendered}</div>`
    );

    page = injectSeoMeta(page, route);

    const routeName = route === "/" ? "index" : route.slice(1);
    fs.writeFileSync(path.resolve(outDir, `${routeName}.html`), page);
    success++;
    console.log(`  ✓ ${route} → _prerendered/${routeName}.html`);
  } catch (e: any) {
    console.warn(`  ✗ ${route}, ${e.message}`);
  }
}

console.log(`\nPre-rendered ${success}/${routes.length} pages.`);
