"use client";

import { Bell } from "lucide-react";
import { useAuthStore } from "@/store/authstore";

export default function Topbar() {
  const user = useAuthStore((state) => state.user);

  const dashboardTitle =
    user?.role === "DONATUR"
      ? "Dashboard Donatur"
      : user?.role === "SHELTER"
      ? "Dashboard Shelter"
      : user?.role === "SUPER_ADMIN"
      ? "Dashboard Admin"
      : "Dashboard";

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {dashboardTitle}
        </h2>

        <p className="text-sm text-slate-500">
          Selamat datang kembali 👋
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button className="rounded-full p-2 transition hover:bg-slate-100">
          <Bell size={22} />
        </button>

        <div className="text-right">
          <p className="font-semibold">
            {user?.namaLengkap ?? "Loading..."}
          </p>

          <p className="text-sm text-slate-500">
            {user?.email ?? ""}
          </p>
        </div>
      </div>
    </header>
  );
}