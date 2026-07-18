"use client";

import { useMemo, useState } from "react";

import { Search } from "lucide-react";

import { useShelters } from "@/hooks/useShelter";

import ShelterGrid from "@/components/shelter/shelterGrid";

export default function ShelterPage() {
  const { data, isLoading } =
    useShelters();

  const [keyword, setKeyword] =
    useState("");

  const shelters = useMemo(() => {
    const list = data?.data ?? [];

    if (!keyword.trim()) return list;

    return list.filter((item) =>
      item.namaShelter
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
  }, [data, keyword]);

  if (isLoading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <main className="space-y-8 p-8">
      <div>
        <h1 className="text-4xl font-bold">
          Temukan Shelter
        </h1>

        <p className="mt-2 text-slate-500">
          Pilih shelter yang ingin
          kamu bantu.
        </p>
      </div>

      <div className="relative max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="Cari shelter..."
          className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none focus:border-green-600"
        />
      </div>

      <ShelterGrid
        shelters={shelters}
      />
    </main>
  );
}