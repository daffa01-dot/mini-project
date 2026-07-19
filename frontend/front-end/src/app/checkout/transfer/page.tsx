"use client";

import { useEffect, useState } from "react";

export default function TransferPage() {
  // Buat state untuk menyimpan data agar aman saat proses build server
  const [data, setData] = useState<any>({});

  useEffect(() => {
    // Ambil data sessionStorage hanya ketika komponen sudah berjalan di browser
    if (typeof window !== "undefined") {
      const storedData = JSON.parse(sessionStorage.getItem("checkout") || "{}");
      setData(storedData);
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 shadow">
        <h1 className="text-4xl font-black"> Transfer Donasi </h1>
        <div className="mt-8 space-y-5">
          <div>
            <p>Bank</p>
            <h2 className="text-2xl font-bold">
              {data.rekeningTujuan?.bank || "-"}
            </h2>
          </div>
          <div>
            <p>Nomor Rekening</p>
            <h2 className="text-2xl font-bold">
              {data.rekeningTujuan?.nomorRekening || "-"}
            </h2>
          </div>
          <div>
            <p>Atas Nama</p>
            <h2 className="text-2xl font-bold">
              {data.rekeningTujuan?.atasNama || "-"}
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
