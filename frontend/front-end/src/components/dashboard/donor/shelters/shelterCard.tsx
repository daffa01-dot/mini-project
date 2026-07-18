"use client";

import Link from "next/link";

import { MapPin, PawPrint } from "lucide-react";

import { Shelter } from "@/types/shelter";

interface Props {
  shelter: Shelter;
}

export default function ShelterCard({ shelter }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={shelter.fotoBanner || "https://placehold.co/600x250"}
        alt={shelter.namaShelter}
        className="h-52 w-full object-cover"
      />

      <div className="space-y-4 p-6">
        <h2 className="text-2xl font-bold">{shelter.namaShelter}</h2>

        <div className="flex items-center gap-2 text-slate-500">
          <MapPin size={18} />

          {shelter.kota}
        </div>

        <div className="flex items-center gap-2 text-slate-500">
          <PawPrint size={18} />

          <div className="flex items-center gap-2 text-slate-500">
            <PawPrint size={18} />
            {shelter._count.satwa} Satwa
          </div>
        </div>

        <Link
          href={`/dashboard/donor/shelters/${shelter.id}`}
          className="inline-block rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Lihat Shelter
        </Link>
      </div>
    </div>
  );
}
