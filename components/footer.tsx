import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative z-10 mt-12 sm:mt-16 md:mt-20 border-t border-[var(--border)]/40 bg-[#05090E]">
      <div className="container px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6 md:mb-8">
          <h3 className="font-sentient text-lg sm:text-xl md:text-2xl text-center md:text-left">Join the Autonomous Future.</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 font-mono text-[10px] sm:text-xs md:text-sm">
            <Link href="/docs" className="hover:text-primary transition-colors">
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
        <div className="border-t border-[var(--border)]/20 pt-4 sm:pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 font-mono text-[10px] sm:text-xs md:text-sm text-secondary">
          <p>© 2025 0rca Protocol. Built by the 0rca Team.</p>
          <a href="mailto:zero80932@gmail.com" className="hover:text-primary transition-colors">
            zero80932@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
