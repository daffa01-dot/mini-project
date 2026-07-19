"use client";

import { useSatwa } from "@/hooks/useSatwa";

export default function AnimalsPage() {
  // Pass an empty options object to satisfy the hook's required parameter
  const { data, isLoading } = useSatwa("");

  if (isLoading) return <p>Loading...</p>;
  
  // Tambahkan proteksi jika data kosong agar server build tidak crash
  if (!data) return <p>Data tidak ditemukan</p>;

  return (
    <div>
      {/* Menggunakan tanda ?. agar map hanya berjalan jika data berupa array valid */}
      {data?.map((animal: any) => (
        <div key={animal.id}>{animal.nama}</div>
      ))}
    </div>
  );
}
