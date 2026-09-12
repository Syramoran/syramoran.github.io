"use client"

import { useLanguage } from "@/components/language-provider"

const copy = {
  es: {
    heading: "Servicios Aparte",
    subtitle: "Sumá estos servicios a medida, sin necesidad de contratar un plan",
    services: [
      {
        name: "Grabación de Contenido",
        price: "$20.000",
        period: "la hora",
        description: "Grabación y fotografía de contenido para tus redes sociales",
      },
      {
        name: "Google Maps para Empresas",
        price: "$70.000",
        period: "pago único",
        description: "Alta y optimización de tu ficha en Google Maps para que te encuentren clientes con oficina cerca tuyo",
      },
    ],
  },
  en: {
    heading: "Standalone Services",
    subtitle: "Add these services on demand, no plan required",
    services: [
      {
        name: "Content Recording",
        price: "$20.000",
        period: "per hour",
        description: "Video and photo content production for your social media",
      },
      {
        name: "Google Maps for Businesses",
        price: "$70.000",
        period: "one-time payment",
        description: "Setup and optimization of your Google Maps listing so nearby clients with an office can find you",
      },
    ],
  },
}

export default function CustomServices() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.heading}</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          {t.subtitle}
        </p>
      </div>

      <div className="max-w-4xl mx-auto border rounded-lg overflow-hidden bg-card">
        {t.services.map((service, index) => (
          <div
            key={service.name}
            className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 ${
              index !== t.services.length - 1 ? "border-b" : ""
            } hover:bg-accent/50 transition-colors`}
          >
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-1">{service.name}</h4>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="text-right">
                <div className="text-2xl font-bold">{service.price}</div>
                <div className="text-xs text-muted-foreground">{service.period}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
