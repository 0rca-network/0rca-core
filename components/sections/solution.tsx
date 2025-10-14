import { Reveal } from "../reveal"

export function SolutionSection() {
  return (
    <section className="relative py-20 md:py-28 text-center" id="solution">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />
      <div className="container relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-sentient max-w-4xl mx-auto">The Conductor of the Digital Workforce.</h2>
          <p className="mt-4 font-mono text-secondary max-w-3xl mx-auto">
            Requests enter the Orchestrator, which coordinates specialist agents, settles payments on-chain, and returns
            one refined result.
          </p>
        </Reveal>

      <Reveal>
        <div className="mt-10 grid place-items-center">
          <div className="relative w-full max-w-4xl">
            <div className="flex items-center justify-center gap-8">
              <div className="rounded-lg border border-[var(--border)]/40 p-6 backdrop-blur-md bg-[color:var(--scrim)] min-w-[140px] text-center">
                User Request
              </div>
              <svg width="60" height="24" className="flex-shrink-0">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="var(--primary)" />
                  </marker>
                </defs>
                <line x1="0" y1="12" x2="50" y2="12" stroke="var(--primary)" strokeWidth="2" markerEnd="url(#arrowhead)">
                  <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </line>
              </svg>
              <div className="rounded-lg border-2 border-primary/60 p-6 backdrop-blur-md bg-[color:var(--scrim)] min-w-[140px] text-center shadow-lg shadow-primary/20">
                Orchestrator
              </div>
              <svg width="60" height="24" className="flex-shrink-0">
                <line x1="0" y1="12" x2="50" y2="12" stroke="var(--primary)" strokeWidth="2" markerEnd="url(#arrowhead)">
                  <animate attributeName="stroke-opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
                </line>
              </svg>
              <div className="rounded-lg border border-[var(--border)]/40 p-6 backdrop-blur-md bg-[color:var(--scrim)] min-w-[140px] text-center">
                Refined Result
              </div>
            </div>
            <div className="mt-12 flex items-start justify-center gap-6">
              {["Agent A", "Agent B", "Agent C"].map((a, i) => (
                <div key={a} className="flex flex-col items-center gap-3">
                  <svg width="24" height="60" className="flex-shrink-0">
                    <line x1="12" y1="0" x2="12" y2="50" stroke="var(--primary)" strokeWidth="2" markerEnd="url(#arrowhead)" opacity="0.6">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + i * 0.2}s`} repeatCount="indefinite" />
                    </line>
                  </svg>
                  <div className="rounded-lg border border-[var(--border)]/40 p-4 backdrop-blur-md bg-[color:var(--scrim)] min-w-[120px] text-center text-sm">
                    {a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  )
}
