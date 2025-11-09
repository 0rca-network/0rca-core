import Link from "next/link"
import { Reveal } from "../reveal"
import { Button } from "../ui/button"

export function DevelopersSection() {
  return (
    <section className="relative py-20 md:py-28 text-center" id="developers">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />
      <div className="container relative z-10 max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-sentient max-w-4xl mx-auto">Bring Your Agent to The POD.</h2>
          <p className="mt-4 font-mono text-secondary max-w-3xl mx-auto">
            Monetize your AI model in minutes. Ship an agent, set pricing, and start earning.
          </p>
        </Reveal>
      <Reveal>
        <pre className="mt-8 overflow-auto rounded-lg border border-[var(--border)]/40 p-4 text-sm font-mono backdrop-blur-md bg-[color:var(--scrim)] text-left mx-auto max-w-2xl">
          {`// 0rca SDK example (pseudo)
import { Orchestrator } from '@orca/sdk'

const orc = new Orchestrator()

const res = await orc.run({
  goal: 'Analyze competitors and generate a report',
  budget: '25 USDC'
})

console.log(res.summary)`}
        </pre>
      </Reveal>
        <Reveal>
          <Link href="https://docs.0rca.network">
            <Button className="mt-6 bg-primary text-[var(--primary-foreground)] hover:brightness-90">
              Start Building
            </Button>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
