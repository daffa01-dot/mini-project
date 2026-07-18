"use client";

import Image from "next/image";

export default function SatwaHero() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-16">

      <div className="grid gap-14 lg:grid-cols-2">

        <div className="relative h-[500px] overflow-hidden rounded-3xl">

          <Image
            src="/images/cat1.jpg"
            alt="Milo"
            fill
            className="object-cover"
          />

        </div>

        <div className="flex flex-col justify-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-green-700 w-fit">

            Membutuhkan Donasi

          </span>

          <h1 className="mt-5 text-6xl font-black">

            Milo

          </h1>

          <p className="mt-3 text-xl text-slate-500">

            Kucing Persia

          </p>

          <div className="mt-8 flex gap-4">

            <div className="rounded-xl bg-slate-100 px-5 py-3">

              Betina

            </div>

            <div className="rounded-xl bg-slate-100 px-5 py-3">

              2 Tahun

            </div>

          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 p-6">

            <p className="font-semibold">

              Shelter

            </p>

            <p className="mt-2 text-slate-600">

              Shelter Harapan

            </p>

            <p className="text-slate-500">

              📍 Batam

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}