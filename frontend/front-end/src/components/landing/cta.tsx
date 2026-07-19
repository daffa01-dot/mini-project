import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  PawPrint,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-green-600 to-emerald-700 px-8 py-16 text-white shadow-2xl lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black leading-tight lg:text-5xl">
              Jadilah Bagian dari
              <span className="block">
                Perubahan untuk Satwa
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
              Setiap donasi yang Anda berikan membantu
              menyediakan makanan, perawatan kesehatan,
              dan tempat tinggal yang layak bagi satwa
              yang membutuhkan.
            </p>
          </div>

          {/* Trust */}

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <HeartHandshake
                className="mx-auto mb-3"
                size={30}
              />

              <h3 className="font-semibold">
                Donasi Transparan
              </h3>

              <p className="mt-2 text-sm text-green-100">
                Pantau status donasi Anda secara
                langsung.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <ShieldCheck
                className="mx-auto mb-3"
                size={30}
              />

              <h3 className="font-semibold">
                Shelter Terverifikasi
              </h3>

              <p className="mt-2 text-sm text-green-100">
                Seluruh shelter melalui proses
                verifikasi.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <PawPrint
                className="mx-auto mb-3"
                size={30}
              />

              <h3 className="font-semibold">
                Fokus Pada Satwa
              </h3>

              <p className="mt-2 text-sm text-green-100">
                Donasi langsung ditujukan kepada
                satwa yang membutuhkan.
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-green-700 transition hover:bg-green-50"
            >
              Mulai Berdonasi
            </Link>

            <Link
              href="/register?role=SHELTER"
              className="rounded-2xl border border-white px-8 py-4 text-center font-semibold transition hover:bg-white hover:text-green-700"
            >
              Daftarkan Shelter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}