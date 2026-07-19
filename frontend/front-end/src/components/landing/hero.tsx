import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, PawPrint, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-14 px-6 py-14 lg:grid-cols-2 lg:px-8">
        {/* Left */}

        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🐾 Platform Donasi Shelter Indonesia
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
            Bersama Selamatkan
            <span className="block text-green-600">
              Satwa Terlantar
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            Temukan shelter terpercaya, bantu kebutuhan satwa melalui
            donasi yang transparan, dan pantau perkembangan donasi Anda
            secara langsung.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/login"
              className="rounded-xl bg-green-600 px-8 py-4 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Donasi Sekarang
            </Link>

            <Link
              href="/dashboard/shelter"
              className="rounded-xl border border-slate-300 px-8 py-4 text-center font-semibold transition hover:border-green-600 hover:text-green-600"
            >
              Jelajahi Shelter
            </Link>
          </div>

          {/* Quick Stats */}

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <HeartHandshake
                className="mb-2 text-green-600"
                size={28}
              />
              <p className="text-sm text-slate-500">
                Donasi Aman
              </p>
            </div>

            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <ShieldCheck
                className="mb-2 text-green-600"
                size={28}
              />
              <p className="text-sm text-slate-500">
                Shelter Terverifikasi
              </p>
            </div>

            <div className="rounded-xl border bg-white p-4 shadow-sm">
              <PawPrint
                className="mb-2 text-green-600"
                size={28}
              />
              <p className="text-sm text-slate-500">
                Peduli Satwa
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="order-1 flex justify-center lg:order-2">
          <Image
            src="/screen.png"
            alt="Teman Asuh"
            width={650}
            height={650}
            priority
            className="h-auto w-full max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}