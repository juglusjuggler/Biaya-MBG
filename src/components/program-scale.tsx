"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data";
import { formatRupiahCompact } from "@/lib/format";

export function ProgramScale() {
  const pagu2025 = metrics.find((m) => m.id === "pagu-2025");
  const realisasi2025 = metrics.find((m) => m.id === "realisasi-2025");
  const alokasi2026 = metrics.find((m) => m.id === "alokasi-2026");
  const targetPenerima = metrics.find((m) => m.id === "target-penerima-2026");
  const targetSPPG = metrics.find((m) => m.id === "target-sppg");

  const items = [
    {
      label: "Pagu 2025",
      value: pagu2025 ? formatRupiahCompact(pagu2025.value) : "-",
      sub: "Batas anggaran MBG 2025",
    },
    {
      label: "Realisasi 2025",
      value: realisasi2025 ? formatRupiahCompact(realisasi2025.value) : "-",
      sub: `Penyerapan ${metrics.find((m) => m.id === "persen-realisasi-2025")?.displayValue ?? "-"}`,
    },
    {
      label: "Alokasi 2026",
      value: alokasi2026 ? formatRupiahCompact(alokasi2026.value) : "-",
      sub: "Anggaran MBG 2026",
    },
    {
      label: "Target Penerima 2026",
      value: targetPenerima?.displayValue ?? "-",
      sub: "Sasaran penerima manfaat",
    },
    {
      label: "Target SPPG",
      value: targetSPPG?.displayValue ?? "-",
      sub: "Satuan pelayanan pangan",
    },
  ];

  return (
    <section className="py-16 md:py-24" id="skala">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Skala Program
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Ringkasan skala anggaran, target penerima manfaat, dan cakupan
            infrastruktur pelayanan.
          </p>
        </div>

        {/* Comparison bar */}
        <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-6 mb-6">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
            Perbandingan Anggaran (2025 vs 2026)
          </h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
                <span>Pagu 2025</span>
                <span>{pagu2025?.displayValue ?? "-"}</span>
              </div>
              <div className="h-4 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "21.2%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-slate-500"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1">
                <span>Alokasi 2026</span>
                <span>{alokasi2026?.displayValue ?? "-"}</span>
              </div>
              <div className="h-4 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="h-full rounded-full bg-blue-500"
                />
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Alokasi 2026 (Rp335T) meningkat ~4,7× dari pagu 2025 (Rp71T).
            </p>
          </div>
        </div>

        {/* Key figures */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-4 text-center"
            >
              <div className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {item.value}
              </div>
              <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-0.5">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
