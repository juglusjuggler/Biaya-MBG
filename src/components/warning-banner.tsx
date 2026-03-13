"use client";

import { cn } from "@/lib/utils";
import { AlertTriangle, Info } from "lucide-react";

export function WarningBanner({
  children,
  variant = "warning",
  className,
}: {
  children: React.ReactNode;
  variant?: "warning" | "info";
  className?: string;
}) {
  const isWarning = variant === "warning";
  return (
    <div
      className={cn(
        "rounded-xl border px-5 py-4 flex items-start gap-3",
        isWarning
          ? "bg-red-50/80 border-red-200 dark:bg-red-950/30 dark:border-red-900"
          : "bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700",
        className
      )}
      role="alert"
    >
      {isWarning ? (
        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 shrink-0" />
      ) : (
        <Info className="h-5 w-5 text-slate-500 dark:text-slate-400 mt-0.5 shrink-0" />
      )}
      <div
        className={cn(
          "text-sm leading-relaxed",
          isWarning
            ? "text-red-900 dark:text-red-200"
            : "text-slate-700 dark:text-slate-300"
        )}
      >
        {children}
      </div>
    </div>
  );
}
