import type { Metadata } from "next";
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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
