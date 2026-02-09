import { ArrowRight, Linkedin, Terminal } from "lucide-react"
import ProfilePhoto from "./foto-hero"
import { SiGithub } from '@icons-pack/react-simple-icons';
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-20 md:pt-32 pb-20 px-4 sm:px-6 lg:px-20 w-full mb-0 md:mb-6">
      <div className="grid md:grid-cols-2 gap-0 md:gap-12 items-center">
        {/* Left side - Text */}
        <div className="flex justify-center ">

          {/* Contenedor con el marco y el borde */}
          <ProfilePhoto />

        </div>

        {/* Right side - Photo placeholder with texture */}


        <div className="flex-1 space-y-4 flex items-center flex-col text-center md:items-start md:text-start">


          {/* Título con tu Identidad Visual */}
          <div className="flex flex-col">
            <h1 className="text-7xl font-bold font-cursive text-foreground leading-tight">
              Syra
              <span className="font-mono text-6xl text-primary block md:inline md:ml-4">
                Moran
              </span>
            </h1>
          </div>

          {/* Descripción potente */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed pr-0 md:pr-12 text-pretty">
            <span className="font-semibold">Técnica en Desarrollo Web con experiencia en marketing digital. </span>
            Traduzco la complejidad de tu empresa en presencia digital humana y orientada a&nbsp;resultados.
          </p>

          {/* Botones de Acción */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Link
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-mono font-bold hover:opacity-90 transition-all flex items-center gap-2 group shadow-lg shadow-primary/25 hover:scale-105 active:scale-95"
            >
              Ver proyectos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex gap-3">
              <a
                href="https://github.com/syramoran"
                target="_blank"
                className="p-4 bg-card border-2 border-border rounded-xl text-foreground hover:border-primary/50 transition-all hover:bg-muted"
                aria-label="GitHub"
              >
                <SiGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/syramoran/"
                target="_blank"
                className="p-4 bg-card border-2 border-border rounded-xl text-foreground hover:border-primary/50 transition-all hover:bg-muted"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
