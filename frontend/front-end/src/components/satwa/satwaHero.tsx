"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

import { Satwa } from "@/types/satwa";

interface Props {
  satwa: Satwa;
}

export default function SatwaHero({
  satwa,
}: Props) {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative h-96 w-full">
        <Image
          src={satwa.foto}
          alt={satwa.nama}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-2 p-8">
        <h1 className="text-4xl font-bold">
          {satwa.nama}
        </h1>

        <div className="flex items-center gap-2 text-slate-500">
          <MapPin size={18} />

          <span>
            {satwa.shelter.namaShelter}
          </span>
        </div>
      </div>
    </section>
  );
}