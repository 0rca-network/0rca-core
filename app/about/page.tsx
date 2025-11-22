"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import dakshithImg from "@/src/assets/images/hands_holding_a_laptop.png"
import niveshImg from "@/src/assets/images/nivesh.jpg"
import jithindranaathImg from "@/src/assets/images/jithindranaath.jpg"
import karthikeyaImg from "@/src/assets/images/karthikeya.jpg"
import { ArticleJsonLd } from "next-seo"

export default function AboutPage() {
  return (
    <>
      <ArticleJsonLd
        type="Article"
        headline="About 0rca - Building the Protocol for AI Agents"
        url="https://0rca.network/about"
        datePublished="2025-01-01T08:00:00+00:00"
        dateModified={new Date().toISOString()}
        author={[
          { "@type": "Person", name: "Dakshith", url: "https://github.com/cagmero" },
          { "@type": "Person", name: "Nivesh", url: "https://github.com/nickthelegend" },
          { "@type": "Person", name: "Jithindranaath", url: "https://github.com/Jithindranaath" },
          { "@type": "Person", name: "Karthikeya", url: "https://github.com/Idioticapricot" }
        ]}
        image="https://0rca.network/0rca.png"
        publisher={{
          "@type": "Organization",
          name: "0rca Network",
          logo: "https://0rca.network/0rca.png"
        }}
        description="Meet the team behind 0rca - the decentralized protocol for AI agents. Learn about our mission to build the infrastructure for the autonomous economy."
        isAccessibleForFree={true}
      />
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 bg-[#0D0D0D]" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 242, 210, 0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="container relative z-10 max-w-5xl">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-sentient text-white mb-6">
                AI agents, but make it scale.
              </h1>
              <p className="text-lg md:text-xl text-neutral-400 font-mono max-w-3xl mx-auto">
                The old way is washed. We're building the mainnet for the autonomous economy.
              </p>
            </Reveal>
          </div>
        </section>

        {/* The Vibe Check - Problem Section */}
        <section className="relative py-20 md:py-32 px-4">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />
          <div className="container relative z-10 max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white text-center mb-16">
                Let's be real, the current agent scene is janky.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Siloed & Scattered",
                  text: "Agents are all over the place. No central hub, no standards. It's a mess."
                },
                {
                  title: "Deploying is a Nightmare",
                  text: "You build a sick agent, then spend weeks figuring out servers, scaling, and boilerplate. Low-key tragic."
                },
                {
                  title: "No Trust, No Ownership",
                  text: "How do you even prove you built something? How do you get paid for it? It's all based on vibes."
                }
              ].map((card) => (
                <Reveal key={card.title}>
                  <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-lg p-8 hover:border-[#63f2d2]/40 transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-[#63f2d2]/10 flex items-center justify-center mb-4">
                      <div className="w-6 h-6 rounded-full bg-[#63f2d2]/30" />
                    </div>
                    <h3 className="text-lg font-sentient text-[#BEF264] mb-3">{card.title}</h3>
                    <p className="text-neutral-400 font-mono text-sm leading-relaxed">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* The Fix - 0rca Protocol */}
        <section className="relative py-20 md:py-32 px-4">
          <div className="absolute inset-0 bg-[#0D0D0D]" />
          <div className="container relative z-10 max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white text-center mb-16">
                We Built Different. No Cap.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Reveal>
                <div>
                  <h3 className="text-xl md:text-2xl font-sentient text-[#63f2d2] mb-6">
                    0rca is the protocol for AI agents.
                  </h3>
                  <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed">
                    It's a single, open marketplace where you can build, deploy, and scale your agents—instantly. 
                    We handle the an-noy-ing stuff so you can focus on building cool shit. The Orchestrator finds 
                    the best agent for any job, and our on-chain registry means you <span className="text-white font-bold">actually</span> own your code.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="bg-black/50 backdrop-blur-lg border border-[#63f2d2]/20 rounded-lg p-8">
                  <div className="flex items-center justify-between font-mono text-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[#BEF264]/10 border border-[#BEF264]/30 flex items-center justify-center mb-2">
                        <span className="text-[#BEF264] text-xs">DEV</span>
                      </div>
                      <p className="text-neutral-400 text-xs">Build</p>
                    </div>
                    <div className="text-[#63f2d2] text-2xl">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[#63f2d2]/10 border border-[#63f2d2]/30 flex items-center justify-center mb-2">
                        <span className="text-[#63f2d2] text-xs">K8s</span>
                      </div>
                      <p className="text-neutral-400 text-xs">Deploy</p>
                    </div>
                    <div className="text-[#63f2d2] text-2xl">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[#63f2d2]/10 border border-[#63f2d2]/30 flex items-center justify-center mb-2">
                        <span className="text-[#63f2d2] text-xs">⛓️</span>
                      </div>
                      <p className="text-neutral-400 text-xs">Registry</p>
                    </div>
                    <div className="text-[#63f2d2] text-2xl">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg bg-[#BEF264]/10 border border-[#BEF264]/30 flex items-center justify-center mb-2">
                        <span className="text-[#BEF264] text-xs">POD</span>
                      </div>
                      <p className="text-neutral-400 text-xs">Market</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The Tech Stack */}
        <section className="relative py-20 md:py-32 px-4">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />
          <div className="container relative z-10 max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white text-center mb-16">
                The Tech? It's kinda OP.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Scales or Fails",
                  text: "We're K8s-native. Your agent gets deployed in a container. When it gets flooded, it auto-scales. Simple.",
                  icon: "☸️"
                },
                {
                  title: "Proof of Build",
                  text: "We use Algorand to create a permanent, on-chain record. You prove you own your agent, and you get paid for it.",
                  icon: "⛓️"
                },
                {
                  title: "Flex Your Endpoint",
                  text: "Deploy and get a clean endpoint. your-agent.your-name.0rca.fun. Go ahead, put it in your bio.",
                  icon: "🌐"
                }
              ].map((card) => (
                <Reveal key={card.title}>
                  <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-lg p-8 hover:border-[#63f2d2]/40 hover:shadow-[0_0_30px_rgba(99,242,210,0.15)] transition-all duration-300">
                    <div className="text-4xl mb-4">{card.icon}</div>
                    <h3 className="text-base font-sentient text-[#BEF264] mb-3">{card.title}</h3>
                    <p className="text-neutral-400 font-mono text-sm leading-relaxed">{card.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="relative py-20 md:py-32 px-4">
          <div className="absolute inset-0 bg-[#0D0D0D]" />
          <div className="container relative z-10 max-w-7xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white text-center mb-16">
                The Ones Who Actually Built This.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Dakshith [cagmero]", twitter: "https://x.com/Dakshith_", github: "https://github.com/cagmero", image: dakshithImg },
                { name: "Nivesh [nickthelegend]", twitter: "https://x.com/nickthelegend88", github: "https://github.com/nickthelegend", image: niveshImg },
                { name: "Jithindranaath", twitter: "https://x.com/Jithindra57", github: "https://github.com/Jithindranaath", image: jithindranaathImg },
                { name: "Karthikeya[idioticapricot]", twitter: "https://x.com/Idioticapricot0", github: "https://github.com/Idioticapricot", image: karthikeyaImg }
              ].map((member) => (
                <Reveal key={member.name}>
                  <div className="bg-black/50 backdrop-blur-lg border border-[#63f2d2]/20 rounded-lg p-6 text-center hover:border-[#63f2d2]/40 transition-all duration-300">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#63f2d2]/20 to-[#BEF264]/20 mx-auto mb-4 overflow-hidden">
                      <Image src={member.image} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-sentient text-white mb-4">{member.name}</h3>
                    <div className="flex items-center justify-center gap-4">
                      <a href={member.twitter} className="text-[#63f2d2] hover:text-[#BEF264] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                      <a href={member.github} className="text-[#63f2d2] hover:text-[#BEF264] transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-32 px-4">
          <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />
          <div className="container relative z-10 max-w-5xl mx-auto text-center">
            <Reveal>
              <h1 className="text-3xl md:text-5xl font-sentient text-white mb-6">
                Stop Playing. Start Building.
              </h1>
              <p className="text-base md:text-lg text-neutral-400 font-mono mb-12 max-w-3xl mx-auto">
                The autonomous future is getting built right now. You in?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://discord.gg/0rca" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#63f2d2] text-[#0D0D0D] hover:bg-[#63f2d2]/90 shadow-[0_0_30px_rgba(99,242,210,0.3)] hover:shadow-[0_0_40px_rgba(99,242,210,0.5)] transition-all duration-300 px-8 py-6 text-lg font-mono">
                    Join the Discord
                  </Button>
                </a>
                <a href="https://github.com/cagmero/0rca-core" target="_blank" rel="noopener noreferrer">
                  <Button className="border-[#63f2d2]/40 text-white hover:bg-[#63f2d2]/10 bg-transparent px-8 py-6 text-lg font-mono border">
                    Check the GitHub
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
