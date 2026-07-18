"use client";

import Link from "next/link";
import { Upload, Trash2, Eye } from "lucide-react";

import { Donation } from "@/types/donation";
import DonationStatusBadge from "../common/donationStatusBadge";

interface Props {
  donation: Donation;

  role: "DONATUR" | "SHELTER" | "SUPER_ADMIN";

  onUpload?: (id: string) => void;
  onDelete?: (id: string) => void;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

export default function DonationRow({
  donation,
  role,
  onUpload,
  onDelete,
  onApprove,
  onReject,
}: Props) {
  return (
    <tr className="border-b transition hover:bg-slate-50">
      {/* ========================= */}
      {/* DONATUR */}
      {/* ========================= */}

      <td className="p-4 font-medium">
        {donation.donatur?.namaLengkap ?? "-"}
      </td>

      {/* ========================= */}
      {/* SATWA */}
      {/* ========================= */}

      <td className="p-4">{donation.satwa?.nama ?? "-"}</td>

      {/* ========================= */}
      {/* NOMINAL */}
      {/* ========================= */}

      <td className="p-4 font-semibold text-green-700">
        {donation.nominal.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        })}
      </td>

      {/* ========================= */}
      {/* STATUS */}
      {/* ========================= */}

      <td className="p-4">
        <DonationStatusBadge status={donation.status} />
      </td>

      {/* ========================= */}
      {/* BUKTI */}
      {/* ========================= */}

      <td className="p-4">
        {donation.buktiResi ? (
          <a
            href={donation.buktiResi}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            Lihat Bukti
          </a>
        ) : (
          <span className="text-slate-400">-</span>
        )}
      </td>

      {/* ========================= */}
      {/* ACTION */}
      {/* ========================= */}

      <td className="p-4">
        {/* DONATUR */}

        {role === "DONATUR" && (
          <div className="flex flex-wrap gap-2">
            {donation.status === "MENUNGGU" && !donation.buktiResi && (
              <button
                onClick={() => onUpload?.(donation.id)}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700"
              >
                <Upload size={16} />
                Upload
              </button>
            )}

            <button
              onClick={() => onDelete?.(donation.id)}
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700"
            >
              <Trash2 size={16} />
              Hapus
            </button>
          </div>
        )}

        {/* SHELTER */}

        {role === "SHELTER" && (
          <div className="flex flex-wrap gap-2">
            {donation.status === "MENUNGGU" ? (
              <>
                <button
                  onClick={() => onApprove?.(donation.id)}
                  className="rounded-lg bg-green-600 px-3 py-2 text-sm text-white transition hover:bg-green-700"
                >
                  Verifikasi
                </button>

                <button
                  onClick={() => onReject?.(donation.id)}
                  className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700"
                >
                  Tolak
                </button>
              </>
            ) : (
              <span className="text-sm text-slate-400">Tidak ada aksi</span>
            )}
          </div>
        )}

        {/* SUPER ADMIN */}

        {role === "SUPER_ADMIN" && (
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/dashboard/admin/donations/${donation.id}`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700"
            >
              <Eye size={16} />
              Detail
            </Link>

            <button
              onClick={() => onDelete?.(donation.id)}
              className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700"
            >
              <Trash2 size={16} />
              Hapus
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
