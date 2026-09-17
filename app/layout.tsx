import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superachiever — Single Family Office Benefits",
  description: "Empowering superachievers with single family office benefits and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
