"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Heart,
  PawPrint,
  FileText,
  User,
  LogOut,
} from "lucide-react";

import { useAuthStore } from "@/store/authstore";

export default function Sidebar() {
  const pathname = usePathname();

  const user = useAuthStore((state) => state.user);

  const donorMenus = [
    {
      title: "Dashboard",
      href: "/dashboard/donor",
      icon: LayoutDashboard,
    },
    {
      title: "Riwayat Donasi",
      href: "/dashboard/donor/donations",
      icon: Heart,
    },
    {
      title: "Profil",
      href: "/dashboard/profile",
      icon: User,
    },
  ];

  const shelterMenus = [
    {
      title: "Dashboard",
      href: "/dashboard/shelter",
      icon: LayoutDashboard,
    },
    {
      title: "Kelola Satwa",
      href: "/dashboard/shelter/satwa",
      icon: PawPrint,
    },
    {
      title: "Donasi",
      href: "/dashboard/shelter/donations",
      icon: Heart,
    },
    {
      title: "Laporan",
      href: "/dashboard/shelter/reports",
      icon: FileText,
    },
    {
      title: "Profil",
      href: "/dashboard/profile",
      icon: User,
    },
  ];

  const adminMenus = [
    {
      title: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Profil",
      href: "/dashboard/profile",
      icon: User,
    },
  ];

  const menus =
    user?.role === "DONATUR"
      ? donorMenus
      : user?.role === "SHELTER"
      ? shelterMenus
      : adminMenus;

  return (
    <aside className="flex min-h-screen w-72 flex-col bg-white shadow-xl">
      <div className="border-b p-8">
        <h1 className="text-3xl font-black text-green-600">
          Teman Asuh
        </h1>
      </div>

      <nav className="flex-1 space-y-2 p-5">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl p-4 transition ${
                pathname === menu.href
                  ? "bg-green-600 text-white"
                  : "hover:bg-green-100"
              }`}
            >
              <Icon size={20} />
              <span>{menu.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-5">
        <button className="flex w-full items-center gap-3 rounded-xl p-4 text-red-600 transition hover:bg-red-100">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}