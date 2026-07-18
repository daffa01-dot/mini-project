"use client";

import { useState } from "react";
import { useUploadReceipt } from "@/hooks/useUploadReceipt";
import { useRouter } from "next/navigation";

export default function UploadReceipt() {
  const router = useRouter();

  const upload = useUploadReceipt();

  const checkout = JSON.parse(sessionStorage.getItem("checkout") || "{}");

  const [file, setFile] = useState<File | null>(null);

  const submit = () => {
    if (!file) return;

    upload.mutate(
      {
        donasiId: checkout.donasiId,
        file,
      },
      {
        onSuccess() {
          router.push("/donations");
        },
      },
    );
  };

  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl">
      <h1 className="text-4xl font-black">Upload Bukti Transfer</h1>

      <p className="mt-3 text-slate-500">
        Upload bukti transfer agar shelter dapat memverifikasi donasi Anda.
      </p>

      <input
        type="file"
        accept="image/*"
        className="mt-8 w-full"
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
      />

      <button
        onClick={submit}
        disabled={upload.isPending}
        className="
        mt-8
        w-full
        rounded-xl
        bg-green-600
        py-4
        text-white
        "
      >
        {upload.isPending ? "Mengupload..." : "Kirim Bukti Transfer"}
      </button>
    </div>
  );
}
