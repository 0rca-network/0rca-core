import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--border)]/40 bg-[#05090E]">
      <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-3">
          <h3 className="font-sentient text-base sm:text-lg text-center md:text-left">Join the Autonomous Future.</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs">
            <Link href="https://docs.0rca.network" className="hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="https://pod.0rca.network" className="hover:text-primary transition-colors">
              POD
            </Link>
            <a href="https://forum.0rca.network" className="hover:text-primary transition-colors">
              Forum
            </a>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/whitepaper" className="hover:text-primary transition-colors">
              Whitepaper
            </Link>
          </div>
        </div>
        <div className="border-t border-[var(--border)]/20 pt-3 flex flex-col md:flex-row items-center justify-between gap-2 font-mono text-xs text-secondary">
          <p>© 2025 0rca Protocol. Built by the 0rca Team.</p>
          <a href="mailto:zero80932@gmail.com" className="hover:text-primary transition-colors">
            zero80932@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
