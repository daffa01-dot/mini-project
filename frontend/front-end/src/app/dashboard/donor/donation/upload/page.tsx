"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import UploadReceipt from "@/components/dashboard/donation/UploadReceipt";

function UploadContent() {
  const params = useSearchParams();
  const donationId = params.get("id") ?? "";
  if (!donationId) return <main className="p-8 text-center">ID donasi tidak ditemukan.</main>;
  return <main className="min-h-screen bg-slate-50 px-4 py-12"><UploadReceipt donationId={donationId} /></main>;
}

export default function UploadReceiptPage() {
  return <Suspense fallback={<main className="p-8 text-center">Memuat...</main>}><UploadContent /></Suspense>;
}
