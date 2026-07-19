"use client";

import Image from "next/image";

import { Donation } from "@/types/donation";
import { getImageUrl } from "@/lib/getImageUrl";

interface Props {
  donation: Donation;
}

export default function DonationDetailCard({ donation }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow space-y-6">
      <div className="flex gap-6">
        <Image
          src={donation.satwa?.foto || "/images/placeholder-animal.png"}
          alt={donation.satwa?.nama ?? "Satwa"}
          width={180}
          height={180}
          className="rounded-xl object-cover"
        />

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{donation.satwa?.nama}</h1>

          <p className="text-slate-500">
            Shelter: {donation.shelter?.namaShelter}
          </p>

          <p>
            Status :
            <span className="ml-2 font-semibold">{donation.status}</span>
          </p>

          <p>
            Nominal :
            <span className="ml-2 font-semibold">
              Rp {donation.nominal.toLocaleString("id-ID")}
            </span>
          </p>

          <p>
            Tanggal :
            <span className="ml-2">
              {new Date(donation.createdAt).toLocaleDateString("id-ID")}
            </span>
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-2">Catatan Donasi</h2>

        <p className="text-slate-600">{donation.catatan || "-"}</p>
      </div>

      {donation.buktiResi && (
        <div>
          <h2 className="font-bold mb-2">Bukti Transfer</h2>

         <Image
  src={getImageUrl(donation.buktiResi)}
  alt="Bukti Transfer"
  width={500}
  height={500}
  className="rounded-xl border"
/>
        </div>
      )}

      {donation.alasanDitolak && (
        <div className="rounded-xl bg-red-50 p-4">
          <h2 className="font-bold text-red-700">Alasan Ditolak</h2>

          <p className="text-red-600">{donation.alasanDitolak}</p>
        </div>
      )}
    </div>
  );
}
