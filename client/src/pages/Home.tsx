import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SEO from "@/components/SEO";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const itemFade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Sebastián Jara — CMO Fraccionado"
        description="CMO fraccionado para empresas que necesitan dirección de marketing senior sin contratar un equipo completo. Chile, LATAM y EE.UU."
        keywords={[
          "CMO fraccionado",
          "fractional CMO",
          "dirección de marketing",
          "consultor de marketing",
          "Sebastián Jara",
          "GoPoint",
          "marketing senior",
          "escalar empresa",
        ]}
      />

      {/* HERO — Marca personal */}
      <section className="relative overflow-hidden">
        {/* Ambient gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 85% 15%, oklch(0.65 0.22 40 / 0.18), transparent 45%), radial-gradient(circle at 10% 90%, oklch(0.65 0.22 40 / 0.10), transparent 40%)",
          }}
        />

        <div className="container pt-14 pb-16 md:pt-24 md:pb-24">
          <div className="grid md:grid-cols-[1.35fr_1fr] items-center gap-10 md:gap-16">
            {/* Texto */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="order-2 md:order-1"
            >
              <p className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
                <span className="h-px w-6 bg-primary" />
                CMO Fraccionado
              </p>

              <h1 className="font-logo uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(2.75rem,10vw,6.75rem)] mb-6">
                Sebastián
                <br />
                <span className="text-primary">Jara</span>
              </h1>

              <p className="text-base md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
                Dirección de marketing senior para tu empresa{" "}
                <span className="text-foreground">
                  sin contratar un equipo completo
                </span>
                . Estrategia, gestión y ejecución desde adentro.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/postular" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base rounded-full w-full sm:w-auto"
                  >
                    Trabajemos juntos <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/mentoria" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="h-14 px-6 text-base rounded-full w-full sm:w-auto hover:bg-foreground/5"
                  >
                    Cómo trabajo
                  </Button>
                </Link>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                Chile · LATAM · EE.UU. — Trabajo con pocos clientes a la vez.
              </p>
            </motion.div>

            {/* Retrato */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="order-1 md:order-2 flex justify-center md:justify-end"
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 md:-inset-6 rounded-full bg-primary/10 blur-3xl"
                />
                <img
                  src="/images/sebastian-jara.webp"
                  alt="Retrato de Sebastián Jara"
                  width="320"
                  height="320"
                  loading="eager"
                  className="relative w-52 h-52 md:w-80 md:h-80 rounded-full object-cover border border-border/50 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUÉ HAGO */}
      <section className="py-16 md:py-24 border-t border-border/30">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">
              Qué hago
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-8">
              Me sumo a tu empresa como{" "}
              <span className="text-primary">CMO</span>, sin el costo
              de uno interno.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <p className="text-muted-foreground leading-relaxed">
                No soy agencia. No soy freelance. No soy consultor de un
                workshop. Asumo la dirección de tu marketing como si fuera
                parte de tu organización — con la experiencia de un CMO
                senior, por una fracción del costo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Defino la estrategia, priorizo, coordino equipos internos o
                proveedores, mido y ajusto. El foco es uno: que el marketing
                deje de ser una suma de tácticas y se convierta en un sistema
                que escala.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="py-16 md:py-24 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 text-center">
              Para quién
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-12 text-center">
              Esto encaja si…
            </h2>
          </motion.div>

          <motion.ul
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-4"
          >
            {[
              "Tu empresa factura, pero el marketing depende de ti o de un junior sin dirección.",
              "Contrataste agencia y sentiste que faltaba alguien que decidiera por tu lado.",
              "Necesitas visión estratégica, no solo tácticas sueltas.",
              "Buscas resultados medibles y un sistema que no colapse si tú te vas una semana.",
              "Prefieres pagar por una cabeza senior antes que por un equipo completo.",
            ].map((text, i) => (
              <motion.li
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
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* CÓMO TRABAJO */}
      <section className="py-16 md:py-24 border-t border-border/30">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4 text-center">
              Cómo trabajo
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 text-center">
              Tres pilares, un sistema.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                n: "01",
                title: "Estrategia",
                body:
                  "Diagnóstico, mercado, posicionamiento y plan. Qué hacer, qué dejar de hacer, en qué orden.",
              },
              {
                n: "02",
                title: "Gestión",
                body:
                  "Coordinación de equipos internos y proveedores. Procesos, KPIs y rituales de ejecución.",
              },
              {
                n: "03",
                title: "Ejecución",
                body:
                  "Campañas, contenido, automatización e IA aplicada. Salir con algo cada semana, medir, iterar.",
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

      {/* SOBRE MÍ — brief */}
      <section className="py-16 md:py-24 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Quién hay detrás
            </p>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-8">
              15+ años diseñando sistemas de crecimiento.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Founder &amp; CEO de{" "}
              <a
                href="https://gopointagency.com"
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
              >
                GoPoint Agency
              </a>
              . He liderado marketing para empresas en LATAM y Estados
              Unidos — SEO, Ads, automatización, IA aplicada y sistemas
              comerciales. Trabajo con pocos clientes a la vez para dar
              profundidad, no volumen.
            </p>
            <div className="mt-8">
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Conóceme más <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-28 border-t border-border/30 relative overflow-hidden">
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
              ¿Necesitas un CMO?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
              Cuéntame sobre tu empresa y el momento en que estás.
              Revisaré si encaja y te respondo personalmente.
            </p>
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
