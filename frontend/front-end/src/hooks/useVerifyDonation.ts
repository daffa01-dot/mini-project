import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getApiErrorMessage } from "@/lib/apiError";
import { verifyDonation } from "@/services/donation.service";
import { notify } from "@/lib/notify";
export function useVerifyDonation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      donationId,
      payload,
    }: {
      donationId: string;

      payload: {
        statusBaru: "DIVERIFIKASI" | "DITOLAK";

        alasanDitolak?: string;
      };
    }) => verifyDonation(donationId, payload),

    onSuccess() {
      notify.success("Donasi berhasil diverifikasi.");

      queryClient.invalidateQueries({
        queryKey: ["donation-history"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },

    onError(error) {
      notify.error(getApiErrorMessage(error));
    },
  });
}
