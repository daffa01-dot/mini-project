"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { QUERY_KEYS } from "@/lib/queryKeys";
import { notify } from "@/lib/notify";
import { getApiErrorMessage } from "@/lib/apiError";
import { uploadReceipt } from "@/services/donation.service";

export function useUploadReceipt() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      donationId,
      formData,
    }: {
      donationId: string;
      formData: FormData;
    }) => uploadReceipt(donationId, formData),

    onSuccess() {
      notify.success("Bukti transfer berhasil diupload.");

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.dashboard,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.donationHistory,
      });

      // sementara kembali ke dashboard donor
      router.push("/dashboard/donor");
    },

    onError(error) {
      notify.error(getApiErrorMessage(error));
    },
  });
}
