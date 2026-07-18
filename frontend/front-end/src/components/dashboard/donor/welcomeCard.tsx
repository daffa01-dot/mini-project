"use client";

import { useAuthStore } from "@/store/authstore";

export default function WelcomeCard() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="rounded-2xl bg-gradient-to-r from-green-600 to-green-500 p-8 text-white shadow">
      <h1 className="text-3xl font-bold">Halo, {user?.namaLengkap}! 👋</h1>

      <p className="mt-2 text-green-100">
        Terima kasih telah menjadi bagian dari Teman Asuh. Setiap donasi Anda
        membantu kehidupan satwa yang membutuhkan.
      </p>
      <p className="mt-4 max-w-2xl text-green-100">
        Terima kasih telah menjadi bagian dari Teman Asuh. Setiap donasi Anda
        membantu satwa mendapatkan kehidupan yang lebih baik.
      </p>
    </div>
  );
}
