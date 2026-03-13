"use client";

import type { SourceType } from "@/lib/types";
import { cn } from "@/lib/utils";

const config: Record<SourceType, { label: string; className: string }> = {
  official: {
    label: "Data Resmi",
    className:
      "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
  },
  derived: {
    label: "Estimasi Turunan",
    className:
      "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
  },
  secondary: {
    label: "Sumber Sekunder",
    className:
      "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  },
  "not-verified": {
    label: "Belum Terverifikasi",
    className:
      "bg-red-50 text-red-800 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800",
  },
};

export function SourceBadge({
  type,
  size = "sm",
  className: extraClass,
}: {
  type: SourceType;
  size?: "xs" | "sm";
  className?: string;
}) {
  const { label, className } = config[type];
  const sizeClasses = {
    xs: "text-[10px] px-1.5 py-px",
    sm: "text-xs px-2 py-0.5",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-md border whitespace-nowrap",
        sizeClasses[size],
        className,
        extraClass
      )}
    >
      {label}
    </span>
  );
}
