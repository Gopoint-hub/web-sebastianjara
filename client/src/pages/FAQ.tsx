import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";

const faqs = [
  {
    category: "Sobre el servicio",
    items: [
      {
        q: "¿Qué es un CMO fraccionado?",
        a: "Un CMO fraccionado es un director de marketing senior que se integra a tu empresa a tiempo parcial. Toma las decisiones, dirige al equipo y coordina a los proveedores — igual que un CMO interno — pero por una fracción del costo de contratar uno full-time. Es el formato que uso con mis clientes.",
      },
      {
        q: "¿Y qué es eso de 'consultor de IA & Marketing'?",
        a: "Es cómo me describo profesionalmente: opero como CMO fraccionado y mi diferencial es aplicar IA al marketing donde entrega ventaja real — automatización, agentes, contenido, análisis. No uso IA por moda; la uso cuando mueve la aguja.",
      },
      {
        q: "¿En qué se diferencia de una agencia?",
        a: "Una agencia ejecuta lo que le pides. Un CMO fraccionado decide qué pedir y por qué. Soy quien define estrategia, prioridades y KPIs. Si ya tienes una agencia, puedo coordinarla; si no, te ayudo a elegirla o montar el equipo.",
      },
      {
        q: "¿En qué se diferencia de un consultor tradicional?",
        a: "Un consultor entrega un informe y se va. Yo me sumo a la operación diaria — decido, dirijo, mido y ajusto semana a semana. Me hago cargo del resultado, no solo del diagnóstico.",
      },
      {
        q: "¿Cómo usas la IA en marketing?",
        a: "Donde tiene impacto real: automatización de workflows, generación y curaduría de contenido, agentes para atención y cotización, análisis y segmentación, personalización de campañas. Nunca como sustituto del criterio estratégico — como multiplicador de velocidad y escala.",
      },
    ],
  },
  {
    category: "Para quién es",
    items: [
      {
        q: "¿Para quién es este servicio?",
        a: "Para dueños, CEOs o socios de empresas que ya facturan y necesitan dirección de marketing senior — pero todavía no justifican contratar un CMO full-time, o prefieren ganar velocidad trayendo a alguien con experiencia y criterio de IA desde adentro.",
      },
      {
        q: "¿Para quién NO es?",
        a: "No es para startups pre-revenue, para emprendedores que buscan un curso, ni para empresas que quieren delegar marketing completo a un tercero sin involucramiento. Tampoco es para quienes buscan tactical de bajo costo: soy una cabeza senior, y ese es el valor.",
      },
      {
        q: "¿Funciona para cualquier industria?",
        a: "Siempre que haya un proceso comercial activo y demanda en el mercado. He trabajado con empresas de servicios, tecnología, retail, consultoría y más, en Chile, Perú, Colombia, México y EE.UU.",
      },
      {
        q: "¿Necesito tener equipo de marketing ya?",
        a: "No necesariamente. Si lo tienes, lo dirijo. Si no, diseñamos el stack mínimo viable y traemos proveedores donde hace falta. La IA también permite operar más ligero en las primeras etapas.",
      },
    ],
  },
  {
    category: "Proceso y formato",
    items: [
      {
        q: "¿Cómo funciona el proceso para trabajar juntos?",
        a: "Cuatro pasos: (1) Postulas con un formulario breve. (2) Reviso tu caso personalmente y confirmo fit. (3) Hablamos por video para alinear alcance y expectativas. (4) Entro en la operación: audito en las primeras semanas y empiezo a dirigir.",
      },
      {
        q: "¿Por qué hay un proceso de postulación?",
        a: "Porque trabajo con pocos clientes a la vez. Prefiero profundidad sobre volumen. El formulario me permite evaluar si encaja con tu momento y si voy a poder entregar el valor que justifique el costo.",
      },
      {
        q: "¿El servicio es presencial o remoto?",
        a: "Remoto. Eso me permite trabajar con empresas en Chile, Perú, Colombia, México y Estados Unidos sin restricción geográfica. Puedo viajar puntualmente para kick-offs o hitos cuando aporta.",
      },
      {
        q: "¿Cuánto dura el compromiso?",
        a: "Depende del caso, pero rara vez funciona en menos de 3 meses. El primer mes es diagnóstico y plan; desde ahí la dirección se mide en trimestres. Lo conversamos en la llamada de alineación.",
      },
      {
        q: "¿Cómo postulo?",
        a: "Completa el formulario en sebastianjara.com/postular con tu nombre, empresa, rol, facturación mensual aproximada, principal desafío y objetivo en 90 días.",
      },
    ],
  },
  {
    category: "Sobre Sebastián Jara",
    items: [
      {
        q: "¿Quién es Sebastián Jara?",
        a: "Founder & CEO de GoPoint Agency, con 15+ años de experiencia liderando marketing digital, SEO, Ads, sistemas comerciales y automatización con IA. Trabaja con empresas en LATAM y EE.UU. Hoy opera como CMO fraccionado y consultor de IA & Marketing.",
      },
      {
        q: "¿Qué es GoPoint Agency?",
        a: "GoPoint es la agencia de marketing digital y automatización que Sebastián fundó, especializada en sistemas de crecimiento con IA aplicada. También es director de FrutillarHoy y MarketingHoy.com.",
      },
      {
        q: "¿Con qué países trabaja?",
        a: "Trabaja remotamente con empresas en Chile, Perú, Colombia, México y Estados Unidos.",
      },
      {
        q: "¿Dónde puedo seguirlo?",
        a: "En LinkedIn (linkedin.com/in/sebastianjarabravo), YouTube (@sebastianjaracom), TikTok (@sebastianjara.com) y el canal de WhatsApp de sebastianjara.com.",
      },
    ],
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    }))
  ),
};

export default function FAQ() {
  return (
    <Layout>
      <SEO
        title="Preguntas frecuentes | Sebastián Jara — CMO Fraccionado con IA"
        description="Respuestas sobre el servicio de CMO fraccionado con IA aplicada de Sebastián Jara: qué es, para quién, cómo trabaja y cómo postular."
        keywords={[
          "preguntas frecuentes CMO fraccionado",
          "FAQ consultor de IA y marketing",
          "cómo postular Sebastián Jara",
          "CMO fraccionado Chile",
          "consultoría marketing LATAM",
        ]}
        canonical="https://sebastianjara.com/faq"
      />
      <StructuredData data={FAQ_SCHEMA} />

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
              Preguntas frecuentes
            </p>
            <h1 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Las respuestas que casi todos me hacen antes de postular.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Todo lo que necesitas saber sobre el servicio de CMO
              fraccionado con IA aplicada y cómo trabajar conmigo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-14 md:pb-20">
        <div className="container">
          <div className="max-w-3xl space-y-14 md:space-y-16">
            {faqs.map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-xl md:text-2xl mb-8 text-primary">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: ii * 0.05 }}
                      className="border-b border-border/40 pb-6"
                    >
                      <h3 className="font-semibold mb-3">{item.q}</h3>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-4">
              ¿Tienes más preguntas?
            </h2>
            <p className="text-muted-foreground mb-8">
              Postula y me cuentas tu caso directamente.
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
