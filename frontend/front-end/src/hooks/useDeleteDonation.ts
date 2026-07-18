import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { deleteDonation } from "@/services/donation.service";
import { getApiErrorMessage } from "@/lib/apiError";

export function useDeleteDonation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDonation,

    onSuccess() {
      toast.success("Donasi berhasil dihapus");

      queryClient.invalidateQueries({
        queryKey: ["donation-history"],
      });
    },

    onError(error) {
      toast.error(getApiErrorMessage(error));
    },
  });
}
