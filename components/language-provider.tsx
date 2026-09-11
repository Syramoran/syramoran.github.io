"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Lang = "es" | "en"

type LanguageContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    const stored = localStorage.getItem("lang")
    if (stored === "es" || stored === "en") setLangState(stored)
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem("lang", next)
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
