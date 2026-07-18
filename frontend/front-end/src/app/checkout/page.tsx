"use client";

import { useSearchParams } from "next/navigation";

import DonationCheckoutContainer from "@/components/dashboard/donation/donationCheckoutContainer";

export default function CheckoutPage() {
  const params = useSearchParams();

  const satwaId =
    params.get("satwaId") ?? "";

  return (
    <DonationCheckoutContainer
      satwaId={satwaId} pesan={""}    />
  );
}