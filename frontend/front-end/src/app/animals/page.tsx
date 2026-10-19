"use client";

import Image from "next/image";
import Link from "next/link";
import { PawPrint } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import { useSatwaList } from "@/hooks/useSatwaList";
import { getImageUrl } from "@/lib/getImageUrl";

export default function AnimalsPage() {
  const { data = [], isLoading, isError } = useSatwaList();

  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[60vh] max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-black">Satwa Membutuhkan Bantuan</h1>
          <p className="mt-3 text-slate-600">Kenali satwa dan pilih yang ingin Anda bantu.</p>
        </div>
        {isLoading && <p role="status">Memuat daftar satwa...</p>}
        {isError && <p role="alert" className="rounded-xl bg-red-50 p-5 text-red-700">Data satwa gagal dimuat. Silakan coba lagi.</p>}
        {!isLoading && !isError && data.length === 0 && <p className="rounded-xl border p-8 text-slate-600">Belum ada satwa yang tersedia.</p>}
        {!isLoading && !isError && data.length > 0 && <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{data.map((animal) => <Link key={animal.id} href={`/animals/${animal.id}`} className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="relative h-56 bg-slate-100"><Image src={animal.foto ? getImageUrl(animal.foto) : "/file.svg"} alt={animal.nama} fill className="object-cover" /></div><div className="space-y-3 p-5"><div className="flex items-center justify-between gap-3"><h2 className="text-xl font-bold">{animal.nama}</h2><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">{animal.jenis}</span></div><p className="flex items-center gap-2 text-slate-500"><PawPrint size={17} />{animal.ras || "Satwa"}</p><p className="font-semibold text-green-700">Dana terkumpul: Rp {Number(animal.danaTerkumpul).toLocaleString("id-ID")}</p><span className="inline-flex rounded-lg bg-green-600 px-4 py-2 font-semibold text-white group-hover:bg-green-700">Lihat Detail</span></div></Link>)}</div>}
      </main>
      <Footer />
    </>
  );
}
