"use client";

import type { MetricEntry } from "@/lib/types";
import { SourceBadge } from "./source-badge";
import { cn } from "@/lib/utils";

export function StatCard({
  metric,
  className,
}: {
  metric: MetricEntry;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {metric.label}
        </p>
        <SourceBadge type={metric.sourceType} size="xs" />
      </div>

      <p className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 tabular-nums">
        {metric.displayValue}
      </p>

      <p className="text-xs text-slate-500 dark:text-slate-500 leading-relaxed">
        {metric.methodologyNote}
      </p>

      {metric.caveat && (
        <p className="text-xs text-amber-700 dark:text-amber-400 mt-2">
          {metric.caveat}
        </p>
      )}
    </div>
  );
}
