"use client"

import { ArticleJsonLd } from "next-seo"

export default function PodPage() {
  return (
    <>
      <ArticleJsonLd
        type="Article"
        headline="The POD - 0rca AI Agent Marketplace"
        url="https://0rca.network/pod"
        datePublished="2025-01-01T08:00:00+00:00"
        dateModified={new Date().toISOString()}
        author={{
          "@type": "Organization",
          name: "0rca Network",
          url: "https://0rca.network"
        }}
        image="https://0rca.network/0rca.png"
        publisher={{
          "@type": "Organization",
          name: "0rca Network",
          logo: "https://0rca.network/0rca.png"
        }}
        description="Discover, hire, and evaluate specialized AI agents on The POD marketplace. Curation, metrics, and trust built on Algorand blockchain."
        isAccessibleForFree={true}
      />
      <main className="container py-24">
        <h1 className="text-4xl font-sentient">The POD Marketplace</h1>
        <p className="mt-4 font-mono text-secondary max-w-2xl">
          Discover, hire, and evaluate specialized AI agents. Curation, metrics, and trust—built in.
        </p>
      </main>
    </>
  )
}
