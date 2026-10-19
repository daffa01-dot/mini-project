"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, PawPrint, ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import DonateButton from "@/components/satwa/donateButton";
import { useSatwa } from "@/hooks/useSatwa";
import { getImageUrl } from "@/lib/getImageUrl";

export default function AnimalDetailPage() {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useSatwa(params.id);
  const animal = data;

  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[60vh] max-w-6xl px-6 py-12 lg:px-8">
        <Link href="/animals" className="mb-6 inline-flex items-center gap-2 text-green-700 hover:underline"><ArrowLeft size={18} />Kembali ke daftar satwa</Link>
        {isLoading && <p role="status">Memuat detail satwa...</p>}
        {isError && <p role="alert" className="rounded-xl bg-red-50 p-5 text-red-700">Detail satwa gagal dimuat. Silakan coba lagi.</p>}
        {!isLoading && !isError && !animal && <p>Satwa tidak ditemukan.</p>}
        {animal && <article className="grid gap-8 overflow-hidden rounded-3xl border bg-white p-5 shadow-sm md:grid-cols-2 md:p-8"><div className="relative min-h-72 overflow-hidden rounded-2xl bg-slate-100"><Image src={animal.foto ? getImageUrl(animal.foto) : "/file.svg"} alt={animal.nama} fill className="object-cover" /></div><div className="flex flex-col justify-center gap-5"><div><span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">{animal.jenis}</span><h1 className="mt-4 text-4xl font-black">{animal.nama}</h1><p className="mt-2 text-slate-500">{animal.ras} · {animal.umur} tahun · {animal.kelamin}</p></div><p className="leading-7 text-slate-700">{animal.deskripsi || "Belum ada deskripsi untuk satwa ini."}</p><div className="flex items-center gap-2 text-slate-600"><MapPin size={18} /><span>{animal.shelter?.namaShelter ?? "Shelter"}{animal.shelter?.kota ? `, ${animal.shelter.kota}` : ""}</span></div><div className="rounded-xl bg-green-50 p-4"><p className="text-sm text-slate-600">Dana terkumpul</p><p className="mt-1 text-2xl font-bold text-green-700">Rp {Number(animal.danaTerkumpul ?? 0).toLocaleString("id-ID")}</p></div><DonateButton satwaId={animal.id} shelterId={animal.shelterId} /><Link href={`/shelters/${animal.shelterId}`} className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:underline"><PawPrint size={17} />Lihat profil shelter</Link></div></article>}
      </main>
      <Footer />
    </>
  );
}
