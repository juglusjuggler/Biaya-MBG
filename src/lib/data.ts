import type {
  PhaseConfig,
  MetricEntry,
  TimelineEntry,
  IncidentEntry,
  FAQEntry,
  ExplanationCard,
  CredibilitySummary,
} from "./types";

// ── Konfigurasi Fase ─────────────────────────────────────────────────────────

export const phases: PhaseConfig[] = [
  {
    id: "2025-realisasi",
    label: "Fase 2025 — Realisasi",
    startDate: "2025-01-06T00:00:00+07:00",
    endDate: "2025-12-31T23:59:59+07:00",
    totalAmount: 52_900_000_000_000,
    basisType: "realized",
    formulaNote:
      "Berdasarkan realisasi yang dilaporkan Kementerian Keuangan sebesar Rp52,9 triliun (74,6% dari pagu Rp71T) per 15 Desember 2025. Disebarkan secara linear sepanjang periode program 2025 untuk keperluan estimasi.",
    sourceIds: ["antara-2025-realization"],
    badgeType: "official",
  },
  {
    id: "2026-alokasi",
    label: "Fase 2026 — Alokasi",
    startDate: "2026-01-01T00:00:00+07:00",
    endDate: "2026-12-31T23:59:59+07:00",
    totalAmount: 335_000_000_000_000,
    basisType: "allocated",
    formulaNote:
      "Berdasarkan alokasi anggaran resmi 2026 sebesar Rp335 triliun untuk MBG. Disebarkan secara linear sepanjang 365 hari untuk keperluan estimasi. Pola pencairan aktual akan berbeda.",
    sourceIds: ["antara-2026-allocation"],
    badgeType: "derived",
  },
];

// ── Metrik Utama ─────────────────────────────────────────────────────────────

