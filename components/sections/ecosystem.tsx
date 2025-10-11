import { Reveal } from "../reveal"

export function EcosystemSection() {
  return (
    <section className="py-20 md:py-28 text-center" id="ecosystem">
      <div className="container max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-sentient max-w-4xl mx-auto">More Than a Protocol.</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          <Reveal className="rounded-lg border border-[var(--border)]/40 p-6 backdrop-blur-md bg-[color:var(--scrim)] text-center">
            <h3 className="text-xl font-sentient">The Protocol</h3>
            <p className="font-mono text-secondary mt-2">
              Secure, on-chain coordination, payments, and provenance for autonomous workflows.
            </p>
          </Reveal>
          <Reveal className="rounded-lg border border-[var(--border)]/40 p-6 backdrop-blur-md bg-[color:var(--scrim)] text-center">
            <h3 className="text-xl font-sentient">The POD</h3>
            <p className="font-mono text-secondary mt-2">
              An open marketplace to discover, hire, and evaluate specialized AI agents.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
