"use client";

import { HeartHandshake, PawPrint, Building2, Wallet } from "lucide-react";

import { useDashboard } from "@/hooks/useDashboard";

export default function Stats() {
  const { data, isLoading, isError } = useDashboard();

  const summary = data?.summary;

  const stats = [
    {
      title: summary?.totalShelter ?? 0,
      label: "Shelter Aktif",
      icon: Building2,
    },
    {
      title: summary?.totalSatwa ?? 0,
      label: "Satwa Terdaftar",
      icon: PawPrint,
    },
    {
      title: summary?.totalUser ?? 0,
      label: "Pengguna",
      icon: HeartHandshake,
    },
    {
      title: `Rp ${Number(summary?.totalDonasi ?? 0).toLocaleString("id-ID")}`,
      label: "Total Donasi",
      icon: Wallet,
    },
  ];
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">Dampak Bersama</h2>

          <p className="mt-3 text-slate-500">
            Transparansi jumlah shelter, satwa, donatur, dan total donasi yang
            telah berhasil dikumpulkan.
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-3xl bg-white"
              />
            ))}
          </div>
        )}

        {isError && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-600">
            Gagal memuat statistik.
          </div>
        )}

        {!isLoading && !isError && (
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-3xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex justify-center">
                    <div className="rounded-full bg-green-100 p-4">
                      <Icon size={30} className="text-green-600" />
                    </div>
                  </div>

                  <h2 className="text-4xl font-black text-green-600">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-slate-500">{item.label}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
