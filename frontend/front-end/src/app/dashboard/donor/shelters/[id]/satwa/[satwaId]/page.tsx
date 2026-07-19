"use client";

import { useParams } from "next/navigation";

import { useSatwa } from "@/hooks/useSatwa";

import {
  SatwaHero,
  SatwaInformation,
  DonationSummary,
  DonateButton,
} from "@/components/satwa";

export default function SatwaDetailPage() {
  const params = useParams();

  // Ambil ID satwa, bukan ID shelter
  const satwaId = params.satwaId as string;

  const { data: satwa, isLoading, isError } = useSatwa(satwaId);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-slate-500">Memuat detail satwa...</p>
      </div>
    );
  }

  if (isError || !satwa) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-red-500">Gagal memuat detail satwa.</p>
      </div>
    );
  }
console.log("SATWA:", satwa);
  return (
    <main className="mx-auto max-w-7xl space-y-8 p-8">
      <SatwaHero satwa={satwa} />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <SatwaInformation satwa={satwa} />
        </div>

        <aside className="space-y-6">
          <DonationSummary dana={satwa.danaTerkumpul} />

          <DonateButton satwaId={satwa.id} shelterId={satwa.shelter.id} />
        </aside>
      </div>
    </main>
  );
}
