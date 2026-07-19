"use client";

import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
}

export default function RegisterDonatur({
  register,
}: Props) {
  return (
    <div className="space-y-4">

      <input
        placeholder="Nama Lengkap"
        {...register("namaLengkap")}
        className="w-full rounded-lg border p-3"
      />

      <input
        placeholder="Email"
        {...register("email")}
        className="w-full rounded-lg border p-3"
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="w-full rounded-lg border p-3"
      />

    </div>
  );
}