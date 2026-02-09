"use client"

import { ChevronRight, ExternalLink, TrendingUp, Instagram } from "lucide-react"
import { useState } from "react";
import Link from "next/link";

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  // TUS PROYECTOS REALES EXTRAÍDOS DE LA IMAGEN
  const projects = [

    {
      title: "Bellafarma",
      category: "programación",
      desc: "Plataforma para farmacia online con productos, promociones y formulario de contacto.",
      tags: ["React", "Tailwind"],
      link: "https://farmaciabellafarma.com.ar/",
      image: "webbellafarma.png"
    },
    {
      title: "CowiX",
      category: "marketing",
      desc: "Estrategia de contenidos y gestión de comunidad enfocada en engagement y retención. MOII AGENCY",
      tags: ["Instagram", "Facebook", "Edición de video", "Contenido viral"],
      link: "https://instagram.com/cowix.ok",
      isSocial: true,
      stats: "+143% Alcance"
    },
        {
      title: "Borgert",
      category: "programación",
      desc: "Sitio web corporativo para empresa de aberturas de aluminio con catálogo de productos.",
      tags: ["Angular", "TypeScript"],
      link: "https://borgert.vercel.app/", 
      image: "webborgert.png"
    },
    {
      title: "Centro Quiropráctico Marcelo Hundt",
      category: "marketing",
      desc: "Edición de contenidos y gestión de redes sociales. MOII AGENCY",
      tags: ["Instagram", "Edición de video", "Gestión de comunidad"],
      link: "https://instagram.com/centroquiropracticohundt",
      isSocial: true,
      stats: "15,6 mil visualizaciones"
    },
    {
      title: "Bajo Cero",
      category: "programación",
      desc: "Sitio web para empresa de refrigeración.",
      tags: ["Angular", "TypeScript", "Swiper"],
      link: "https://bajocerosoluciones.com/", 
      image: "webbajocero.png"
    },
    {
      title: "Bajo Cero",
      category: "marketing",
      desc: "Campaña publicitaria y gestión de redes sociales.",
      tags: ["Instagram", "Edición de video", "Creación de contenido"],
      link: "https://instagram.com/bajocero.ref",
      isSocial: true,
      stats: "14,5 mil visualizaciones"
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

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

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2 p-1">
              {['all', 'programación', 'marketing'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                    activeTab === tab
                      ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-md'
                      : 'border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/30'
                  }`}
                >
                  {tab === 'all' ? 'Todos' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <a
                href={project.link}
                target="_blank"
                key={idx}
                className="group relative rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--card)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/50 shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/10 block"
              >
                {/* Zona de Imagen - ACTUALIZADA CON LÓGICA CONDICIONAL */}
                <div className="aspect-video overflow-hidden relative bg-[var(--muted)]">
                  
                  {project.category === 'marketing' ? (
                    /* Tarjeta de Marketing (Sin foto, con gradiente y logo) */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white p-6">
                      <Instagram size={48} className="mb-2 drop-shadow-lg" />
                      <span className="font-bold text-sm tracking-widest uppercase opacity-90 drop-shadow-md">REDES SOCIALES</span>
                    </div>
                  ) : (
                    /* Tarjeta de Programación (Con foto) */
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:saturate-[1.1]"
                    />
                  )}
                  
                  {/* Overlay on hover con el botón "Ver" */}
                  <div className="absolute inset-0 bg-[var(--primary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <span className="px-6 py-3 bg-white text-[var(--primary)] rounded-xl font-bold flex items-center gap-2 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Ver<ExternalLink size={16} />
                    </span>
                  </div>

                  {/* Stats Badge for Marketing Projects */}
                  {project.stats && (
                    <div className="absolute bottom-3 right-3 bg-white text-[var(--primary)] px-3 py-1 rounded-lg text-xs font-bold shadow-md flex items-center gap-1 z-10">
                      <TrendingUp size={12} /> {project.stats}
                    </div>
                  )}
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] uppercase tracking-wide border border-[var(--primary)]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold group-hover:text-[var(--primary)] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm leading-relaxed text-[var(--muted-foreground)] line-clamp-3 text-pretty">
                    {project.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
  )
}