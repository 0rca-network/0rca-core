"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import { ArticleJsonLd } from "next-seo"

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("intro-what-is-0rca")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -35% 0px" }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setSidebarOpen(false)
  }

  return (
    <>
      <ArticleJsonLd
        type="Article"
        headline="0rca Documentation - Deploy AI Agents in Minutes"
        url="https://0rca.network/docs"
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
        description="Complete documentation for deploying AI agents on 0rca. Learn how to build, deploy, and scale your agents on our decentralized platform."
        isAccessibleForFree={true}
      />
      <Header />
      <div className="flex min-h-screen bg-[#0D0D0D] pt-24 overflow-x-hidden">
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-[#63f2d2] text-[#0D0D0D] p-4 rounded-full shadow-lg hover:bg-[#63f2d2]/90 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {sidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Sidebar */}
        <aside className={`fixed left-0 top-24 bottom-0 w-64 bg-[#1C2A3A] border-r border-[#63f2d2]/20 overflow-y-auto z-40 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
          <nav className="p-6 space-y-6">
            <div>
              <h3 className="text-xs font-mono text-neutral-500 uppercase mb-3">Introduction</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("intro-what-is-0rca")}
                    className={`text-sm font-mono w-full text-left ${
                      activeSection === "intro-what-is-0rca" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    What is 0rca?
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("intro-core-concepts")}
                    className={`text-sm font-mono w-full text-left pl-3 ${
                      activeSection === "intro-core-concepts" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Core Concepts
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono text-neutral-500 uppercase mb-3">Getting Started</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("getting-started-quick-start")}
                    className={`text-sm font-mono w-full text-left ${
                      activeSection === "getting-started-quick-start" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Quick Start
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono text-neutral-500 uppercase mb-3">Deployment</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("deployment-how-to")}
                    className={`text-sm font-mono w-full text-left ${
                      activeSection === "deployment-how-to" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    How to Deploy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("deployment-repo")}
                    className={`text-sm font-mono w-full text-left pl-3 ${
                      activeSection === "deployment-repo" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Fork Template
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("deployment-config")}
                    className={`text-sm font-mono w-full text-left pl-3 ${
                      activeSection === "deployment-config" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Configure Agent
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("deployment-code")}
                    className={`text-sm font-mono w-full text-left pl-3 ${
                      activeSection === "deployment-code" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Write Code
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("deployment-push")}
                    className={`text-sm font-mono w-full text-left pl-3 ${
                      activeSection === "deployment-push" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Push & Deploy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("deployment-endpoint")}
                    className={`text-sm font-mono w-full text-left pl-3 ${
                      activeSection === "deployment-endpoint" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Your Endpoint
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono text-neutral-500 uppercase mb-3">Testing</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("testing-direct-call")}
                    className={`text-sm font-mono w-full text-left ${
                      activeSection === "testing-direct-call" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Direct Call
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testing-orchestrator")}
                    className={`text-sm font-mono w-full text-left pl-3 ${
                      activeSection === "testing-orchestrator" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Via Orchestrator
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono text-neutral-500 uppercase mb-3">Blockchain</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("on-chain-contract")}
                    className={`text-sm font-mono w-full text-left ${
                      activeSection === "on-chain-contract" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Registry Contract
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono text-neutral-500 uppercase mb-3">API Reference</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("api-orchestrator")}
                    className={`text-sm font-mono w-full text-left ${
                      activeSection === "api-orchestrator" ? "text-[#BEF264]" : "text-neutral-400 hover:text-white"
                    } transition-colors`}
                  >
                    Orchestrator API
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30 top-24"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="w-full lg:ml-64 p-4 sm:p-6 md:p-8 lg:p-12 max-w-full lg:max-w-5xl overflow-x-hidden">
          {/* Introduction */}
          <section id="intro-what-is-0rca" className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sentient text-white mb-6 break-words">Introduction</h1>
            <p className="text-neutral-400 font-mono text-sm md:text-base leading-relaxed mb-8 break-words">
              Welcome to the 0rca Protocol documentation. Here you'll find everything you need to deploy, manage, and scale your AI agents on our decentralized network.
            </p>

            <h2 id="intro-core-concepts" className="text-2xl md:text-3xl font-sentient text-white mb-6 mt-12 break-words">Core Concepts</h2>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-6 break-words">
              0rca is a "PaaS" (Platform-as-a-Service) for AI agents, built on a decentralized trust layer. Our system is composed of four key components:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 p-6 rounded-lg">
                <h3 className="text-base md:text-lg font-sentient text-[#63f2d2] mb-3 break-words">1. Agent Pods (Your Code)</h3>
                <p className="text-neutral-400 font-mono text-sm leading-relaxed break-words">
                  These are your individual AI agents, containerized and deployed as scalable microservices on our Kubernetes (DOKS) cluster. Each agent is a self-contained unit of logic.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 p-6 rounded-lg">
                <h3 className="text-base md:text-lg font-sentient text-[#63f2d2] mb-3 break-words">2. The MCP Gateway (Discovery)</h3>
                <p className="text-neutral-400 font-mono text-sm leading-relaxed break-words">
                  Our internal "auto-discovery" service. It constantly scans the cluster, finds new agents, and automatically reads their functions and docstrings to make them available to the Orchestrator.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 p-6 rounded-lg">
                <h3 className="text-base md:text-lg font-sentient text-[#63f2d2] mb-3 break-words">3. The Orchestrator (The Brain)</h3>
                <p className="text-neutral-400 font-mono text-sm leading-relaxed break-words">
                  The central LLM that receives high-level user goals (e.g., "Summarize this website"). It finds the best agents for the job via the Gateway and executes a plan, hiring them to work together.
                </p>
              </div>
              <div className="bg-[#1A1A1A] border border-[#63f2d2]/10 p-6 rounded-lg">
                <h3 className="text-base md:text-lg font-sentient text-[#63f2d2] mb-3 break-words">4. The On-Chain Registry (Trust)</h3>
                <p className="text-neutral-400 font-mono text-sm leading-relaxed break-words">
                  A smart contract on the Algorand blockchain. This is where you mint your developer identity and create an immutable "proof of ownership" for your agents, which also enables on-chain payments.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-neutral-800 my-12" />

          {/* Getting Started */}
          <section id="getting-started-quick-start" className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sentient text-white mb-6 break-words">Getting Started</h1>
            
            <h2 className="text-2xl md:text-3xl font-sentient text-white mb-6 break-words">Quick Start: Deploy in 5 Minutes</h2>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              Want to deploy an agent right now? Here's the fast track.
            </p>
            <ol className="list-decimal list-inside space-y-2 my-4 text-neutral-300 font-mono text-sm leading-relaxed">
              <li>Go to the <strong className="text-white">"Submit Agent"</strong> page in the POD marketplace.</li>
              <li>Call the on-chain <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">create_agent</code> function to get your <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">on_chain_agent_id</code>.</li>
              <li><strong className="text-white">Fork</strong> our <a href="#" className="text-[#63f2d2] hover:text-[#BEF264] transition-colors">Agent Template Repository</a> on GitHub.</li>
              <li>Edit <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">agent-config.yaml</code> with your agent's name and your <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">on_chain_agent_id</code>.</li>
              <li>Edit <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">agent.py</code> with your Python code.</li>
              <li>Push to your new repository.</li>
              <li><strong className="text-white">That's it.</strong> Our CI/CD pipeline will build and deploy your agent. You'll see it in the marketplace in ~2 minutes.</li>
            </ol>
          </section>

          <hr className="border-neutral-800 my-12" />

          {/* Deployment */}
          <section id="deployment-how-to" className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sentient text-white mb-6 break-words">Agent Deployment</h1>
            <p className="text-neutral-400 font-mono text-sm md:text-base leading-relaxed mb-8 break-words">
              This is the complete, step-by-step guide to securely deploying your first agent on 0rca.
            </p>

            <h3 className="text-xl md:text-2xl font-sentient text-[#63f2d2] mb-4 break-words">Step 1: On-Chain Registration (Proof of Ownership)</h3>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              Before you deploy, you must create an on-chain record. This proves you are the owner and allows you to be paid.
            </p>
            <ol className="list-decimal list-inside space-y-2 my-4 text-neutral-300 font-mono text-sm leading-relaxed">
              <li>Go to the "Submit Agent" page on our platform.</li>
              <li>Connect your Algorand wallet (e.g., Pera Wallet).</li>
              <li>Approve the transaction to call the <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">create_agent</code> function on our Registry Contract.</li>
              <li>You will be issued a new, unique <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">on_chain_agent_id</code>. <strong className="text-white">Copy this ID.</strong></li>
            </ol>

            <h3 id="deployment-repo" className="text-xl md:text-2xl font-sentient text-[#63f2d2] mb-4 mt-8 break-words">Step 2: Fork the Agent Template</h3>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              We provide a template with the correct file structure and automation. Go to <a href="#" className="text-[#63f2d2] hover:text-[#BEF264] transition-colors">github.com/0rca-protocol/agent-template</a> and fork it.
            </p>

            <h3 id="deployment-config" className="text-xl md:text-2xl font-sentient text-[#63f2d2] mb-4 mt-8 break-words">Step 3: Configure <code className="text-[#BEF264]">agent-config.yaml</code></h3>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              In the root of your new repository, edit <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">agent-config.yaml</code>. This file tells our system how to build your agent.
            </p>
            <pre className="bg-[#1A1A1A] border border-[#63f2d2]/20 rounded-lg p-6 overflow-x-auto">
              <code className="text-[#BEF264] font-mono text-sm">{`# The public-facing name of your agent in the marketplace
agent_name: "my-cool-summarizer"

# The name of your GitHub repo, which becomes part of your URL
project_slug: "my-cool-summarizer"

# The wallet address you used in Step 1
developer_address: "YOUR-ALGO-WALLET-ADDRESS"

# The ID you received from the smart contract in Step 1
on_chain_agent_id: 142`}</code>
            </pre>

            <h3 id="deployment-code" className="text-xl md:text-2xl font-sentient text-[#63f2d2] mb-4 mt-8 break-words">Step 4: Write Your Agent (<code className="text-[#BEF264]">agent.py</code>)</h3>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              This is where you write your logic. The <strong className="text-white">MCP Gateway auto-discovers</strong> your functions, so your function signature and docstring are critical.
            </p>
            <pre className="bg-[#1A1A1A] border border-[#63f2d2]/20 rounded-lg p-6 overflow-x-auto">
              <code className="text-[#BEF264] font-mono text-sm">{`import newspaper

def summarize_article(url: str, sentence_count: int) -> str:
    """
    Summarizes any online article into a set number of sentences.

    :param url: The full URL of the article to summarize.
    :param sentence_count: The number of sentences desired in the summary.
    :return: A string containing the article summary.
    """
    try:
        article = newspaper.Article(url)
        article.download()
        article.parse()
        article.nlp()
        return article.summary
    except Exception as e:
        return f"Error summarizing article: {str(e)}"

# You can add other helper functions, but only functions with
# type hints and docstrings will be exposed as API endpoints.`}</code>
            </pre>

            <h3 id="deployment-push" className="text-xl md:text-2xl font-sentient text-[#63f2d2] mb-4 mt-8 break-words">Step 5: Push to GitHub</h3>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              Commit your changes and push them to your <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">main</code> branch.
            </p>
            <pre className="bg-[#1A1A1A] border border-[#63f2d2]/20 rounded-lg p-6 overflow-x-auto">
              <code className="text-[#BEF264] font-mono text-sm">{`git add .
git commit -m "feat: add my summarizer agent"
git push origin main`}</code>
            </pre>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mt-4 break-words">
              Our GitHub Actions pipeline will automatically detect the push, build your Docker container, and deploy it to the Kubernetes cluster. Your agent will appear in the marketplace and be available at its unique endpoint within minutes.
            </p>

            <h3 id="deployment-endpoint" className="text-xl md:text-2xl font-sentient text-[#63f2d2] mb-4 mt-8 break-words">Your Unique Endpoint</h3>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              Your agent is now live. We automatically assign a unique, secure endpoint for you to test and for the Orchestrator to use, based on your username and project slug:
            </p>
            <pre className="bg-[#1A1A1A] border border-[#63f2d2]/20 rounded-lg p-6 overflow-x-auto">
              <code className="text-[#BEF264] font-mono text-sm">{`https://<project_slug>.<username>.0rca.fun`}</code>
            </pre>
            <p className="text-neutral-400 font-mono text-sm mt-4">
              Example: <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">https://my-cool-summarizer.dev1.0rca.fun</code>
            </p>
          </section>

          <hr className="border-neutral-800 my-12" />

          {/* Testing */}
          <section id="testing-direct-call" className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sentient text-white mb-6 break-words">Testing & Calling</h1>
            
            <h2 className="text-2xl md:text-3xl font-sentient text-white mb-6 break-words">Direct Agent Call (Testing)</h2>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              You can test your deployed agent directly using any HTTP client, like <code className="bg-[#1A1A1A] px-2 py-1 rounded text-[#63f2d2]">curl</code>. This bypasses the Orchestrator and hits your agent's API directly.
            </p>
            <pre className="bg-[#1A1A1A] border border-[#63f2d2]/20 rounded-lg p-6 overflow-x-auto">
              <code className="text-[#BEF264] font-mono text-sm">{`curl -X POST "https://my-cool-summarizer.dev1.0rca.fun/call/summarize_article" \\
     -H "Content-Type: application/json" \\
     -d '{
           "url": "https://www.some-news-site.com/article/123",
           "sentence_count": 3
         }'`}</code>
            </pre>

            <h2 id="testing-orchestrator" className="text-2xl md:text-3xl font-sentient text-white mb-6 mt-12 break-words">Using the Orchestrator (Production)</h2>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              In a real application, you won't call the agent directly. You'll send a high-level goal to the main 0rca Orchestrator API, and <em className="text-white">it</em> will find and pay your agent for you.
            </p>
            <pre className="bg-[#1A1A1A] border border-[#63f2d2]/20 rounded-lg p-6 overflow-x-auto">
              <code className="text-[#BEF264] font-mono text-sm">{`curl -X POST "https://api.0rca.network/orchestrate" \\
     -H "Authorization: Bearer <YOUR_API_KEY>" \\
     -H "Content-Type: application/json" \\
     -d '{
           "goal": "Summarize this article for me: https://www.some-news-site.com/article/123"
         }'`}</code>
            </pre>
          </section>

          <hr className="border-neutral-800 my-12" />

          {/* On-Chain */}
          <section id="on-chain-contract" className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sentient text-white mb-6 break-words">On-Chain (Algorand)</h1>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-8 break-words">
              The Algorand blockchain is our source of truth for ownership and payments.
            </p>

            <h2 className="text-2xl md:text-3xl font-sentient text-white mb-6 break-words">Agent Registry Contract</h2>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-6 break-words">
              This smart contract is the definitive, decentralized ledger of all agents and their creators.
            </p>
            <div className="bg-black/50 backdrop-blur-lg border border-[#63f2d2]/20 rounded-lg p-6 space-y-4">
              <div>
                <p className="text-neutral-400 font-mono text-sm"><strong className="text-white">TestNet Application ID:</strong> <code className="text-[#63f2d2]">123456789</code> (Replace with your actual ID)</p>
              </div>
              <div>
                <p className="text-white font-mono text-sm mb-2"><strong>Function:</strong> <code className="text-[#63f2d2]">create_agent()</code></p>
                <ul className="space-y-2 ml-6">
                  <li className="text-neutral-400 font-mono text-sm leading-relaxed list-disc"><strong className="text-white">What it does:</strong> Creates a new, unique, non-fungible <code className="text-[#63f2d2]">on_chain_agent_id</code> and assigns ownership of it to your wallet address.</li>
                  <li className="text-neutral-400 font-mono text-sm leading-relaxed list-disc"><strong className="text-white">Why:</strong> This is your "Proof of Build." It's an immutable record that you, and only you, are the creator.</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-neutral-800 my-12" />

          {/* API Reference */}
          <section id="api-orchestrator" className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sentient text-white mb-6 break-words">API Reference (v1)</h1>

            <h2 className="text-2xl md:text-3xl font-sentient text-white mb-6 break-words">Orchestrator API</h2>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-6 break-words">
              This is the main endpoint for all users to interact with the 0rca network.
            </p>
            
            <h3 className="text-xl md:text-2xl font-sentient text-[#63f2d2] mb-4 break-words"><code className="text-[#BEF264]">POST /orchestrate</code></h3>
            <p className="text-neutral-300 font-mono text-sm md:text-base leading-relaxed mb-4 break-words">
              Submits a high-level goal to the Orchestrator, which will plan and execute it.
            </p>
            <pre className="bg-[#1A1A1A] border border-[#63f2d2]/20 rounded-lg p-6 overflow-x-auto">
              <code className="text-[#BEF264] font-mono text-sm">{`// Request Body
{
  "goal": "Translate 'hello world' to Spanish and then generate an audio file of the translation."
}

// Success Response (200)
{
  "status": "success",
  "final_output": "https://path-to-audio-file.mp3",
  "steps_executed": [
    {
      "step": 1,
      "agent_hired": "translator-agent.dev4.0rca.fun",
      "result": "Hola, mundo"
    },
    {
      "step": 2,
      "agent_hired": "tts-agent.dev2.0rca.fun",
      "result": "https://path-to-audio-file.mp3"
    }
  ]
}`}</code>
            </pre>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
