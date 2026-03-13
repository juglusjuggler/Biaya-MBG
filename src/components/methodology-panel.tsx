"use client";

import { motion } from "framer-motion";
import { phases, metrics } from "@/lib/data";
import { sources } from "@/lib/sources";
import { formatDate } from "@/lib/format";
import { WarningBanner } from "./warning-banner";

export function MethodologyPanel() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/50" id="metodologi">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Metodologi
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Bagaimana estimasi biaya berjalan dihitung — rumus, asumsi, dan
            batasannya.
          </p>
        </div>

        {/* Formula */}
        <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 mb-6">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4">
            Rumus Linearisasi
          </h3>
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-lg p-4 font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
            <p>total_detik = (tanggal_akhir − tanggal_mulai) dalam detik</p>
            <p>biaya_per_detik = total_anggaran / total_detik</p>
            <p>estimasi_berjalan = detik_berlalu × biaya_per_detik</p>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              // Untuk tampilan gabungan:
            </p>
            <p>
              total = Σ(fase_selesai.total) + fase_aktif.estimasi_berjalan
            </p>
          </div>
        </div>

        {/* Phase details */}
        <div className="space-y-4 mb-6">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Detail Fase
          </h3>
          {phases.map((phase) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {phase.label}
                </h4>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {phase.basisType === "realized"
                    ? "Basis: Realisasi"
                    : "Basis: Alokasi"}
                </span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                {phase.formulaNote}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                <span>
                  Mulai:{" "}
                  {formatDate(phase.startDate)}
                </span>
                <span>
                  Akhir:{" "}
                  {formatDate(phase.endDate)}
                </span>
                <span>
                  Sumber:{" "}
                  {phase.sourceIds
                    .map(
                      (sid) =>
                        sources.find((s) => s.id === sid)?.organization || sid
                    )
                    .join(", ")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Assumptions & Limitations */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Asumsi Utama
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span className="text-slate-400 dark:text-slate-500">•</span>
                Belanja tersebar merata sepanjang setiap fase (linearisasi).
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400 dark:text-slate-500">•</span>
                Realisasi 2025 sebesar Rp52,9T dianggap final untuk
                fase tersebut.
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400 dark:text-slate-500">•</span>
                Target SPPG menggunakan titik tengah dari rentang yang dinyatakan.
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400 dark:text-slate-500">•</span>
                Alokasi 2026 diasumsikan tetap (tidak ada perubahan pagu
                pertengahan tahun).
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-5">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
              Keterbatasan
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span className="text-slate-400 dark:text-slate-500">•</span>
                Bukan feed data real-time dari perbendaharaan negara.
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400 dark:text-slate-500">•</span>
                Tidak memperhitungkan pola pencairan musiman atau bertahap.
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400 dark:text-slate-500">•</span>
                Estimasi turunan (biaya harian, per penerima) bersifat
                sangat kasar.
              </li>
              <li className="flex gap-2">
                <span className="text-slate-400 dark:text-slate-500">•</span>
                Metrik per-SPPG menggunakan titik tengah dari rentang target
                (37.500).
              </li>
            </ul>
          </div>
        </div>

        <WarningBanner variant="info">
          Semua rumus dan asumsi didokumentasikan di sini agar proses estimasi
          dapat diperiksa dan dikritisi. Jika terdapat kekeliruan, silakan
          laporkan.
        </WarningBanner>
      </div>
    </section>
  );
}
