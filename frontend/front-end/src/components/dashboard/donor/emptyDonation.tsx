"use client";

import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export default function EmptyDonation() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">
      <HeartHandshake
        size={56}
        className="mx-auto text-green-600"
      />

      <h2 className="mt-6 text-2xl font-bold">
        Belum Ada Donasi
      </h2>

      <p className="mt-2 text-slate-500">
        Anda belum pernah melakukan donasi.
        Yuk mulai membantu satwa yang membutuhkan ❤️
      </p>

      <Link
        href="/dashboard/donor/donations/checkout"
        className="mt-8 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        Donasi Sekarang
      </Link>
    </div>
  );
}