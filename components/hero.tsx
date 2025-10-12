"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Button } from "./ui/button"
import { useState } from "react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col h-svh justify-between relative">
      <GL hovering={hovering} />
      <div className="absolute top-8 left-8 z-10 flex items-center gap-1">
        <img src="/0rca-Photoroom.svg" alt="0rca icon" className="h-16 w-auto" />
        <img src="/orca_text-Photoroom.svg" alt="0rca" className="h-16 w-auto" />
      </div>

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
