import { Reveal } from "../reveal"

const steps = [
  { title: "Submit Goal", desc: "Describe the outcome you want. 0rca handles the rest." },
  { title: "Plan Workflow", desc: "The Orchestrator composes a plan across the best agents." },
  { title: "Hire & Pay On-Chain", desc: "Incentives and settlements are handled trustlessly." },
  { title: "Result Delivered", desc: "A single refined output with provenance." },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 text-center" id="how-it-works">
      <div className="container max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-sentient max-w-4xl mx-auto">From Goal to Result, Seamlessly.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto">
          {steps.map((s) => (
            <Reveal
              key={s.title}
              className="rounded-lg border border-[var(--border)]/40 p-6 backdrop-blur-md bg-[color:var(--scrim)] text-center"
            >
              <h3 className="text-xl font-sentient">{s.title}</h3>
              <p className="font-mono text-secondary mt-2">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
