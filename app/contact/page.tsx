import type { Metadata } from 'next'
import Link from 'next/link'
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google'

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700'] })
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500'] })

export const metadata: Metadata = {
  title: 'Formation',
  description: 'Get in touch with Coodot about Formation: support, feedback, and questions.',
}

const CONTACT_EMAIL = 'swnumaster@gmail.com'

export default function ContactPage() {
  const link =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]'
  const onDarkFocus =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F1F2EE]'

  return (
    <div className={`${body.className} min-h-screen flex flex-col bg-[#F1F2EE] text-[#14262E]`}>
      {/* Header: same navigation as the home page */}
      <header className="sticky top-0 z-10 bg-[#F1F2EE]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className={`${display.className} text-xl font-bold ${link}`}>
            Formation
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/#features" className={`hidden sm:inline hover:underline ${link}`}>
              Features
            </Link>
            <Link href="/#fields" className={`hidden sm:inline hover:underline ${link}`}>
              Fields
            </Link>
            <Link href="/#use-cases" className={`hidden sm:inline hover:underline ${link}`}>
              Use cases
            </Link>
            <Link href="/privacy" className={`hidden sm:inline hover:underline ${link}`}>
              Privacy
            </Link>
            <Link
              href="/contact"
              aria-current="page"
              className={`px-4 py-2 rounded-lg bg-[#14262E] text-[#F1F2EE] text-xs font-medium hover:opacity-90 transition-opacity ${link}`}
            >
              Contact us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-12">
          <h1 className={`${display.className} text-4xl sm:text-5xl font-bold tracking-tight`}>
            Contact us
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#14262E]/75 max-w-xl">
            Questions about Formation, found a bug, or have an idea for a feature? Send us an email
            and we will get back to you as soon as we can.
          </p>
        </div>

        <section className="bg-[#16303A] text-[#F1F2EE]" aria-labelledby="email-title">
          <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 items-center">
            <h2 id="email-title" className={`${display.className} text-2xl font-bold`}>
              Email
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`text-lg underline underline-offset-4 hover:opacity-80 break-all ${onDarkFocus}`}
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`self-start px-5 py-3 rounded-lg bg-[#F1F2EE] text-[#14262E] text-sm font-medium hover:opacity-90 transition-opacity ${onDarkFocus}`}
              >
                Send an email
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-sm leading-7 text-[#14262E]/75">
            For details on how Formation handles your information, see our{' '}
            <Link href="/privacy" className={`underline underline-offset-4 ${link}`}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto w-full px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#14262E]/70">
        <p>© {new Date().getFullYear()} Formation. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className={`hover:underline ${link}`}>
            Privacy Policy
          </Link>
          <Link href="/contact" className={`hover:underline ${link}`}>
            Contact
          </Link>
        </div>
      </footer>
    </div>
  )
}
