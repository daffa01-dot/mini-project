"use client";

import Link from "next/link";

export default function QuickAction() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <Link
      href="/dashboard/donor/shelters"
        className="rounded-2xl bg-green-600 p-6 text-center text-lg font-semibold text-white transition hover:bg-green-700"
      >
        Donasi Sekarang
      </Link>

      <Link
        href="/dashboard/donor/donations"
        className="rounded-2xl border border-green-600 p-6 text-center text-lg font-semibold text-green-600 transition hover:bg-green-50"
      >
        Lihat Riwayat Donasi
      </Link>
    </section>
  );
}
