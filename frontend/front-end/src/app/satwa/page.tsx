"use client";

import { useSatwa} from "@/hooks/useSatwa";

export default function AnimalsPage() {
  const { data, isLoading } = useSatwa();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {data.map((animal: any) => (
        <div key={animal.id}>{animal.nama}</div>
      ))}
    </div>
  );
}
