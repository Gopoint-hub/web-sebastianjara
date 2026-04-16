import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const itemFade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Mentoria() {
  return (
    <Layout>
      <SEO
        title="Cómo trabajo, CMO Fraccionado con IA aplicada | Sebastián Jara"
        description="Cómo opero como CMO fraccionado: dirección de marketing senior con IA aplicada, integrado a tu equipo. Estrategia, gestión y ejecución desde adentro de tu empresa."
        keywords={[
          "cómo trabaja CMO fraccionado",
          "consultor de IA y marketing",
          "dirección de marketing",
          "marketing con IA",
          "fractional CMO",
          "Sebastián Jara",
        ]}
      />

      {/* Hero */}
      <section className="py-14 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-primary mb-5">
              Cómo trabajo
            </p>
            <h1 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Me integro a tu empresa como{" "}
              <span className="text-primary">CMO fraccionado</span> con IA
              aplicada.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">
              No entrego un informe y me voy. Me sumo al equipo, defino
              rumbo, priorizo y hago que las cosas salgan, con la IA como
              palanca de ejecución donde aporta valor real.
            </p>
            <p className="text-sm text-muted-foreground">
              Trabajo con pocos clientes a la vez.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 DIMENSIONES */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Las tres dimensiones
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-12">
              Estrategia, gestión y ejecución. Sin separarlas.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                n: "01",
                title: "Estrategia",
                body:
                  "Diagnóstico del estado actual, mercado y competencia. Posicionamiento, propuesta de valor y plan comercial. Qué hacer, qué dejar de hacer, en qué orden, y dónde la IA entrega ventaja.",
              },
              {
                n: "02",
                title: "Gestión",
                body:
                  "Dirección de equipos internos y proveedores. Rituales de ejecución, KPIs, pipeline comercial y dashboard. Me integro como si fuera tu CMO interno.",
              },
              {
                n: "03",
                title: "IA aplicada",
                body:
                  "Contenido, automatización de procesos, agentes y análisis con IA. Aplicada donde mueve la aguja real, velocidad y escala sin perder criterio estratégico.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="font-display text-5xl md:text-6xl text-primary/30 mb-4">
                  {item.n}
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ OPERO */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Qué opero
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-10">
              Las áreas que tomo bajo dirección.
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "Sistema comercial end-to-end",
                desc:
                  "Diseño y gestión del flujo captación → lead → cierre. Estructura que funcione sin depender de la improvisación.",
              },
              {
                title: "Adquisición: SEO, Ads y contenido",
                desc:
                  "Dirección de canales pagos y orgánicos. Asignación de presupuesto, coordinación de proveedores y calibración con IA cuando acelera ejecución.",
              },
              {
                title: "Pipeline y gestión de leads",
                desc:
                  "CRM, seguimiento, clasificación y cierre. Reglas claras para que ninguna oportunidad se caiga por el camino.",
              },
              {
                title: "Automatización y agentes con IA",
                desc:
                  "Respuestas rápidas, cotizaciones asistidas, workflows de operación, agentes de atención o investigación. IA como infraestructura, no como gimmick.",
              },
              {
                title: "Dashboard y métricas",
                desc:
                  "Ventas, leads, actividad y resultados en un solo lugar. Decisiones basadas en datos, no en intuición.",
              },
              {
                title: "Retención y ciclo de vida",
                desc:
                  "Newsletter, comunicación recurrente, reactivación y referidos. Monetizar la base que ya tienes.",
              },
              {
                title: "Stack de herramientas",
                desc:
                  "CRM, email, automatización, gestión, documentación. Todo conectado y funcionando como un sistema.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border-l-2 border-primary/30 pl-6"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ OBTIENES */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Qué obtienes
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-10">
              El resultado de tenerme dentro.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            {[
              "Una cabeza senior tomando decisiones de marketing todos los días.",
              "Un plan comercial priorizado, con foco y criterio ejecutivo.",
              "Equipo interno y proveedores coordinados contra los mismos KPIs.",
              "IA y automatización aplicadas donde dan ventaja real.",
              "Dashboard con ventas, leads y actividad, decisiones con datos.",
              "Un sistema que no colapsa si faltas una semana.",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={itemFade}
                className="flex items-start gap-4 py-2"
              >
                <div className="mt-1.5 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Cómo entramos
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-12">
              Del primer contacto al primer mes operando.
            </h2>
          </motion.div>

          <div className="space-y-10">
            {[
              {
                step: "01",
                title: "Primer contacto y fit",
                desc:
                  "Completas un formulario con tu empresa, momento y desafío. Reviso cada caso personalmente y te respondo si encaja para trabajar juntos.",
              },
              {
                step: "02",
                title: "Alineación",
                desc:
                  "Hablamos por video. Defino alcance, tiempo mínimo, expectativas, equipos con los que interactuaré y cómo se verá mi integración.",
              },
              {
                step: "03",
                title: "Diagnóstico y plan (semana 1-2)",
                desc:
                  "Audito el estado actual, canales, herramientas, equipo, datos, y entrego un plan de 90 días priorizado por impacto.",
              },
              {
                step: "04",
                title: "Ejecución y dirección (mes 1 en adelante)",
                desc:
                  "Entro en la operación diaria: coordino, decido, aplico IA donde corresponde, mido y ajusto. Rituales semanales de seguimiento.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <span className="font-display text-3xl md:text-4xl text-primary/40 flex-shrink-0 leading-none">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border/30 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, oklch(0.65 0.22 40 / 0.12), transparent 60%)",
          }}
        />
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              ¿Encaja con tu momento?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
              Cuéntame sobre tu empresa. Si la dirección de marketing con
              IA encaja, te propongo cómo entrar.
            </p>
            <Link href="/trabajemos" className="inline-block w-full sm:w-auto">
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
