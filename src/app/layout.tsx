import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MBG Cost Tracker — Estimasi Biaya Program Makan Bergizi Gratis",
  description:
    "Dashboard estimasi transparan yang melacak belanja program Makan Bergizi Gratis (MBG) Indonesia menggunakan alokasi anggaran resmi, data realisasi, dan perhitungan turunan. Bukan feed data real-time perbendaharaan negara.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  keywords: [
    "MBG",
    "Makan Bergizi Gratis",
    "Indonesia",
    "anggaran",
    "belanja negara",
    "estimasi biaya",
    "BGN",
    "Badan Gizi Nasional",
    "transparansi",
  ],
  openGraph: {
    title: "MBG Cost Tracker — Estimasi Biaya Program Makan Bergizi Gratis",
    description:
      "Dashboard publik transparan untuk mengestimasi skala program MBG Indonesia menggunakan data resmi dan rumus turunan.",
    type: "website",
    locale: "id_ID",
    siteName: "MBG Cost Tracker",
  },
  twitter: {
    card: "summary_large_image",
    title: "MBG Cost Tracker",
    description:
      "Dashboard estimasi transparan untuk belanja program Makan Bergizi Gratis (MBG) Indonesia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
