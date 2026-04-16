import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { useState } from "react";

const TOOLS_OPTIONS = [
  "Pipedrive",
  "HubSpot",
  "Mailchimp",
  "ActiveCampaign",
  "Monday",
  "Notion",
  "Google Sheets",
  "Discord",
  "Otro",
];

const ROL_OPTIONS = ["Dueño", "Socio", "Director", "Gerente"];

const FACTURACION_OPTIONS = [
  "Menos de $5.000 USD/mes",
  "$5.000 – $20.000 USD/mes",
  "$20.000 – $50.000 USD/mes",
  "$50.000 – $100.000 USD/mes",
  "Más de $100.000 USD/mes",
];

export default function Postular() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    empresa: "",
    rol: "",
    facturacion: "",
    desafio: "",
    herramientas: [] as string[],
    objetivo90: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const inputClasses =
    "w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 min-h-[48px]";

  const handleToolToggle = (tool: string) => {
    setFormData((prev) => ({
      ...prev,
      herramientas: prev.herramientas.includes(tool)
        ? prev.herramientas.filter((t) => t !== tool)
        : [...prev.herramientas, tool],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensaje = `Hola Seba, quiero explorar trabajar contigo como CMO fraccionado.

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*WhatsApp:* ${formData.whatsapp}
*Empresa:* ${formData.empresa}
*Rol:* ${formData.rol}
*Facturación mensual:* ${formData.facturacion}
*Principal desafío:* ${formData.desafio}
*Herramientas actuales:* ${formData.herramientas.join(", ") || "No especificado"}
*Objetivo en 90 días:* ${formData.objetivo90}`;

    const url = `https://wa.me/56958585362?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO
        title="Trabajemos juntos | Sebastián Jara, CMO Fraccionado"
        description="Cuéntame sobre tu empresa. Proceso de postulación breve para evaluar si el rol de CMO fraccionado encaja con tu momento y equipo."
        keywords={["CMO fraccionado", "contratar CMO", "fractional CMO", "dirección de marketing", "Sebastián Jara"]}
      />

      {/* Hero */}
      <section className="py-14 md:py-24">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-primary mb-5">
              Trabajemos juntos
            </p>
            <h1 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6">
              Cuéntame sobre tu empresa.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-2">
              Reviso cada caso personalmente y te respondo si encaja.
            </p>
            <p className="text-sm text-muted-foreground">
              Trabajo con pocos clientes a la vez.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario */}
      <section className="pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            {submitted ? (
              <div className="glass-panel rounded-xl p-10 text-center">
                <h2 className="text-2xl font-semibold mb-4">Mensaje enviado</h2>
                <p className="text-muted-foreground">
                  Se abrió WhatsApp con tu mensaje. Si no lo enviaste, vuelve
                  y reenvíalo, reviso cada caso personalmente.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    className={inputClasses}
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="tu@empresa.com"
                    className={inputClasses}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+56 9 XXXX XXXX"
                    className={inputClasses}
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label className="block text-sm font-medium mb-2">Empresa</label>
                  <input
                    type="text"
                    required
                    placeholder="Nombre de tu empresa"
                    className={inputClasses}
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  />
                </div>

                {/* Rol */}
                <div>
                  <label className="block text-sm font-medium mb-2">Rol</label>
                  <select
                    required
                    className={inputClasses}
                    value={formData.rol}
                    onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
                  >
                    <option value="">Selecciona tu rol</option>
                    {ROL_OPTIONS.map((rol) => (
                      <option key={rol} value={rol}>{rol}</option>
                    ))}
                  </select>
                </div>

                {/* Facturación */}
                <div>
                  <label className="block text-sm font-medium mb-2">Facturación mensual aproximada</label>
                  <select
                    required
                    className={inputClasses}
                    value={formData.facturacion}
                    onChange={(e) => setFormData({ ...formData, facturacion: e.target.value })}
                  >
                    <option value="">Selecciona un rango</option>
                    {FACTURACION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Principal desafío */}
                <div>
                  <label className="block text-sm font-medium mb-2">Principal desafío</label>
                  <textarea
                    required
                    placeholder="¿Cuál es el mayor desafío de tu empresa hoy?"
                    rows={3}
                    className={inputClasses + " resize-none"}
                    value={formData.desafio}
                    onChange={(e) => setFormData({ ...formData, desafio: e.target.value })}
                  />
                </div>

                {/* Herramientas actuales */}
                <div>
                  <label className="block text-sm font-medium mb-3">Herramientas actuales</label>
                  <div className="flex flex-wrap gap-2">
                    {TOOLS_OPTIONS.map((tool) => (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => handleToolToggle(tool)}
                        className={`min-h-[44px] px-4 py-2 rounded-full text-sm border transition-colors ${
                          formData.herramientas.includes(tool)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50"
                        }`}
                      >
                        {tool}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Objetivo en 90 días */}
                <div>
                  <label className="block text-sm font-medium mb-2">Objetivo en 90 días</label>
                  <textarea
                    required
                    placeholder="¿Qué quieres lograr en los próximos 90 días?"
                    rows={3}
                    className={inputClasses + " resize-none"}
                    value={formData.objetivo90}
                    onChange={(e) => setFormData({ ...formData, objetivo90: e.target.value })}
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base rounded-full w-full sm:w-auto"
                  >
                    Hablemos por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
