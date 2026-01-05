"use client"
import Navigation from "@/components/navigation"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"
import CustomServices from "@/components/custom-services"

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <Pricing />
      <CustomServices />
      <Footer />
    </main>
  )
}
