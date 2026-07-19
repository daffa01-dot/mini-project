"use client";

import { Shelter } from "@/types/shelter";

import ShelterCard from "./shelterCard";

interface Props {
  shelters: Shelter[];
}

export default function ShelterGrid({
  shelters,
}: Props) {
  if (!shelters.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        Belum ada shelter.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {shelters.map((shelter) => (
        <ShelterCard
          key={shelter.id}
          shelter={shelter}
        />
      ))}
    </div>
  );
}