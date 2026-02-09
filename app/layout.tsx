import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Montserrat, Playball, Google_Sans_Code } from "next/font/google"
// 1. Importamos el proveedor que creamos antes
import { ThemeProvider } from "@/components/theme-provider" 

const _sans = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-sans", 
})

const _cursive = Playball({ 
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: "400",
})

const _mono = Google_Sans_Code({ 
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "700"],
}) 

export const metadata: Metadata = {
  title: "Syra Moran | Developer & Designer",
  description: "Portfolio of Syra Moran - Web Developer with marketing digital and design experience",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // 2. AGREGAMOS suppressHydrationWarning aquí. 
    // Es OBLIGATORIO porque next-themes modifica esta etiqueta al cargar.
    <html 
      lang="es" 
      className={`${_sans.variable} ${_cursive.variable} ${_mono.variable}`}
      suppressHydrationWarning 
    >
      <body className={`font-sans antialiased bg-background text-foreground min-h-screen`}>
        {/* 3. ENVOLVEMOS TODO con el ThemeProvider */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}