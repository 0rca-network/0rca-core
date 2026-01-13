"use client"

import { Hero } from "@/components/hero"
import { Leva } from "leva"
import { ProblemSection } from "@/components/sections/problem"
import { SolutionSection } from "@/components/sections/solution"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { DevelopersSection } from "@/components/sections/developers"
import { EcosystemSection } from "@/components/sections/ecosystem"
import { Footer } from "@/components/footer"
import { ArticleJsonLd } from "next-seo"

export default function Home() {
  return (
    <>
      <ArticleJsonLd
        type="Article"
        headline="0rca Network"
        url="https://0rca.network"
        datePublished="2025-01-01T08:00:00+00:00"
        dateModified={new Date().toISOString()}
        author={{
          "@type": "Organization",
          name: "0rca Network",
          url: "https://0rca.network"
        }}
        image={[
          "https://0rca.network/0rca.png",
          "https://github.com/user-attachments/assets/5bc0b231-cb15-466b-812c-3a0cfd52cc8a"
        ]}
        publisher={{
          "@type": "Organization",
          name: "0rca Network",
          logo: "https://0rca.network/0rca.png"
        }}
        description="Automate anything. Orchestrate everything. The decentralized protocol for an autonomous AI workforce built on Cronos blockchain."
        isAccessibleForFree={true}
      />
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
