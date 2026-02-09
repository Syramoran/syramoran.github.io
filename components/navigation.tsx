"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Súper importante: Evita que el cliente y el servidor se peleen (Hydration Mismatch)
  useEffect(() => {
    setMounted(true)
  }, [])

  const menuItems = [
    { label: "Sobre mí", href: "/#about" },
    { label: "Proyectos", href: "/#projects" },
    { label: "Stack", href: "/#stack" },
    { label: "Servicios", href: "/services" },
    { label: "Contacto", href: "/#contact" },
  ]

  // Si no está montado, no renderizamos los iconos para evitar el flash de hidratación
  const themeIcon = mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary hover:text-accent transition-colors">
            <img src="/icon.png" alt="logo" width={40} height={40} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Theme Toggle Desktop */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-muted text-foreground transition-all hover:scale-110 active:scale-95 border border-transparent hover:border-border"
              aria-label="Toggle theme"
            >
              {themeIcon}
            </button>
            
            <a 
              href="https://wa.me/3435083034"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:opacity-90 text-primary-foreground px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-foreground"
            >
              {themeIcon}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-border pt-4 animate-in fade-in slide-in-from-top-5">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="https://wa.me/3435083034" 
              className="block text-primary font-bold pt-2"
              onClick={() => setIsOpen(false)}
            >
              Contactar
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}