"use client";
import { useEffect, useState } from "react";
import { useSatwa } from "@/hooks/useSatwa";
import { useUpdateSatwa } from "@/hooks/useUpdateSatwa";
import { useForm, type Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { animalSchema } from "@/schemas/animalSchemas";
import type { AnimalForm } from "@/schemas/animalSchemas";

import { useCreateSatwa } from "@/hooks/useCreateSatwa";

interface Props {
  animalId?: string;
}

export default function AnimalForm({ animalId }: Props) {
  const createAnimal = useCreateSatwa();
  const updateAnimal = useUpdateSatwa();
  const isPending = createAnimal.isPending || updateAnimal.isPending;
  const { data } = useSatwa(animalId!);
  const [photo, setPhoto] = useState<File | null>(null);

  const { register, handleSubmit, reset } = useForm<AnimalForm>({
    resolver: zodResolver(animalSchema) as Resolver<AnimalForm>,
    
  });

  useEffect(() => {
    if (!data) return;

    reset({
      nama: data.nama,
      jenis: data.jenis,
      ras: data.ras ?? "",
      umur: data.umur,
      kelamin: data.kelamin,
      deskripsi: data.deskripsi ?? "",
    });
  }, [data, reset]);
  const submit = (values: AnimalForm) => {

    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, String(value));
      }
    });

    if (photo) {
      formData.append("foto", photo);
    }

    if (animalId) {
      console.log("UPDATE");

      updateAnimal.mutate({
        id: animalId,
        formData,
      });

      return;
    }

    console.log("CREATE");

    createAnimal.mutate(formData);
  };
  return (
    <div className="rounded-3xl bg-white p-10 shadow">
      <h1 className="text-4xl font-black">
        {animalId ? "Edit Satwa" : "Tambah Satwa"}
      </h1>

      <form onSubmit={handleSubmit(submit)} className="mt-10 space-y-6">
        <input placeholder="Nama" {...register("nama")} />

        <input placeholder="Jenis" {...register("jenis")} />

        <input placeholder="Ras" {...register("ras")} />

        <input type="number" placeholder="Umur" {...register("umur")} />

        <select {...register("kelamin")}>
          <option value="JANTAN">JANTAN</option>

          <option value="BETINA">BETINA</option>
        </select>

        <textarea placeholder="Deskripsi" {...register("deskripsi")} />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files ? e.target.files[0] : null)}
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-xl bg-green-600 py-4 text-white disabled:opacity-50"
        >
          {isPending
            ? "Menyimpan..."
            : animalId
              ? "Simpan Perubahan"
              : "Tambah Satwa"}
        </button>
      </form>
    </div>
  );
}
