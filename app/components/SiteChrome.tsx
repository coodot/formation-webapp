import Link from 'next/link'
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google'

export const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700'] })
export const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500'] })

export const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]'

// Thin strip of the five "layers" used on the homepage
export function StrataBar() {
  return (
    <div className="flex h-1.5" aria-hidden="true">
      <div className="flex-1 bg-[#E8DCC2]" />
      <div className="flex-1 bg-[#CBD6C9]" />
      <div className="flex-1 bg-[#9DBDB7]" />
      <div className="flex-1 bg-[#2F6F6B]" />
      <div className="flex-1 bg-[#16303A]" />
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 bg-[#F1F2EE]/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className={`${display.className} text-xl font-bold ${focusRing}`}>
          Formation
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/#services" className={`hidden sm:inline hover:underline ${focusRing}`}>
            Services
          </Link>
          <Link href="/#approach" className={`hidden sm:inline hover:underline ${focusRing}`}>
            How we work
          </Link>
          <Link href="/#about" className={`hidden sm:inline hover:underline ${focusRing}`}>
            About
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-lg bg-[#14262E] text-[#F1F2EE] text-xs font-medium hover:opacity-90 transition-opacity ${focusRing}`}
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#14262E]/70">
      <p>© {new Date().getFullYear()} Formation. All rights reserved.</p>
      <div className="flex gap-5">
        <Link href="/privacy" className={`hover:underline ${focusRing}`}>
          Privacy Policy
        </Link>
        <Link href="/contact" className={`hover:underline ${focusRing}`}>
          Contact
        </Link>
      </div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${body.className} min-h-screen flex flex-col bg-[#F1F2EE] text-[#14262E]`}>
      <SiteHeader />
      <StrataBar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
