import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--border)]/40 bg-[#05090E]">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="font-sentient text-2xl">Join the Autonomous Future.</h3>
          <div className="flex items-center gap-6 font-mono text-sm">
            <Link href="/docs" className="hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="/pod" className="hover:text-primary transition-colors">
              POD
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/whitepaper" className="hover:text-primary transition-colors">
              Whitepaper
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
