import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ZYPP – Trottinette électrique libre‑service à Montpellier",
    template: "%s | ZYPP Montpellier",
  },
  description:
    "Location de trottinettes électriques en libre‑service à Montpellier. Mobilité urbaine rapide et pratique. Déplacements rapides 24h/24 avec l’application ZYPP.",
  keywords: [
    "location trottinette Montpellier",
    "trottinette électrique libre-service",
    "mobilité urbaine Montpellier",
    "déplacement rapide Montpellier",
    "scooter électrique",
    "micro-mobilité",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
