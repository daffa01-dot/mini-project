"use client";

import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (reason: string) => void;
}

export default function RejectDonationModal({
  open,
  onClose,
  onSubmit,
}: Props) {
  const [reason, setReason] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <h2 className="text-2xl font-bold">
          Tolak Donasi
        </h2>

        <p className="mt-2 text-gray-500">
          Masukkan alasan penolakan.
        </p>

        <textarea
          value={reason}
          onChange={(e) =>
            setReason(e.target.value)
          }
          rows={5}
          className="mt-5 w-full rounded-lg border p-3"
        />

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2"
          >
            Batal
          </button>

          <button
            onClick={() => {
              onSubmit(reason);

              setReason("");

              onClose();
            }}
            className="rounded-lg bg-red-600 px-4 py-2 text-white"
          >
            Tolak
          </button>
        </div>
      </div>
    </div>
  );
}