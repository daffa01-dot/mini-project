"use client";

import Link from "next/link";
import { Building2, Users, HeartHandshake } from "lucide-react";
import { useDashboard } from "@/hooks/useDashboard";

export default function AdminDashboardPage() {
  const { data, isLoading, isError } = useDashboard();
  const summary = data?.summary;
  const cards = [
    { label: "Total Shelter", value: summary?.totalShelter ?? 0, icon: Building2 },
    { label: "Total Pengguna", value: summary?.totalUser ?? 0, icon: Users },
    { label: "Donasi Terbaru", value: data?.recentDonations?.length ?? 0, icon: HeartHandshake },
  ];

  return <main className="space-y-8"><div><h1 className="text-3xl font-black">Dashboard Admin</h1><p className="mt-2 text-slate-600">Ringkasan aktivitas platform Teman Asuh.</p></div>{isLoading && <p role="status">Memuat statistik...</p>}{isError && <p role="alert" className="rounded-xl bg-red-50 p-4 text-red-700">Statistik belum dapat dimuat.</p>}<div className="grid gap-5 md:grid-cols-3">{cards.map(({ label, value, icon: Icon }) => <section key={label} className="rounded-2xl bg-white p-6 shadow-sm"><div className="flex items-center justify-between"><p className="text-sm text-slate-500">{label}</p><Icon className="text-green-700" /></div><p className="mt-4 text-3xl font-bold">{value}</p></section>)}</div><section className="rounded-2xl bg-white p-6"><h2 className="text-xl font-bold">Akses Admin</h2><div className="mt-4 flex flex-wrap gap-3"><Link className="rounded-lg bg-green-700 px-4 py-2 text-white" href="/dashboard/admin/donations">Riwayat Donasi</Link><Link className="rounded-lg border px-4 py-2" href="/dashboard/admin/shelters">Daftar Shelter</Link><Link className="rounded-lg border px-4 py-2" href="/dashboard/admin/users">Pengguna</Link></div></section></main>;
}
