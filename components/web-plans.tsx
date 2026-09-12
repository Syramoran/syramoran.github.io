"use client"

import { Check, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const copy = {
  es: {
    heading: "Página Web",
    subtitle: "Tu vidriera digital disponible las 24 horas: un espacio profesional donde te encuentran, entienden qué ofrecés y pueden contactarte sin vueltas.",
    popular: "Más elegida",
    payOnce: "Pago único",
    cta: "Elegir este plan",
    packHint: "Combiná esta web con un plan de Redes + ADS y ahorrá 20% con el Pack Presencia Digital.",
    plans: [
      {
        name: "Landing Page Simple",
        price: "$300.000",
        description: "Ideal para que te encuentren y puedan consultarte fácil",
        services: [
          "Diseño responsive (celular, tablet y PC)",
          "Formulario de contacto",
          "Botón directo a WhatsApp",
          "Diseño claro, pensado para que te contacten",
        ],
        featured: false,
      },
      {
        name: "Landing Page con Catálogo",
        price: "$400.000",
        description: "Ideal para mostrar todo lo que ofrecés y que elegirte sea más fácil",
        services: [
          "Todo lo de la Landing Simple",
          "Catálogo de productos o servicios",
          "Galería de imágenes",
          "Formulario de contacto",
        ],
        featured: true,
      },
      {
        name: "Tienda Nube Completa",
        price: "$300.000",
        priceNote: "lote inicial de 50 productos",
        description: "Tu tienda, abierta las 24 horas, todos los días",
        services: [
          "Tienda online lista para vender",
          "Carga inicial de 50 productos",
          "Configuración de medios de pago y envíos",
          "Diseño acorde a tu marca",
        ],
        featured: false,
      },
    ],
  },
  en: {
    heading: "Website",
    subtitle: "Your digital storefront, open 24/7: a professional space where people find you, understand what you offer, and can reach out without friction.",
    popular: "Most chosen",
    payOnce: "One-time payment",
    cta: "Choose this plan",
    packHint: "Combine this website with a Social + ADS plan and save 20% with the Digital Presence Pack.",
    plans: [
      {
        name: "Simple Landing Page",
        price: "$300.000",
        description: "Great for being found and making it easy for people to reach out",
        services: [
          "Responsive design (mobile, tablet, and desktop)",
          "Contact form",
          "Direct WhatsApp button",
          "Clear design, built to get people to reach out",
        ],
        featured: false,
      },
      {
        name: "Landing Page with Catalog",
        price: "$400.000",
        description: "Great for showcasing everything you offer and making it easier for people to choose you",
        services: [
          "Everything in the Simple Landing",
          "Product or service catalog",
          "Image gallery",
          "Contact form",
        ],
        featured: true,
      },
      {
        name: "Full Online Store",
        price: "$300.000",
        priceNote: "initial batch of 50 products",
        description: "Your store, open 24 hours a day, every day",
        services: [
          "Online store ready to sell",
          "Initial upload of 50 products",
          "Payment and shipping setup",
          "Design matching your brand",
        ],
        featured: false,
      },
    ],
  },
}

export default function WebPlans() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section id="web" className="py-20 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
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
                <span className="text-muted-foreground ml-2">/ {t.payOnce}</span>
                {plan.priceNote && (
                  <div className="text-xs text-muted-foreground mt-1">{plan.priceNote}</div>
                )}
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
    </section>
  )
}
