import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { checkoutDonation } from "@/services/donation.service";

export function useCheckout() {
  const router = useRouter();

  return useMutation({
    mutationFn: checkoutDonation,

    onSuccess(data) {
      toast.success("Checkout berhasil.");

      router.push(
        `/dashboard/shelter/donations/upload/${data.donasiId}`
      );
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Checkout gagal."
      );
    },
  });
}