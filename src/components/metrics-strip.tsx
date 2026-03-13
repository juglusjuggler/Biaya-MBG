"use client";

import { motion } from "framer-motion";
import { metrics } from "@/lib/data";
import { StatCard } from "./stat-card";

export function MetricsStrip() {
  const display = metrics.filter((m) => m.id !== "status-data");
  return (
    <section className="py-16 md:py-24 bg-slate-50/60 dark:bg-slate-950/60" id="metrik">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Ringkasan Metrik
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Angka-angka utama anggaran, realisasi, dan perhitungan turunan yang
            mendasari dashboard ini. Setiap metrik dilabeli dengan klasifikasi
            sumbernya.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {display.map((metric, i) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <StatCard metric={metric} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
