import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { verifyDonation } from "@/services/donation.service";

export function useVerifyDonation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      donationId,
      payload,
    }: {
      donationId: string;

      payload: {
        statusBaru:
          | "DIVERIFIKASI"
          | "DITOLAK";

        alasanDitolak?: string;
      };
    }) =>
      verifyDonation(
        donationId,
        payload
      ),

    onSuccess() {
      toast.success(
        "Status donasi berhasil diperbarui."
      );

      queryClient.invalidateQueries({
        queryKey: [
          "donation-history",
        ],
      });

      queryClient.invalidateQueries({
        queryKey: [
          "dashboard",
        ],
      });
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Gagal memperbarui status."
      );
    },
  });
}