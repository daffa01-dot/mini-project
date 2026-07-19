import {
  LayoutDashboard,
  Heart,
  PawPrint,
  FileText,
  User,
  Building2,
  Users,
  Settings,
  type LucideIcon,
} from "lucide-react";

export interface SidebarMenu {
  key: string;
  label: string;
  path: string;
  icon: LucideIcon;
}

export const donorMenus: SidebarMenu[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard/donor",
    icon: LayoutDashboard,
  },
  {
    key: "shelters",
    label: "Shelters",
    path: "/dashboard/donor/shelters",
    icon: Building2,
  },
  {
    key: "donations",
    label: "Riwayat Donasi",
    path: "/dashboard/donor/donations",
    icon: Heart,
  },
  {
    key: "profile",
    label: "Profil",
    path: "/dashboard/profile",
    icon: User,
  },
];

export const shelterMenus: SidebarMenu[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard/shelter",
    icon: LayoutDashboard,
  },
  {
    key: "animals",
    label: "Kelola Satwa",
    path: "/dashboard/shelter/animals",
    icon: PawPrint,
  },
  {
    key: "donations",
    label: "Donasi",
    path: "/dashboard/shelter/donations",
    icon: Heart,
  },
  {
    key: "reports",
    label: "Laporan",
    path: "/dashboard/shelter/reports",
    icon: FileText,
  },
  {
    key: "profile",
    label: "Profil",
    path: "/dashboard/profile",
    icon: User,
  },
];

export const adminMenus: SidebarMenu[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    key: "users",
    label: "Kelola User",
    path: "/dashboard/admin/users",
    icon: Users,
  },
  {
    key: "shelters",
    label: "Kelola Shelter",
    path: "/dashboard/admin/shelters",
    icon: Building2,
  },
  {
    key: "settings",
    label: "Pengaturan",
    path: "/dashboard/admin/settings",
    icon: Settings,
  },
];