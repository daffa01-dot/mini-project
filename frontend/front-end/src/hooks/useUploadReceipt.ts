import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { uploadReceipt } from "@/services/donation.service";

export function useUploadReceipt() {
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      donationId,
      formData,
    }: {
      donationId: string;
      formData: FormData;
    }) => uploadReceipt(donationId, formData),

    onSuccess() {
      toast.success("Bukti transfer berhasil diupload");
    },

    onError(error: any) {
      toast.error(error?.response?.data?.message ?? "Upload gagal");
    },
  });
}
