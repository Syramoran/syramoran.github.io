"use client"
import Navigation from "@/components/navigation"
import DigitalPresencePack from "@/components/digital-presence-pack"
import Pricing from "@/components/pricing"
import WebPlans from "@/components/web-plans"
import PricingCalculator from "@/components/pricing-calculator"
import CustomServices from "@/components/custom-services"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <DigitalPresencePack />
      <Pricing />
      <WebPlans />
      <PricingCalculator />
      <CustomServices />
      <Footer />
    </main>
  )
}
