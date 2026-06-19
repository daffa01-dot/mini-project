import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 text-slate-800">
      <h1 className="text-4xl font-bold text-emerald-600 mb-4">Tentang Kami</h1>
      <p className="text-lg mb-6">Ini adalah halaman tentang detail aplikasi.</p>
      <Link to="/" className="rounded-lg bg-emerald-600 px-6 py-2 text-white font-semibold shadow-md hover:bg-emerald-700 transition">
        Kembali ke Home
      </Link>
    </div>
  );
}
