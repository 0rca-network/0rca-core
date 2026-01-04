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
        <pre className="mt-8 overflow-auto rounded-lg border border-[var(--border)]/40 p-4 text-sm font-mono backdrop-blur-md bg-[color:var(--scrim)] text-left mx-auto max-w-4xl">
          {`from orca_agent_sdk import AgentConfig, AgentServer

def handle_task(job_input: str) -> str:
    # Implement your agent's core logic here
    # e.g., call an LLM, tools, vector search, etc.
    return f"Echo: {job_input}"

if __name__ == "__main__":
    config = AgentConfig(
        agent_id="my-agent-id",               # Unique identifier used by the marketplace
        receiver_address="MY_ALGO_ADDRESS",  # Algorand address to receive payments
        price_microalgos=1_000_000,          # Price per job in microAlgos
        # Optionally:
        # app_id=YOUR_MARKETPLACE_APP_ID,
        # algod_url="https://testnet-api.algonode.cloud",
        # indexer_url="https://testnet-idx.algonode.cloud",
    )

    AgentServer(config=config, handler=handle_task).run()`}
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
