"use client";

import Image from "next/image";
import Link from "next/link";
import { PawPrint } from "lucide-react";

import { useSatwaList } from "@/hooks/useSatwaList";
import { getImageUrl } from "@/lib/getImageUrl";

export default function AnimalSection() {
  const { data, isLoading, isError } = useSatwaList();

  const animals = data ?? [];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-black lg:text-4xl">
              Satwa Membutuhkan Bantuan
            </h2>

            <p className="mt-3 text-slate-500">
              Pilih satwa yang ingin Anda bantu melalui donasi.
            </p>
          </div>

          <Link
            href="/animals"
            className="rounded-xl border border-slate-300 px-5 py-3 font-medium transition hover:border-green-600 hover:text-green-600"
          >
            Lihat Semua
          </Link>
        </div>

        {/* Loading */}

        {isLoading && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-96 animate-pulse rounded-3xl bg-slate-100"
              />
            ))}
          </div>
        )}

        {/* Error */}

        {isError && (
          <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-600">
            Gagal memuat data satwa.
          </div>
        )}

        {/* Empty */}

        {!isLoading && !isError && animals.length === 0 && (
          <div className="mt-10 rounded-2xl border bg-white p-10 text-center text-slate-500">
            Belum ada satwa tersedia.
          </div>
        )}

        {/* Cards */}

        {!isLoading && !isError && animals.length > 0 && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {animals.map((animal) => (
              <Link
                key={animal.id}
                href={`/dashboard/donor/shelters/${animal.shelterId}/satwa/${animal.id}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={
                    animal.foto
                      ? getImageUrl(animal.foto)
                      : "/placeholder-animal.jpg"
                  }
                  alt={animal.nama}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{animal.nama}</h3>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      {animal.jenis}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    <PawPrint size={18} />

                    <span>{animal.ras}</span>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Dana Terkumpul</p>

                    <p className="mt-1 text-xl font-bold text-green-600">
                      Rp {Number(animal.danaTerkumpul).toLocaleString("id-ID")}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex rounded-xl bg-green-600 px-5 py-3 font-medium text-white transition group-hover:bg-green-700">
                      Lihat Detail
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
