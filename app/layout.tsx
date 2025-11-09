import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { LocaleProvider } from './context/LocaleContext'

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ocaml.dk/"),
  title: {
    default: "OCaml's Universe",
    template: "%s | OCaml's Universe",
  },
  description:
    "OCaml Universe - Made by DAT5 Class of 2024-2027 at Aarhus University.",
  openGraph: {
    title: "OCaml's Universe",
    description:
      "OCaml Universe - Made by DAT5 Class of 2024-2027 at Aarhus University.",
    url: "https://www.ocaml.dk/",
    siteName: "OCaml's Universe",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-slate-900',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="min-h-screen flex flex-col">
        <LocaleProvider>
          <Navbar />
          <main className="flex-1 px-6 py-8">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
