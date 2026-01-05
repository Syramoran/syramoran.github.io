"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Stack from "@/components/stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Pricing from "@/components/pricing"

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </main>
  )
}
