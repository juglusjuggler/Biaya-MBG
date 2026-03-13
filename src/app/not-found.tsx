import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-slate-200 dark:text-slate-800 select-none">
          404
        </p>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mt-4 mb-2">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
          Halaman yang Anda cari tidak ada atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
        >
          ← Kembali ke Dashboard
        </Link>
      </div>
    </div>
  );
}
