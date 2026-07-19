"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export default function DashboardStatCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <Icon
          size={22}
          className="text-green-600"
        />
      </div>

      <h2 className="mt-4 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}