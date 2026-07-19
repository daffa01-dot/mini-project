"use client";

import Image from "next/image";
import { ShelterDetail } from "@/types/shelter";

interface Props {
  shelter: ShelterDetail;
}

export default function ShelterBanner({
  shelter,
}: Props) {
  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow">
      <div className="relative h-72 w-full">
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

      <div className="space-y-2 p-8">
        <h1 className="text-4xl font-bold">
          {shelter.namaShelter}
        </h1>

        <p className="text-lg text-slate-500">
          {shelter.kota}
        </p>
      </div>
    </section>
  );
}