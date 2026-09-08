"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, Download, Heart, Sparkles, Linkedin } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"

const disciplinas = ["Desarrollo Web", "Marketing Digital", "Ingeniería Electrónica","Diseño UI/UX"]

export default function Hero() {
  const fullText = "¡Hola! soy Syra"
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let index = 0
    let isDeleting = false
    let timeoutId: NodeJS.Timeout

    const type = () => {
      if (!isDeleting) {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index))
          index++
          timeoutId = setTimeout(type, 110)
        } else {
          // Pausa con el texto completo
          timeoutId = setTimeout(() => {
            isDeleting = true
            type()
          }, 3500)
        }
      } else {
        if (index > 0) {
          index--
          setDisplayedText(fullText.slice(0, index))
          timeoutId = setTimeout(type, 50)
        } else {
          isDeleting = false
          timeoutId = setTimeout(type, 600)
        }
      }
    }

    timeoutId = setTimeout(type, 300)
    return () => clearTimeout(timeoutId)
  }, [])
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-background to-primary/[0.05] px-4 pb-16 pt-28 sm:px-6 lg:flex lg:min-h-screen lg:items-center lg:px-10">
      {/* ─────────── Capa de manchas orgánicas (fondo) ─────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] top-[2%] h-[42vw] w-[42vw] max-h-[520px] max-w-[520px] blur-[44px]">
          <div className="blob animate-blob h-full w-full bg-primary/30" />
        </div>
        <div className="absolute -right-[12%] bottom-[-4%] h-[46vw] w-[46vw] max-h-[580px] max-w-[580px] blur-[64px]">
          <div className="blob--alt animate-blob h-full w-full bg-primary/[0.16]" style={{ animationDelay: "-7s" }} />
        </div>
        <div className="absolute left-[42%] top-[36%] hidden h-[24vw] w-[24vw] max-h-[280px] max-w-[280px] blur-[48px] lg:block">
          <div className="blob animate-blob h-full w-full bg-primary/[0.14]" style={{ animationDelay: "-13s" }} />
        </div>
        <div className="absolute inset-0 texture-dots opacity-70" />
      </div>

      {/* ─────────── Grid bento ─────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="relative flex flex-col gap-3 sm:gap-4 lg:grid lg:grid-cols-6 lg:gap-4">
          {/* Manchas conectoras entre paneles (solo desktop) */}
          <span
            aria-hidden
            className="blob pointer-events-none absolute left-[63.5%] top-[12%] z-20 hidden h-[70px] w-[70px] rotate-12 bg-primary lg:block"
          />


          {/* A · Titular */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-card/95 p-7 shadow-[0_28px_70px_-34px_rgba(242,68,121,0.35)] backdrop-blur-sm transition-transform duration-300 ease-out hover:-translate-y-1 sm:p-9 lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 dark:border-white/10">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                Portfolio 2026
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-[1.1] text-balance sm:text-4xl xl:text-5xl">
                Traduzco la <span className="text-primary">complejidad</span> de tu empresa en{" "}
                <span className="font-cursive font-normal text-primary">presencia digital humana</span> y orientada a
                resultados
              </h1>
            </div>
            <div className="mt-7 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Bajá ↓
              </span>
            </div>
            <div
              aria-hidden
              className="blob absolute -bottom-14 -right-12 hidden h-36 w-36 bg-primary/15 transition-transform duration-500 ease-out group-hover:scale-110 sm:block"
            />
          </div>

          {/* B · Foto */}
          <div className="group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-border shadow-[0_28px_70px_-34px_rgba(242,68,121,0.4)] transition-transform duration-300 ease-out hover:-translate-y-1 lg:col-span-2 lg:col-start-5 lg:row-span-3 lg:row-start-1 lg:min-h-0 lg:rotate-[0.6deg] lg:hover:rotate-0 dark:border-white/10">
            <img
              src="/fotosyra.jpg"
              alt="Syra Moran"
              className="absolute inset-0 h-full w-full object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/10" />
            <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur">
              Open to work
            </span>
            <p className="absolute bottom-4 left-5 right-5 flex min-h-[2rem] items-center font-cursive text-2xl text-white drop-shadow-lg">
              <span>{displayedText}</span>
              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-primary" />
            </p>
          </div>

          {/* C · Nombre / rol */}
          <div className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[2rem] bg-[#141414] p-7 text-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.5)] ring-1 ring-white/10 transition-transform duration-300 ease-out hover:-translate-y-1.5 lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:min-h-[200px] lg:-rotate-1 lg:hover:rotate-0">
            <div>
              <p className="text-2xl font-bold text-white">Syra Moran</p>
              <p className="mt-1.5 text-sm leading-snug text-white/85">
                Téc. en Desarrollo Web con experiencia en marketing digital y diseño
              </p>
            </div>
            <Heart
              aria-hidden
              size={72}
              className="absolute -bottom-4 -right-3 rotate-12 fill-primary/25 text-transparent transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-110"
            />
          </div>

          {/* D · Disciplinas */}
          <div className="group relative flex flex-col justify-between gap-4 overflow-hidden rounded-[2rem] bg-primary p-7 text-white shadow-[0_20px_50px_-24px_rgba(242,68,121,0.6)] transition-transform duration-300 ease-out hover:-translate-y-1.5 lg:col-span-2 lg:col-start-3 lg:row-start-3 lg:min-h-[200px] lg:rotate-[1.4deg] lg:hover:rotate-0">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">// disciplinas</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {disciplinas.map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-white/30 bg-white/15 px-3 py-1 font-mono text-xs font-medium text-white backdrop-blur-xs transition-transform duration-300 hover:scale-105"
                >
                  {d}
                </span>
              ))}
            </div>

            <span className="font-mono text-[11px] text-white/75">Enfoque integral</span>

            <div
              aria-hidden
              className="blob--alt absolute -right-7 -top-7 h-24 w-24 bg-white/20 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-12"
            />
          </div>

          {/* F · CTA */}
          <Link
            href="#projects"
            className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-[2rem] border border-border bg-card p-7 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 lg:col-span-3 lg:col-start-1 lg:row-start-4 dark:border-white/[0.12]"
          >
            <div>
              <p className="text-xl font-bold sm:text-2xl">Ver proyectos</p>
              <p className="mt-1 text-sm text-muted-foreground">Webs a medida y gestión de redes</p>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={22} />
            </span>
            <div
              aria-hidden
              className="blob absolute -bottom-12 -left-12 h-36 w-36 bg-primary/10 transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </Link>

          {/* E · Redes + CV */}
          <div className="flex flex-col justify-between gap-4 rounded-[2rem] border border-border bg-card p-6 transition-transform duration-300 ease-out hover:-translate-y-1 sm:flex-row sm:items-center lg:col-span-3 lg:col-start-4 lg:row-start-4 lg:flex-col lg:items-start xl:flex-row xl:items-center dark:border-white/[0.12]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Conectá</p>
              <p className="mt-1 text-lg font-bold">/ syramoran</p>
            </div>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/in/syramoran/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-border transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://github.com/syramoran"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-border transition duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5"
              >
                <SiGithub size={17} />
              </a>
              <a
                href="/cv_moran.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:opacity-90"
              >
                <Download size={14} /> CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
