"use client";

import {
  Heart,
  Wallet,
  Clock3,
  BadgeCheck,
} from "lucide-react";

import { Donation } from "@/types/donation";
import DashboardStatCard from "./common/dashboardStatCard";

interface Props {
  donations: Donation[];
}

export default function DashboardStats({
  donations,
}: Props) {
  const safeDonations = Array.isArray(donations)
    ? donations
    : [];

  const totalNominal = safeDonations.reduce(
    (total, donation) => total + donation.nominal,
    0
  );

  const totalDonasi = safeDonations.length;

  const pending = safeDonations.filter(
    (donation) => donation.status === "MENUNGGU"
  ).length;

  const verified = safeDonations.filter(
    (donation) => donation.status === "DIVERIFIKASI"
  ).length;

  const cards = [
    {
      title: "Total Donasi",
      value: `Rp ${totalNominal.toLocaleString("id-ID")}`,
      icon: Heart,
      color: "text-red-500",
      bg: "bg-red-100",
    },
    {
      title: "Jumlah Donasi",
      value: totalDonasi,
      icon: Wallet,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      title: "Menunggu Verifikasi",
      value: pending,
      icon: Clock3,
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      title: "Diverifikasi",
      value: verified,
      icon: BadgeCheck,
      color: "text-green-500",
      bg: "bg-green-100",
    },
  ];

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
         <DashboardStatCard
    title={card.title}
    value={card.value}
    icon={card.icon}
/>
        );
      })}
    </section>
  );
}