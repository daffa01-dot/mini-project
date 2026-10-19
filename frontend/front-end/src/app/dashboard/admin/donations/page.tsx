"use client";

import DonationTable from "@/components/dashboard/donation/DonationTable";
import { useDonationHistory } from "@/hooks/useDonationHistory";

export default function AdminDonationsPage() {
  const { data = [], isLoading, isError } = useDonationHistory();
  if (isLoading) return <p role="status">Memuat riwayat donasi...</p>;
  if (isError) return <p role="alert">Riwayat donasi gagal dimuat.</p>;
  return <main className="space-y-6"><div><h1 className="text-3xl font-bold">Riwayat Donasi Platform</h1><p className="mt-2 text-slate-600">Pantau transaksi donasi yang tersedia untuk akun admin.</p></div><DonationTable role="SUPER_ADMIN" data={data} /></main>;
}
