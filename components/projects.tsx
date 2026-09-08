"use client"

import { ExternalLink, ImageOff } from "lucide-react"
import { useEffect, useState } from "react"
import MarketingFeed from "./marketing-feed"

type Project = {
  title: string
  category: string
  desc: string
  tags: string[]
  link: string
  image: string
}

function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)

  // Verifica la imagen del lado del cliente (evita el problema de hidratación con onError)
  useEffect(() => {
    const probe = new window.Image()
    probe.onload = () => setImgError(false)
    probe.onerror = () => setImgError(true)
    probe.src = project.image
  }, [project.image])

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/50 shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/10 block"
    >
      <div className="aspect-video overflow-hidden relative bg-[var(--muted)]">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[var(--primary)]/15 via-[var(--card)] to-[var(--primary)]/5 text-[var(--primary)]">
            <ImageOff size={32} className="opacity-60" />
            <span className="font-bold text-sm tracking-wide">{project.title}</span>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-[1.1]"
          />
        )}

        {/* Overlay al pasar el mouse */}
        <div className="absolute inset-0 bg-[var(--primary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <span className="px-6 py-3 bg-white text-[var(--primary)] rounded-xl font-bold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Ver
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

        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold group-hover:text-[var(--primary)] transition-colors">{project.title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-[var(--muted-foreground)] line-clamp-3 text-pretty">{project.desc}</p>
      </div>
    </a>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("programación")

  const projects = [
    {
      title: "Tecnoagro",
      category: "programación",
      desc: "Sitio web corporativo para empresa agropecuaria con catálogo de productos y servicios.",
      tags: ["React", "Tailwind"],
      link: "https://tecnoagroag.com.ar",
      image: "webtecnoagro.png",
    },
    {
      title: "Bellafarma",
      category: "programación",
      desc: "Plataforma para farmacia online con productos, promociones y formulario de contacto.",
      tags: ["React", "Tailwind"],
      link: "https://farmaciabellafarma.com.ar/",
      image: "webbellafarma.png",
    },
    {
      title: "Festejá",
      category: "programación",
      desc: "Plataforma para armar tu propia invitación digital personalizada con opciones de diseño.",
      tags: ["React", "TypeScript"],
      link: "https://festeja.com.ar",
      image: "webfesteja.png",
    },
    {
      title: "Borgert",
      category: "programación",
      desc: "Sitio web corporativo para empresa de aberturas de aluminio con catálogo de productos.",
      tags: ["Angular", "TypeScript"],
      link: "https://borgert.vercel.app/",
      image: "webborgert.png",
    },
    {
      title: "Split App",
      category: "programación",
      desc: "Aplicación web de celular para dividir gastos en convivencia. En colaboración con Diseñadora Agostina Chiapino",
      tags: ["React", "TypeScript"],
      link: "https://split-app-ochre.vercel.app/",
      image: "splitapp.png",
    },
  ]

  const tabs = ["programación", "marketing"]
  const filteredProjects = projects.filter((p) => p.category === activeTab)

  return (
    <section id="projects" className="py-24 px-6 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-6 items-end">
          <div>
            <p className="text-4xl font-bold mb-2">
              <span className="font-cursive text-primary">Proyectos</span> destacados
            </p>
            <p className="text-[var(--muted-foreground)]">Desarrollados a medida.</p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2 p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeTab === tab
                    ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-md"
                    : "border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "marketing" ? (
          <MarketingFeed />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
