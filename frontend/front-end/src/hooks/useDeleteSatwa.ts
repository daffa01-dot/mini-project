"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteSatwa } from "@/services/satwa.service";

import { QUERY_KEYS } from "@/lib/queryKeys";
import { notify } from "@/lib/notify";
import { getApiErrorMessage } from "@/lib/apiError";

export function useDeleteSatwa() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSatwa,

    onSuccess() {
      notify.success("Satwa berhasil dihapus.");

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.mySatwa,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.dashboard,
      });
    },

    onError(error) {
      notify.error(getApiErrorMessage(error));
    },
  });
}