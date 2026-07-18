"use client";

import Image from "next/image";

export default function ShelterHeader() {
  return (
    <section>

      <div className="relative h-[420px]">

        <Image
          src="/images/default-shelter.jpg"
          fill
          alt="Shelter"
          className="object-cover"
        />

      </div>

      <div className="mx-auto -mt-20 max-w-7xl px-8">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <div className="flex gap-8">

            <Image
              src="/images/logo.png"
              width={120}
              height={120}
              alt="Logo"
              className="rounded-full"
            />

            <div className="flex-1">

              <h1 className="text-5xl font-black">

                Shelter Harapan

              </h1>

              <p className="mt-3 text-slate-500">

                📍 Batam

              </p>

              <div className="mt-6 flex gap-5">

                <button className="rounded-xl bg-green-600 px-6 py-3 text-white">

                  Donasi Shelter

                </button>

                <button className="rounded-xl border px-6 py-3">

                  Hubungi Shelter

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}