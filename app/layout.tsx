import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { SITE } from "@/lib/site"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.descriptor}`,
  description: SITE.summary,
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ backgroundColor: "#000" }}
      className={`antialiased ${geistMono.variable} font-sans ${geistSans.variable}`}
    >
      <body style={{ backgroundColor: "#000" }} className="text-zinc-50">
        <a
          href="#main"
          className="sr-only rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:ring-2 focus:ring-zinc-400"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
