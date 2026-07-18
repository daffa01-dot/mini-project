"use client";

import Link from "next/link";

interface Props {
  data: any[];
  onDelete: (id: string) => void;
}

export default function SatwaTable({ data, onDelete }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="flex items-center justify-between border-b p-5">
        <h2 className="text-xl font-semibold">Kelola Satwa</h2>

        <Link
          href="/dashboard/shelter/animals/create"
          className="rounded-lg bg-green-600 px-4 py-2 text-white"
        >
          Tambah Satwa
        </Link>
      </div>

      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Nama</th>

            <th>Jenis</th>

            <th>Umur</th>

            <th>Status</th>

            <th>Dana</th>

            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">{item.nama}</td>

              <td>{item.jenis}</td>

              <td>{item.umur} Tahun</td>

              <td>{item.status}</td>

              <td>Rp {item.danaTerkumpul.toLocaleString("id-ID")}</td>

              <td>
                <div className="flex gap-2">
                  <Link
                   href={`/dashboard/shelter/animals/${item.id}/edit`}
                    className="rounded bg-blue-600 px-3 py-1 text-white"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="rounded bg-red-600 px-3 py-1 text-white"
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
