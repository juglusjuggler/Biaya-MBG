"use client";

import { formatRupiah } from "@/lib/format";

/**
 * Komponen tampilan mata uang Rupiah formal.
 * Menampilkan angka sebagai satu baris utuh yang kuat dan berwibawa.
 * Responsif: menyesuaikan ukuran teks agar tidak terpotong di layar kecil.
 */
export function FormalCurrencyDisplay({ amount }: { amount: number }) {
  const formatted = formatRupiah(amount);

  return (
    <div className="text-center w-full overflow-hidden px-2">
      <p
        className="text-[clamp(1.25rem,5vw,3.75rem)] font-bold text-slate-900 dark:text-white tracking-tight leading-none tabular-nums whitespace-nowrap"
        aria-label={`Estimasi biaya berjalan: ${formatted}`}
      >
        {formatted}
      </p>
    </div>
  );
}