export const metrics: MetricEntry[] = [
  {
    id: "pagu-2025",
    label: "Pagu MBG 2025",
    value: 71_000_000_000_000,
    unit: "IDR",
    displayValue: "Rp71 T",
    sourceType: "official",
    sourceIds: ["antara-2025-realization"],
    methodologyNote:
      "Pagu anggaran yang disetujui untuk MBG pada tahun anggaran 2025.",
    lastReviewed: "2025-12-15",
    confidence: "high",
  },
  {
    id: "realisasi-2025",
    label: "Realisasi MBG 2025",
    value: 52_900_000_000_000,
    unit: "IDR",
    displayValue: "Rp52,9 T",
    sourceType: "official",
    sourceIds: ["antara-2025-realization"],
    methodologyNote:
      "Realisasi belanja MBG yang dilaporkan hingga 15 Desember 2025 oleh Kementerian Keuangan.",
    lastReviewed: "2025-12-15",
    confidence: "high",
  },
  {
    id: "persen-realisasi-2025",
    label: "Tingkat Realisasi 2025",
    value: 74.6,
    unit: "%",
    displayValue: "74,6%",
    sourceType: "official",
    sourceIds: ["antara-2025-realization"],
    methodologyNote:
      "Rp52,9T terealisasi dari pagu Rp71T = penyerapan anggaran 74,6%.",
    lastReviewed: "2025-12-15",
    confidence: "high",
  },
  {
    id: "alokasi-2026",
    label: "Alokasi MBG 2026",
    value: 335_000_000_000_000,
    unit: "IDR",
    displayValue: "Rp335 T",
    sourceType: "official",
    sourceIds: ["antara-2026-allocation"],
    methodologyNote:
      "Alokasi anggaran tahunan resmi untuk MBG pada tahun anggaran 2026.",
    lastReviewed: "2025-12-15",
    confidence: "high",
  },
  {
    id: "target-penerima-2026",
    label: "Target Penerima Manfaat 2026",
    value: 82_900_000,
    unit: "orang",
    displayValue: "82,9 juta",
    sourceType: "official",
    sourceIds: ["antara-2026-allocation"],
    methodologyNote:
      "Jumlah target penerima manfaat MBG tahun 2026 sebagaimana tercantum dalam laporan alokasi resmi.",
    lastReviewed: "2025-12-15",
    confidence: "high",
  },
  {
    id: "target-sppg",
    label: "Target SPPG",
    value: 37_500,
    unit: "SPPG",
    displayValue: "35.000–40.000",
    sourceType: "official",
    sourceIds: ["bgn-juknis"],
    methodologyNote:
      "Juknis BGN menargetkan 35.000–40.000 SPPG. Titik tengah 37.500 digunakan untuk perhitungan turunan.",
    lastReviewed: "2025-12-15",
    confidence: "high",
    caveat: "Angka target berupa rentang; titik tengah digunakan untuk perhitungan per-SPPG.",
  },
  {
    id: "estimasi-harian-2026",
    label: "Estimasi Biaya Harian (2026)",
    value: 917_808_219_178,
    unit: "IDR/hari",
    displayValue: "~Rp917,8 M/hari",
    sourceType: "derived",
    sourceIds: ["antara-2026-allocation"],
    methodologyNote:
      "Rp335T / 365 hari = ~Rp917,8 miliar per hari. Ini merupakan estimasi linear; pencairan harian aktual akan bervariasi.",
    lastReviewed: "2025-12-15",
    confidence: "medium",
    caveat: "Estimasi linear. Pencairan harian aktual akan berbeda.",
  },
  {
    id: "per-penerima-harian",
    label: "Est. Harian per Penerima (2026)",
    value: 11_072,
    unit: "IDR/orang/hari",
    displayValue: "~Rp11.072",
    sourceType: "derived",
    sourceIds: ["antara-2026-allocation"],
    methodologyNote:
      "Rp335T / 365 / 82,9 juta = ~Rp11.072 per penerima per hari. Estimasi sangat kasar dengan asumsi distribusi merata.",
    lastReviewed: "2025-12-15",
    confidence: "medium",
    caveat: "Sangat disederhanakan. Tidak memperhitungkan distribusi aktual, biaya operasional, atau peluncuran bertahap.",
  },
  {
    id: "per-sppg-tahunan",
    label: "Est. Tahunan per SPPG (2026)",
    value: 8_933_333_333,
    unit: "IDR/SPPG/tahun",
    displayValue: "~Rp8,93 M",
    sourceType: "derived",
    sourceIds: ["antara-2026-allocation", "bgn-juknis"],
    methodologyNote:
      "Rp335T / 37.500 (titik tengah target SPPG) = ~Rp8,93 miliar per SPPG per tahun. Sangat perkiraan.",
    lastReviewed: "2025-12-15",
    confidence: "medium",
    caveat: "Menggunakan estimasi titik tengah untuk jumlah SPPG. Alokasi aktual per dapur bergantung pada banyak faktor.",
  },
  {
    id: "status-data",
    label: "Tanggal Tinjauan Terakhir",
    value: 0,
    unit: "tanggal",
    displayValue: "15 Des 2025",
    sourceType: "official",
    sourceIds: [],
    methodologyNote: "Tanggal terakhir sumber data dashboard ini ditinjau.",
    lastReviewed: "2025-12-15",
    confidence: "high",
  },
];

// ── Kartu Penjelasan ─────────────────────────────────────────────────────────

