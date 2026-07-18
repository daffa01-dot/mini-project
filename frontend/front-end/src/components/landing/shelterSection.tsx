import Image from "next/image";
import Link from "next/link";

const shelters = [
  {
    id: 1,
    nama: "Shelter Harapan",
    kota: "Batam",
    hewan: 54,
    image: "/images/shelter1.jpg",
  },
  {
    id: 2,
    nama: "Cat Rescue Indonesia",
    kota: "Jakarta",
    hewan: 81,
    image: "/images/shelter2.jpg",
  },
  {
    id: 3,
    nama: "Paw Care",
    kota: "Bandung",
    hewan: 42,
    image: "/images/shelter3.jpg",
  },
];

export default function ShelterSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="mx-auto max-w-7xl px-8">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-black">

              Shelter Terpercaya

            </h2>

            <p className="mt-3 text-slate-500">

              Shelter yang telah diverifikasi.

            </p>

          </div>

          <Link
            href="/shelters"
            className="rounded-xl border px-5 py-3"
          >
            Lihat Semua
          </Link>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {shelters.map((item) => (

            <div
              key={item.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <Image
                src={item.image}
                width={500}
                height={300}
                alt={item.nama}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">

                  {item.nama}

                </h3>

                <p className="mt-2 text-slate-500">

                  📍 {item.kota}

                </p>

                <p className="mt-2 text-slate-500">

                  🐶 {item.hewan} Satwa

                </p>

                <button
                  className="mt-6 w-full rounded-xl bg-green-600 py-3 text-white"
                >
                  Detail Shelter
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}