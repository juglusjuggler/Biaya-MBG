"use client";

import { motion } from "framer-motion";
import { explanationCards } from "@/lib/data";
import { Landmark, Receipt, Calculator, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { WarningBanner } from "./warning-banner";

const iconMap: Record<string, React.ElementType> = {
  landmark: Landmark,
  receipt: Receipt,
  calculator: Calculator,
  "shield-check": ShieldCheck,
};

export function ExplanationSection() {
  return (
    <section className="py-16 md:py-24" id="penjelasan">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Apa yang Ditampilkan Dashboard Ini?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Memahami perbedaan antara alokasi anggaran, realisasi belanja,
            estimasi berjalan, dan belanja aktual yang diaudit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {explanationCards.map((card, i) => {
            const Icon = iconMap[card.icon || ""] || Calculator;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className={cn(
                  "rounded-xl border p-5",
                  card.isHighlighted
                    ? "border-amber-200 bg-amber-50/40 dark:border-amber-800 dark:bg-amber-950/20"
                    : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
                )}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={cn(
                      "h-9 w-9 rounded-lg flex items-center justify-center",
                      card.isHighlighted
                        ? "bg-amber-100 dark:bg-amber-900/40"
                        : "bg-slate-100 dark:bg-slate-800"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4",
                        card.isHighlighted
                          ? "text-amber-700 dark:text-amber-400"
                          : "text-slate-600 dark:text-slate-400"
                      )}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <WarningBanner variant="warning">
          <strong>Perbedaan penting:</strong> Penghitung berjalan di dashboard
          ini bukan feed langsung dari transaksi pencairan kas negara. Ini
          merupakan estimasi linear berbasis rumus yang diturunkan dari total
          anggaran dan realisasi yang diketahui.
        </WarningBanner>
      </div>
    </section>
  );
}
