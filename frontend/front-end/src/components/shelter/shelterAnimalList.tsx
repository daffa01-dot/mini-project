"use client";

import AnimalCard from "./animalCard";
import { Animal } from "@/types/shelter";

interface Props {
  animals: Animal[];
}

export default function ShelterAnimalList({
  animals,
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

      {animals.length === 0 ? (
        <div className="rounded-xl bg-white p-10 text-center shadow">
          Belum ada satwa.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {animals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
            />
          ))}
        </div>
      )}
    </section>
  );
}