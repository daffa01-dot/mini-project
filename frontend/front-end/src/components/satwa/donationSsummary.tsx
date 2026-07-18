"use client";

import { Wallet } from "lucide-react";

interface Props {
  dana: number;
}

export default function DonationSummary({
  dana,
}: Props) {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <Wallet className="text-green-600" />

        <h2 className="text-xl font-bold">
          Dana Terkumpul
        </h2>
      </div>

      <h1 className="mt-5 text-4xl font-bold text-green-600">
        Rp {dana.toLocaleString("id-ID")}
      </h1>
    </section>
  );
}