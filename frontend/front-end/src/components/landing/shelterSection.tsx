"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, PawPrint } from "lucide-react";

import { useShelters } from "@/hooks/useShelter";
import { getImageUrl } from "@/lib/getImageUrl";

export default function ShelterSection() {
  const { data, isLoading, isError } = useShelters();

  const shelters = data?.data ?? [];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-black lg:text-4xl">
              Shelter Terpercaya
            </h2>

            <p className="mt-3 text-slate-500">
              Temukan shelter yang telah bergabung dan siap menerima donasi
              untuk membantu satwa terlantar.
            </p>
          </div>

          <Link
            href="/shelters"
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
                className="h-96 animate-pulse rounded-3xl bg-white"
              />
            ))}
          </div>
        )}

        {/* Error */}

        {isError && (
          <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-600">
            Gagal memuat data shelter.
          </div>
        )}

        {/* Empty */}

        {!isLoading && !isError && shelters.length === 0 && (
          <div className="mt-10 rounded-2xl border bg-white p-10 text-center text-slate-500">
            Belum ada shelter tersedia.
          </div>
        )}

        {/* Cards */}

        {!isLoading && !isError && shelters.length > 0 && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {shelters.map((item) => (
              <Link
                key={item.id}
                href={`/shelters/${item.id}`}
                className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={
                    item.fotoBanner
                      ? getImageUrl(item.fotoBanner)
                      : "/placeholder-shelter.jpg"
                  }
                  alt={item.namaShelter}
                  width={600}
                  height={350}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="space-y-4 p-6">
                  <h3 className="text-2xl font-bold">{item.namaShelter}</h3>

                  <div className="flex items-center gap-2 text-slate-500">
                    <MapPin size={18} />

                    <span>{item.kota}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    <PawPrint size={18} />

                    <span>{item._count.satwa} Satwa</span>
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
