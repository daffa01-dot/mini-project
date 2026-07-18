"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  PawPrint,
  HeartHandshake,
  FileText,
  User,
  LogOut,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard/shelter",
    icon: Home,
  },
  {
    title: "Kelola Satwa",
    href: "/dashboard/shelter/animals",
    icon: PawPrint,
  },
  {
    title: "Donasi",
    href: "/dashboard/shelter/donations",
    icon: HeartHandshake,
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col bg-white shadow">

      <div className="border-b p-8">

        <h1 className="text-3xl font-black text-green-600">
          Teman Asuh
        </h1>

      </div>

      <nav className="flex-1 space-y-2 p-6">

        {menus.map((menu) => {

          const Icon = menu.icon;
console.log("USER:", User);
console.log("ROLE:", User?.name);
console.log("MENUS:", menus);
          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                pathname === menu.href
                  ? "bg-green-600 text-white"
                  : "hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />

              {menu.title}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-6">

        <button className="flex items-center gap-3 text-red-600">

          <LogOut size={18} />

          Logout

        </button>

      </div>
    </aside>
  );
}