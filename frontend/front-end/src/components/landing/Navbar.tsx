"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const menus = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Shelter",
    href: "/shelters",
  },
  {
    name: "Satwa",
    href: "/animals",
  },
  {
    name: "Tentang",
    href: "/about",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-black text-green-600"
        >
          Teman Asuh
        </Link>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 lg:flex">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              className={`transition hover:text-green-600 ${
                pathname === menu.href
                  ? "font-semibold text-green-600"
                  : "text-slate-700"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-xl border border-slate-300 px-5 py-2 transition hover:border-green-600 hover:text-green-600"
          >
            Masuk
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
          >
            Daftar
          </Link>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}

      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col px-5 py-5">
            {menus.map((menu) => (
              <Link
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 transition ${
                  pathname === menu.href
                    ? "bg-green-50 font-semibold text-green-600"
                    : "hover:bg-slate-100"
                }`}
              >
                {menu.name}
              </Link>
            ))}

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-slate-300 py-3 text-center transition hover:border-green-600 hover:text-green-600"
              >
                Masuk
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-green-600 py-3 text-center text-white transition hover:bg-green-700"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}