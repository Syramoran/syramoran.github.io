"use client"

import Navigation from "@/components/navigation"
import About from "@/components/about"
import Stack from "@/components/stack"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-provider"

const copy = {
  es: {
    headingCursive: "Sobre",
    headingRest: " mí",
    bio: "Desarrolladora Web Fullstack y Técnica Universitaria en Desarrollo Web con experiencia en diseño de interfaces y marketing digital. Estudiante de Ingeniería Electrónica orientada a la creación de soluciones tecnológicas integrales. Mi meta es crecer profesionalmente para apoyar y fomentar la participación de más mujeres en STEM. Competente en metodologías ágiles, bases de datos relacionales, diseño UX/UI y el uso de herramientas de Inteligencia Artificial para la optimización de código.",
  },
  en: {
    headingCursive: "About",
    headingRest: " me",
    bio: "Fullstack Web Developer and Certified Web Development Technician with experience in interface design and digital marketing. Electronic Engineering student focused on building end-to-end technological solutions. My goal is to grow professionally while supporting and encouraging greater participation of women in STEM. Skilled in agile methodologies, relational databases, UX/UI design, and using AI tools to optimize code.",
  },
}

export default function SobreMiPage() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <main className="bg-background text-foreground min-h-screen pt-20">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20 pt-8">
        <h1 className="text-4xl font-bold">
          <span className="font-cursive text-primary">{t.headingCursive}</span>
          {t.headingRest}
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mt-4">
          {t.bio}
        </p>
      </div>

      <Stack />
      <About />
      <Footer />
    </main>
  )
}
