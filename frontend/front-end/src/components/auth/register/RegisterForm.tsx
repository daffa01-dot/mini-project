"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { useRegister } from "@/hooks/useRegister";

const RegisterSchema = z.object({
  namaLengkap: z.string(),

  email: z.email(),

  password: z.string().min(6),

  role: z.enum(["DONATUR", "SHELTER"]),

  namaShelter: z.string().optional(),

  noWhatsapp: z.string().min(10, "Nomor WhatsApp minimal 10 digit").optional(),
  kota: z.string().optional(),

  alamatLengkap: z.string().min(10, "Alamat minimal 10 karakter").optional(),

  deskripsi: z.string().min(10, "Deskripsi minimal 10 karakter").optional(),

  namaBank: z.string().optional(),

  atasNamaRekening: z.string().optional(),

  nomorRekening: z
    .string()
    .regex(/^[0-9]+$/, "Nomor rekening hanya boleh angka")
    .optional(),
});

type RegisterType = z.infer<typeof RegisterSchema>;

export default function RegisterForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [role, setRole] = useState<"DONATUR" | "SHELTER">("DONATUR");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),

    defaultValues: {
      role: "DONATUR",
    },
  });

  const mutation = useRegister();

  const onSubmit = (data: RegisterType) => {
    console.log("FORM SUBMIT", {
      ...data,
      role,
    });

    mutation.mutate({
      ...data,
      role,
    });
  };
  console.log(errors);

  return (
    <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Daftar</h1>

        <p className="mt-2 text-gray-500">
          Bergabung menjadi bagian dari Teman Asuh
        </p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => {
            setRole("DONATUR");
            setValue("role", "DONATUR");
          }}
          className={`rounded-xl border p-5 transition-all ${
            role === "DONATUR" ? "border-green-600 bg-green-50" : ""
          }`}
        >
          <span className="mx-auto mb-2 block text-4xl">🤝</span>

          <p className="font-semibold">Donatur</p>
        </button>

        <button
          type="button"
          onClick={() => {
            setRole("SHELTER");
            setValue("role", "SHELTER");
          }}
          className={`rounded-xl border p-5 transition-all ${
            role === "SHELTER" ? "border-green-600 bg-green-50" : ""
          }`}
        >
          <span className="mx-auto mb-2 block text-4xl">🏠</span>

          <p className="font-semibold">Shelter</p>
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="mb-2 block font-medium">Nama Lengkap</label>

          <input
            {...register("namaLengkap")}
            className="w-full rounded-xl border p-3"
          />

          <p className="text-sm text-red-500">{errors.namaLengkap?.message}</p>
        </div>

        <div>
          <label className="mb-2 block font-medium">Email</label>

          <input
            type="email"
            {...register("email")}
            className="w-full rounded-xl border p-3"
          />

          <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>

        <div>
          <label className="mb-2 block font-medium">Password</label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className="w-full rounded-xl border p-3 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              <span className="text-lg">{showPassword ? "🙈" : "👁️"}</span>
            </button>
          </div>

          <p className="text-sm text-red-500">{errors.password?.message}</p>
        </div>

        {role === "SHELTER" && (
          <>
            <div>
              <label>Nama Shelter</label>

              <input
                {...register("namaShelter")}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label>No WhatsApp</label>

              <input
                {...register("noWhatsapp")}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label>Kota</label>

              <input
                {...register("kota")}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label>Alamat Lengkap</label>

              <textarea
                {...register("alamatLengkap")}
                className="w-full rounded-xl border p-3"
              />
            </div>
            <div>
              <label>Nama Bank</label>

              <input
                {...register("namaBank")}
                className="w-full rounded-xl border p-3"
                placeholder="Contoh: BCA"
              />
            </div>

            <div>
              <label>Atas Nama Rekening</label>

              <input
                {...register("atasNamaRekening")}
                className="w-full rounded-xl border p-3"
                placeholder="Nama Pemilik Rekening"
              />
            </div>

            <div>
              <label>Nomor Rekening</label>

              <input
                {...register("nomorRekening")}
                className="w-full rounded-xl border p-3"
                placeholder="1234567890"
              />
            </div>

            <div>
              <label>Deskripsi</label>

              <textarea
                {...register("deskripsi")}
                className="w-full rounded-xl border p-3"
              />
            </div>
          </>
        )}
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white hover:bg-green-700"
        >
          {mutation.isPending ? "Mendaftarkan..." : "Daftar Sekarang"}
        </button>
      </form>
    </div>
  );
}
