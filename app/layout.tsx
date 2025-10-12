import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "0rca — Decentralized AI Orchestration",
  description: "Automate anything. Orchestrate everything. The decentralized protocol for an autonomous AI workforce.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined' && window.ethereum) {
              Object.defineProperty(window, 'ethereum', {
                value: window.ethereum,
                writable: false,
                configurable: true
              });
            }
          `
        }} />
      </head>
      <body className={`${GeistMono.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  )
}
