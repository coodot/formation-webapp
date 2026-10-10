import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google'

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['500', '700'] })
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500'] })

// TODO: paste your App Store link here. The download button is hidden while this is empty.
const APP_STORE_URL = ''

export const metadata: Metadata = {
  title: 'Formation – Custom Forms, Checklists & Logs',
  description:
    'One app for all your checklists, logs, and records. Create your own custom forms to organize, track, and record anything. Works offline, no account required.',
}

const features = [
  'Create unlimited custom forms with the fields you need',
  'Record anything using your own forms',
  'Build checklists, logs, and structured records',
  'Organize records with categories and templates',
  'Works completely offline',
  'Backup with iCloud or export manual backups',
  'No account required',
  'Your data stays on your device',
]

const fieldTypes = [
  'Text',
  'Number',
  'Date & Time',
  'Checkbox',
  'Dropdown',
  'Multiple Choice',
  'Rating',
  'Slider',
  'Sections and Groups',
]

const useCases = [
  'Shopping Lists',
  'Travel Checklists',
  'Vehicle Maintenance',
  'Home Maintenance',
  'Equipment Inspections',
  'Inventory Tracking',
  'Expense Records',
  'Reading Logs',
  'Health Tracking',
  'Habit Tracking',
  'Pet Records',
  'Gardening',
  'Collections',
  'Project Notes',
  'Daily Journals',
  'And much more',
]

const screens = [
  { src: '/screens/folders.jpg', alt: 'Formation home screen with folders for travel checklist, shopping checklist, and dive logs', caption: 'Folders for everything' },
  { src: '/screens/form.jpg', alt: 'A form with a wetsuit type choice, a weight field, and an equipment checklist', caption: 'Forms that fit your task' },
  { src: '/screens/options.jpg', alt: 'Editing the list of options for a multiple choice question', caption: 'Options you control' },
  { src: '/screens/fields.jpg', alt: 'The list of question types available when building a form', caption: 'Many field types' },
]

function Phone({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="rounded-[2.25rem] overflow-hidden bg-black ring-1 ring-black/15 shadow-[0_24px_60px_-20px_rgba(20,38,46,0.45)]">
      <Image src={src} alt={alt} width={621} height={1344} priority={priority} className="w-full h-auto block" />
    </div>
  )
}

function Pill({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <li
      className={`px-4 py-2 rounded-full text-sm font-medium border ${
        onDark ? 'border-[#F1F2EE]/40' : 'border-[#14262E]/35'
      }`}
    >
      {children}
    </li>
  )
}

