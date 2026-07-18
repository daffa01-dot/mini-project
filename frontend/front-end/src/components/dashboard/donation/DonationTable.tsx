"use client";

import { Donation } from "@/types/donation";
import DonationRow from "./DonationRow";

interface Props {
  role: "DONATUR" | "SHELTER" | "SUPER_ADMIN";

  data: Donation[];

  onUpload?: (id: string) => void;
  onDelete?: (id: string) => void;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
}

export default function DonationTable({
  role,
  data,
  onUpload,
  onDelete,
  onApprove,
  onReject,
}: Props) {
  if (data.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center shadow">
        <h2 className="text-xl font-bold">
          Belum Ada Data Donasi
        </h2>

        <p className="mt-2 text-slate-500">
          Data donasi akan muncul di sini.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border bg-white shadow">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">
          Daftar Donasi
        </h2>
      </div>

      <table className="min-w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Donatur</th>
            <th className="text-left">Satwa</th>
            <th className="text-left">Nominal</th>
            <th className="text-left">Status</th>
            <th className="text-left">Bukti</th>
            <th className="text-left">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <DonationRow
              key={item.id}
              donation={item}
              role={role}
              onUpload={onUpload}
              onDelete={onDelete}
              onApprove={onApprove}
              onReject={onReject}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}