"use client"

import { Copy, Mail, Download } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "syramoran@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-10 px-4 sm:px-6 lg:px-20">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          <span className="font-cursive text-4xl text-primary">Contacto</span>
        </h2>
        <div className="h-1 w-24 bg-primary mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Email */}
          <div>
            <h3 className="font-mono font-bold text-primary mb-4">Email</h3>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Mail size={20} />
              <span className="text-sm font-mono">{email}</span>
              <Copy size={16} className="opacity-100 group-hover:opacity-100 transition-opacity cursor-pointer" />
            </button>
            <p className="text-xs text-muted-foreground mt-2">{copied ? "✓ Email copiado" : "Click para copiar"}</p>
          </div>

          {/* CV */}
          <div>
            <h3 className="font-mono font-bold text-primary mb-4">CV</h3>
            <a
              href="/cv.pdf"
              download="Syra_Moran_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-mono text-sm"
            >
              <Download size={16} /> {/* Icono visual */}
              Descargar PDF
            </a>
          </div>
        </div>

        {/* Social Links */}
        {/* <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-mono font-bold text-primary mb-6">Sígueme</h3>
          <div className="flex gap-6 flex-wrap">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm">
              Instagram
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}
