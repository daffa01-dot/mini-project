"use client";

import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import ShelterGrid from "@/components/shelter/shelterGrid";
import { useShelters } from "@/hooks/useShelter";

export default function SheltersPage() {
  const { data, isLoading, isError } = useShelters();
  const shelters = data?.data ?? [];

  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[60vh] max-w-7xl space-y-8 px-6 py-12 lg:px-8">
        <div>
          <h1 className="text-4xl font-black">Temukan Shelter</h1>
          <p className="mt-3 text-slate-600">Pilih shelter yang ingin Anda bantu.</p>
        </div>
        {isLoading && <p role="status">Memuat daftar shelter...</p>}
        {isError && <p role="alert" className="rounded-xl bg-red-50 p-5 text-red-700">Data shelter gagal dimuat. Silakan coba lagi.</p>}
        {!isLoading && !isError && <ShelterGrid shelters={shelters} />}
        <Link href="/" className="inline-block text-green-700 hover:underline">Kembali ke beranda</Link>
      </main>
      <Footer />
    </>
  );
}