export const explanationCards: ExplanationCard[] = [
  {
    title: "Anggaran Dialokasikan",
    description:
      "Jumlah yang disetujui pemerintah untuk MBG dalam tahun anggaran tertentu. Ini merupakan pagu belanja — batas maksimum yang diotorisasi, bukan jumlah yang benar-benar telah dibelanjakan.",
    icon: "landmark",
  },
  {
    title: "Realisasi Belanja",
    description:
      "Jumlah yang benar-benar telah dicairkan atau dibukukan sebagai belanja, berdasarkan laporan resmi dari Kementerian Keuangan atau instansi terkait. Hanya tersedia secara periodik.",
    icon: "receipt",
  },
  {
    title: "Estimasi Berjalan Berbasis Rumus",
    description:
      "Pendekatan linear yang menyebarkan total anggaran atau realisasi secara merata sepanjang periode waktu. Berguna untuk menggambarkan skala, tetapi bukan representasi pola pencairan kas negara yang sebenarnya.",
    isHighlighted: true,
    icon: "calculator",
  },
  {
    title: "Belanja Aktual yang Diaudit",
    description:
      "Data belanja pemerintah yang terverifikasi di tingkat transaksi, dikonfirmasi oleh lembaga audit resmi (misalnya BPK). Dashboard ini TIDAK menyediakan data semacam ini. Saat ini tidak ada dashboard publik yang menampilkan data ini secara real-time.",
    icon: "shield-check",
  },
];

// ── Timeline ─────────────────────────────────────────────────────────────────

export const timeline: TimelineEntry[] = [
  {
    id: "tl-1",
    date: "2025-01-06",
    title: "Program MBG Resmi Diluncurkan",
    category: "launch",
    description:
      "Program Makan Bergizi Gratis (MBG) secara resmi mulai beroperasi di Indonesia.",
    sourceType: "official",
    sourceId: "bgn-juknis",
  },
  {
    id: "tl-2",
    date: "2025-01-01",
    title: "Pagu MBG 2025 Disetujui: Rp71 Triliun",
    category: "budget",
    description:
      "Pagu anggaran tahun anggaran 2025 untuk MBG ditetapkan sebesar Rp71 triliun.",
    sourceType: "official",
    sourceId: "antara-2025-realization",
  },
  {
    id: "tl-3",
    date: "2025-06-01",
    title: "BGN Menangani Insiden Keamanan Pangan",
    category: "food-safety",
    description:
      "Wakil Kepala BGN menyampaikan permintaan maaf kepada publik dan mengonfirmasi penutupan dapur yang melanggar SOP.",
    sourceType: "official",
    sourceId: "bgn-food-safety-press",
  },
  {
    id: "tl-4",
    date: "2025-09-01",
    title: "Alokasi 2026 Diumumkan: Rp335 Triliun",
    category: "budget",
    description:
      "Pemerintah mengumumkan alokasi Rp335 triliun untuk MBG tahun 2026, menargetkan 82,9 juta penerima manfaat.",
    sourceType: "official",
    sourceId: "antara-2026-allocation",
  },
  {
    id: "tl-5",
    date: "2025-12-15",
    title: "Laporan Realisasi 2025: Penyerapan 74,6%",
    category: "budget",
    description:
      "Kemenkeu melaporkan realisasi belanja MBG sebesar Rp52,9 triliun — 74,6% dari pagu Rp71T.",
    sourceType: "official",
    sourceId: "antara-2025-realization",
  },
  {
    id: "tl-6",
    date: "2026-01-01",
    title: "Fase Anggaran MBG 2026 Dimulai",
    category: "budget",
    description:
      "Fase anggaran tahun 2026 untuk MBG dimulai dengan alokasi Rp335 triliun.",
    sourceType: "official",
    sourceId: "antara-2026-allocation",
  },
  {
    id: "tl-7",
    date: "2026-12-31",
    title: "Target: 35.000–40.000 SPPG Beroperasi",
    category: "operational",
    description:
      "Juknis BGN menargetkan 35.000–40.000 SPPG (Satuan Pelayanan Pangan Gratis) beroperasi pada tahap program matang.",
    sourceType: "official",
    sourceId: "bgn-juknis",
  },
];

// ── Insiden ──────────────────────────────────────────────────────────────────

export const incidents: IncidentEntry[] = [
  {
    id: "inc-1",
    title: "Pelanggaran SOP Keamanan Pangan Teridentifikasi",
    date: "2025-06-01",
    reportingSource: "Badan Gizi Nasional (BGN)",
    verificationStatus: "official",
    description:
      "BGN mengonfirmasi penutupan dapur-dapur yang ditemukan melanggar standar operasional prosedur. Jumlah lokasi dan individu terdampak disampaikan dalam siaran pers resmi.",
    sourceId: "bgn-food-safety-press",
  },
];

// ── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs: FAQEntry[] = [
  {
    id: "faq-1",
    question: "Apakah angka ini menunjukkan belanja negara secara real-time?",
    answer:
      "Tidak. Penghitung berjalan adalah estimasi berbasis rumus yang menyebarkan angka anggaran atau realisasi yang diketahui secara merata sepanjang waktu. Dashboard ini tidak terhubung ke sistem perbendaharaan negara dan tidak menyediakan data transaksi aktual.",
  },
  {
    id: "faq-2",
    question: "Dari mana rumus estimasinya berasal?",
    answer:
      "Untuk setiap fase, penghitung menghitung: biaya_per_detik = total_anggaran / total_detik_dalam_fase. Angka yang ditampilkan adalah detik_berjalan × biaya_per_detik, ditambah total fase sebelumnya yang telah selesai. Ini merupakan penyederhanaan linear.",
  },
  {
    id: "faq-3",
    question: "Apa beda alokasi anggaran dan realisasi belanja?",
    answer:
      "Alokasi anggaran adalah pagu belanja yang disetujui untuk tahun anggaran — batas maksimum yang diotorisasi. Realisasi belanja adalah jumlah yang benar-benar dicairkan atau dibukukan sebagai pengeluaran, berdasarkan laporan sumber resmi. Keduanya bisa berbeda secara signifikan.",
  },
  {
    id: "faq-4",
    question: "Kenapa angkanya terus bertambah setiap detik?",
    answer:
      "Penghitung menggunakan estimasi linear: membagi total anggaran atau realisasi dengan jumlah detik dalam periode tersebut dan terus bertambah. Ini adalah model visualisasi, bukan cerminan pencairan per detik oleh pemerintah.",
  },
  {
    id: "faq-5",
    question: "Apakah semua data di dashboard ini resmi?",
    answer:
      "Tidak. Setiap metrik diberi label klasifikasi sumber: Data Resmi, Estimasi Turunan, Sumber Sekunder, atau Belum Terverifikasi Penuh. Periksa label pada setiap metrik untuk memahami asal-usul datanya.",
  },
  {
    id: "faq-6",
    question: "Metrik mana yang merupakan estimasi?",
    answer:
      "Estimasi turunan mencakup tingkat alokasi harian, biaya per penerima, biaya per SPPG, dan penghitung berjalan itu sendiri. Semua dihitung dari angka resmi menggunakan rumus transparan, tetapi bukan data belanja yang diverifikasi secara independen.",
  },
  {
    id: "faq-7",
    question: "Bagaimana cara membaca bagian risiko implementasi?",
    answer:
      "Bagian Risiko Implementasi & Keamanan Pangan menggunakan data dari siaran pers resmi BGN dan, jika disebutkan, pelaporan media sekunder. Angka insiden bersifat dinamis dan dapat berubah seiring investigasi berjalan. Data ini tidak setara kepastiannya dengan angka anggaran resmi.",
  },
  {
    id: "faq-8",
    question: "Bagaimana jika sumber data berubah atau diperbarui?",
    answer:
      "Idealnya, registri sumber ditinjau setiap kali ada laporan resmi baru, revisi anggaran, atau data realisasi diterbitkan. Tanggal 'Tinjauan Terakhir' pada dashboard ini menunjukkan kapan data terakhir kali diperiksa.",
  },
];

// ── Ringkasan Kredibilitas ───────────────────────────────────────────────────

export function computeCredibilitySummary(): CredibilitySummary {
  const official = metrics.filter((m) => m.sourceType === "official").length;
  const derived = metrics.filter((m) => m.sourceType === "derived").length;
  const secondary = metrics.filter((m) => m.sourceType === "secondary").length;
  const cautionary = metrics.filter((m) => m.sourceType === "not-verified").length;
  return { official, derived, secondary, cautionary, total: metrics.length };
}
