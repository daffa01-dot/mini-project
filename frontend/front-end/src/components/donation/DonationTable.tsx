"use client";

import { useDonationHistory } from "@/hooks/useDonationHistory";
import { useVerifyDonation } from "@/hooks/useVerifyDonation";
import { Donation } from "@/types/donation";
export default function DonationTable() {
  const { data, isLoading, error } = useDonationHistory();

  const verify = useVerifyDonation();

  if (isLoading) {
    return <div className="rounded-3xl bg-white p-10 shadow">Loading...</div>;
  }

  if (error) {
    return (
      <div className="rounded-3xl bg-red-100 p-10 text-red-600">
        Gagal mengambil data donasi.
      </div>
    );
  }

  const donations: Donation[] = data?.data ?? [];
  if (donations.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-20 text-center shadow">
        <h2 className="text-2xl font-bold">Belum ada donasi</h2>

        <p className="mt-3 text-slate-500">Data donasi akan muncul di sini.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-3xl bg-white shadow">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Donatur</th>

            <th className="p-4 text-left">Satwa</th>

            <th className="p-4 text-left">Nominal</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-left">Tanggal</th>

            <th className="p-4 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {donations.map((donasi) => (
            <tr key={donasi.id} className="border-t">
              <td className="p-4">{donasi.donatur?.namaLengkap}</td>

              <td className="p-4">{donasi.satwa?.nama ?? "-"}</td>

              <td className="p-4">
                Rp {Number(donasi.nominal).toLocaleString("id-ID")}
              </td>

              <td className="p-4">
                <span
                  className={`
                  rounded-full
                  px-3
                  py-1
                  text-sm
                  font-semibold

                  ${
                    donasi.status === "MENUNGGU"
                      ? "bg-yellow-100 text-yellow-700"
                      : ""
                  }

                  ${
                    donasi.status === "DIVERIFIKASI"
                      ? "bg-green-100 text-green-700"
                      : ""
                  }

                  ${
                    donasi.status === "DITOLAK" ? "bg-red-100 text-red-700" : ""
                  }
                  `}
                >
                  {donasi.status}
                </span>
              </td>

              <td className="p-4">
                {new Date(donasi.createdAt).toLocaleDateString("id-ID")}
              </td>

              <td className="space-x-2 p-4 text-center">
                {donasi.status === "MENUNGGU" && (
                  <>
                    <button
                      onClick={() =>
                        verify.mutate({
                          donasiId: donasi.id,
                          statusBaru: "DIVERIFIKASI",
                        })
                      }
                      className="rounded-lg bg-green-600 px-3 py-2 text-white"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => {
                        const alasan =
                          prompt("Masukkan alasan penolakan") ?? "";

                        if (!alasan) return;

                        verify.mutate({
                          donasiId: donasi.id,
                          statusBaru: "DITOLAK",
                          alasanDitolak: alasan,
                        });
                      }}
                      className="rounded-lg bg-red-600 px-3 py-2 text-white"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
