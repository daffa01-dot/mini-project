import Link from "next/link";

export default function NotFoundPage() {
  return <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6"><section className="max-w-lg rounded-3xl border bg-white p-10 text-center shadow-sm"><p className="text-sm font-bold tracking-widest text-green-700">ERROR 404</p><h1 className="mt-3 text-3xl font-black">Halaman tidak ditemukan</h1><p className="mt-3 text-slate-600">Tautan mungkin sudah berubah atau halaman tidak tersedia. Silakan kembali ke halaman yang ingin Anda buka.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><Link href="/" className="rounded-xl bg-green-700 px-5 py-3 font-semibold text-white">Beranda</Link><Link href="/shelters" className="rounded-xl border px-5 py-3 font-semibold">Cari Shelter</Link><Link href="/animals" className="rounded-xl border px-5 py-3 font-semibold">Lihat Satwa</Link></div></section></main>;
}
