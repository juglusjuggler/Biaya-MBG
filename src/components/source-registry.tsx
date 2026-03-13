"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import { sources } from "@/lib/sources";
import { formatDate } from "@/lib/format";
import { SourceBadge } from "./source-badge";

export function SourceRegistry() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = sources.filter((s) => {
    const matchType = filter === "all" || s.sourceType === filter;
    const matchSearch =
      !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.organization.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <section className="py-16 md:py-24" id="sumber">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
            Registri Sumber Data
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Daftar lengkap sumber data yang digunakan dalam dashboard ini.
            Setiap sumber dilengkapi klasifikasi dan tautan ke dokumen asli.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari sumber..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {[
              { key: "all", label: "Semua" },
              { key: "official", label: "Resmi" },
              { key: "derived", label: "Turunan" },
              { key: "secondary", label: "Sekunder" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setFilter(opt.key)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  filter === opt.key
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Source list */}
        <div className="space-y-3">
          {filtered.map((source, i) => (
            <motion.div
              key={source.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 p-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug mb-1">
                    {source.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {source.organization}
                    {source.publishedAt && (
                      <>
                        {" · "}
                        {formatDate(source.publishedAt)}
                      </>
                    )}
                  </p>
                </div>
                <SourceBadge type={source.sourceType} />
              </div>
              {source.note && (
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {source.note}
                </p>
              )}
              {source.url && (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  Buka Sumber <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 py-8">
              Tidak ada sumber yang sesuai dengan filter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
