"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";
import { formatDateShort } from "@/lib/format";
import { cn } from "@/lib/utils";

const categoryLabels: Record<string, string> = {
  launch: "Peluncuran",
  budget: "Anggaran",
  "food-safety": "Keamanan Pangan",
  operational: "Operasional",
};

const categoryColors: Record<string, string> = {
  launch: "bg-emerald-500",
  budget: "bg-blue-500",
  "food-safety": "bg-amber-500",
  operational: "bg-slate-500",
};

export function Timeline() {
  const sorted = [...timeline].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <section className="py-16 md:py-24" id="timeline">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Timeline Program
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Kronologi kejadian penting dalam penyelenggaraan program MBG.
          </p>
        </div>

        {/* Category legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400">
              <span className={cn("h-2.5 w-2.5 rounded-full", categoryColors[key])} />
              {label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-6">
            {sorted.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className={cn(
                    "relative flex items-start",
                    "sm:justify-center"
                  )}
                >
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute left-4 sm:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 border-white dark:border-slate-950 z-10",
                      categoryColors[entry.category] || "bg-slate-400"
                    )}
                    style={{ top: "1.25rem" }}
                  />

                  {/* Card */}
                  <div
                    className={cn(
                      "ml-10 sm:ml-0 sm:w-[calc(50%-2rem)]",
                      isLeft
                        ? "sm:mr-auto sm:pr-8 sm:text-right"
                        : "sm:ml-auto sm:pl-8 sm:text-left"
                    )}
                  >
                    <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-4">
                      <div
                        className={cn(
                          "flex items-center gap-2 mb-1.5",
                          isLeft ? "sm:justify-end" : "sm:justify-start"
                        )}
                      >
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {formatDateShort(entry.date)}
                        </span>
                        <span
                          className={cn(
                            "text-[10px] font-medium px-1.5 py-0.5 rounded",
                            "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                          )}
                        >
                          {categoryLabels[entry.category] || entry.category}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                        {entry.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
