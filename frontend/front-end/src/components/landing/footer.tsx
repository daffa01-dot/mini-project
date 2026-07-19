import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-3xl font-black text-green-400">Teman Asuh</h2>

            <p className="mt-4 leading-7 text-slate-400">
              Platform donasi untuk membantu shelter dan satwa terlantar melalui
              proses yang transparan, mudah, dan terpercaya.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">Menu</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/" className="hover:text-green-400">
                  Beranda
                </Link>
              </li>

              <li>
                <Link href="/shelters" className="hover:text-green-400">
                  Shelter
                </Link>
              </li>

              <li>
                <Link href="/animals" className="hover:text-green-400">
                  Satwa
                </Link>
              </li>

              <li>
                <Link href="/login" className="hover:text-green-400">
                  Masuk
                </Link>
              </li>
            </ul>
          </div>

          {/* Bantuan */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">Bantuan</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/terms" className="hover:text-green-400">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-green-400">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/register" className="hover:text-green-400">
                  Daftar Sebagai Donatur
                </Link>
              </li>

              <li>
                <Link
                  href="/register?role=SHELTER"
                  className="hover:text-green-400"
                >
                  Daftarkan Shelter
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-4 text-lg font-semibold">Hubungi Kami</h3>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-center gap-3">
                <Mail size={18} />

                <span>support@temanasuh.id</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />

                <span>+62 812-3456-7890</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />

                <span>Indonesia</span>
              </div>

              <div className="mt-6 flex gap-4"></div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Teman Asuh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
