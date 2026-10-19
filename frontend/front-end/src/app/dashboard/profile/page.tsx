"use client";

import { useAuthStore } from "@/store/authstore";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);
  return <main className="max-w-2xl space-y-6"><div><h1 className="text-3xl font-bold">Profil Akun</h1><p className="mt-2 text-slate-600">Informasi akun yang sedang masuk.</p></div><section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm"><div><p className="text-sm text-slate-500">Nama</p><p className="font-semibold">{user?.namaLengkap ?? "Memuat data akun..."}</p></div><div><p className="text-sm text-slate-500">Email</p><p className="font-semibold">{user?.email ?? "-"}</p></div><div><p className="text-sm text-slate-500">Role</p><p className="font-semibold">{user?.role ?? "-"}</p></div><p className="border-t pt-4 text-sm text-slate-500">Pengubahan profil belum tersedia di halaman ini.</p></section></main>;
}
