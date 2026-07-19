"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import DonationCheckoutContainer from "@/components/dashboard/donation/donationCheckoutContainer";

function CheckoutContent() {
  const params = useSearchParams();
  const satwaId = params.get("satwaId") ?? "";
  
  return (
    <DonationCheckoutContainer satwaId={satwaId} pesan={""} />
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Memuat halaman pembayaran...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
