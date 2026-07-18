"use client";

import { DonationStatus} from "@/types/donation";

interface Props {
  status: DonationStatus;
}

export default function DonationStatusBadge({
  status,
}: Props) {
  const color = {
    MENUNGGU:
      "bg-yellow-100 text-yellow-700",

    DIVERIFIKASI:
      "bg-green-100 text-green-700",

    DITOLAK:
      "bg-red-100 text-red-700",

    DIBATALKAN:
      "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        color[status]
      }`}
    >
      {status}
    </span>
  );
}