import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <Layout>
      <SEO
        title="Sobre Sebastián Jara — Consultor de IA & Marketing, CMO Fraccionado"
        description="Founder & CEO de GoPoint. 15+ años en marketing digital, SEO, Ads, automatización e IA aplicada. CMO fraccionado para empresas en LATAM y EE.UU."
        keywords={[
          "Sebastián Jara",
          "consultor de IA y marketing",
          "CMO fraccionado",
          "GoPoint Agency",
          "marketing con IA",
          "automatización IA",
        ]}
        type="profile"
      />

      {/* Hero with Photo */}
      <section className="py-14 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:order-2"
            >
              <div className="relative max-w-md mx-auto md:mx-0 md:ml-auto">
                <img
                  src="/images/sebastian-jara.webp"
                  alt="Sebastián Jara — CMO Fraccionado y consultor de IA & Marketing"
                  className="w-full rounded-2xl"
                  width="1068"
                  height="1346"
                  fetchPriority="high"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="order-2 md:order-1"
            >
              <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-primary mb-5">
                Consultor de IA &amp; Marketing
              </p>
              <h1 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-8">
                Sebastián Jara
              </h1>
              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founder &amp; CEO de GoPoint. 15+ años liderando marketing
                  digital para empresas en LATAM y Estados Unidos — SEO,
                  Ads, sistemas comerciales, automatización y agentes con
                  IA.
                </p>
                <p>
                  Hoy opero como{" "}
                  <span className="text-foreground">CMO fraccionado</span>:
                  me integro a empresas que necesitan dirección de marketing
                  senior con IA aplicada, sin el costo de contratar un
                  equipo completo.
                </p>
                <p>
                  Trabajo con pocos clientes a la vez. Prefiero profundidad
                  sobre volumen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Trayectoria
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-10">
              Proyectos que lidero.
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/40 pl-6">
                <h3 className="font-semibold">GoPoint Agency</h3>
                <p className="text-sm text-muted-foreground">
                  Founder &amp; CEO — Agencia de marketing digital,
                  automatización e IA aplicada.
                </p>
              </div>
              <div className="border-l-2 border-border/50 pl-6">
                <h3 className="font-semibold">FrutillarHoy</h3>
                <p className="text-sm text-muted-foreground">
                  Director — Portal de contenido local.
                </p>
              </div>
              <div className="border-l-2 border-border/50 pl-6">
                <h3 className="font-semibold">MarketingHoy.com</h3>
                <p className="text-sm text-muted-foreground">
                  Director — Medio de marketing digital en español.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Expertise
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-10">
              Áreas donde opero.
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Estrategia de marketing y posicionamiento",
                "SEO, Ads y adquisición de tráfico",
                "Automatización de procesos con IA",
                "Agentes y asistentes con LLMs",
                "CRM, pipeline y gestión comercial",
                "Dashboard, métricas y análisis con IA",
                "Contenido y newsletter con IA",
                "Integración y arquitectura de stack",
              ].map((area, i) => (
                <div key={i} className="glass-panel rounded-lg p-4">
                  <p className="text-sm text-foreground/90">{area}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-8">
              Si quieres trabajar conmigo, conversemos.
            </h2>
            <Link href="/postular" className="inline-block w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-10 text-base rounded-full w-full sm:w-auto"
              >
                Trabajemos juntos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
