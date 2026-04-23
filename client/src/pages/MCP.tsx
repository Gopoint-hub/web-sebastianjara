import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  Calendar,
  Mail,
  Database,
  BarChart3,
  FileText,
  MessageSquare,
  Zap,
  Lock,
  Workflow,
} from "lucide-react";
import SEO from "@/components/SEO";

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const itemFade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function MCP() {
  return (
    <Layout>
      <SEO
        title="Qué es un MCP y por qué cambia todo, conectar Claude o ChatGPT a tu negocio | Sebastián Jara"
        description="Guía clara sobre qué es un MCP (Model Context Protocol), cómo conectarlo a Claude o ChatGPT, y qué puede hacer por tu empresa. Ejemplos prácticos, casos de uso y cómo implementarlo."
        keywords={[
          "MCP",
          "Model Context Protocol",
          "conectar Claude a mi empresa",
          "conectar ChatGPT a mi empresa",
          "MCP Claude",
          "MCP ChatGPT",
          "agentes de IA con acceso a datos",
          "automatización con IA",
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
              Model Context Protocol
            </p>
            <h1 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Un <span className="text-primary">MCP</span> convierte a
              Claude o ChatGPT en tu operador de confianza.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">
              Deja de copiar y pegar información entre tu IA y tus herramientas.
              Un MCP conecta tu cuenta de Claude o ChatGPT con tus sistemas
              reales, calendario, correo, CRM, base de datos, analytics, y le da
              permiso para leer, escribir y ejecutar tareas.
            </p>
            <p className="text-sm text-muted-foreground">
              Explicado para quien dirige el negocio, no para quien escribe el
              código.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Qué es un MCP
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-8">
              Es el puente entre tu IA y tus sistemas.
            </h2>
            <div className="space-y-5 text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
                MCP significa Model Context Protocol. Es un estándar abierto que
                permite a modelos como Claude o ChatGPT conectarse, de forma
                segura, a tus aplicaciones de trabajo.
              </p>
              <p>
                Antes de los MCPs, tu IA vivía encerrada en la ventana del chat.
                Le pegabas un texto, te respondía, y todo lo demás quedaba
                manual. Con un MCP conectado, la IA ya no depende de lo que tú
                le pegas, puede consultar tu calendario, revisar tus correos,
                leer tu CRM, actualizar una tabla en Notion o lanzar un reporte
                en tu cuenta de Google Ads por sí misma.
              </p>
              <p>
                Cambia completamente la ecuación. Deja de ser un chatbot y
                empieza a ser un operador con contexto real de tu negocio.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ANTES Y DESPUÉS */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              El cambio concreto
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-12">
              Antes copiabas y pegabas. Ahora delegas.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="border border-border/50 rounded-2xl p-6 md:p-8"
            >
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Sin MCP
              </p>
              <h3 className="font-display text-xl md:text-2xl mb-4">
                Chat desconectado del negocio
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <li>Copias datos manualmente al chat.</li>
                <li>Pegas pantallazos para dar contexto.</li>
                <li>La IA olvida todo al cerrar la ventana.</li>
                <li>No puede ejecutar nada, solo sugerir.</li>
                <li>Cada tarea requiere tu intervención manual.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-2 border-primary/40 rounded-2xl p-6 md:p-8 bg-primary/[0.03]"
            >
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-primary mb-4">
                Con MCP
              </p>
              <h3 className="font-display text-xl md:text-2xl mb-4">
                Operador con acceso real
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-foreground/90 leading-relaxed">
                <li>Consulta tus sistemas en tiempo real.</li>
                <li>Accede con tus mismos permisos, seguro.</li>
                <li>Ejecuta tareas sin pedirte cada paso.</li>
                <li>Cruza datos de múltiples fuentes en segundos.</li>
                <li>Te libera de lo repetitivo, te devuelve criterio.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Qué puedes hacer
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-12">
              Ejemplos reales de lo que se desbloquea.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                icon: Calendar,
                title: "Agenda inteligente",
                body:
                  "Tu IA lee tu calendario, agenda reuniones con clientes, mueve bloqueos, evita solapamientos y coordina con tu equipo sin que tú escribas un solo mail.",
              },
              {
                icon: Mail,
                title: "Gestión de bandeja",
                body:
                  "Revisa correos pendientes, redacta respuestas con tu tono, clasifica lo urgente y te deja un resumen diario con lo que realmente importa.",
              },
              {
                icon: BarChart3,
                title: "Reportes on demand",
                body:
                  "Consulta Google Ads, Meta Ads, Analytics o tu sistema de facturación, y genera un informe semanal con insights accionables, sin analistas intermedios.",
              },
              {
                icon: Database,
                title: "CRM vivo",
                body:
                  "Actualiza contactos, registra conversaciones, crea tareas de seguimiento y te alerta de oportunidades que se están enfriando en tu pipeline.",
              },
              {
                icon: FileText,
                title: "Documentación que se escribe sola",
                body:
                  "Extrae información de Drive, Notion o tu wiki interna, y genera propuestas, SOPs o minutas con datos reales, no con plantillas vacías.",
              },
              {
                icon: MessageSquare,
                title: "Atención en WhatsApp o Slack",
                body:
                  "Responde consultas de clientes o del equipo consultando tu base de conocimiento, ejecuta acciones y escala a una persona solo cuando realmente aporta.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="border border-border/50 rounded-2xl p-6 md:p-7 hover:border-primary/40 transition-colors"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POR QUÉ IMPORTA */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Por qué importa
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-10">
              Por qué un MCP es una decisión de negocio, no técnica.
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
              "Reduces tareas repetitivas sin contratar más personas, escalas operación con el equipo que ya tienes.",
              "Tus decisiones dejan de depender de reportes con semanas de desfase, tu IA consulta datos frescos cuando los necesitas.",
              "Te liberas de la fricción de abrir cinco pestañas para responder una pregunta simple sobre tu negocio.",
              "Mantienes el control, los MCPs usan tus credenciales y permisos, no hay datos saliendo a sistemas opacos.",
              "Te posicionas por delante de la mayoría, el 90% de las empresas todavía usa la IA como un chat bonito.",
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

      {/* CÓMO FUNCIONA */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Cómo funciona
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-12">
              Tres piezas, una conversación.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                n: "01",
                title: "Tu modelo",
                body:
                  "Claude o ChatGPT, la interfaz donde conversas y das instrucciones en lenguaje natural.",
              },
              {
                icon: Workflow,
                n: "02",
                title: "El servidor MCP",
                body:
                  "Un puente que traduce lo que pides a acciones concretas sobre cada herramienta conectada.",
              },
              {
                icon: Database,
                n: "03",
                title: "Tus sistemas",
                body:
                  "Calendario, correo, CRM, base de datos, analytics, lo que ya usas en tu operación diaria.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="font-display text-4xl text-primary/30 mb-3">
                    {item.n}
                  </div>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUÉ NO ES */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Qué no es un MCP
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-10">
              Para que no te vendan humo.
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: "No es un chatbot con esteroides",
                desc:
                  "Un chatbot solo responde. Un MCP ejecuta. Son categorías distintas, no versiones mejoradas de lo mismo.",
              },
              {
                title: "No es magia sin criterio",
                desc:
                  "Conectar un MCP sin definir qué debe hacer, con qué reglas y con qué datos, no automatiza nada. Solo amplifica el desorden que ya tienes.",
              },
              {
                title: "No reemplaza la estrategia",
                desc:
                  "Un MCP ejecuta más rápido lo que decides hacer. Si la decisión es mala, ahora la ejecuta mal a escala. La dirección sigue siendo tuya.",
              },
              {
                title: "No es una solución cerrada",
                desc:
                  "Es un estándar abierto. Puedes conectar los MCPs que ya existen, como Google Calendar, Gmail, Slack, o construir uno a medida para tu propio sistema.",
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

      {/* SEGURIDAD */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-5"
          >
            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-3">
                Seguridad
              </p>
              <h2 className="font-display text-2xl md:text-3xl leading-tight mb-5">
                Tus datos no se filtran.
              </h2>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-4">
                Los MCPs se conectan con permisos granulares. Defines qué puede
                leer, qué puede escribir y qué puede ejecutar cada servidor.
                Puedes auditar cada acción, revocar el acceso en un clic y
                mantener todo dentro de tu infraestructura si es crítico.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La seguridad depende de cómo se implementa. Un MCP mal
                configurado es un riesgo, uno bien implementado es más seguro
                que dejar a personas copiando información manualmente entre
                sistemas.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMPLEMENTACIÓN */}
      <section className="py-14 md:py-20 border-t border-border/30">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4">
              Cómo se implementa
            </p>
            <h2 className="font-display text-2xl md:text-4xl leading-tight mb-12">
              De la idea a la IA operando en tu empresa.
            </h2>
          </motion.div>

          <div className="space-y-10">
            {[
              {
                step: "01",
                title: "Mapeo de procesos",
                desc:
                  "Identificamos qué tareas repetitivas consumen tiempo en tu operación y cuáles de verdad ganan con automatización. No todo se justifica conectar.",
              },
              {
                step: "02",
                title: "Selección de herramientas",
                desc:
                  "Revisamos tu stack actual, CRM, calendario, analytics, bases de datos, y definimos qué MCPs estándar usamos y qué partes requieren uno a medida.",
              },
              {
                step: "03",
                title: "Configuración y permisos",
                desc:
                  "Instalamos los MCPs en tu cuenta de Claude o ChatGPT con los permisos justos. Nada más, nada menos. Seguridad por defecto.",
              },
              {
                step: "04",
                title: "Prompts y reglas de negocio",
                desc:
                  "Documentamos cómo debe comportarse la IA, qué decisiones puede tomar sola, qué debe confirmar y cómo reportar lo que ejecuta.",
              },
              {
                step: "05",
                title: "Prueba, ajuste y adopción",
                desc:
                  "Operamos en paralelo unas semanas, medimos tiempos, errores y calidad, y ajustamos hasta que el equipo confía y delega de verdad.",
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
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 mb-6">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              ¿Quieres conectar tu IA a tu negocio?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
              Si tienes procesos repetitivos, datos dispersos y una IA que solo
              conversa, estás dejando valor sobre la mesa. Conversemos y te
              muestro por dónde empezar.
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
