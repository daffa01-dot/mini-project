"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DonationForm from "@/components/dashboard/donation/donationForm";
import DonationSummary from "@/components/dashboard/donation/DonationSummary";
import { useCheckoutDonation } from "@/hooks/useCheckoutDonation";

function CheckoutContent() {
  const params = useSearchParams();
  const satwaId = params.get("satwaId") ?? "";
  const shelterId = params.get("shelterId") ?? "";
  const checkout = useCheckoutDonation();
  return (
    <main className="mx-auto grid max-w-7xl gap-8 p-4 sm:p-8 lg:grid-cols-3">
      <div className="lg:col-span-2"><DonationForm loading={checkout.isPending} satwaId={satwaId} shelterId={shelterId} onSubmit={(payload) => checkout.mutate(payload)} /></div>
      <DonationSummary nominal={50000} />
    </main>
  );
}

export default function CheckoutPage() {
  return <Suspense fallback={<main className="p-8 text-center">Memuat form donasi...</main>}><CheckoutContent /></Suspense>;
}
