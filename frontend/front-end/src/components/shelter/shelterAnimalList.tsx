"use client";

import AnimalCard from "./animalCard";
import { Satwa } from "@/types/shelter";

interface Props {
  satwa: Satwa[];
}

export default function ShelterAnimalList({
  satwa,
}: Props) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">
          Daftar Satwa
        </h2>

        <p className="text-slate-500">
          Pilih satwa yang ingin dibantu.
        </p>
      </div>

      {satwa.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center shadow">
          Belum ada satwa.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {satwa.map((satwa) => (
            <AnimalCard
              key={satwa.id}
              satwa={satwa}
            />
          ))}
        </div>
      )}
    </section>
  );
}