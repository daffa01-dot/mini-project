"use client";

import {
  Calendar,
  PawPrint,
  Mars,
  BadgeCheck,
} from "lucide-react";

import { Satwa } from "@/types/satwa";

interface Props {
  satwa: Satwa;
}

export default function SatwaInformation({
  satwa,
}: Props) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Informasi Satwa
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <InfoItem
          icon={PawPrint}
          label="Jenis"
          value={satwa.jenis}
        />

        <InfoItem
          icon={BadgeCheck}
          label="Ras"
          value={satwa.ras}
        />

        <InfoItem
          icon={Calendar}
          label="Umur"
          value={`${satwa.umur} Tahun`}
        />

        <InfoItem
          icon={Mars}
          label="Kelamin"
          value={satwa.kelamin}
        />
      </div>

      <div className="mt-8">
        <h3 className="mb-2 text-lg font-semibold">
          Deskripsi
        </h3>

        <p className="leading-7 text-slate-600">
          {satwa.deskripsi}
        </p>
      </div>
    </section>
  );
}

interface ItemProps {
  icon: any;
  label: string;
  value: string;
}

function InfoItem({
  icon: Icon,
  label,
  value,
}: ItemProps) {
  return (
    <div className="rounded-xl border p-4">
      <div className="mb-2 flex items-center gap-2">
        <Icon
          size={18}
          className="text-green-600"
        />

        <span className="text-sm text-slate-500">
          {label}
        </span>
      </div>

      <p className="font-semibold">
        {value}
      </p>
    </div>
  );
}