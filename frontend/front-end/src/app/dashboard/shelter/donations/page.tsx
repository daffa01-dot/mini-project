"use client";

import DonationTable from "@/components/dashboard/donation/DonationTable";

import { useDonationHistory } from "@/hooks/useDonationHistory";
import { useDeleteDonation } from "@/hooks/useDeleteDonation";

export default function DonationPage() {
  const { data, isLoading } =
    useDonationHistory();

  const deleteDonation =
    useDeleteDonation();

  if (isLoading) {
    return (
      <div className="p-10">
        Memuat...
      </div>
    );
  }

  return (
    <main className="p-10">

     <DonationTable
    role="SHELTER"
    data={data ?? []}
    onApprove={(id) => {
        // nanti verify
    }}
    onReject={(id) => {
        // nanti reject
    }}
/>

    </main>
  );
}