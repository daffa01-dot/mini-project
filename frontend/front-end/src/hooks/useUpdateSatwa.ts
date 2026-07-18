import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"
import { updateSatwa } from "@/services/satwa.service";

export function useUpdateSatwa() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      id,
      formData,
    }: {
      id: string;
      formData: FormData;
    }) => updateSatwa(id, formData),

    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["my-satwa"],
      });

      toast.success("Satwa berhasil diperbarui");

      router.push("/dashboard/shelter/animals");
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Gagal memperbarui satwa"
      );
    },
  });
}