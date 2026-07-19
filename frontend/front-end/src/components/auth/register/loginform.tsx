"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";

// Inline minimal Eye and EyeOff icons to avoid external dependency on lucide-react
function Eye({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.05 12c1.73-4.5 6.08-7.5 9.95-7.5s8.22 3 9.95 7.5c-1.73 4.5-6.08 7.5-9.95 7.5S3.78 16.5 2.05 12z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
      />
    </svg>
  );
}

function EyeOff({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3l18 18M9.88 9.88A3.5 3.5 0 0112 9.5c1.08 0 2.06.5 2.72 1.28"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.94 5.11C12.29 4.63 13.63 4.5 15 4.5c3.87 0 8.22 3 9.95 7.5-.6 1.56-1.6 2.92-2.85 4.02M6.18 6.18C4.95 7.28 3.95 8.64 3.35 10.2"
      />
    </svg>
  );
}

import { LoginSchema } from "@/schemas/authSchemas"

import { login } from "@/services/auth.service";

import { useAuthStore } from "@/store/authstore"

import { z } from "zod";

type LoginType = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const router = useRouter();

  const setUser = useAuthStore((state) => state.setUser);

  const setToken = useAuthStore((state) => state.setToken);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  const mutation = useMutation({
    mutationFn: login,

    onSuccess: (response: any) => {
      toast.success("Login berhasil");

      const user = response.data.user;

      setUser(user);

      if (response.data.token) {
        setToken(response.data.token);
      }
switch (user.role) {
  case "DONATUR":
    router.push("/dashboard/donor");
    break;

  case "SHELTER":
    router.push("/dashboard/shelter");
    break;

  case "SUPER_ADMIN":
    router.push("/dashboard/admin");
    break;
}},

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Login gagal"
      );
    },
  });

  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

      <h1 className="mb-8 text-center text-4xl font-bold">

        Login

      </h1>

      <form
        onSubmit={handleSubmit((data) =>
          mutation.mutate(data)
        )}
        className="space-y-5"
      >
        <div>

          <label>Email</label>

          <input
            {...register("email")}
            className="mt-2 w-full rounded-xl border p-3"
          />

          <p className="text-sm text-red-500">

            {errors.email?.message}

          </p>

        </div>

        <div>

          <label>Password</label>

          <div className="relative mt-2">

            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full rounded-xl border p-3 pr-10"
            />

            <button
              type="button"
              className="absolute right-3 top-3"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

          <p className="text-sm text-red-500">

            {errors.password?.message}

          </p>

        </div>

        <button
          disabled={mutation.isPending}
          className="w-full rounded-xl bg-green-600 py-3 text-white transition hover:bg-green-700"
        >
          {mutation.isPending
            ? "Masuk..."
            : "Masuk"}
        </button>

      </form>

    </div>
  );
}