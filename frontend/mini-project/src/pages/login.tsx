import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // VALIDASI BACKEND PROXY (Nanti akan menembak: POST /api/auth/login)
    if (email === 'admin@temanasuh.com' && password === 'AdminSecure2026!') {
      localStorage.setItem('role', 'ADMIN');
      alert('Login sukses sebagai Admin Shelter!');
      navigate('/admin/dashboard'); // Lempar ke dashboard admin (Req 1.1)
    } else if (email && password) {
      localStorage.setItem('role', 'DONATUR');
      alert('Login sukses sebagai Donatur!');
      navigate('/katalog'); // Lempar ke halaman katalog utama (Req 1.1)
    } else {
      alert('Email atau password salah!');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl border border-[#EADBC8] shadow-sm max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-[#4F6F52]">🐾 TemanAsuh</h2>
          <p className="text-gray-500 text-xs mt-1">Masuk untuk mulai mengasuh satwa telantar secara digital</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4 text-sm">
          <div>
            <label className="block font-bold text-gray-700 mb-1">Alamat Email</label>
            <input 
              type="email" 
              required
              className="w-full p-3 border border-[#EADBC8] rounded-xl bg-[#FAF8F5] focus:outline-none focus:border-[#4F6F52]" 
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-bold text-gray-700 mb-1">Kata Sandi</label>
            <input 
              type="password" 
              required
              className="w-full p-3 border border-[#EADBC8] rounded-xl bg-[#FAF8F5] focus:outline-none focus:border-[#4F6F52]" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-[#4F6F52] hover:bg-[#3A533C] text-white font-bold py-3 rounded-xl transition mt-2 text-sm">
            Masuk Sekarang
          </button>
        </form>
        <p className="text-center text-xs text-gray-500 mt-4">
          Belum punya akun? <span onClick={() => navigate('/register')} className="text-[#4F6F52] font-bold cursor-pointer hover:underline">Daftar di sini</span>
        </p>
      </div>
    </div>
  );
}
