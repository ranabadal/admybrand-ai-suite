import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} ADmyBRAND AI Suite</p>
        <nav className="flex gap-6">
          <Link href="#" aria-label="Github">
            <Github />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter />
          </Link>
          <Link href="mailto:support@admybrand.ai" aria-label="Email">
            <Mail />
          </Link>
        </nav>
      </div>
    </footer>
  )
}
