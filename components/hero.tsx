"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { useState, Suspense } from "react"
import dynamic from "next/dynamic"

const GL = dynamic(() => import("./gl").then(mod => ({ default: mod.GL })), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
})

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between relative">
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <GL hovering={hovering} />
      </Suspense>

      <div className="pb-16 mt-auto text-center relative">
        {/* Removed <Pill>BETA</Pill> */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient text-balance" data-automate-anything>
          Automate Anything.
          <br />
          Orchestrate Everything.
        </h1>
        <p className="font-mono text-sm sm:text-base text-secondary text-balance mt-8 max-w-[560px] mx-auto">
          The decentralized protocol for an autonomous AI workforce.
        </p>

        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-14">
          <Link href="/pod">
            <Button
              className="bg-primary text-[var(--primary-foreground)] hover:brightness-90"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Explore The POD
            </Button>
          </Link>
          <Link href="/docs" className="contents">
            <Button
              variant="outline"
              className="border-[var(--border)] text-foreground hover:bg-[color:var(--border)]/10 bg-transparent"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Read The Docs
            </Button>
          </Link>
        </div>
      </div>

      {/* Sentinel to detect when we scroll past the hero; header hides once this leaves the viewport */}
      <div id="hero-sentinel" className="absolute bottom-0 left-0 w-full h-px" />
    </div>
  )
}
