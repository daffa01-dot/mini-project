"use client";

import DonationTable from "@/components/dashboard/donation/DonationTable";
import EmptyDonation from "./emptyDonation";

import { Donation } from "@/types/donation";

interface Props {
  donations: Donation[];
}

export default function RecentDonation({
  donations,
}: Props) {
  if (!donations.length) {
    return <EmptyDonation />;
  }

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">
          Riwayat Donasi Terbaru
        </h2>

        <p className="text-slate-500">
          Menampilkan donasi terbaru Anda.
        </p>
      </div>

      <DonationTable
        role="DONATUR"
        data={donations}
      />
    </section>
  );
}