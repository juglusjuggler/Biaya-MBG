"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { incidents } from "@/lib/data";
import { getSourceById } from "@/lib/sources";
import { formatDate } from "@/lib/format";
import { SourceBadge } from "./source-badge";
import { WarningBanner } from "./warning-banner";

export function RiskSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950/50" id="risiko">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Risiko Implementasi &amp; Keamanan Pangan
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Insiden terkait keamanan pangan dan risiko operasional yang
            dilaporkan dalam penyelenggaraan program MBG.
          </p>
        </div>

        <WarningBanner variant="warning" className="mb-6">
          Data insiden berasal dari siaran pers resmi BGN dan, jika disebutkan,
          pelaporan media sekunder. Jumlah insiden bersifat dinamis dan dapat
          berubah seiring investigasi berjalan.
        </WarningBanner>

        <div className="space-y-4">
          {incidents.map((incident, i) => {
            const source = incident.sourceId ? getSourceById(incident.sourceId) : undefined;
            return (
              <motion.div
                key={incident.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="rounded-xl border border-amber-200 bg-amber-50/40 dark:border-amber-800 dark:bg-amber-950/20 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="h-4 w-4 text-amber-700 dark:text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {incident.title}
                      </h3>
                      <SourceBadge type={incident.verificationStatus as "official" | "derived" | "secondary" | "not-verified"} />
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-2">
                      {incident.description}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                      <span>
                        Tanggal:{" "}
                        {formatDate(incident.date)}
                      </span>
                      <span>Sumber: {incident.reportingSource}</span>
                      {source?.url && (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                        >
                          Lihat Sumber →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {incidents.length === 0 && (
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 py-8">
            Belum ada insiden yang tercatat.
          </p>
        )}
      </div>
    </section>
  );
}
