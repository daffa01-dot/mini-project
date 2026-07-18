"use client";

import ShelterGrid from "@/components/dashboard/donor/shelters/shelterGrid";
import { useShelters } from "@/hooks/useShelter";

export default function ShelterPage() {
  const { data, isLoading } = useShelters();

  if (isLoading) {
    return (
      <div className="p-10">
        Memuat daftar shelter...
      </div>
    );
  }

  const shelters = data?.data ?? [];

  return (
    <main className="space-y-8 p-10">
      <div>
        <h1 className="text-3xl font-bold">
          Pilih Shelter
        </h1>

        <p className="mt-2 text-slate-500">
          Temukan shelter yang ingin Anda bantu.
        </p>
      </div>

      <ShelterGrid shelters={shelters} />
    </main>
  );
}