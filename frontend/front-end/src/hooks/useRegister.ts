"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import {
  registerDonatur,
  registerShelter,
  RegisterPayload,
} from "@/services/auth.service";

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => {
      if (payload.role === "DONATUR") {
        return registerDonatur(payload);
      }

      return registerShelter(payload);
    },

    onSuccess() {
      toast.success("Registrasi berhasil");

      router.push("/login");
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Registrasi gagal"
      );
    },
  });
}