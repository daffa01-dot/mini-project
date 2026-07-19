"use client";

import { useParams } from "next/navigation";

import DonationDetailCard from "@/components/dashboard/donation/donationDetailCard";

import { useDonationById } from "@/hooks/useDonationById";

export default function DonationDetailPage() {
  const params = useParams();

  const id = params.id as string;

  const {
    data,
    isLoading,
    isError,
  } = useDonationById(id);

  if (isLoading) {
    return (
      <main className="p-8">
        Memuat detail donasi...
      </main>
    );
  }

  if (isError || !data) {
    return (
      <main className="p-8">
        Detail donasi tidak ditemukan.
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl p-8">
      <DonationDetailCard donation={data} />
    </main>
  );
}