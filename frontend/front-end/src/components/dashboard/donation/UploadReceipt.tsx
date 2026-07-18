"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useDonation } from "@/hooks/useDonation";
import { useUploadReceipt } from "@/hooks/useUploadReceipt";

interface Props {
  donationId: string;
}

export default function UploadReceipt({
  donationId,
}: Props) {
  const router = useRouter();

  const { data, isLoading } = useDonation(donationId);

  const uploadReceipt = useUploadReceipt();

  const [file, setFile] =
    useState<File | null>(null);

  const submit = () => {
    if (!file) return;

    const formData = new FormData();

    formData.append(
      "buktiResi",
      file
    );

    uploadReceipt.mutate(
      {
        donationId,
        formData,
      },
      {
        onSuccess() {
          router.push(
            "/dashboard/shelter/donations"
          );
        },
      }
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        Memuat...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-20 text-center">
        Donasi tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 shadow">

      <h1 className="text-3xl font-bold">
        Upload Bukti Transfer
      </h1>

      <p className="mt-2 text-gray-500">
        Silakan upload bukti transfer
        sesuai nominal berikut.
      </p>

      <div className="mt-8 space-y-4 rounded-xl border p-6">

        <div className="flex justify-between">
          <span>Nominal</span>

          <span className="font-semibold">
            Rp{" "}
            {data.nominal.toLocaleString(
              "id-ID"
            )}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>

          <span>{data.status}</span>
        </div>

        <div className="flex justify-between">
          <span>Shelter</span>

          <span>
            {data.shelter?.namaShelter}
          </span>
        </div>

        {data.satwa && (
          <div className="flex justify-between">

            <span>Satwa</span>

            <span>
              {data.satwa.nama}
            </span>

          </div>
        )}

      </div>

      <div className="mt-8">

        <label className="mb-2 block font-medium">
          Bukti Transfer
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] ??
                null
            )
          }
          className="w-full rounded-lg border p-3"
        />

      </div>

      <button
        onClick={submit}
        disabled={
          !file ||
          uploadReceipt.isPending
        }
        className="mt-10 w-full rounded-xl bg-green-600 py-4 text-white disabled:opacity-50"
      >
        {uploadReceipt.isPending
          ? "Mengupload..."
          : "Upload Bukti"}
      </button>

    </div>
  );
}