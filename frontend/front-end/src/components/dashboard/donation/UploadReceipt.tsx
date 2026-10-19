"use client";

import { useState } from "react";

import { useDonation } from "@/hooks/useDonation";
import { useUploadReceipt } from "@/hooks/useUploadReceipt";

interface Props {
  donationId: string;
}

export default function UploadReceipt({
  donationId,
}: Props) {

  const { data, isLoading } = useDonation(donationId);

  const uploadReceipt = useUploadReceipt();

  const [file, setFile] =
    useState<File | null>(null);

  const submit = () => {
    if (!file) return;
    if (!/[.]((jpe?g)|(png))$/i.test(file.name) || !["image/jpeg", "image/png"].includes(file.type)) {
      return;
    }
    if (file.size > 5 * 1024 * 1024) return;

    const formData = new FormData();

    formData.append(
      "buktiResi",
      file
    );

    uploadReceipt.mutate({ donationId, formData });
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

      {data.status !== "MENUNGGU" || data.buktiResi ? (
        <p className="mt-6 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">Bukti tidak dapat diubah karena donasi sudah memiliki bukti atau sudah diproses.</p>
      ) : <div className="mt-8">

        <label className="mb-2 block font-medium">
          Bukti Transfer
        </label>

        <input
          type="file"
          accept="image/jpeg,image/png"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] ??
                null
            )
          }
          className="w-full rounded-lg border p-3"
        />

        <p className="mt-2 text-xs text-slate-500">Format JPG/PNG, maksimal 5 MB.</p>
      </div>}

      {data.status === "MENUNGGU" && !data.buktiResi && <button
        onClick={submit}
        disabled={!file || uploadReceipt.isPending || file.size > 5 * 1024 * 1024 || !["image/jpeg", "image/png"].includes(file.type)}
        className="mt-10 w-full rounded-xl bg-green-600 py-4 text-white disabled:opacity-50"
      >
        {uploadReceipt.isPending
          ? "Mengupload..."
          : "Upload Bukti"}
      </button>}

    </div>
  );
}