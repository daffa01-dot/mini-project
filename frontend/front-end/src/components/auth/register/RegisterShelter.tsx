"use client";

import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
}

export default function RegisterShelter({
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

      <hr />

      <input
        placeholder="Nama Shelter"
        {...register("namaShelter")}
        className="w-full rounded-lg border p-3"
      />

      <input
        placeholder="Nomor WhatsApp"
        {...register("noWhatsapp")}
        className="w-full rounded-lg border p-3"
      />

      <input
        placeholder="Kota"
        {...register("kota")}
        className="w-full rounded-lg border p-3"
      />

      <textarea
        placeholder="Alamat Lengkap"
        {...register("alamatLengkap")}
        className="w-full rounded-lg border p-3"
      />

      <textarea
        placeholder="Deskripsi Shelter"
        {...register("deskripsi")}
        className="w-full rounded-lg border p-3"
      />

    </div>
  );
}