export default function HomePage() {
  const link =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6F6B]'

  return (
    <div className={`${body.className} min-h-screen bg-[#F1F2EE] text-[#14262E]`}>
      {/* Header */}
      <header className="sticky top-0 z-10 bg-[#F1F2EE]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className={`${display.className} text-xl font-bold ${link}`}>
            Formation
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#features" className={`hidden sm:inline hover:underline ${link}`}>
              Features
            </a>
            <a href="#fields" className={`hidden sm:inline hover:underline ${link}`}>
              Fields
            </a>
            <a href="#use-cases" className={`hidden sm:inline hover:underline ${link}`}>
              Use cases
            </a>
            <Link
              href="/privacy"
              aria-current="page"
              className={`hidden sm:inline underline-offset-4 ${link}`}
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

      <main>
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-24 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <p className={`${display.className} text-xl font-bold text-[#2F6F6B]`}>
              Formation: custom forms, checklists &amp; logs
            </p>
            <h1
              className={`${display.className} mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight`}
            >
              One app for all your checklists, logs, and records.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#14262E]/75 max-w-lg">
              Create your own custom forms to organize, track, and record anything, all in one place.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {APP_STORE_URL && (
                <a
                  href={APP_STORE_URL}
                  className={`px-5 py-3 rounded-lg bg-[#2F6F6B] text-[#F1F2EE] text-sm font-medium hover:opacity-90 transition-opacity ${link}`}
                >
                  Download on the App Store
                </a>
              )}
              <a href="#features" className={`text-sm font-medium underline underline-offset-4 ${link}`}>
                See what it can do
              </a>
              <a href="formation://details">
                  Open in Formation App
              </a>
            </div>
            <p className="mt-6 text-sm text-[#14262E]/65">Works offline. No account required.</p>
          </div>
          <div className="max-w-[300px] w-full mx-auto md:ml-auto">
            <Phone
              src="/screens/checklist.jpg"
              alt="A New Zealand trip checklist with documents and clothing sections"
              priority
            />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-[#E8DCC2]" aria-labelledby="features-title">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-12">
            <div>
              <h2 id="features-title" className={`${display.className} text-3xl font-bold leading-tight`}>
                Key features
              </h2>
              <p className="mt-4 leading-7 max-w-sm text-[#14262E]/80">
                Formation lets you build fully customizable forms for checklists, logs,
                inventories, maintenance records, travel packing, shopping lists, inspections,
                collections, journals, and much more. Whether you&apos;re organizing daily tasks or
                managing detailed records, Formation adapts to your workflow.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5 content-start">
              {features.map(f => (
                <li key={f} className="flex gap-3 leading-7">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#2F6F6B]" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Screenshots */}
        <section className="bg-[#CBD6C9]" aria-labelledby="screens-title">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h2 id="screens-title" className={`${display.className} text-3xl font-bold`}>
              See it in action
            </h2>
            <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {screens.map(s => (
                <li key={s.src}>
                  <Phone src={s.src} alt={s.alt} />
                  <p className="mt-4 text-sm font-medium">{s.caption}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Field types */}
        <section id="fields" className="bg-[#9DBDB7]" aria-labelledby="fields-title">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-12">
            <div>
              <h2 id="fields-title" className={`${display.className} text-3xl font-bold leading-tight`}>
                Flexible form fields
              </h2>
              <p className="mt-4 leading-7 max-w-sm">
                Create forms using a variety of field types.
              </p>
            </div>
            <ul className="flex flex-wrap gap-3 content-start">
              {fieldTypes.map(f => (
                <Pill key={f}>{f}</Pill>
              ))}
            </ul>
          </div>
        </section>

        {/* Use cases */}
        <section id="use-cases" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-12" aria-labelledby="use-title">
          <h2 id="use-title" className={`${display.className} text-3xl font-bold leading-tight`}>
            Perfect for
          </h2>
          <ul className="flex flex-wrap gap-3 content-start">
            {useCases.map(u => (
              <Pill key={u}>{u}</Pill>
            ))}
          </ul>
        </section>

        {/* Privacy */}
        <section id="privacy" className="bg-[#2F6F6B] text-[#F1F2EE]" aria-labelledby="privacy-title">
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-12">
            <h2 id="privacy-title" className={`${display.className} text-3xl font-bold leading-tight`}>
              Privacy first
            </h2>
            <div className="max-w-xl space-y-4 leading-7">
              <p>
                Formation is designed with privacy in mind. Your information is stored locally on
                your device. No account is required, and your data is never uploaded unless you
                choose to back it up using iCloud or export it manually.
              </p>
              <p>
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F1F2EE]"
                >
                  Read the privacy policy
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-[#16303A] text-[#F1F2EE]">
          <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-lg">
              <h2 className={`${display.className} text-3xl sm:text-4xl font-bold leading-tight`}>
                Simple. Flexible. Yours.
              </h2>
              <p className="mt-4 leading-7 text-[#F1F2EE]/80">
                Create forms your way, record anything, and stay organized with Formation.
              </p>
            </div>
            {APP_STORE_URL ? (
              <a
                href={APP_STORE_URL}
                className="self-start px-5 py-3 rounded-lg bg-[#F1F2EE] text-[#14262E] text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F1F2EE]"
              >
                Download on the App Store
              </a>
            ) : (
              <Link
                href="/contact"
                className="self-start px-5 py-3 rounded-lg bg-[#F1F2EE] text-[#14262E] text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F1F2EE]"
              >
                Contact us
              </Link>
            )}
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#14262E]/70">
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
