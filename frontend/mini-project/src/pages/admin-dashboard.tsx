import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Struktur Data untuk Antrean Verifikasi Resi (Requirement 1.4 & 1.6)
interface AntreanDonasi {
  id: string;
  donaturName: string;
  hewanName: string;
  amount: number;
  proofUrl: string; // Tautan gambar dari Cloud Storage via Multer
  createdAt: string;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  
  // --- STATE MANAGEMENT ---
  const [activeTab, setActiveTab] = useState<'STATISTIK' | 'VERIFIKASI'>('STATISTIK');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedResiUrl, setSelectedResiUrl] = useState<string | null>(null);
  
  // Simulasi State untuk Data Agregasi Real-Time (Requirement 1.5)
  const [stats, setStats] = useState({
    totalRevenue: 0,   // SUM potongan komisi platform 10%
    activeAnimals: 0,  // COUNT hewan yang ter-lock "SUDAH_DIADOPSI"
    avgTicketSize: 0,  // AVG rata-rata nilai donasi masuk
  });

  const [queue, setQueue] = useState<AntreanDonasi[]>([]);

  // 2. SIMULASI EFEK ANIMASI SKELETON LOADING (Requirement 1.5)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mengisi angka hasil kalkulasi agregasi server backend
      setStats({
        totalRevenue: 450000,   // Hasil dari total donasi Rp 4.500.000 x komisi 10%
        activeAnimals: 12,      // 12 kucing/anjing kuota slotnya habis (Terbantu)
        avgTicketSize: 150000,  // Rata-rata donatur transfer Rp 150.000 per transaksi
      });

      // Mengisi data antrean resi transfer manual yang berstatus PENDING
      setQueue([
        {
          id: 'ORD-99201',
          donaturName: 'Rian Hermawan',
          hewanName: 'Milo (Kucing)',
          amount: 40000, // Harga patungan 1 slot Milo (Total 120rb / 3 slot)
          proofUrl: 'https://unsplash.com', // Gambar resi tiruan
          createdAt: '10 Menit Lalu'
        },
        {
          id: 'ORD-99202',
          donaturName: 'Budi Santoso',
          hewanName: 'Rex (Anjing)',
          amount: 100000, // Harga patungan 1 slot Rex (Total 300rb / 3 slot)
          proofUrl: 'https://unsplash.com',
          createdAt: '2 Jam Lalu'
        }
      ]);

      setIsLoading(false); // Matikan efek loading screen setelah data siap
    }, 1500); // Efek memuat data dari internet selama 1.5 detik

    return () => clearTimeout(timer);
  }, []);

  // --- LOGIKA BISNIS: VERIFIKASI RESI TRANSFER MANUAL ---
  const handleApproveDonation = (id: string, name: string) => {
    // Tombol ini di backend akan memicu: prisma.$transaction (Req 1.4)
    alert(`Sukses! Transaksi ${id} Disetujui.\nSistem backend menjalankan SQL Transaction:\n1. Status Donasi menjadi APPROVED\n2. Sisa slot kuota ${name} otomatis berkurang 1\n3. Nodemailer mengirim nota HTML otomatis ke donatur.`);
    
    // Hapus item dari baris antrean di frontend setelah disetujui
    setQueue(prev => prev.filter(item => item.id !== id));
  };

  const handleLogoutAdmin = () => {
    localStorage.removeItem('role');
    alert('Sesi Admin berakhir. Anda dialihkan ke halaman utama.');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#3C2A21] font-sans flex flex-col md:flex-row">
      
      {/* 🧭 SIDEBAR KHUSUS ADMIN (WARM PREMIUM ACCENT) */}
      <aside className="w-full md:w-64 bg-[#3A533C] text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <div className="mb-8">
            <h1 className="text-xl font-extrabold tracking-wider">🐾 TemanAsuh</h1>
            <p className="text-[10px] text-emerald-200 font-semibold tracking-widest uppercase mt-0.5">Admin & Shelter Hub</p>
          </div>
          
          <nav className="space-y-2 text-sm font-bold">
            <button 
              onClick={() => setActiveTab('STATISTIK')}
              className={`w-full text-left p-3 rounded-xl transition flex items-center gap-3 ${activeTab === 'STATISTIK' ? 'bg-[#4F6F52] shadow' : 'hover:bg-[#4F6F52]/50 text-emerald-100'}`}
            >
              📊 Statistik Finansial
            </button>
            <button 
              onClick={() => setActiveTab('VERIFIKASI')}
              className={`w-full text-left p-3 rounded-xl transition flex items-center gap-3 relative ${activeTab === 'VERIFIKASI' ? 'bg-[#4F6F52] shadow' : 'hover:bg-[#4F6F52]/50 text-emerald-100'}`}
            >
              📥 Antrean Resi
              {queue.length > 0 && (
                <span className="absolute right-3 bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">
                  {queue.length}
                </span>
              )}
            </button>
          </nav>
        </div>

        <button 
          onClick={handleLogoutAdmin}
          className="w-full bg-red-800 hover:bg-red-900 text-white font-bold text-xs py-3 rounded-xl transition mt-8 flex items-center justify-center gap-2"
        >
          Keluar Sesi Admin 🚪
        </button>
      </aside>

      {/* 💻 MAIN PANEL KONTEN DASHBOARD */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 border-b border-[#EADBC8] pb-4">
          <div>
            <h2 className="text-2xl font-black text-[#3C2A21]">
              {activeTab === 'STATISTIK' ? 'Ikhtisar Performa Platform' : 'Verifikasi Bukti Transfer Manual'}
            </h2>
            <p className="text-gray-500 text-xs mt-0.5">Selamat bekerja, Kepala Pengelola Shelter 👋</p>
          </div>
        </header>

        {/* --- LOADING STATE / SKELETON SCREEN LOADER (Requirement 1.5) --- */}
        {isLoading ? (
          <div className="space-y-6 animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map(i => <div key={i} className="h-28 bg-gray-200 rounded-2xl"></div>)}
            </div>
            <div className="h-64 bg-gray-200 rounded-2xl"></div>
          </div>
        ) : (
          <>
            {/* 📊 TAB 1: KONTEN VISUALISASI DATA & DATA AGREGASI */}
            {activeTab === 'STATISTIK' && (
              <div className="space-y-6">
                {/* 3 Summary Cards Data Agregat COUNT, SUM, AVG (Requirement 1.5) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-5 rounded-2xl border border-[#EADBC8] shadow-sm">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Laba Bersih Platform (SUM)</p>
                    <h3 className="text-3xl font-black text-[#4F6F52] mt-2">Rp {stats.totalRevenue.toLocaleString()}</h3>
                    <p className="text-[10px] text-gray-400 mt-1">*Hasil akumulasi potongan komisi 10% donasi sukses</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-[#EADBC8] shadow-sm">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Hewan Terkunci Penuh (COUNT)</p>
                    <h3 className="text-3xl font-black text-amber-800 mt-2">{stats.activeAnimals} Ekor</h3>
                    <p className="text-[10px] text-gray-400 mt-1">*Jumlah satwa yang kuota slot bulanannya terisi penuh</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-[#EADBC8] shadow-sm">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Rata-rata Nilai Donasi (AVG)</p>
                    <h3 className="text-3xl font-black text-blue-900 mt-2">Rp {stats.avgTicketSize.toLocaleString()}</h3>
                    <p className="text-[10px] text-gray-400 mt-1">*Rata-rata pengeluaran donatur per transaksi</p>
                  </div>
                </div>

                {/* AREA PANEL MOCK CHART GRAFIK (Requirement 1.5) */}
                <div className="bg-white p-6 rounded-2xl border border-[#EADBC8] shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-sm font-bold text-gray-700">📈 Tren Fluktuasi Pertumbuhan Donasi Bulanan</h4>
                    <select className="p-2 border border-[#EADBC8] rounded-xl bg-[#FAF8F5] text-xs font-semibold focus:outline-none">
                      <option>Rentang Waktu: Tahun Berjalan v</option>
                      <option>Kuartal Pertama (Jan - Mar)</option>
                    </select>
                  </div>
                  
                  {/* Simulasi Grafik Visualisasi Batang Estetik */}
                  <div className="h-64 flex items-end justify-between gap-4 pt-4 px-4 border-b border-gray-200">
                    <div className="w-full bg-[#EADBC8] hover:bg-[#4F6F52] h-[30%] transition rounded-t-lg relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition">Jan: 1.2M</span></div>
                    <div className="w-full bg-[#EADBC8] hover:bg-[#4F6F52] h-[45%] transition rounded-t-lg relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition">Feb: 1.8M</span></div>
                    <div className="w-full bg-[#EADBC8] hover:bg-[#4F6F52] h-[40%] transition rounded-t-lg relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition">Mar: 1.6M</span></div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
