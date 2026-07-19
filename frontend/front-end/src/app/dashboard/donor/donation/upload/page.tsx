"use client";

import { useSearchParams } from "next/navigation";

import UploadReceiptContainer from "@/components/dashboard/donation/uploadReceiptContainer";

export default function UploadReceiptPage() {
  const params = useSearchParams();

  const donationId =
    params.get("id") ?? "";

  return (
    <UploadReceiptContainer
      donationId={donationId}
    />
  );
}