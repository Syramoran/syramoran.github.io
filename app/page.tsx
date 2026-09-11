/*page.tsx*/
"use client"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Pricing from "@/components/pricing"
import Blog from "@/components/blog"

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </main>
  )
}
