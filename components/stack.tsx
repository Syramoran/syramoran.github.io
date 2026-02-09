"use client"

import React from "react"
import {
  Database,
  Code2,
  Layers,
  Palette,
  CheckCircle2,
  BarChart3,
  Smartphone,
  Terminal,
  Lock,
  Video,
  Sparkles,
  Cpu
} from "lucide-react"

import {
  SiReact,
  SiTypescript,
  SiNestjs,
  SiPython,
  SiPostgresql,
  SiTailwindcss,
  SiMysql,
  SiFigma,
  SiAdobe,
  SiGit,
  SiMeta,
  SiAngular
} from "react-icons/si"

export default function Stack() {
  // 1. Organizamos la data exactamente como en la foto
  const categories = [
    {
      title: "Desarrollo",
      icon: Code2,
      items: [
        { name: "React.js", logo: SiReact, color: "text-blue-400" },
        { name: "TypeScript", logo: SiTypescript, color: "text-blue-600" },
        { name: "Nest.js", logo: SiNestjs, color: "text-red-500" },
        { name: "Python", logo: SiPython, color: "text-blue-500" },
        { name: "Angular", logo: SiAngular, color: "text-red-600" },
        { name: "Tailwind CSS", logo: SiTailwindcss, color: "text-cyan-400" },
      ],
    },
    {
      title: "Marketing",
      icon: BarChart3,
      items: [
        { name: "Meta Business Suite", logo: SiMeta, color: "text-blue-500" },
        { name: "Edición de video", logo: Video, color: "text-primary" },
        { name: "Analítica", logo: BarChart3, color: "text-primary" },
        { name: "SEO", logo: GlobeIcon, color: "text-primary" },
      ],
    },
    {
      title: "Diseño",
      icon: Smartphone,
      items: [
        { name: "Figma (UI/UX)", logo: SiFigma, color: "text-pink-500" },
        { name: "Affinity Suite", logo: Palette, color: "text-primary" },
        { name: "Prototipado", logo: Layers, color: "text-primary" },
        { name: "Git", logo: SiGit, color: "text-orange-600" },
        { name: "Adobe Suite", logo: SiAdobe, color: "text-red-600" },
      ],
    },
    {
      title: "Bases de Datos",
      icon: Database,
      items: [
        { name: "PostgreSQL", logo: SiPostgresql, color: "text-blue-400" },
        { name: "MySQL", logo: SiMysql, color: "text-blue-500" },
        { name: "Modelado ERD", logo: Layers, color: "text-primary" },
        { name: "Seguridad y Hashing", logo: Lock, color: "text-primary" },
      ],
    },
  ]

  return (
    <section id="stack" className="py-24 px-6 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full">

        {/* Cabecera con estilo Layers */}
        <div className="flex items-center gap-3 mb-12">
          <Layers className="text-primary" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground">
            Mi Stack <span className="font-cursive text-primary">tecnológico</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary/50"
            >
              {/* Icono de Categoría */}
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-primary bg-background shadow-sm group-hover:scale-110 transition-transform">
                <card.icon size={28} />
              </div>

              <h3 className="text-xl font-bold mb-6 text-foreground">{card.title}</h3>

              <ul className="space-y-4">
                {card.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between group/item">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-primary opacity-50 group-hover/item:opacity-100 transition-opacity" />
                      <span className="text-sm font-medium text-muted-foreground group-hover/item:text-foreground transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <item.logo className={`text-xl ${item.color} opacity-70 group-hover/item:opacity-100 transition-all`} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Fallback para el icono de SEO que no estaba importado
function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24" height="24"
      viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
    </svg>
  )
}