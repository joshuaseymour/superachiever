import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superachiever — Single Family Office Benefits",
  description: "Single Family Office Benefits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} bg-black text-zinc-50`}>
      <body className={`${GeistSans.className} bg-black text-zinc-50`}>
        <main className="bg-black text-zinc-50">
          {children}
        </main>
      </body>
    </html>
  );
}
