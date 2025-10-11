import { Reveal } from "../reveal"

export function ProblemSection() {
  return (
    <section className="relative py-20 md:py-28 text-center" id="problem">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="container relative z-10 max-w-7xl mx-auto">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-sentient max-w-4xl mx-auto">AI is Powerful, but Siloed.</h2>
        <p className="mt-4 font-mono text-secondary max-w-3xl mx-auto">
          Complex integration, monetization hurdles, and a lack of trust slow teams down. 0rca unifies fragmented AI
          capabilities into a coordinated, verifiable workflow.
        </p>
      </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
          {[
            { title: "Complex Integration", desc: "Too many APIs, too much glue code and orchestration." },
            { title: "Monetization Hurdles", desc: "Hard to package, bill, and manage usage across agents." },
            { title: "Lack of Trust", desc: "Opaque results; provenance and payments missing or centralized." },
          ].map((it) => (
            <Reveal
              key={it.title}
              className="rounded-lg border border-[var(--border)]/40 p-6 backdrop-blur-md bg-[color:var(--scrim)] text-center"
            >
              <h3 className="font-sentient text-xl">{it.title}</h3>
              <p className="font-mono text-secondary mt-2">{it.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
