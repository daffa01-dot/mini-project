"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/authSchemas"
import { login } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authstore"
import { z } from "zod";

type LoginFormData = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const router = useRouter();

  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      const user = response.data.user;

      setUser(user);

      switch (user.role) {
        case "DONATUR":
          router.push("/dashboard");
          break;

        case "SHELTER":
          router.push("/shelter/dashboard");
          break;

        case "SUPER_ADMIN":
          router.push("/admin/dashboard");
          break;
      }
    },
  });

  return React.createElement(
    "form",
    { onSubmit: handleSubmit((data) => mutation.mutate(data)), className: "space-y-5" },
    React.createElement(
      "div",
      null,
      React.createElement("label", null, "Email"),
      React.createElement("input", { ...register("email"), className: "w-full border rounded-lg p-3" }),
      React.createElement("p", { className: "text-red-500 text-sm" }, errors.email?.message)
    ),
    React.createElement(
      "div",
      null,
      React.createElement("label", null, "Password"),
      React.createElement("input", { type: "password", ...register("password"), className: "w-full border rounded-lg p-3" }),
      React.createElement("p", { className: "text-red-500 text-sm" }, errors.password?.message)
    ),
    React.createElement(
      "button",
      { disabled: mutation.isPending, className: "w-full rounded-lg bg-green-600 text-white p-3" },
      mutation.isPending ? "Loading..." : "Masuk"
    )
  );
}