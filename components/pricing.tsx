"use client"

import { Check, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLanguage } from "@/components/language-provider"

const copy = {
  es: {
    heading: "Redes Sociales + Publicidad (ADS)",
    subtitle: "Presencia activa y profesional en Instagram y Facebook: contenido, estrategia y campañas pagas para que te vean donde tu audiencia ya está mirando.",
    popular: "Más popular",
    period: "mensual",
    cta: "Elegir este plan",
    packHint: "Combiná este plan con una Página Web y ahorrá 20% con el Pack Presencia Digital.",
    adsNote: "La inversión en pauta publicitaria (presupuesto de Meta Ads) no está incluida y se paga aparte, directamente en la plataforma.",
    permanenceNote: "Los planes mensuales requieren un mínimo de permanencia de 2 meses.",
    plans: [
      {
        name: "Plan Inicial",
        price: "$300.000",
        description: "Para arrancar con una presencia profesional y activa",
        services: [
          "Planificación de contenido",
          "8 publicaciones (post, reel o carrusel)",
          "Redacción de copys",
          "4 secuencias de historias",
          "Programación de contenido",
          "Optimización de perfil",
          "Campañas de ADS en Instagram y Facebook",
        ],
        featured: false,
      },
      {
        name: "Plan Estrella",
        price: "$450.000",
        description: "Para mantener una presencia constante y ganar visibilidad",
        services: [
          "Todo lo del Plan Inicial",
          "12 publicaciones en total (post, reel o carrusel)",
          "8 secuencias de historias",
          "Moderación de comentarios",
          "Optimización de campañas de ADS",
        ],
        featured: true,
      },
      {
        name: "Plan Full",
        price: "$620.000",
        description: "Máximo alcance y reportes claros para tomar mejores decisiones",
        services: [
          "Todo lo del Plan Estrella",
          "16 publicaciones en total (post, reel o carrusel)",
          "12 secuencias de historias",
          "Seguimiento de métricas y reportes mensuales",
          "Estrategia avanzada de campañas de ADS",
        ],
        featured: false,
      },
    ],
  },
  en: {
    heading: "Social Media + Paid Ads (ADS)",
    subtitle: "An active, professional presence on Instagram and Facebook: content, strategy, and paid campaigns to get you seen where your audience is already looking.",
    popular: "Most popular",
    period: "monthly",
    cta: "Choose this plan",
    packHint: "Combine this plan with a Website and save 20% with the Digital Presence Pack.",
    adsNote: "Ad spend (Meta Ads budget) is not included and is paid separately, directly on the platform.",
    permanenceNote: "Monthly plans require a minimum commitment of 2 months.",
    plans: [
      {
        name: "Starter Plan",
        price: "$300.000",
        description: "To start with an active, professional presence",
        services: [
          "Content planning",
          "8 posts (post, reel, or carousel)",
          "Copywriting",
          "4 story sequences",
          "Content scheduling",
          "Profile optimization",
          "ADS campaigns on Instagram and Facebook",
        ],
        featured: false,
      },
      {
        name: "Star Plan",
        price: "$450.000",
        description: "To keep a steady presence and grow your visibility",
        services: [
          "Everything in the Starter Plan",
          "12 total posts (post, reel, or carousel)",
          "8 story sequences",
          "Comment moderation",
          "ADS campaign optimization",
        ],
        featured: true,
      },
      {
        name: "Full Plan",
        price: "$620.000",
        description: "Maximum reach and clear reports to guide better decisions",
        services: [
          "Everything in the Star Plan",
          "16 total posts (post, reel, or carousel)",
          "12 story sequences",
          "Metrics tracking and monthly reports",
          "Advanced ADS campaign strategy",
        ],
        featured: false,
      },
    ],
  },
}

export default function Pricing() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section id="redes" className="py-20 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.heading}</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {t.plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${plan.featured ? "border-primary shadow-lg scale-105 bg-card" : "bg-card/50"}`}
          >
            <CardHeader>
              {plan.featured && (
                <div className="mb-2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {t.popular}
                  </span>
                </div>
              )}
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-base">{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">/ {t.period}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant={plan.featured ? "default" : "outline"} className="w-full">
                <a href="#calculadora">{t.cta}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <p className="text-center text-sm text-primary font-medium mt-8 flex items-center justify-center gap-1.5">
        <Sparkles size={14} className="shrink-0" />
        {t.packHint}
      </p>

      <div className="max-w-4xl mx-auto mt-4 space-y-3">
        <Alert>
          <AlertDescription className="text-center text-xs">{t.adsNote}</AlertDescription>
        </Alert>
        <Alert>
          <AlertDescription className="text-center text-xs">{t.permanenceNote}</AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
