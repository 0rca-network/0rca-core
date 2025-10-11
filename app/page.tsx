"use client"

import { Hero } from "@/components/hero"
import { Leva } from "leva"
import { ProblemSection } from "@/components/sections/problem"
import { SolutionSection } from "@/components/sections/solution"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { DevelopersSection } from "@/components/sections/developers"
import { EcosystemSection } from "@/components/sections/ecosystem"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <DevelopersSection />
      <EcosystemSection />
      <Footer />
      <Leva hidden />
    </>
  )
}
