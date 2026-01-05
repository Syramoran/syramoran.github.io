"use client"

import { Check } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Plan Inicial",
    price: "$300.000",
    period: "mensual",
    description: "Perfecto para empezar tu presencia digital",
    services: [
      "Planificación de contenido",
      "8 publicaciones (post, reel o carrusel)",
      "Redacción de copys",
      "4 secuencias de historias",
      "Programación de contenido",
      "Optimización de perfil",
    ],
    featured: false,
  },
  {
    name: "Plan Estrella",
    price: "$450.000",
    period: "mensual",
    description: "Para marcas que buscan crecimiento constante",
    services: [
      "Plan Inicial +",
      "12 publicaciones en total (post, reel o carrusel)",
      "8 secuencias de historias",
      "Moderación de comentarios",
    ],
    featured: true,
  },
  {
    name: "Plan Pro",
    price: "$620.000",
    period: "mensual",
    description: "Solución completa para máximo impacto",
    services: [
      "Plan Estrella +",
      "16 publicaciones en total (post, reel o carrusel)",
      "12 secuencias de historias",
      "Moderación de comentarios",
      "Seguimiento de métricas y reportes mensuales",
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 mt-4 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Planes de RRSS</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Elegí el plan que mejor se adapte a tus necesidades y objetivos de negocio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${plan.featured ? "border-primary shadow-lg scale-105 bg-card" : "bg-card/50"}`}
          >
            <CardHeader>
              {plan.featured && (
                <div className="mb-2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Más popular
                  </span>
                </div>
              )}
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-base">{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">/ {plan.period}</span>
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
            {/* <CardFooter>
              <Button className="w-full cursor-pointer" variant={plan.featured ? "default" : "outline"}>
                Comenzar
              </Button>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  )
}
