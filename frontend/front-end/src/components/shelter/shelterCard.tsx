"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, PawPrint } from "lucide-react";

import { Shelter } from "@/types/shelter";

interface Props {
  shelter: Shelter;
}

export default function ShelterCard({
  shelter,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 w-full bg-slate-100">
        <Image
          src={
            shelter.fotoBanner ??
            "/images/shelter-placeholder.jpg"
          }
          alt={shelter.namaShelter}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-3 p-5">
        <h2 className="text-xl font-bold">
          {shelter.namaShelter}
        </h2>

        <div className="flex items-center gap-2 text-slate-500">
          <MapPin size={18} />

          <span>{shelter.kota}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <PawPrint size={18} />

          <span>
            {shelter._count.satwa} Satwa
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-slate-500">
          {shelter.alamatLengkap}
        </p>

        <Link
          href={`/dashboard/donor/shelters/${shelter.id}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}