"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MobileMenu } from "./mobile-menu"

export const Header = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const aa = document.querySelector("[data-automate-anything]") as HTMLElement | null
    if (aa) {
      const onScroll = () => {
        const top = aa.getBoundingClientRect().top
        setVisible(top > 0)
      }
      onScroll()
      window.addEventListener("scroll", onScroll, { passive: true })
      return () => window.removeEventListener("scroll", onScroll)
    }

    const sentinel = document.getElementById("hero-sentinel")
    if (sentinel) {
      const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 })
      observer.observe(sentinel)
      return () => observer.disconnect()
    }

    let lastScroll = 0
    const onScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll <= 0) {
        setVisible(true)
      } else if (currentScroll > lastScroll) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScroll = currentScroll
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <header className="relative container pt-8 md:pt-14">
        <div className="lg:hidden fixed top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 z-50">
          <MobileMenu />
        </div>
        <nav className="flex max-lg:hidden items-center justify-center gap-x-10 fixed left-1/2 top-8 md:top-14 -translate-x-1/2 z-50">
          {[
            { label: "Docs", href: "/docs" },
            { label: "POD", href: "https://pod.0rca.network" },
            { label: "Forum", href: "https://forum.0rca.network" },
            { label: "About ORCA", href: "/about" },
            { label: "Whitepaper", href: "/whitepaper" },
          ].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/80 hover:text-primary transition-colors ease-out duration-150"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
