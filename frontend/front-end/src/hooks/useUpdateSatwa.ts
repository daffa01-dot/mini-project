import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { updateSatwa } from "@/services/satwa.service";
import { getApiErrorMessage } from "@/lib/apiError";
import { notify } from "@/lib/notify";
import { QUERY_KEYS } from "@/lib/queryKeys";

export function useUpdateSatwa() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ id, formData }: { id: string; formData: FormData }) =>
      updateSatwa(id, formData),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.mySatwa
      });

    notify.success("Satwa berhasil diperbarui.");

     router.push("/dashboard/shelter/satwa");
    },

    onError(error) {
      notify.error(getApiErrorMessage(error));
    },
  });
}
