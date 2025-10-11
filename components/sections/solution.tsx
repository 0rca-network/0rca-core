import { Reveal } from "../reveal"

export function SolutionSection() {
  return (
    <section className="py-20 md:py-28 text-center" id="solution">
      <div className="container max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-sentient max-w-4xl mx-auto">The Conductor of the Digital Workforce.</h2>
          <p className="mt-4 font-mono text-secondary max-w-3xl mx-auto">
            Requests enter the Orchestrator, which coordinates specialist agents, settles payments on-chain, and returns
            one refined result.
          </p>
        </Reveal>

      <Reveal>
        <div className="mt-10 grid place-items-center">
          <div className="relative w-full max-w-3xl rounded-xl border border-[var(--border)]/40 p-8 backdrop-blur-md bg-[color:var(--scrim)] text-center">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="rounded-md border border-[var(--border)]/40 p-4">User Request</div>
              <div className="rounded-md border border-[var(--border)]/40 p-4 bg-[color:var(--scrim)]">
                Orchestrator
              </div>
              <div className="rounded-md border border-[var(--border)]/40 p-4">Refined Result</div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6 text-center">
              {["Agent A", "Agent B", "Agent C"].map((a) => (
                <div key={a} className="rounded-md border border-[var(--border)]/40 p-3 text-sm">
                  {a}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M10,15 L50,15 L90,15"
                  stroke="var(--primary)"
                  strokeWidth="0.6"
                  fill="none"
                  filter="url(#glow)"
                >
                  <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2.6s" repeatCount="indefinite" />
                </path>
                <path d="M50,15 L20,35" stroke="var(--primary)" strokeWidth="0.6" fill="none" opacity="0.7">
                  <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
                </path>
                <path d="M50,15 L50,35" stroke="var(--primary)" strokeWidth="0.6" fill="none" opacity="0.7">
                  <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite" />
                </path>
                <path d="M50,15 L80,35" stroke="var(--primary)" strokeWidth="0.6" fill="none" opacity="0.7">
                  <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.4s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  )
}
