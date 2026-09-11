"use client"

import { useLanguage } from "@/components/language-provider"

const copy = {
  es: {
    heading: "Estudios",
    education: [
      {
        title: "Técnica en Desarrollo Web",
        institution: "UNER - FCAD",
        details: "Graduada en 2025",
      },
      {
        title: "Ingeniería Electrónica",
        institution: "",
        details: "En curso",
      },
      {
        title: "Inglés B1",
        institution: "UBA & English Academy",
        details: "Curso para desarrolladores",
      },
      {
        title: "Marketing Digital",
        institution: "Luzzi, Juliana Comunidad",
        details: "Cursos especializados",
      },
    ],
  },
  en: {
    heading: "Education",
    education: [
      {
        title: "Web Development Technical Degree",
        institution: "UNER - FCAD",
        details: "Graduated in 2025",
      },
      {
        title: "Electronic Engineering",
        institution: "",
        details: "In progress",
      },
      {
        title: "English B1",
        institution: "UBA & English Academy",
        details: "Course for developers",
      },
      {
        title: "Digital Marketing",
        institution: "Luzzi, Juliana Comunidad",
        details: "Specialized courses",
      },
    ],
  },
}

export default function About() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-20 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          {t.heading}
        </h2>
        <div className="h-1 w-24 bg-primary rounded-full mb-8"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.education.map((item, idx) => (
            <div
              key={idx}
              className="bg-card/50 border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="font-mono font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
              <p className="text-xs text-muted-foreground">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
