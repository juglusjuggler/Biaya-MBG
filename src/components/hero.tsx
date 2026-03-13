"use client";

import { motion } from "framer-motion";
import { LiveCounter } from "./live-counter";
import { FileText, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative" id="hero">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-36 md:pb-24">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Estimasi Biaya Program
            <br />
            Makan Bergizi Gratis
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Dashboard ini menyajikan estimasi biaya program MBG berdasarkan
            alokasi anggaran, realisasi yang dipublikasikan, serta perhitungan
            yang dijelaskan secara terbuka.
          </p>
        </motion.div>

        {/* Live Counter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <LiveCounter />
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 px-6 py-4 text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Angka ini merupakan estimasi berbasis alokasi anggaran, realisasi
              yang dipublikasikan, dan rumus transparan.{" "}
              <strong className="text-slate-800 dark:text-slate-200">
                Bukan pelacakan transaksi kas negara secara real-time.
              </strong>
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#metodologi"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Lihat Metodologi
          </a>
          <a
            href="#sumber"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Lihat Sumber Data
          </a>
        </motion.div>
      </div>
    </section>
  );
}
