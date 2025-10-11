"use client"

import type React from "react"
import { useEffect, useRef } from "react"

export function Reveal(props: { as?: React.ElementType; className?: string; children: React.ReactNode }) {
  const { as: Tag = "div", className = "", children } = props as any
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current as unknown as Element | null
    if (!el) return
    el.classList.add("reveal")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).classList.add("is-visible")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref as any} className={className}>
      {children}
    </Tag>
  )
}
