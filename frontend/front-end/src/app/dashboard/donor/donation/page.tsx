"use client";

import DonationTable from "@/components/dashboard/donation/DonationTable";
import { useDonationHistory } from "@/hooks/useDonationHistory";

export default function DonationHistoryPage() {
  const {
    data = [],
    isLoading,
    isError,
  } = useDonationHistory();

  if (isLoading) {
    return (
      <main className="p-8">
        <p>Memuat riwayat donasi...</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="p-8">
        <p>Terjadi kesalahan saat memuat data.</p>
      </main>
    );
  }

  return (
    <main className="space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold">
          Riwayat Donasi
        </h1>

        <p className="text-slate-500">
          Semua donasi yang pernah Anda lakukan.
        </p>
      </div>

      <DonationTable
        role="DONATUR"
        data={data}
      />
    </main>
  );
}