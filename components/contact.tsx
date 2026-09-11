"use client"

import { Copy, Mail, Download, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"

const copy = {
  es: {
    heading: "Contacto",
    email: "Email",
    copied: "✓ Email copiado",
    clickToCopy: "Click para copiar",
    whatsapp: "WhatsApp",
    clickToChat: "Click para chatear",
    cv: "CV",
    downloadPdf: "Descargar PDF",
  },
  en: {
    heading: "Contact",
    email: "Email",
    copied: "✓ Email copied",
    clickToCopy: "Click to copy",
    whatsapp: "WhatsApp",
    clickToChat: "Click to chat",
    cv: "CV",
    downloadPdf: "Download PDF",
  },
}

export default function Contact() {
  const { lang } = useLanguage()
  const t = copy[lang]
  const [copied, setCopied] = useState(false)
  const email = "syramoran@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 w-full">
        <h2 className="text-4xl font-bold mb-4">
          <span className="font-cursive text-4xl text-primary">{t.heading}</span>
        </h2>
        <div className="h-1 w-24 bg-primary mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Email */}
          <div>
            <h3 className="font-mono font-bold text-primary mb-4">{t.email}</h3>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail size={20} />
              <span className="text-sm font-mono">{email}</span>
              <Copy size={16} className="opacity-100 group-hover:opacity-100 transition-opacity cursor-pointer" />
            </button>
            <p className="text-xs text-muted-foreground mt-2">{copied ? t.copied : t.clickToCopy}</p>
          </div>

          {/* WhatsApp */}
          <div>
            <h3 className="font-mono font-bold text-primary mb-4">{t.whatsapp}</h3>
            <a
              href="https://wa.me/5493435083034"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle size={20} />
              <span className="text-sm font-mono">+54 9 343 508 3034</span>
            </a>
            <p className="text-xs text-muted-foreground mt-2">{t.clickToChat}</p>
          </div>

          {/* CV */}
          <div>
            <h3 className="font-mono font-bold text-primary mb-4">{t.cv}</h3>
            <a
              href="/CV - Syra Moran.pdf"
              download="CV - Syra Moran.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-mono text-sm"
            >
              <Download size={16} /> {/* Icono visual */}
              {t.downloadPdf}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
