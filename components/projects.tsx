"use client"

import { ExternalLink, ImageOff, Code2, BarChart3, CheckCircle2, X } from "lucide-react"
import { useEffect, useState } from "react"
import MarketingFeed from "./marketing-feed"
import { useLanguage } from "@/components/language-provider"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

type Project = {
  title: string
  category: string
  desc: { es: string; en: string }
  longDesc: { es: string; en: string }
  features: { es: string[]; en: string[] }
  tags: string[]
  link: string
  images: string[]
}

const copy = {
  es: {
    heading: "Trabajos",
    headingRest: " destacados",
    subtitle: "Desarrollo web y marketing digital, a medida.",
    webDev: "Desarrollo Web",
    marketing: "Marketing Digital",
    view: "Ver más",
    tools: "Herramientas",
    includes: "Qué incluye",
    visitSite: "Visitar sitio",
    close: "Cerrar",
  },
  en: {
    heading: "Featured",
    headingRest: " work",
    subtitle: "Custom web development and digital marketing.",
    webDev: "Web Development",
    marketing: "Digital Marketing",
    view: "See more",
    tools: "Tools",
    includes: "What it includes",
    visitSite: "Visit site",
    close: "Close",
  },
}

function ProjectPreview({
  project,
  lang,
  viewLabel,
  onOpen,
}: {
  project: Project
  lang: "es" | "en"
  viewLabel: string
  onOpen: () => void
}) {
  const [imgError, setImgError] = useState(false)
  const cover = project.images[0]

  // Verifica la imagen del lado del cliente (evita el problema de hidratación con onError)
  useEffect(() => {
    const probe = new window.Image()
    probe.onload = () => setImgError(false)
    probe.onerror = () => setImgError(true)
    probe.src = cover
  }, [cover])

  return (
    <button type="button" onClick={onOpen} className="group block w-full text-left">
      <div className="aspect-video overflow-hidden relative bg-[var(--muted)]">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[var(--primary)]/15 via-[var(--card)] to-[var(--primary)]/5 text-[var(--primary)]">
            <ImageOff size={32} className="opacity-60" />
            <span className="font-bold text-sm tracking-wide">{project.title}</span>
          </div>
        ) : (
          <img
            src={cover}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-[1.1]"
          />
        )}

        {/* Overlay al pasar el mouse */}
        <div className="absolute inset-0 bg-[var(--primary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <span className="px-6 py-3 bg-white text-[var(--primary)] rounded-xl font-bold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {viewLabel}
            <ExternalLink size={16} />
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] uppercase tracking-wide border border-[var(--primary)]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--primary)] transition-colors">{project.title}</h3>

        <p className="text-sm leading-relaxed text-[var(--muted-foreground)] line-clamp-3 text-pretty">{project.desc[lang]}</p>
      </div>
    </button>
  )
}

