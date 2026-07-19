"use client";

import DonationTable from "@/components/dashboard/donation/DonationTable";

import { useDonationHistory } from "@/hooks/useDonationHistory";
import { useVerifyDonation } from "@/hooks/useVerifyDonation";

export default function DonationPage() {
  const { data = [], isLoading } = useDonationHistory();

  const verifyMutation = useVerifyDonation();

  if (isLoading) {
    return (
      <div className="p-10">
        Memuat data donasi...
      </div>
    );
  }

  return (
    <main className="space-y-6 p-10">
      <div>
        <h1 className="text-3xl font-bold">
          Donasi Masuk
        </h1>

        <p className="mt-2 text-slate-500">
          Verifikasi bukti transfer yang dikirim donatur.
        </p>
      </div>

      <DonationTable
        role="SHELTER"
        data={data}
        onApprove={(id) => {
          verifyMutation.mutate({
            donationId: id,
            statusBaru: "DIVERIFIKASI",
          });
        }}
        onReject={(id) => {
          verifyMutation.mutate({
            donationId: id,
            statusBaru: "DITOLAK",
            alasanDitolak: "Donasi ditolak oleh shelter.",
          });
        }}
      />
    </main>
  );
}