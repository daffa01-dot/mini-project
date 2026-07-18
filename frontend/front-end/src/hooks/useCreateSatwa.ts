import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSatwa } from "@/services/satwa.service";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function useCreateSatwa() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createSatwa,

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["my-satwa"],
      });

      toast.success("Satwa berhasil ditambahkan!");

      router.push("/dashboard/shelter/animals");
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Gagal menambahkan satwa"
      );
    },
  });
}