"use client";

import { motion } from "framer-motion";
import { computeCredibilitySummary } from "@/lib/data";

export function CredibilityPanel() {
  const summary = computeCredibilitySummary();

  const items = [
    {
      label: "Data Resmi",
      count: summary.official,
      color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
      bar: "bg-emerald-500",
    },
    {
      label: "Estimasi Turunan",
      count: summary.derived,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
      bar: "bg-blue-500",
    },
    {
      label: "Sumber Sekunder",
      count: summary.secondary,
      color: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
      bar: "bg-slate-400",
    },
    {
      label: "Belum Terverifikasi",
      count: summary.cautionary,
      color: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
      bar: "bg-amber-500",
    },
  ];

  const activeItems = items.filter((item) => item.count > 0);

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Status Kredibilitas Data
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Ringkasan klasifikasi sumber untuk {summary.total} metrik yang
            ditampilkan di dashboard ini.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-6">
          {/* Bar */}
          <div className="h-3 rounded-full overflow-hidden flex mb-6">
            {activeItems.map((item) => (
              <motion.div
                key={item.label}
                initial={{ width: 0 }}
                whileInView={{
                  width: `${(item.count / summary.total) * 100}%`,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`${item.bar} first:rounded-l-full last:rounded-r-full`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {items.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.count}
                </div>
                <span
                  className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${item.color}`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
