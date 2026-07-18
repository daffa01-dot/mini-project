"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"

import {
  login,
  LoginPayload,
} from "@/services/auth.service";

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: LoginPayload) =>
      login(payload),

    onSuccess(data) {
      toast.success("Login berhasil");

      const role = data.data.role;

      if (role === "SUPER_ADMIN") {
        router.push("/dashboard/admin");
      } else if (role === "SHELTER") {
        router.push("/dashboard/shelter");
      } else {
        router.push("/dashboard");
      }
    },

    onError(error: any) {
      toast.error(
        error?.response?.data?.message ??
          "Login gagal"
      );
    },
  });
}