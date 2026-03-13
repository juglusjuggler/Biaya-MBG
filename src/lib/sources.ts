import type { SourceEntry } from "./types";

export const sources: SourceEntry[] = [
  {
    id: "bgn-juknis",
    title: "Petunjuk Teknis (Juknis) Program MBG",
    organization: "Badan Gizi Nasional (BGN)",
    url: "https://www.bgn.go.id/juknis",
    publishedAt: "2025-01-01",
    sourceType: "official",
    supportsMetrics: ["target-sppg", "target-penerima", "tata-kelola"],
    confidence: "high",
    note: "Dokumen petunjuk teknis resmi untuk tata kelola program MBG, skala target, dan standar operasional.",
  },
  {
    id: "bgn-juknis-pdf",
    title: "Dokumen PDF Juknis BGN",
    organization: "Badan Gizi Nasional (BGN)",
    url: "https://cdn-web.bgn.go.id/juknis/01KFZQGR85YKY1HRMNDK4RRM1P.pdf",
    publishedAt: "2025-01-01",
    sourceType: "official",
    supportsMetrics: ["target-sppg", "tata-kelola", "sertifikasi-keamanan-pangan"],
    confidence: "high",
    note: "Versi PDF lengkap petunjuk teknis BGN termasuk target SPPG dan persyaratan sertifikasi keamanan pangan.",
  },
  {
    id: "bgn-operational-sppg",
    title: "Daftar SPPG Operasional BGN",
    organization: "Badan Gizi Nasional (BGN)",
    url: "https://www.bgn.go.id/operasional-sppg",
    publishedAt: "2025-12-15",
    sourceType: "official",
    supportsMetrics: ["sppg-operasional"],
    confidence: "high",
    note: "Halaman resmi BGN yang mencantumkan lokasi SPPG yang beroperasi saat ini. Halaman ini bersifat dinamis.",
  },
  {
    id: "bgn-food-safety-press",
    title: "Siaran Pers: Waka BGN Sampaikan Permintaan Maaf dan Penutupan Dapur Pelanggar SOP",
    organization: "Badan Gizi Nasional (BGN)",
    url: "https://www.bgn.go.id/news/siaran-pers/waka-bgn-sampaikan-permintaan-maaf-dan-pastikan-tutup-dapur-yang-langgar-sop",
    publishedAt: "2025-06-01",
    sourceType: "official",
    supportsMetrics: ["insiden-keamanan-pangan"],
    confidence: "high",
    note: "Siaran pers resmi BGN terkait respons insiden keamanan pangan dan tindakan penutupan dapur pelanggar SOP.",
  },
  {
    id: "bgn-head-press",
    title: "Siaran Pers Kepala Badan Gizi Nasional",
    organization: "Badan Gizi Nasional (BGN)",
    url: "https://www.bgn.go.id/news/siaran-pers/siaran-pers-kepala-badan-gizi-nasional",
    publishedAt: "2025-06-01",
    sourceType: "official",
    supportsMetrics: ["tata-kelola", "respons-keamanan-pangan"],
    confidence: "high",
    note: "Siaran pers dari Kepala BGN mengenai progres implementasi dan tata kelola MBG.",
  },
  {
    id: "antara-2026-allocation",
    title: "Indonesia Alokasikan Rp335 Triliun untuk Program MBG Tahun 2026",
    organization: "Kantor Berita Antara",
    url: "https://en.antaranews.com/news/399809/indonesia-allocates-rp335-trillion-for-free-meals-program-in-2026",
    publishedAt: "2025-09-01",
    sourceType: "official",
    supportsMetrics: ["anggaran-2026", "target-penerima-2026"],
    confidence: "high",
    note: "Pelaporan primer dari Antara (kantor berita nasional) mengenai alokasi anggaran 2026 sebesar Rp335T dan target 82,9 juta penerima.",
  },
  {
    id: "antara-2025-realization",
    title: "Kemenkeu: MBG Serap Rp52,9 Triliun per Desember 2025 (74,6% dari Pagu)",
    organization: "Kantor Berita Antara",
    url: "https://www.antaranews.com/berita/5311804/kemenkeu-mbg-serap-rp529-triliun-per-desember-746-persen-dari-pagu",
    publishedAt: "2025-12-15",
    sourceType: "official",
    supportsMetrics: ["pagu-2025", "realisasi-2025", "persen-realisasi-2025"],
    confidence: "high",
    note: "Pelaporan primer dari Antara berdasarkan data Kementerian Keuangan. Penyerapan 74,6% dari pagu Rp71T = Rp52,9T terealisasi.",
  },
  {
    id: "reference-site",
    title: "Situs Referensi Estimasi BiayaMBG",
    organization: "Independen / Komunitas",
    url: "https://biayambg.vercel.app/",
    publishedAt: "2025-01-06",
    sourceType: "secondary",
    supportsMetrics: ["metodologi-penghitung"],
    confidence: "medium",
    note: "Situs estimasi referensi buatan komunitas. Metodologi penghitung menyebarkan anggaran/realisasi secara linear. Menjadi referensi konseptual untuk logika penghitung dashboard ini.",
  },
];

export function getSourceById(id: string): SourceEntry | undefined {
  return sources.find((s) => s.id === id);
}

export function getSourcesByType(type: SourceEntry["sourceType"]): SourceEntry[] {
  return sources.filter((s) => s.sourceType === type);
}
