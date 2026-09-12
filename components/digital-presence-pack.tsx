"use client"

import { Search, MousePointerClick, BadgeCheck, Clock, Plus, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const copy = {
  es: {
    eyebrow: "Servicios",
    heading: "La presencia digital ya no es opcional: es donde te encuentran tus clientes",
    subtitle:
      "Gestiono tus redes y tu web para que te encuentren fácil, entiendan qué ofrecés y puedan contactarte o comprarte sin vueltas, mientras vos te enfocás en tu negocio.",
    benefits: [
      { icon: Search, title: "Te encuentran fácil", text: "Presencia activa en Instagram, Facebook y Google para aparecer cuando te buscan" },
      { icon: MousePointerClick, title: "Comprarte es simple", text: "Menos pasos entre el interés y la compra: WhatsApp directo, catálogo claro, web accesible" },
      { icon: BadgeCheck, title: "Imagen profesional", text: "Una marca prolija que genera confianza a primera vista" },
      { icon: Clock, title: "Vos ganás tiempo", text: "Te encargás de tu negocio, yo de tu presencia digital" },
    ],
    socialCard: "Redes Sociales\n+ ADS",
    webCard: "Página\nWeb",
    packLabel: "Pack Presencia Digital",
    discountBadge: "20% OFF",
    packTitle: "Combiná Redes + Web y ahorrá 20%",
    packText:
      "Contratando un plan de Redes Sociales + ADS junto con un plan de Página Web, obtenés un 20% de descuento sobre el total.",
    cta: "Armar mi presupuesto",
  },
  en: {
    eyebrow: "Services",
    heading: "A digital presence isn't optional anymore: it's where your clients find you",
    subtitle:
      "I manage your social media and website so people can find you easily, understand what you offer, and reach out or buy without friction, while you focus on running your business.",
    benefits: [
      { icon: Search, title: "Easy to find", text: "An active presence on Instagram, Facebook, and Google so you show up when people search" },
      { icon: MousePointerClick, title: "Easy to buy from", text: "Fewer steps between interest and purchase: direct WhatsApp, a clear catalog, an accessible website" },
      { icon: BadgeCheck, title: "Professional image", text: "A polished brand that builds trust at first glance" },
      { icon: Clock, title: "You save time", text: "You focus on your business, I focus on your digital presence" },
    ],
    socialCard: "Social Media\n+ ADS",
    webCard: "Website",
    packLabel: "Digital Presence Pack",
    discountBadge: "20% OFF",
    packTitle: "Combine Social + Web and save 20%",
    packText: "Hire a Social Media + ADS plan together with a Website plan and get 20% off the combined price.",
    cta: "Build my quote",
  },
}

export default function DigitalPresencePack() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section className="pt-28 md:pt-32 pb-16 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block font-mono text-xs font-bold text-primary tracking-widest uppercase mb-3">
          {t.eyebrow}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold mb-5 text-balance">{t.heading}</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
        {t.benefits.map((b) => (
          <div
            key={b.title}
            className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-card/50 border border-border"
          >
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
              <b.icon size={20} />
            </div>
            <h3 className="font-semibold text-sm">{b.title}</h3>
            <p className="text-xs text-muted-foreground text-pretty">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex items-center gap-3 md:gap-5 shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-card border border-border flex items-center justify-center text-center text-xs font-semibold px-2 whitespace-pre-line shadow-sm">
              {t.socialCard}
            </div>
            <Plus className="text-primary shrink-0" size={22} />
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-card border border-border flex items-center justify-center text-center text-xs font-semibold px-2 whitespace-pre-line shadow-sm">
              {t.webCard}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
              <Sparkles size={12} />
              {t.packLabel} · {t.discountBadge}
            </span>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-balance">{t.packTitle}</h2>
            <p className="text-muted-foreground text-sm md:text-base text-pretty">{t.packText}</p>
          </div>

          <a
            href="#calculadora"
            className="shrink-0 bg-primary hover:opacity-90 text-primary-foreground px-6 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
