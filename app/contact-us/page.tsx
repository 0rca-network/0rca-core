"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { ArticleJsonLd } from "next-seo"
import { Mail, Linkedin, Twitter } from "lucide-react"

export default function ContactUsPage() {
  return (
    <>
      <ArticleJsonLd
        type="Article"
        headline="Contact Us - 0rca Network"
        url="https://0rca.network/contact-us"
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
        description="Get in touch with the 0rca Network team. Reach out via email, X, or LinkedIn to discuss the future of decentralized AI orchestration."
        isAccessibleForFree={true}
      />
      <Header />
      <main className="relative bg-[#0D0D0D] min-h-screen flex flex-col items-center justify-center pt-20">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 242, 210, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <section className="relative w-full py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-sentient text-white mb-6">
                Let's Build the Future Together.
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 font-mono mb-12 max-w-2xl mx-auto">
                Have questions about the protocol? Want to build on 0rca? Or just want to vibe? Reach out to us.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Reveal>
                <a 
                  href="https://x.com/0rcaNetwork" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-xl p-8 hover:border-[#63f2d2]/40 transition-all duration-300 flex flex-col items-center gap-4 hover:shadow-[0_0_30px_rgba(99,242,210,0.1)] h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-[#63f2d2]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Twitter className="w-8 h-8 text-[#63f2d2]" />
                  </div>
                  <h3 className="text-xl font-sentient text-white">X / Twitter</h3>
                  <p className="text-neutral-400 font-mono text-sm">Follow us & stay updated.</p>
                  <span className="text-[#BEF264] font-mono text-xs mt-auto">@0rcaNetwork</span>
                </a>
              </Reveal>

              <Reveal>
                <a 
                  href="https://www.linkedin.com/company/0rca-network" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-xl p-8 hover:border-[#63f2d2]/40 transition-all duration-300 flex flex-col items-center gap-4 hover:shadow-[0_0_30px_rgba(99,242,210,0.1)] h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-[#63f2d2]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-8 h-8 text-[#63f2d2]" />
                  </div>
                  <h3 className="text-xl font-sentient text-white">LinkedIn</h3>
                  <p className="text-neutral-400 font-mono text-sm">Connect professionally.</p>
                  <span className="text-[#BEF264] font-mono text-xs mt-auto">0rca-network</span>
                </a>
              </Reveal>

              <Reveal>
                <a 
                  href="mailto:zero80932@gmail.com" 
                  className="group bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-xl p-8 hover:border-[#63f2d2]/40 transition-all duration-300 flex flex-col items-center gap-4 hover:shadow-[0_0_30px_rgba(99,242,210,0.1)] h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-[#63f2d2]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-[#63f2d2]" />
                  </div>
                  <h3 className="text-xl font-sentient text-white">Email</h3>
                  <p className="text-neutral-400 font-mono text-sm">Direct line for inquiries.</p>
                  <span className="text-[#BEF264] font-mono text-xs mt-auto">zero80932@gmail.com</span>
                </a>
              </Reveal>
            </div>

            <Reveal>
              <div className="mt-20 p-8 border border-[#63f2d2]/10 rounded-2xl bg-black/50 backdrop-blur-md">
                <h2 className="text-2xl font-sentient text-white mb-4">Join our community</h2>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                  <a href="https://discord.gg/0rca" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#63f2d2] text-[#0D0D0D] hover:bg-[#63f2d2]/90 font-mono">
                      Discord
                    </Button>
                  </a>
                  <a href="https://forum.0rca.network" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-[#63f2d2]/40 text-white hover:bg-[#63f2d2]/10 font-mono">
                      Forum
                    </Button>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