function ProjectExpanded({
  project,
  lang,
  t,
  onClose,
}: {
  project: Project
  lang: "es" | "en"
  t: (typeof copy)["es"]
  onClose: () => void
}) {
  return (
    <div className="animate-in fade-in duration-300 p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] uppercase tracking-wide border border-[var(--primary)]/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t.close}
          className="shrink-0 grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/50 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Carousel className="w-full">
          <CarouselContent>
            {project.images.map((img) => (
              <CarouselItem key={img}>
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-[var(--muted)]">
                  <img src={img} alt={project.title} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {project.images.length > 1 && (
            <>
              <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 bg-white/90 border-none text-[var(--primary)] hover:bg-white" />
              <CarouselNext className="right-3 top-1/2 -translate-y-1/2 bg-white/90 border-none text-[var(--primary)] hover:bg-white" />
            </>
          )}
        </Carousel>

        <div className="flex flex-col gap-6">
          <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">{project.longDesc[lang]}</p>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-3">{t.includes}</h4>
            <ul className="space-y-2">
              {project.features[lang].map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-3">{t.tools}</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] uppercase tracking-wide border border-[var(--primary)]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 mt-auto self-start"
          >
            {t.visitSite}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { lang } = useLanguage()
  const t = copy[lang]
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const projects: Project[] = [
    {
      title: "Tecnoagro",
      category: "programación",
      desc: {
        es: "Sitio web corporativo para empresa agropecuaria con catálogo de productos y servicios.",
        en: "Corporate website for an agricultural company with a product and service catalog.",
      },
      longDesc: {
        es: "Sitio institucional para empresa argentina que distribuye tecnología agrícola.",
        en: "Corporate site for an Argentine distributor of agricultural technology.",
      },
      features: {
        es: [
          "Catálogo de productos",
          "Landing page",
          "Formulario de contacto",
          "Diseño responsive",
          "Integración de pixel de Meta",
        ],
        en: [
          "Product catalog",
          "Landing page",
          "Contact form",
          "Responsive design",
          "Meta pixel integration",
        ],
      },
      tags: ["React", "Tailwind", "TypeScript", "Meta Pixel"],
      link: "https://tecnoagroag.com.ar",
      images: ["/webtecnoagro.png"],
    },
    {
      title: "Bellafarma",
      category: "programación",
      desc: {
        es: "Plataforma para farmacia online con productos y formulario de contacto.",
        en: "Online pharmacy platform with products and a contact form.",
      },
      longDesc: {
        es: "Sitio para una farmacia de Crespo (Entre Ríos) pensado para mostrar productos destacados y toda la información de contacto y obras sociales en un solo lugar, con un botón de WhatsApp siempre a mano.",
        en: "Website for a pharmacy in Crespo, Entre Ríos, built to surface featured products and all the contact and health-insurance information in one place, with a WhatsApp button always within reach.",
      },
      features: {
        es: [
          "Landing page",
          "Formulario de contacto",
          "Integración de pixel de Meta",
        ],
        en: [
          "Landing page",
          "Contact form",
          "Meta pixel integration",
        ],
      },
      tags: ["React", "Tailwind", "TypeScript", "Meta Pixel"],
      link: "https://farmaciabellafarma.com.ar/",
      images: ["/webbellafarma.png"],
    },
    {
      title: "Festejá",
      category: "programación",
      desc: {
        es: "Plataforma para armar tu propia invitación digital personalizada con opciones de diseño.",
        en: "Platform for building your own personalized digital invitation with design options.",
      },
      longDesc: {
        es: "Plataforma para crear invitaciones digitales personalizadas. Desarrollo end-to-end. Analisis de requerimiento del sistema, diagramas de flujo, diseño de base de datos, desarrollo del sistema, pruebas y despliegue.",
        en: "Platform for creating personalized digital invitations. Full-stack development. Requirement analysis, flow diagrams, database design, system development, testing, and deployment.",
      },
      features: {
        es: [
          "Sistema de gestión para administadores",
          "Gestión de usuarios",
          "Sistema de subscripciones",
          "Integración con pasarela de pagos",
          "Sistema de notificaciones",
          "Diseño responsivo",
        ],
        en: [
          "Admin management system",
          "User management",
          "Subscription system",
          "Payment gateway integration",
          "Notification system",
        ],
      },
      tags: ["React", "TypeScript","Nest.js","API REST"],
      link: "https://festeja.com.ar",
      images: ["/webfesteja.png", "/webfestejaadmin.png"],
    },
    {
      title: "Borgert",
      category: "programación",
      desc: {
        es: "Sitio web corporativo para empresa de aberturas de aluminio con catálogo de productos.",
        en: "Corporate website for an aluminum window and door company with a product catalog.",
      },
      longDesc: {
        es: "Sitio institucional para una empresa. Presenta el catálogo de productos y formulario de contacto.",
        en: "Corporate site for a company. Features a catalog of products and contact form.",
      },
      features: {
        es: [
          "Diseño UX/UI",
          "Prototipado con figma",
          "Catálogo de productos",
          "Formulario de contacto",
        ],
        en: [
          "UX/UI Design",
          "Figma Prototyping",
          "Product catalog",
          "Contact form",
        ],
      },
      tags: ["Angular", "TypeScript","Figma"],
      link: "https://borgert.vercel.app/",
      images: ["/webborgert.png"],
    },
    {
      title: "Split App",
      category: "programación",
      desc: {
        es: "Aplicación web de celular para dividir gastos en convivencia. En colaboración con Diseñadora Agostina Chiapino",
        en: "Mobile web app for splitting shared living expenses. Built in collaboration with designer Agostina Chiapino.",
      },
      longDesc: {
        es: "Aplicación web para organizar y dividir gastos compartidos, pensada para roommates, parejas y viajes. En colaboración con la diseñadora Agostina Chiapino.",
        en: "Web app for organizing and splitting shared expenses, built for roommates, couples, and trips. In collaboration with designer Agostina Chiapino.",
      },
      features: {
        es: [
          "Onboarding guiado según el uso",
          "Modo offline",
          "División y balance automático de gastos",
        ],
        en: [
          "Guided onboarding based on use case",
          "Offline mode",
          "Automatic expense splitting and balancing",
        ],
      },
      tags: ["React", "TypeScript","Figma", "Nest.js","Claude Code"],
      link: "https://split-app-ochre.vercel.app/",
      images: ["/splitapp.png"],
    },
  ]

  const devProjects = projects.filter((p) => p.category === "programación")

  return (
    <section id="trabajos" className="py-24 px-6 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full">
        <div className="mb-16">
          <p className="text-4xl font-bold mb-2">
            <span className="font-cursive text-primary">{t.heading}</span>
            {t.headingRest}
          </p>
          <p className="text-[var(--muted-foreground)]">{t.subtitle}</p>
        </div>

        <div className="space-y-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="text-[var(--primary)]" size={24} />
              <h3 className="text-2xl font-bold">{t.webDev}</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devProjects.map((project) => {
                const isOpen = expandedProject === project.title
                return (
                  <div
                    key={project.title}
                    className={`rounded-3xl overflow-hidden border bg-[var(--card)] shadow-sm transition-all duration-500 ${
                      isOpen
                        ? "md:col-span-2 lg:col-span-3 border-[var(--primary)]/50 shadow-xl shadow-[var(--primary)]/10"
                        : "border-[var(--border)] hover:-translate-y-2 hover:border-[var(--primary)]/50 hover:shadow-xl hover:shadow-[var(--primary)]/10"
                    }`}
                  >
                    {isOpen ? (
                      <ProjectExpanded project={project} lang={lang} t={t} onClose={() => setExpandedProject(null)} />
                    ) : (
                      <ProjectPreview
                        project={project}
                        lang={lang}
                        viewLabel={t.view}
                        onOpen={() => setExpandedProject(project.title)}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="text-[var(--primary)]" size={24} />
              <h3 className="text-2xl font-bold">{t.marketing}</h3>
            </div>
            <MarketingFeed />
          </div>
        </div>
      </div>
    </section>
  )
}
