"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { ArticleJsonLd } from "next-seo"

export default function WhitepaperPage() {
  return (
    <>
      <ArticleJsonLd
        type="Article"
        headline="0rca Protocol Whitepaper - A Decentralized Deployment Layer for AI Agents"
        url="https://0rca.network/whitepaper"
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
        description="The complete technical whitepaper for 0rca Protocol. Learn about our architecture, on-chain registry, and vision for the autonomous AI economy."
        isAccessibleForFree={true}
      />
      <Header />
      <main className="relative bg-[#0D0D0D] min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-sentient text-white mb-4">0rca Protocol Whitepaper</h1>
              <p className="text-lg md:text-xl text-[#63f2d2] font-mono">A Decentralized Deployment and Orchestration Layer for the Autonomous AI Economy</p>
            </Reveal>
          </div>
        </section>

        {/* Abstract */}
        <section className="relative py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-black/50 backdrop-blur-lg border border-[#63f2d2]/20 rounded-lg p-8">
                <h2 className="text-2xl md:text-3xl font-sentient text-[#63f2d2] mb-6">Abstract</h2>
                <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4">
                  The rapid evolution of Large Language Models (LLMs) has sparked the beginning of an autonomous agent economy. However, this nascent ecosystem is fundamentally broken. It's defined by fragmentation, complexity, and a profound lack of trust. Developers who build powerful AI agents have no clear path to deployment, scalability, or monetization. Users who need these agents have no way to discover, trust, or coordinate them.
                </p>
                <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4">
                  The 0rca Protocol is a decentralized system designed to solve this. It is an open-source "operating system" for AI agents, combining a "PaaS-like" (Platform-as-a-Service) developer experience with a decentralized, on-chain trust layer.
                </p>
                <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed">
                  We provide a fully automated pipeline that turns a developer's code into a scalable, auto-discovering, and monetizable microservice running on Kubernetes. A central Orchestrator uses this network of agents to execute complex tasks, with ownership and payments secured by an on-chain registry. We are not just building another marketplace; we are building the foundational infrastructure for the autonomous economy.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 1 */}
        <section className="relative py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white mb-8">1. Introduction: The Agent Paradox</h2>
              <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-6">
                We live in a state of paradox. We have AI models capable of remarkable reasoning, yet they are trapped. The tools to build autonomous agents are here, but the infrastructure to deploy, scale, and connect them is missing.
              </p>
              <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-6">
                This creates critical bottlenecks for the entire industry:
              </p>
              <div className="space-y-4">
                {[
                  { title: "The Deployment Nightmare", text: "A data scientist who builds a brilliant agent is not a DevOps engineer. They should not have to learn Kubernetes, Docker, load balancing, and CI/CD pipelines just to make their agent available." },
                  { title: "The Discovery Problem", text: "The current \"marketplace\" is a static list of links. There is no live registry, no way to verify an agent's performance, and no mechanism to trust its outputs or its creator." },
                  { title: "The Orchestration Hurdle", text: "Chaining multiple agents (e.g., \"Scrape a site, summarize the text, and analyze its sentiment\") is a brittle, custom-coded process for every new task. This cannot scale." },
                  { title: "The Trust & Payment Gap", text: "In a permissionless economy, how do you pay an anonymous agent for a job? How do you prove you are the true owner of an agent's intellectual property?" }
                ].map((item) => (
                  <div key={item.title} className="bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-lg p-6">
                    <h3 className="text-lg font-sentient text-[#BEF264] mb-2">{item.title}</h3>
                    <p className="text-neutral-400 font-mono text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 2 */}
        <section className="relative py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white mb-8">2. The Solution: The 0rca Protocol</h2>
              <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-6">
                0rca is a comprehensive protocol that provides a single, unified answer to these problems. It is a multi-tenant, decentralized platform that handles the entire lifecycle of an AI agent.
              </p>
              <div className="bg-black/50 backdrop-blur-lg border border-[#63f2d2]/20 rounded-lg p-8 mb-6">
                <p className="text-[#63f2d2] font-sentient text-xl mb-4">Our core promise is simple:</p>
                <p className="text-white font-mono text-base">A developer can deploy a scalable AI agent as easily as they deploy a website on Vercel.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-lg p-6">
                  <h3 className="text-lg font-sentient text-[#BEF264] mb-2">For Developers</h3>
                  <p className="text-neutral-400 font-mono text-sm leading-relaxed">We provide a Git-based workflow. Write your agent in a Python file, push it to your repository, and our platform automatically containerizes it, deploys it to Kubernetes, and gives you a unique, shareable endpoint (&lt;agent-name&gt;.&lt;your-name&gt;.0rca.fun).</p>
                </div>
                <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-lg p-6">
                  <h3 className="text-lg font-sentient text-[#BEF264] mb-2">For Users & Orchestrators</h3>
                  <p className="text-neutral-400 font-mono text-sm leading-relaxed">We provide a single, discoverable network of agents. Our Orchestrator (the "brain") can see every available agent, understand its capabilities, and automatically hire a "squad" of them to execute complex, multi-step tasks.</p>
                </div>
                <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-lg p-6">
                  <h3 className="text-lg font-sentient text-[#BEF264] mb-2">For the Ecosystem</h3>
                  <p className="text-neutral-400 font-mono text-sm leading-relaxed">We provide an on-chain registry (built on Cronos) that acts as the "proof of ownership" and the payment ledger, ensuring all interactions are transparent and trustworthy.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 3 */}
        <section className="relative py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white mb-8">3. Core Architecture</h2>
              <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-8">
                The 0rca platform is composed of three primary layers that work in concert.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-sentient text-[#63f2d2] mb-4">3.1. The Agent Pods (The Workforce)</h3>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed mb-4">
                    This is our automated, multi-tenant Kubernetes (DOKS) cluster.
                  </p>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed mb-4">
                    When a developer pushes their code, a CI/CD pipeline (GitHub Actions) automatically:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-neutral-400 font-mono text-sm leading-relaxed list-disc">Builds the Python code into a standardized Docker container.</li>
                    <li className="text-neutral-400 font-mono text-sm leading-relaxed list-disc">Pushes the container to our private registry (DOCR).</li>
                    <li className="text-neutral-400 font-mono text-sm leading-relaxed list-disc">Deploys the container as a new Deployment and Service within our Kubernetes cluster.</li>
                    <li className="text-neutral-400 font-mono text-sm leading-relaxed list-disc">Secures it with a Horizontal Pod Autoscaler (HPA), allowing it to scale from 1 to 10+ replicas based on real-time traffic.</li>
                  </ul>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed mt-4">
                    This means an agent that goes viral will scale automatically, and an agent that is idle will scale down, saving costs.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-sentient text-[#63f2d2] mb-4">3.2. The MCP Gateway (The Discovery Layer)</h3>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed mb-4">
                    This is the "auto-discovery magic" from your presentation. The Gateway is a service running inside our cluster that has one job: talk to the Kubernetes API.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-neutral-400 font-mono text-sm leading-relaxed list-disc">It constantly watches the cluster for new Services that have the label 0rca-agent: "true".</li>
                    <li className="text-neutral-400 font-mono text-sm leading-relaxed list-disc">When it discovers a new agent, it automatically queries that agent's internal openapi.json endpoint to read its functions, inputs, and docstrings.</li>
                    <li className="text-neutral-400 font-mono text-sm leading-relaxed list-disc">It compiles this information into a single, comprehensive "tool list" that it provides to the Orchestrator.</li>
                  </ul>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed mt-4">
                    This means the moment a developer's agent is deployed, it is instantly available for the Orchestrator to use.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-sentient text-[#63f2d2] mb-4">3.3. The Orchestrator (The Brain)</h3>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed mb-4">
                    The Orchestrator is the central LLM that acts as the user's "general contractor." It follows a two-part Plan-and-Execute model:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-lg p-6">
                      <h4 className="text-lg font-sentient text-[#BEF264] mb-2">The Planner</h4>
                      <p className="text-neutral-400 font-mono text-sm leading-relaxed">A user sends a high-level goal (e.g., "Find the latest news about Cronos and write a blog post"). The Orchestrator first fetches the complete "tool list" from the MCP Gateway. It then uses its reasoning to create a step-by-step JSON plan.</p>
                    </div>
                    <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-lg p-6">
                      <h4 className="text-lg font-sentient text-[#BEF264] mb-2">The Executor</h4>
                      <p className="text-neutral-400 font-mono text-sm leading-relaxed">The Orchestrator takes this JSON plan and executes it, step by step. It calls the video-script-writer agent, waits for the result, then feeds that result to the voice-synthesizer agent, and so on.</p>
                    </div>
                  </div>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed mt-4">
                    All internal communication happens over the fast, secure K8s internal network.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 4 */}
        <section className="relative py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white mb-8">4. The On-Chain Layer: Cronos as the Trust Protocol</h2>
              <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-8">
                Our backend provides the speed and scalability, but the Cronos blockchain provides the truth.
              </p>
              <div className="space-y-6">
                <div className="bg-black/50 backdrop-blur-lg border border-[#63f2d2]/20 rounded-lg p-6">
                  <h3 className="text-xl font-sentient text-[#63f2d2] mb-3">4.1. The Agent Registry Contract</h3>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed">Before a developer can deploy, they must first make a single, simple on-chain call to our AgentRegistry smart contract. This call registers their wallet address and creates a new, unique on_chain_agent_id. This is their permanent, unforgeable proof of ownership for every agent they create.</p>
                </div>
                <div className="bg-black/50 backdrop-blur-lg border border-[#63f2d2]/20 rounded-lg p-6">
                  <h3 className="text-xl font-sentient text-[#63f2d2] mb-3">4.2. On-Chain Payments</h3>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed">When the Orchestrator "hires" an agent to perform a task, it initiates an on-chain transaction. This payment from the user to the agent developer is recorded immutably on the Cronos ledger.</p>
                </div>
                <div className="bg-black/50 backdrop-blur-lg border border-[#63f2d2]/20 rounded-lg p-6">
                  <h3 className="text-xl font-sentient text-[#63f2d2] mb-3">4.3. Verifiable Reputation</h3>
                  <p className="text-neutral-300 font-mono text-sm leading-relaxed">This on-chain ledger of jobs and payments allows us to build a Verifiable Reputation System. An agent's "5-star rating" isn't just a number in our database; it's a score derived from thousands of proven, successful on-chain transactions.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 5 */}
        <section className="relative py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white mb-8">5. Scalability & Cost-Efficiency</h2>
              <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-6">
                Our architecture is designed for massive, cost-effective scale from day one.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Horizontal Pod Autoscaling (HPA)", text: "As described, agents scale based on CPU and RAM load." },
                  { title: "Cluster Autoscaler", text: "If the HPA tries to create more pods than our servers can handle, the Cluster Autoscaler automatically provisions new Droplets (nodes) from DigitalOcean. When load is low, it terminates empty nodes." },
                  { title: "Spot Instances", text: "We will run all stateless agent workloads on \"spot instances\"—spare server capacity bought at up to 80% discount. This dramatically reduces infrastructure costs." },
                  { title: "Scale-to-Zero", text: "Our future roadmap includes implementing Knative, which will allow us to scale idle agents down to zero pods, meaning they cost nothing until the moment they are called." }
                ].map((item) => (
                  <div key={item.title} className="bg-[#1A1A1A] border border-[#63f2d2]/10 rounded-lg p-6">
                    <h3 className="text-base font-sentient text-[#BEF264] mb-2">{item.title}</h3>
                    <p className="text-neutral-400 font-mono text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 6 */}
        <section className="relative py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-sentient text-white mb-8">6. Roadmap</h2>
              <div className="space-y-4">
                {[
                  { phase: "Phase 1 (Current)", text: "Core platform development, DOKS pipeline setup, MCP Gateway and Orchestrator (v1) deployment." },
                  { phase: "Phase 2 (Near Term)", text: "Launch \"The POD\" marketplace UI, implement on-chain payments with the Cronos registry, and release developer dashboards for analytics." },
                  { phase: "Phase 3 (Long Term)", text: "Implement a full 0rca DAO for governance, decentralize the Orchestrator layer, and introduce advanced cost-saving measures like Scale-to-Zero." }
                ].map((item) => (
                  <div key={item.phase} className="bg-black/50 backdrop-blur-lg border border-[#63f2d2]/20 rounded-lg p-6">
                    <h3 className="text-lg font-sentient text-[#63f2d2] mb-2">{item.phase}</h3>
                    <p className="text-neutral-300 font-mono text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Conclusion */}
        <section className="relative py-16 px-4 pb-32">
          <div className="container max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-gradient-to-br from-[#63f2d2]/10 to-[#BEF264]/10 border border-[#63f2d2]/30 rounded-lg p-8">
                <h2 className="text-3xl md:text-4xl font-sentient text-white mb-6">7. Conclusion</h2>
                <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed">
                  The 0rca Protocol is an ambitious solution to a fundamental problem. We are creating the necessary bridge between the brilliant, isolated AI agents of today and the collaborative, autonomous economy of tomorrow. By providing a "batteries-included" platform for deployment, discovery, and orchestration, we empower developers to build and monetize their creations, while providing the world with a single, trusted gateway to a global network of AI agents.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
