import React, { useState, useEffect } from "react";

// 1. Definisikan Tipe Data sesuai Prisma Schema Backend
interface Hewan {
  id: string;
  name: string;
  type: "KUCING" | "ANJING";
  description: string;
  foodCost: number;
  medicalCost: number;
  slotsAvailable: number;
  status: string;
  photoUrl: string;
  shelter: {
    name: string;
    city: string;
    bankAccount: string;
  };
}

export default function TemanAsuhKatalog() {
  // --- STATE MANAGEMENT ---
  const [animals, setAnimals] = useState<Hewan[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedType, setSelectedType] = useState("");

  // State untuk Alur Transaksi & Modal Pop-Up
  const [activeAnimal, setActiveAnimal] = useState<Hewan | null>(null);
  const [showTcModal, setShowTcModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isTcChecked, setIsTcChecked] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  // 2. IMPLEMENTASI SEARCH DEBOUNCE MINIMUM 300MS (Requirement 1.3)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300); // Tahan 300ms sebelum memicu pemanggilan variabel

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // 3. SIMULASI MOCK DATA JALUR REST API (Bahan Render Tampilan)
  useEffect(() => {
    // Di masa depan, bagian ini akan menembak: fetch(`http://localhost:5000/api/animals?search=${debouncedSearch}...`)
    const mockData: Hewan[] = [
      {
        id: "1",
        name: "Milo",
        type: "KUCING",
        description:
          "Milo diselamatkan dari pasar dengan kondisi kaki kiri luka ringan. Sekarang sangat aktif, manja, dan gemar bermain bola benang.",
        foodCost: 90000,
        medicalCost: 30000,
        slotsAvailable: 2,
        status: "BUTUH_ASUHAN",
        photoUrl: "https://unsplash.com",
        shelter: {
          name: "Shelter Clow Tangerang",
          city: "TANGERANG",
          bankAccount: "BCA - 892019281 a.n Shelter Clow",
        },
      },
      {
        id: "2",
        name: "Rex",
        type: "ANJING",
        description:
          "Rex adalah anjing blesteran lokal penjaga panti yang sangat setia. Memiliki porsi makan besar dan butuh suplemen penguat tulang.",
        foodCost: 240000,
        medicalCost: 60000,
        slotsAvailable: 3,
        status: "BUTUH_ASUHAN",
        photoUrl: "https://unsplash.com",
        shelter: {
          name: "Pejaten Shelter Jakarta",
          city: "JAKARTA",
          bankAccount: "Mandiri - 1230009988 a.n Pejaten Shelter",
        },
      },
    ];

    // Filter simulasi sisi client (Untuk kebutuhan visualisasi sebelum backend terkoneksi)
    const filtered = mockData.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());
      const matchCity = selectedCity
        ? item.shelter.city === selectedCity
        : true;
      const matchType = selectedType ? item.type === selectedType : true;
      return matchSearch && matchCity && matchType;
    });

    setAnimals(filtered);
  }, [debouncedSearch, selectedCity, selectedType]);

  // --- LOGIKA BISNIS ALUR CHECKOUT ---
  const handleOpenAdoption = (hewan: Hewan) => {
    setActiveAnimal(hewan);
    setIsTcChecked(false);
    setShowTcModal(true); // Paws: T&C keluar tepat saat tombol klik (Req 1.4)
  };

  const handleTcSubmit = () => {
    setShowTcModal(false);
    setShowUploadModal(true); // Masuk ke form upload resi bank manual (Req 1.4)
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadFile(e.target.files[0]);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Sukses! Bukti transfer untuk mengasuh ${activeAnimal?.name} telah dikirim ke backend Express. Status masuk antrean PENDING.`,
    );
    setShowUploadModal(false);
    setUploadFile(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3C2A21] font-sans">
      {/* HEADER ALAMAT NATHA SATWA VIBE */}
      <header className="bg-white border-b border-[#EADBC8] p-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide text-[#4F6F52]">
          🐾 TemanAsuh
        </h1>
        <div className="space-x-6 font-semibold text-sm">
          <span className="text-[#4F6F52] border-b-2 border-[#4F6F52] pb-1">
            Katalog Asuh
          </span>
          <span className="cursor-pointer hover:text-[#4F6F52]">
            Laporan Shelter
          </span>
          <span className="cursor-pointer hover:text-[#4F6F52]">
            Dasbor Saya
          </span>
          <span className="cursor-pointer hover:text-[#4F6F52]">
            Login/Register
          </span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* JUDUL SEKSI */}
        <div className="text-center my-8">
          <h2 className="text-3xl font-extrabold text-[#3C2A21]">
            Menjadi Orang Tua Asuh Digital
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto text-sm">
            Bantu pakan dan medis satwa telantar di berbagai shelter secara
            gotong royong melalui sistem kustomisasi slot bulanan transparan.
          </p>
        </div>

        {/* 🔍 BARIS EKSPLORASI: SEARCH DEBOUNCE & DUAL FILTER (Requirement 1.3) */}
        <div className="bg-white p-4 rounded-xl border border-[#EADBC8] shadow-sm mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Cari nama hewan telantar..."
            className="flex-1 p-3 border border-[#EADBC8] rounded-lg bg-[#FAF8F5] focus:outline-none focus:border-[#4F6F52] text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-3 border border-[#EADBC8] rounded-lg bg-[#FAF8F5] text-sm focus:outline-none"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Semua Kategori</option>
            <option value="KUCING">🐱 Kucing</option>
            <option value="ANJING">🐶 Anjing</option>
          </select>
          <select
            className="p-3 border border-[#EADBC8] rounded-lg bg-[#FAF8F5] text-sm focus:outline-none"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Semua Kota</option>
            <option value="TANGERANG">Tangerang</option>
            <option value="JAKARTA">Jakarta</option>
          </select>
        </div>

        {/* 🐱 KONDISIONAL LAYOUT KATALOG / EMPTY STATE HANDLING (Requirement 1.3) */}
        {animals.length === 0 ? (
          <div className="text-center p-12 bg-white rounded-xl border border-dashed border-[#EADBC8]">
            <p className="text-5xl">💤</p>
            <h3 className="text-lg font-bold mt-4">
              Semua Hewan Telah Terbantu Bulan Ini!
            </h3>
            <p className="text-gray-500 text-xs mt-1">
              Tidak ada hewan terdaftar di wilayah atau nama yang Anda cari saat
              ini.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {animals.map((hewan) => {
              const totalCost = hewan.foodCost + hewan.medicalCost;
              const costPerSlot = totalCost / 3; // Pembagian 3 slot kuota patungan (Co-Fostering)

              return (
                <div
                  key={hewan.id}
                  className="bg-white rounded-2xl border border-[#EADBC8] overflow-hidden shadow-sm flex flex-col md:flex-row"
                >
                  <img
                    src={hewan.photoUrl}
                    alt={hewan.name}
                    className="w-full md:w-48 h-56 object-cover"
                  />
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-[#3C2A21]">
                          {hewan.name}
                        </h3>
                        <span className="text-xs bg-[#EADBC8] px-2 py-1 rounded-full font-bold text-[#735F32]">
                          {hewan.slotsAvailable} SLOT TERSISA 🔴
                        </span>
                      </div>
                      <p className="text-xs text-emerald-700 font-bold mt-1">
                        {hewan.shelter.name} ({hewan.shelter.city})
                      </p>
                      <p className="text-gray-600 text-xs mt-2 line-clamp-3">
                        {hewan.description}
                      </p>

                      {/* Rincian Rekomendasi Biaya Dunia Nyata */}
                      <div className="mt-4 bg-[#FAF8F5] p-3 rounded-lg border border-[#EADBC8] text-xs space-y-1">
                        <div className="flex justify-between">
                          <span>📦 Kebutuhan Pakan:</span>
                          <span>Rp {hewan.foodCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>💊 Kebutuhan Medis:</span>
                          <span>Rp {hewan.medicalCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-bold border-t border-gray-200 pt-1 text-[#4F6F52]">
                          <span>Patungan (Per Slot):</span>
                          <span>Rp {costPerSlot.toLocaleString()} / bln</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenAdoption(hewan)}
                      className="w-full bg-[#4F6F52] hover:bg-[#3A533C] text-white font-bold text-sm py-2.5 rounded-xl transition mt-4"
                    >
                      🐾 Jadi Teman Asuh {hewan.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* 🛡️ MODAL 1: INTERACTIVE TERMS & CONDITIONS POP-UP (Requirement 1.4) */}
      {showTcModal && activeAnimal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-3">
              Syarat & Ketentuan Adopsi
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Dengan menekan Lanjutkan, Anda menyetujui untuk menjadi orang tua
              asuh digital dan mengunggah bukti transfer.
            </p>
            <div className="space-y-3 mb-5 text-sm text-gray-700">
              <p>• Pastikan data transfer valid dan sesuai total adopsi.</p>
              <p>
                • Setiap hewan memiliki slot limit. Setelah slot penuh, pilihan
                akan terhapus.
              </p>
              <p>• Bukti transfer akan divalidasi oleh shelter.</p>
            </div>

            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={isTcChecked}
                onChange={(e) => setIsTcChecked(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-[#4F6F52] focus:ring-[#4F6F52]"
              />
              Saya menyetujui syarat & ketentuan adopsi digital.
            </label>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowTcModal(false)}
                className="rounded-xl border border-[#EADBC8] bg-white px-4 py-2 text-sm font-semibold text-[#3C2A21] hover:bg-[#FAF8F5]"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleTcSubmit}
                disabled={!isTcChecked}
                className={`rounded-xl px-4 py-2 text-sm font-semibold text-white ${isTcChecked ? "bg-[#4F6F52] hover:bg-[#3A533C]" : "bg-gray-300 cursor-not-allowed"}`}
              >
                Lanjutkan
              </button>
            </div>
          </div>
        </div>
      )}

      {showUploadModal && activeAnimal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-3xl w-full max-w-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold mb-3">Unggah Bukti Transfer</h3>
            <p className="text-sm text-gray-600 mb-4">
              Silakan unggah foto/scan resi transfer untuk transaksi asuh{" "}
              {activeAnimal.name}.
            </p>
            <form onSubmit={handleFinalSubmit} className="space-y-4">
              <div>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-[#4F6F52] file:px-4 file:text-white file:font-semibold"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowUploadModal(false);
                    setUploadFile(null);
                  }}
                  className="rounded-xl border border-[#EADBC8] bg-white px-4 py-2 text-sm font-semibold text-[#3C2A21] hover:bg-[#FAF8F5]"
                >
                  Tutup
                </button>
                <button
                  type="submit"
                  disabled={!uploadFile}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold text-white ${uploadFile ? "bg-[#4F6F52] hover:bg-[#3A533C]" : "bg-gray-300 cursor-not-allowed"}`}
                >
                  Kirim Bukti
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
