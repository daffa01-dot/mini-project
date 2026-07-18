"use client";

import { useState } from "react";

import { useUploadReceipt } from "@/hooks/useUploadReceipt";

interface Props {
  donationId: string;
}

export default function UploadReceiptContainer({
  donationId,
}: Props) {
  const upload = useUploadReceipt();

  const [file, setFile] = useState<File | null>(
    null,
  );

  const submit = () => {
    if (!file) return;

    const formData = new FormData();

    formData.append(
      "buktiResi",
      file,
    );

    upload.mutate({
      donationId,
      formData,
    });
  };

  return (
    <div>
      {/* Nanti diganti partner */}

      <input
        type="file"
        onChange={(e) =>
          setFile(
            e.target.files?.[0] ?? null
          )
        }
      />

      <button
        disabled={upload.isPending}
        onClick={submit}
      >
        {upload.isPending
          ? "Uploading..."
          : "Upload"}
      </button>
    </div>
  );
}