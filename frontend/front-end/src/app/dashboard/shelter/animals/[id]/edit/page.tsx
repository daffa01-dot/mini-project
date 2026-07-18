"use client";

import { use } from "react";
import AnimalForm from "@/components/animals/animalForm";


export default function EditAnimalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <AnimalForm animalId={id} />
    </main>
  );
}
