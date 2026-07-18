"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { uploadReceipt } from "@/services/donation.service";

export function useUploadReceipt() {
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      donationId,
      formData,
    }: {
      donationId: string;
      formData: FormData;
    }) => uploadReceipt(donationId, formData),

    onSuccess() {
      router.push("/dashboard/donor/donations");
    },
  });
}