import Link from "next/link";

export default function AdminSheltersPage() {
  return <main className="max-w-3xl space-y-4"><h1 className="text-3xl font-bold">Kelola Shelter</h1><section className="rounded-2xl border bg-white p-6"><p className="text-slate-700">Pengelolaan dan verifikasi shelter untuk admin belum tersedia pada frontend versi ini.</p><Link className="mt-4 inline-block text-green-700 hover:underline" href="/shelters">Lihat daftar shelter publik</Link></section></main>;
}
