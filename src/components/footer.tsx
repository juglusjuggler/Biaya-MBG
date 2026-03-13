import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Tentang Dashboard
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Dashboard ini menyajikan estimasi biaya berjalan program Makan
              Bergizi Gratis (MBG) berdasarkan data resmi pemerintah.
              Penghitung berjalan merupakan model linear, bukan feed data
              real-time dari perbendaharaan negara.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Navigasi
            </h3>
            <ul className="space-y-1.5 text-xs">
              {[
                { label: "Metodologi", href: "#metodologi" },
                { label: "Sumber Data", href: "#sumber" },
                { label: "Skala Program", href: "#skala" },
                { label: "Timeline", href: "#timeline" },
                { label: "Pertanyaan Umum", href: "#faq" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Sumber Utama
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="https://www.bgn.go.id/juknis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Juknis BGN <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://en.antaranews.com/news/399809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Antara — Alokasi 2026{" "}
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.antaranews.com/berita/5311804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Antara — Realisasi 2025{" "}
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center sm:text-left">
              Dashboard ini dibuat untuk tujuan transparansi publik dan edukasi.
              Bukan representasi resmi pemerintah.
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500">
              Tinjauan terakhir: 15 Desember 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
