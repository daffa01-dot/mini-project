"use client";

import {
  Wallet,
  Heart,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import { DashboardSummary } from "@/types/dashboard";

interface Props {
  summary?: DashboardSummary;
}

export default function DashboardStats({
  summary,
}: Props) {
  const cards = [
    {
      title: "Total Donasi",
      value: `Rp ${(summary?.totalNominal ?? 0).toLocaleString(
        "id-ID"
      )}`,
      icon: Wallet,
    },

    {
      title: "Jumlah Donasi",
      value: summary?.jumlahDonasi ?? 0,
      icon: Heart,
    },

    {
      title: "Menunggu Verifikasi",
      value: summary?.pending ?? 0,
      icon: Clock3,
    },

    {
      title: "Diverifikasi",
      value: summary?.verified ?? 0,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl bg-white p-6 shadow"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                {card.title}
              </p>

              <Icon className="text-green-600" size={22} />
            </div>

            <h2 className="text-3xl font-bold">
              {card.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}