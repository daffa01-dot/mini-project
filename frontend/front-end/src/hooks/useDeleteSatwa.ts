import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSatwa } from "@/services/satwa.service";

export function useDeleteSatwa() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSatwa,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["my-satwa"],
      });
    },
  });
}