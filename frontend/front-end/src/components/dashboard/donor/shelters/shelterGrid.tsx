"use client";

import { Shelter } from "@/types/shelter";

import ShelterCard from "./shelterCard";

interface Props {
  shelters: Shelter[];
}

export default function ShelterGrid({
  shelters,
}: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {shelters.map((shelter) => (
        <ShelterCard
          key={shelter.id}
          shelter={shelter}
        />
      ))}
    </div>
  );
}