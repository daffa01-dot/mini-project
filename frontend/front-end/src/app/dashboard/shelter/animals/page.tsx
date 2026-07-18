"use client";

import { toast } from "react-toastify";

import SatwaTable from "@/components/animals/satwaTable"

import { useDeleteSatwa } from "@/hooks/useDeleteSatwa";

import { useMySatwa } from "@/hooks/useMySatwa";

export default function SatwaPage() {

  const { data, isLoading } =
    useMySatwa();

  const deleteMutation =
    useDeleteSatwa();

  if (isLoading)
    return <p>Loading...</p>;

  return (

    <SatwaTable
      data={data ?? []}
      onDelete={(id) => {

        if (
          confirm(
            "Yakin ingin menghapus satwa?"
          )
        ) {

          deleteMutation.mutate(id, {

            onSuccess() {
              toast.success(
                "Satwa berhasil dihapus"
              );
            },

          });

        }

      }}
    />

  );

}