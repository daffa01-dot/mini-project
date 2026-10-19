import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";

export default function PrivacyPage() {
  return <><Navbar /><main className="mx-auto min-h-[60vh] max-w-3xl px-6 py-12"><h1 className="text-3xl font-black">Kebijakan Privasi</h1><p className="mt-5 leading-7 text-slate-600">Teman Asuh menggunakan informasi akun dan aktivitas donasi untuk menyediakan layanan, mengelola akun, serta memverifikasi donasi. Informasi hanya boleh diakses oleh pihak yang berwenang sesuai kebutuhan operasional platform.</p><p className="mt-4 leading-7 text-slate-600">Pengguna bertanggung jawab memastikan data yang diberikan akurat dan tidak mengunggah data sensitif yang tidak diperlukan. Bukti transfer dapat memuat informasi transaksi; pastikan informasi yang tidak relevan disamarkan sebelum diunggah.</p><p className="mt-4 text-sm text-slate-500">Halaman ini merupakan ringkasan awal kebijakan privasi dan perlu ditinjau sebelum digunakan sebagai kebijakan hukum final.</p><Link href="/" className="mt-8 inline-block text-green-700 hover:underline">Kembali ke beranda</Link></main><Footer /></>;
}
