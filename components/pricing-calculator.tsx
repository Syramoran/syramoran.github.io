"use client"

import { useMemo, useState } from "react"
import { MessageCircle, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const RECORDING_RATE = 20000
const GMAPS_PRICE = 70000
const DISCOUNT_RATE = 0.2
const WHATSAPP_NUMBER = "5493435083034"

const socialOptions = [
  { key: "none", price: 0, label: { es: "Ninguno", en: "None" } },
  { key: "inicial", price: 300000, label: { es: "Plan Inicial", en: "Starter Plan" } },
  { key: "estrella", price: 450000, label: { es: "Plan Estrella", en: "Star Plan" } },
  { key: "full", price: 620000, label: { es: "Plan Full", en: "Full Plan" } },
]

const webOptions = [
  { key: "none", price: 0, label: { es: "Ninguna", en: "None" } },
  { key: "simple", price: 300000, label: { es: "Landing Page Simple", en: "Simple Landing Page" } },
  { key: "catalogo", price: 400000, label: { es: "Landing Page con Catálogo", en: "Landing Page with Catalog" } },
  { key: "tienda", price: 300000, label: { es: "Tienda Nube Completa", en: "Full Online Store" } },
]

const copy = {
  es: {
    heading: "Armá tu presupuesto",
    subtitle:
      "Elegí lo que necesitás y calculá el costo al instante. Combiná Redes + ADS con Página Web y el 20% OFF del Pack Presencia Digital se aplica solo.",
    socialLabel: "Redes Sociales + ADS",
    webLabel: "Página Web",
    addonsLabel: "Servicios adicionales",
    recordingLabel: "Grabación de contenido",
    recordingUnit: "horas",
    perHour: "/ hora",
    gmapsLabel: "Alta en Google Maps",
    subtotalLabel: "Subtotal",
    discountLabel: "Descuento Pack Presencia Digital (20%)",
    addonsTotalLabel: "Adicionales",
    totalLabel: "Total",
    packApplied: "¡Aplicaste el Pack Presencia Digital! Ahorrás",
    cta: "Consultar por WhatsApp",
    emptyHint: "Elegí al menos un servicio para consultar",
    disclaimerAds: "* La inversión en pauta publicitaria (ADS) se paga aparte, directamente en la plataforma.",
    disclaimerPermanence: "* Los planes de redes sociales requieren una permanencia mínima de 2 meses.",
    waGreeting: "¡Hola Syra! Quiero armar mi presupuesto:",
    waSocial: "Redes + ADS",
    waWeb: "Página Web",
    waDiscount: "Descuento Pack Presencia Digital (20%)",
    waRecording: "Grabación de contenido",
    waHours: "h",
    waTotal: "Total",
    waClosing: "¿Podemos coordinar una llamada?",
  },
  en: {
    heading: "Build your quote",
    subtitle:
      "Pick what you need and calculate the cost instantly. Combine Social + ADS with a Website and the 20% OFF Digital Presence Pack discount applies automatically.",
    socialLabel: "Social Media + ADS",
    webLabel: "Website",
    addonsLabel: "Additional services",
    recordingLabel: "Content recording",
    recordingUnit: "hours",
    perHour: "/ hour",
    gmapsLabel: "Google Maps listing",
    subtotalLabel: "Subtotal",
    discountLabel: "Digital Presence Pack discount (20%)",
    addonsTotalLabel: "Add-ons",
    totalLabel: "Total",
    packApplied: "You applied the Digital Presence Pack! You save",
    cta: "Ask on WhatsApp",
    emptyHint: "Choose at least one service to reach out",
    disclaimerAds: "* Ad spend (ADS) is paid separately, directly on the platform.",
    disclaimerPermanence: "* Social media plans require a minimum commitment of 2 months.",
    waGreeting: "Hi Syra! I'd like to build my quote:",
    waSocial: "Social + ADS",
    waWeb: "Website",
    waDiscount: "Digital Presence Pack discount (20%)",
    waRecording: "Content recording",
    waHours: "h",
    waTotal: "Total",
    waClosing: "Can we set up a call?",
  },
}

function formatPrice(n: number) {
  return "$" + Math.round(n).toLocaleString("es-AR")
}

export default function PricingCalculator() {
  const { lang } = useLanguage()
  const t = copy[lang]

  const [socialKey, setSocialKey] = useState("none")
  const [webKey, setWebKey] = useState("none")
  const [hours, setHours] = useState(0)
  const [gmaps, setGmaps] = useState(false)

  const social = socialOptions.find((p) => p.key === socialKey) ?? socialOptions[0]
  const web = webOptions.find((p) => p.key === webKey) ?? webOptions[0]

  const { packEligible, subtotal, discount, addonsTotal, total } = useMemo(() => {
    const packEligible = social.price > 0 && web.price > 0
    const subtotal = social.price + web.price
    const discount = packEligible ? subtotal * DISCOUNT_RATE : 0
    const addonsTotal = hours * RECORDING_RATE + (gmaps ? GMAPS_PRICE : 0)
    const total = subtotal - discount + addonsTotal
    return { packEligible, subtotal, discount, addonsTotal, total }
  }, [social.price, web.price, hours, gmaps])

  const whatsappHref = useMemo(() => {
    const lines = [t.waGreeting]
    if (social.price > 0) lines.push(`- ${t.waSocial}: ${social.label[lang]} (${formatPrice(social.price)})`)
    if (web.price > 0) lines.push(`- ${t.waWeb}: ${web.label[lang]} (${formatPrice(web.price)})`)
    if (packEligible) lines.push(`- ${t.waDiscount}: -${formatPrice(discount)}`)
    if (hours > 0) lines.push(`- ${t.waRecording}: ${hours}${t.waHours} (${formatPrice(hours * RECORDING_RATE)})`)
    if (gmaps) lines.push(`- Google Maps (${formatPrice(GMAPS_PRICE)})`)
    lines.push(`${t.waTotal}: ${formatPrice(total)}`)
    lines.push(t.waClosing)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`
  }, [social, web, hours, gmaps, packEligible, discount, total, t, lang])

  const hasSelection = total > 0

  return (
    <section id="calculadora" className="py-20 px-4 sm:px-6 lg:px-20 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.heading}</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">{t.subtitle}</p>
      </div>

      <Card>
        <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-semibold mb-3">{t.socialLabel}</h3>
              <RadioGroup value={socialKey} onValueChange={setSocialKey} className="gap-2">
                {socialOptions.map((option) => (
                  <label
                    key={option.key}
                    htmlFor={`social-${option.key}`}
                    className={`flex items-center justify-between gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                      socialKey === option.key ? "border-primary bg-primary/5" : "border-border hover:bg-accent/50"
                    }`}
                  >
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <RadioGroupItem value={option.key} id={`social-${option.key}`} />
                      {option.label[lang]}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {option.price > 0 ? formatPrice(option.price) : "—"}
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3">{t.webLabel}</h3>
              <RadioGroup value={webKey} onValueChange={setWebKey} className="gap-2">
                {webOptions.map((option) => (
                  <label
                    key={option.key}
                    htmlFor={`web-${option.key}`}
                    className={`flex items-center justify-between gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                      webKey === option.key ? "border-primary bg-primary/5" : "border-border hover:bg-accent/50"
                    }`}
                  >
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <RadioGroupItem value={option.key} id={`web-${option.key}`} />
                      {option.label[lang]}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {option.price > 0 ? formatPrice(option.price) : "—"}
                    </span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3">{t.addonsLabel}</h3>
              <div className="space-y-3">
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <label htmlFor="recording-hours" className="text-sm font-medium">
                      {t.recordingLabel}
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {formatPrice(RECORDING_RATE)} {t.perHour}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      id="recording-hours"
                      type="number"
                      inputMode="numeric"
                      min={0}
                      value={hours}
                      onChange={(e) => setHours(Math.max(0, Number(e.target.value) || 0))}
                      className="w-24"
                    />
                    <span className="text-sm text-muted-foreground">{t.recordingUnit}</span>
                  </div>
                </div>

                <label
                  htmlFor="gmaps"
                  className="flex items-center justify-between gap-3 rounded-lg border border-border p-3 cursor-pointer hover:bg-accent/50 transition-colors"
                >
                  <span className="flex items-center gap-2 text-sm font-medium">
                    <Checkbox id="gmaps" checked={gmaps} onCheckedChange={(v) => setGmaps(v === true)} />
                    {t.gmapsLabel}
                  </span>
                  <span className="text-sm text-muted-foreground">{formatPrice(GMAPS_PRICE)}</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="rounded-xl bg-muted/50 p-5 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{t.subtotalLabel}</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              {packEligible && (
                <div className="flex justify-between text-sm text-primary font-medium">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={14} className="shrink-0" />
                    {t.discountLabel}
                  </span>
                  <span>-{formatPrice(discount)}</span>
                </div>
              )}

              {addonsTotal > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t.addonsTotalLabel}</span>
                  <span>{formatPrice(addonsTotal)}</span>
                </div>
              )}

              <div className="h-px bg-border" />

              <div className="flex justify-between items-baseline">
                <span className="font-semibold">{t.totalLabel}</span>
                <span className="text-3xl font-bold text-primary">{formatPrice(total)}</span>
              </div>

              {packEligible && (
                <p className="text-xs text-primary/80 flex items-center gap-1.5">
                  <Sparkles size={12} className="shrink-0" />
                  {t.packApplied} {formatPrice(discount)}
                </p>
              )}
            </div>

            <Button
              asChild
              size="lg"
              className={`w-full gap-2 mt-4 ${!hasSelection ? "opacity-50 pointer-events-none" : ""}`}
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-disabled={!hasSelection}>
                <MessageCircle size={18} />
                {t.cta}
              </a>
            </Button>
            {!hasSelection && <p className="text-xs text-muted-foreground text-center mt-2">{t.emptyHint}</p>}

            <div className="mt-4 space-y-1">
              <p className="text-xs text-muted-foreground text-pretty">{t.disclaimerAds}</p>
              <p className="text-xs text-muted-foreground text-pretty">{t.disclaimerPermanence}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
