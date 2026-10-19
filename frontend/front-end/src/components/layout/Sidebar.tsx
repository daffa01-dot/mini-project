"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Building2, FileText, HeartHandshake, Home, LogOut, PawPrint, User, Wallet, Users } from "lucide-react";
import { useAuthStore } from "@/store/authstore";

const menus = {
  DONATUR: [
    { title: "Dashboard", href: "/dashboard/donor", icon: Home },
    { title: "Cari Shelter", href: "/dashboard/donor/shelters", icon: Building2 },
    { title: "Riwayat Donasi", href: "/dashboard/donor/donation", icon: HeartHandshake },
    { title: "Profil", href: "/dashboard/profile", icon: User },
  ],
  SHELTER: [
    { title: "Dashboard", href: "/dashboard/shelter", icon: Home },
    { title: "Kelola Satwa", href: "/dashboard/shelter/animals", icon: PawPrint },
    { title: "Donasi Masuk", href: "/dashboard/shelter/donations", icon: Wallet },
    { title: "Laporan", href: "/dashboard/shelter/reports", icon: FileText },
    { title: "Profil", href: "/dashboard/profile", icon: User },
  ],
  SUPER_ADMIN: [
    { title: "Dashboard", href: "/dashboard/admin", icon: Home },
    { title: "Riwayat Donasi", href: "/dashboard/admin/donations", icon: HeartHandshake },
    { title: "Kelola Shelter", href: "/dashboard/admin/shelters", icon: Building2 },
    { title: "Kelola Pengguna", href: "/dashboard/admin/users", icon: Users },
    { title: "Profil", href: "/dashboard/profile", icon: User },
  ],
};

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const items = menus[user?.role ?? "DONATUR"];

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col bg-white shadow">
      <div className="border-b p-7"><Link href="/" className="text-2xl font-black text-green-600">Teman Asuh</Link></div>
      <nav aria-label="Navigasi dashboard" className="flex-1 space-y-2 p-4">
        {items.map(({ title, href, icon: Icon }) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${pathname === href ? "bg-green-600 text-white" : "text-slate-700 hover:bg-green-50"}`}><Icon size={20} /><span>{title}</span></Link>)}
      </nav>
      <div className="border-t p-4"><button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50"><LogOut size={18} />Keluar</button></div>
    </aside>
  );
}
