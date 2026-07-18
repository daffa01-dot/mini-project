"use client";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

import { useMe } from "@/hooks/useMe";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useMe();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Memuat...
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-100">
        <Topbar />

        <main className="p-10">
          {children}
        </main>
      </div>
    </div>
  );
}