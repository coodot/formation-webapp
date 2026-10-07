import type { Metadata } from 'next'
import Link from 'next/link'
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google'

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700'] })
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500'] })

export const metadata: Metadata = {
  title: 'Formation',
  description: 'How Formation handles user information.',
}

const CONTACT_EMAIL = 'swnumaster@gmail.com'

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. Introduction',
    body: (
      <p>
        This Privacy Policy explains how Formation (&quot;the App&quot;), developed by Formation,
        handles user information.
      </p>
    ),
  },
  {
    title: '2. Information We Collect',
    body: (
      <>
        <p>
          The App does <strong>not collect, store, or transmit any personal data</strong> to our
          servers or to any external servers. No account is required to use the App.
        </p>
        <p>
          The forms and records you create are stored locally on your device. They are not shared
          with the developer or any third parties.
        </p>
      </>
    ),
  },
  {
    title: '3. Backup and Export',
    body: (
      <>
        <p>
          Your data is never uploaded unless you choose to back it up. If you turn on iCloud
          backup, your data is stored in your own iCloud account and is handled by Apple under
          Apple&apos;s terms and privacy policy. The developer cannot access it.
        </p>
        <p>
          You can also export a backup file manually. Where that file is saved or shared is
          entirely up to you.
        </p>
      </>
    ),
  },
  {
    title: '4. Permissions',
    body: (
      <p>
        The App may request certain device permissions (for example, location access when you use
        a location field, or file access when you export or import a backup) solely to enable the
        feature you are using. These permissions are used only on your device and are not used to
        collect personal information.
      </p>
    ),
  },
  {
    title: '5. Third-Party Services',
    body: (
      <p>
        The App does not use third-party analytics, advertising, or tracking services. The only
        third-party service involved is iCloud, and only if you choose to enable it.
      </p>
    ),
  },
  {
    title: '6. Data Security',
    body: (
      <p>
        Because the App does not transmit your data to us, your information remains on your device
        unless you back it up or export it. You are responsible for securing your own device,
        iCloud account, and exported files.
      </p>
    ),
  },
  {
    title: "7. Children's Privacy",
    body: <p>The App does not knowingly collect any personal information from children.</p>,
  },
  {
    title: '8. Your Control',
    body: (
      <p>
        You can edit or delete your forms and records at any time within the App. Deleting the App
        removes its locally stored data from your device. Backups you created in iCloud and files
        you exported remain until you delete them yourself.
      </p>
    ),
  },
  {
    title: '9. Changes to This Policy',
    body: (
      <p>
        This Privacy Policy may be updated from time to time. The latest version is always
        available on this page.
      </p>
    ),
  },
  {
    title: '10. Contact',
    body: (
      <p>
        If you have any questions about this Privacy Policy, please contact:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 hover:opacity-80">
          {CONTACT_EMAIL}
        </a>
      </p>
    ),
  },
]

export default function PrivacyPage() {
  const link =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]'

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
            <Link
              href="/privacy"
              aria-current="page"
              className={`hidden sm:inline underline underline-offset-4 ${link}`}
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-lg bg-[#14262E] text-[#F1F2EE] text-xs font-medium hover:opacity-90 transition-opacity ${link}`}
            >
              Contact us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-6 pt-14 pb-20">
        <h1 className={`${display.className} text-4xl sm:text-5xl font-bold tracking-tight`}>
          Privacy Policy
        </h1>

        <div className="mt-12 space-y-10">
          {sections.map(({ title, body }) => (
            <section key={title} className="grid md:grid-cols-[1fr_2fr] gap-3 md:gap-12">
              <h2 className={`${display.className} text-xl font-bold`}>{title}</h2>
              <div className="leading-7 max-w-xl space-y-3 text-[#14262E]/80 [&_strong]:text-[#14262E] [&_strong]:font-medium">
                {body}
              </div>
            </section>
          ))}
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
