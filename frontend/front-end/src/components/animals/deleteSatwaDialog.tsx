"use client";

import { Trash2 } from "lucide-react";
import { useDeleteSatwa } from "@/hooks/useDeleteSatwa";


interface Props {
  id: string;
  nama: string;
}

export default function DeleteAnimalDialog({
  id,
  nama,
}: Props) {
  const mutation = useDeleteSatwa();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Yakin ingin menghapus ${nama}?`
    );

    if (!confirmDelete) return;

    mutation.mutate(id);
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-700"
    >
      <Trash2 size={18} />
    </button>
  );
}