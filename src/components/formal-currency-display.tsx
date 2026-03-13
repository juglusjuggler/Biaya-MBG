"use client";

import { formatRupiah } from "@/lib/format";

/**
 * Komponen tampilan mata uang Rupiah formal.
 * Menampilkan angka sebagai satu baris utuh yang kuat dan berwibawa.
 * Tidak memecah angka menjadi fragmen visual yang berbeda.
 */
export function FormalCurrencyDisplay({ amount }: { amount: number }) {
  const formatted = formatRupiah(amount);

  return (
    <div className="text-center">
      <p
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-none tabular-nums"
        aria-label={`Estimasi biaya berjalan: ${formatted}`}
      >
        {formatted}
      </p>
    </div>
  );
}
