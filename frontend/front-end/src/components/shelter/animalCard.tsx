"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  PawPrint,
  BadgeCheck,
} from "lucide-react";

import { Satwa } from "@/types/shelter";

interface Props {
  satwa: Satwa;
}

export default function AnimalCard({
  satwa,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* FOTO */}
      <div className="relative h-56 w-full">
        <Image
          src={satwa.foto}
          alt={satwa.nama}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-2xl font-bold">
            {satwa.nama}
          </h2>

          <p className="text-sm text-slate-500">
            {satwa.ras}
          </p>
        </div>

        <div className="space-y-2">

          <div className="flex items-center gap-2 text-slate-600">
            <PawPrint
              size={18}
              className="text-green-600"
            />

            <span>{satwa.jenis}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <Calendar
              size={18}
              className="text-green-600"
            />

            <span>{satwa.umur} Tahun</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <BadgeCheck
              size={18}
              className="text-green-600"
            />

            <span>{satwa.status}</span>
          </div>

        </div>

        <div className="rounded-lg bg-green-50 p-3">
          <p className="text-sm text-slate-500">
            Dana Terkumpul
          </p>

          <h3 className="text-xl font-bold text-green-700">
            Rp{" "}
            {satwa.danaTerkumpul.toLocaleString(
              "id-ID"
            )}
          </h3>
        </div>

        <Link
          href={`/dashboard/donor/satwa/${satwa.id}`}
          className="block rounded-xl bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}