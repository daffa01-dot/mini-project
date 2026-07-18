"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <h1 className="text-3xl font-black text-green-600">
          Teman Asuh
        </h1>

        <div className="hidden gap-8 lg:flex">

          <Link href="/">Beranda</Link>

          <Link href="/shelter">Shelter</Link>

          <Link href="/animals">Satwa</Link>

          <Link href="/about">Tentang</Link>

        </div>

        <div className="flex gap-4">

          <Link
            href="/login"
            className="rounded-xl border px-5 py-2"
          >
            Masuk
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-green-600 px-5 py-2 text-white"
          >
            Daftar
          </Link>

        </div>

      </div>
    </nav>
  );
}