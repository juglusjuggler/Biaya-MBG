"use client";

import { useState, useEffect } from "react";
import { phases } from "@/lib/data";
import {
  getCumulativeEstimate,
  getCurrentPhase,
  getPhaseRates,
  getPhaseEstimate,
  isPhaseActive,
} from "@/lib/calculations";
import { formatRupiahCompact } from "@/lib/format";
import { FormalCurrencyDisplay } from "./formal-currency-display";
import { SourceBadge } from "./source-badge";
import { WarningBanner } from "./warning-banner";
import { cn } from "@/lib/utils";

type ViewMode = "combined" | "2025" | "2026";

export function LiveCounter() {
  const [now, setNow] = useState(() => new Date());
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<ViewMode>("combined");

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setNow(new Date()), 100);
    return () => clearInterval(interval);
  }, []);

  const phase2025 = phases.find((p) => p.id === "2025-realisasi")!;
  const phase2026 = phases.find((p) => p.id === "2026-alokasi")!;

  const cumulative = getCumulativeEstimate(phases, now);
  const est2025 = getPhaseEstimate(phase2025, now);
  const est2026 = getPhaseEstimate(phase2026, now);

  const displayAmount =
    mode === "2025" ? est2025 : mode === "2026" ? est2026 : cumulative;

  const activePhase = getCurrentPhase(phases, now);
  const rates = activePhase ? getPhaseRates(activePhase) : null;

  const currentPhaseForMode =
    mode === "2025" ? phase2025 : mode === "2026" ? phase2026 : activePhase;

  const ratesForMode = currentPhaseForMode
    ? getPhaseRates(currentPhaseForMode)
    : rates;

  if (!mounted) {
    return (
      <div className="py-12">
        <div className="h-20 bg-slate-100 dark:bg-slate-800 rounded-xl animate-pulse max-w-2xl mx-auto" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Label */}
      <div className="text-center">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">
          Estimasi Biaya MBG yang Sudah Berjalan
        </p>
        <div className="flex items-center justify-center gap-2 mb-6">
          <SourceBadge type="derived" size="sm" />
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Berdasarkan rumus linear
          </span>
        </div>
      </div>

      {/* Main Amount */}
      <FormalCurrencyDisplay amount={displayAmount} />

      {/* Mode Selector */}
      <div className="flex items-center justify-center gap-1 flex-wrap mt-6">
        {([
          { key: "combined" as ViewMode, label: "Gabungan" },
          { key: "2025" as ViewMode, label: "Fase 2025" },
          { key: "2026" as ViewMode, label: "Fase 2026" },
        ] as const).map((opt) => (
          <button
            key={opt.key}
            onClick={() => setMode(opt.key)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              mode === opt.key
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Rate Metrics */}
      {ratesForMode && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-6">
          {[
            { label: "Per Detik", value: ratesForMode.perSecond },
            { label: "Per Menit", value: ratesForMode.perMinute },
            { label: "Per Jam", value: ratesForMode.perHour },
            { label: "Per Hari", value: ratesForMode.perDay },
          ].map((r) => (
            <div
              key={r.label}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 text-center"
            >
              <p className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                {formatRupiahCompact(r.value)}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {r.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Phase Summary */}
      <div className="max-w-3xl mx-auto space-y-2 mt-4">
        {phases.map((phase) => {
          const active = isPhaseActive(phase, now);
          const complete = now >= new Date(phase.endDate);
          return (
            <div
              key={phase.id}
              className={cn(
                "rounded-xl border p-4 flex items-center justify-between gap-4",
                active
                  ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20"
                  : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              )}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={cn(
                    "h-2 w-2 rounded-full shrink-0",
                    active
                      ? "bg-emerald-500 animate-pulse"
                      : complete
                      ? "bg-slate-400"
                      : "bg-slate-300"
                  )}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {phase.label}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {formatRupiahCompact(phase.totalAmount)} · {phase.basisType === "realized" ? "Realisasi" : "Alokasi"}
                  </p>
                </div>
              </div>
              <SourceBadge type={phase.badgeType} size="xs" />
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <WarningBanner variant="info" className="max-w-3xl mx-auto mt-4">
        <strong>Tentang penghitung ini:</strong> Linearisasi membagi total
        anggaran atau realisasi secara merata ke seluruh detik dalam periode.
        Ini adalah penyederhanaan matematis untuk tujuan ilustrasi. Pencairan
        oleh pemerintah tidak terjadi dengan laju konstan per detik.
      </WarningBanner>
    </div>
  );
}
