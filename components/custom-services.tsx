"use client"

import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"

const customServices = [
  {
    name: "Desarrollo de Landing Page",
    price: "$300.000",
    description: "Página web básica y optimizada para conversión",
  },
  {
    name: "Landing Page con catálogo",
    price: "$400.000",
    description: "Landing page completa con sistema de catálogo integrado",
  },
  {
    name: "Contenido audiovisual",
    price: "$15.000",
    period: "la hora",
    description: "Grabación y fotografía de contenido para redes sociales",
  },
]

export default function CustomServices() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Servicios Personalizados</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
          Soluciones a medida para proyectos específicos
        </p>
      </div>

      <div className="max-w-4xl mx-auto border rounded-lg overflow-hidden bg-card">
        {customServices.map((service, index) => (
          <div
            key={service.name}
            className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 ${
              index !== customServices.length - 1 ? "border-b" : ""
            } hover:bg-accent/50 transition-colors`}
          >
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-1">{service.name}</h4>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="text-right">
                <div className="text-2xl font-bold">{service.price}</div>
                <div className="text-xs text-muted-foreground">{service.period || "aprox."}</div>
              </div>
              {/* <Button variant="outline" size="sm" className="shrink-0 bg-transparent">
                Consultar
              </Button> */}
            </div>
          </div>
        ))}
      </div>

      <Alert className="max-w-4xl mx-auto mt-8">
        <AlertDescription className="text-center">
          <strong>Nota:</strong> Los planes mensuales requieren un mínimo de permanencia de 2 meses
        </AlertDescription>
      </Alert>
    </section>
  )
}
