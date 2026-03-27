const pillars = [
  {
    number: "01",
    tag: "diseño",
    title: "Planificación y diseño",
    titleAccent: "UX/UI",
    subtitle: "Figma",
    items: [
      {
        label: "Arquitectura de Información",
        desc: "Estructuración de secciones para guiar al usuario hacia la acción deseada (CTA).",
      },
      {
        label: "Maquetado (wireframing)",
        desc: "Estructura visual de la información y navegación a través del sitio.",
      },
      {
        label: "Prototipado de alta fidelidad",
        desc: "Diseño visual personalizado aplicando la identidad de marca (colores, tipografía y logo).",
      },
      {
        label: "UX/UI",
        desc: "Diseño de la experiencia e interfaz de usuario",
      },
      {
        label: "Diseño Responsivo",
        desc: "Optimización para que la experiencia sea fluida en celulares, tablets y computadoras.",
      },
    ],
  },
  {
    number: "02",
    tag: "desarrollo",
    title: "Desarrollo de Software",
    titleAccent: "y programación",
    subtitle: null,
    items: [
      {
        label: "Código limpio y escalable",
        desc: "Programación a medida del frontend garantizando velocidad de carga y rendimiento.",
      },
      {
        label: "Filtro de conversión",
        desc: "Implementación de formularios inteligentes que pre-califican las consultas antes de enviarlas a canales directos como WhatsApp.",
      },
      {
        label: "Integraciones",
        desc: "Conexión con APIs de mapas, redes sociales y sistemas de mensajería automatizada.",
      },
    ],
  },
  {
    number: "03",
    tag: "infraestructura",
    title: "Infraestructura",
    titleAccent: "y seguridad",
    subtitle: null,
    items: [
      {
        label: "Despliegue Profesional",
        desc: "Configuración del servidor (Hosting) y despliegue del sitio para hacerlo visible en internet.",
      },
      {
        label: "Seguridad SSL",
        desc: "Implementación de protocolos de seguridad obligatorios para la protección de datos y confianza del usuario.",
      },
      {
        label: "Gestión de Dominio",
        desc: "Configuración de dominios profesionales (.com) para asegurar una presencia corporativa sólida.",
      },
    ],
  },
];

export default function LandingPageService() {
  return (
    <section className="bg-background text-foreground py-20 px-6 texture-dots">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary block mb-3">
            // CONOCÉ EL PROCESO
          </span>
          <h2 className="font-sans text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Tu propia web:{" "}
            <span className="font-cursive font-normal text-primary">
              del concepto
            </span>{" "}
            <br className="hidden sm:block" />
            al despliegue profesional
          </h2>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-xl font-light">
            Desarrollar una landing page no es solo "armar una web"; es crear
            una herramienta de conversión optimizada. Mi proceso integra tres
            pilares fundamentales:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="
                group bg-card border border-border rounded-xl p-7
                hover:border-primary/40 hover:-translate-y-1
                transition-all duration-300 ease-out
                hover:shadow-[0_16px_48px_rgba(242,68,121,0.08)]
                texture-lines
              "
            >
              {/* Card top meta */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  {pillar.number}
                </span>
                <span className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 tracking-wide">
                  {pillar.tag}
                </span>
              </div>

              {/* Title */}
              <div className="mb-1">
                <h3 className="font-sans text-xl font-bold text-card-foreground leading-snug">
                  {pillar.title}
                </h3>
                <span className="font-cursive text-2xl  text-primary">
                  {pillar.titleAccent}
                </span>
              </div>

              {/* Divider */}
              <div className="w-8 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full my-5" />

              {/* Items */}
              <ul className="space-y-4">
                {pillar.items.map((item) => (
                  <li key={item.label} className="flex gap-3 items-start">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                    <div>
                      <p className="font-sans text-md font-semibold text-card-foreground mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-sans text-md text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}