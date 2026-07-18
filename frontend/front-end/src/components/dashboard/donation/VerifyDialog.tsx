"use client";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function VerifyDialog({
  open,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-8">

        <h2 className="text-2xl font-bold">
          Verifikasi Donasi
        </h2>

        <p className="mt-4">
          Apakah Anda yakin ingin
          memverifikasi donasi ini?
        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded border px-4 py-2"
          >
            Batal
          </button>

          <button
            onClick={onConfirm}
            className="rounded bg-green-600 px-4 py-2 text-white"
          >
            Verifikasi
          </button>

        </div>

      </div>

    </div>
  );
}