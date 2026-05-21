import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athelaemera",
  description: "Architecting high-performance digital utilities for frictionless collaboration. Something absolute is brewing.",
  keywords: ["Athelaemera", "Digital Utilities", "High-Performance", "Collaboration"],
  authors: [{ name: "Athelaemera Studio" }],
  icons: {
    icon: "/logo.svg", // Mengarahkan logo di folder public sebagai ikon tab browser
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body>{children}</body>
    </html>
  );
}