"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { notify } from "@/lib/notify";
import { getApiErrorMessage } from "@/lib/apiError";
import { QUERY_KEYS } from "@/lib/queryKeys";

import { verifyDonation } from "@/services/donation.service";

export function useVerifyDonation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      donationId,
      statusBaru,
      alasanDitolak,
    }: {
      donationId: string;
      statusBaru: "DIVERIFIKASI" | "DITOLAK";
      alasanDitolak?: string;
    }) =>
      verifyDonation(donationId, {
        statusBaru,
        alasanDitolak,
      }),

    onSuccess(_, variables) {
      notify.success(
        variables.statusBaru === "DIVERIFIKASI"
          ? "Donasi berhasil diverifikasi."
          : "Donasi berhasil ditolak."
      );

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.dashboard,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.donationHistory,
      });
    },

    onError(error) {
      notify.error(getApiErrorMessage(error));
    },
  });
}