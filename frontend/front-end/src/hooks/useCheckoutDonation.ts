"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/lib/queryKeys";
import { notify } from "@/lib/notify";
import { getApiErrorMessage } from "@/lib/apiError";

import { checkoutDonation } from "@/services/donation.service";

import type { CheckoutPayload } from "@/types/donation";

export function useCheckoutDonation() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CheckoutPayload) => 
        checkoutDonation(payload),

    onSuccess(data) {
        console.log("CHECKOUT FRONTEND:", data);
      notify.success("Checkout berhasil");

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.dashboard,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.donationHistory,
      });

      router.push(`/dashboard/donor/donation/upload?id=${data.donasiId}`);
    },

    onError(error) {
      notify.error(getApiErrorMessage(error));
    },
  });
}
