/**
 * Format angka sebagai Rupiah dengan pemisah ribuan titik.
 */
export function formatRupiah(amount: number): string {
  const rounded = Math.floor(amount);
  const formatted = rounded
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp${formatted}`;
}

/**
 * Format angka Rupiah besar dengan notasi kompak (M/T).
 */
export function formatRupiahCompact(amount: number): string {
  if (amount >= 1e12) {
    return `Rp${(amount / 1e12).toFixed(1).replace(".", ",")} T`;
  }
  if (amount >= 1e9) {
    return `Rp${(amount / 1e9).toFixed(1).replace(".", ",")} M`;
  }
  if (amount >= 1e6) {
    return `Rp${(amount / 1e6).toFixed(1).replace(".", ",")} Jt`;
  }
  return formatRupiah(amount);
}

/**
 * Format angka dengan pemisah ribuan.
 */
export function formatNumber(n: number, decimals = 0): string {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
}

const BULAN = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

const BULAN_PENDEK = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

/**
 * Parse year/month/day from a date string without timezone conversion.
 * Extracts the date portion directly from the string (YYYY-MM-DD)
 * so the result is identical on server and client regardless of timezone.
 */
function parseDateParts(dateStr: string): { year: number; month: number; day: number } {
  const datePart = dateStr.slice(0, 10); // "YYYY-MM-DD"
  const [y, m, d] = datePart.split("-").map(Number);
  return { year: y, month: m - 1, day: d };
}

/**
 * Format tanggal untuk tampilan dalam Bahasa Indonesia.
 * Deterministik — tidak bergantung pada locale atau timezone runtime.
 */
export function formatDate(dateStr: string): string {
  const { year, month, day } = parseDateParts(dateStr);
  return `${day} ${BULAN[month]} ${year}`;
}

/**
 * Format tanggal pendek ("6 Jan 2025").
 */
export function formatDateShort(dateStr: string): string {
  const { year, month, day } = parseDateParts(dateStr);
  return `${day} ${BULAN_PENDEK[month]} ${year}`;
}
