"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDonation } from "@/hooks/useDonation";

function TransferContent() {
  const params = useSearchParams();
  const router = useRouter();
  const id = params.get("id") ?? "";
  const { data, isLoading, isError } = useDonation(id);

  if (isLoading) return <main className="p-8 text-center">Memuat detail transfer...</main>;
  if (isError || !data) return <main className="p-8 text-center">Detail donasi tidak ditemukan. Silakan periksa riwayat donasi.</main>;

  const rekening = data.shelter?.rekening;
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <section className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
        <p className="font-semibold text-emerald-700">Teman Asuh · Pembayaran Manual</p>
        <h1 className="mt-2 text-3xl font-bold">Transfer Donasi</h1>
        <p className="mt-2 text-slate-600">Transfer sesuai nominal ke rekening resmi shelter berikut. Donasi belum diverifikasi sampai bukti transfer diperiksa.</p>
        <div className="mt-6 space-y-4 rounded-2xl border p-5">
          <div><p className="text-sm text-slate-500">Nama Shelter</p><p className="font-semibold">{data.shelter?.namaShelter ?? "-"}</p></div>
          <div><p className="text-sm text-slate-500">Bank</p><p className="font-semibold">{rekening?.namaBank ?? "Rekening belum tersedia"}</p></div>
          <div><p className="text-sm text-slate-500">Nomor Rekening</p><p className="break-all text-xl font-bold">{rekening?.nomorRekening ?? "Hubungi shelter untuk detail rekening"}</p></div>
          <div><p className="text-sm text-slate-500">Atas Nama</p><p className="font-semibold">{rekening?.atasNamaRekening ?? "-"}</p></div>
          <div className="border-t pt-4"><p className="text-sm text-slate-500">Nominal Transfer</p><p className="text-2xl font-bold text-emerald-700">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(data.nominal)}</p></div>
        </div>
        {!rekening && <p role="alert" className="mt-4 text-sm text-amber-700">Rekening belum diatur oleh shelter. Jangan transfer sebelum mendapatkan detail rekening yang valid.</p>}
        <button onClick={() => router.push(`/dashboard/donor/donation/upload?id=${id}`)} className="mt-6 w-full rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700">Saya sudah transfer — unggah bukti</button>
      </section>
    </main>
  );
}

export default function TransferPage() {
  return <Suspense fallback={<main className="p-8 text-center">Memuat halaman transfer...</main>}><TransferContent /></Suspense>;
}
