import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";

export default function TermsPage() {
  return <><Navbar /><main className="mx-auto min-h-[60vh] max-w-3xl px-6 py-12"><h1 className="text-3xl font-black">Syarat dan Ketentuan</h1><p className="mt-5 leading-7 text-slate-600">Teman Asuh membantu pengguna menemukan shelter dan menyalurkan donasi untuk kesejahteraan satwa. Pengguna wajib memberikan informasi yang benar, menggunakan layanan secara bertanggung jawab, dan memastikan transfer donasi dilakukan ke rekening tujuan yang ditampilkan pada aplikasi.</p><p className="mt-4 leading-7 text-slate-600">Bukti transfer yang diunggah digunakan untuk proses verifikasi donasi. Status donasi dapat menunggu verifikasi sampai pihak yang berwenang memeriksa bukti tersebut. Jangan mengunggah informasi pribadi yang tidak diperlukan.</p><p className="mt-4 text-sm text-slate-500">Halaman informasi ini merupakan ringkasan awal. Ketentuan operasional dapat diperbarui sesuai kebijakan platform.</p><Link href="/" className="mt-8 inline-block text-green-700 hover:underline">Kembali ke beranda</Link></main><Footer /></>;
}
