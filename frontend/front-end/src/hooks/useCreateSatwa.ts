import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSatwa } from "@/services/satwa.service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getApiErrorMessage } from "@/lib/apiError";
import { notify } from "@/lib/notify";
import { QUERY_KEYS } from "@/lib/queryKeys";

export function useCreateSatwa() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createSatwa,

    onSuccess() {
      queryClient.invalidateQueries({
      queryKey: QUERY_KEYS.mySatwa
      });

   notify.success("Satwa berhasil ditambahkan.");

     router.push("/dashboard/shelter/satwa");
    },

    onError(error) {
     notify.error(getApiErrorMessage(error));
    },
  });
}
