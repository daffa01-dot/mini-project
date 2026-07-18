import Image from "next/image";

const animals = [
  {
    id: 1,
    nama: "Milo",
    jenis: "Kucing",
    progress: 75,
    image: "/images/cat1.jpg",
  },
  {
    id: 2,
    nama: "Bruno",
    jenis: "Anjing",
    progress: 42,
    image: "/images/dog1.jpg",
  },
  {
    id: 3,
    nama: "Oyen",
    jenis: "Kucing",
    progress: 90,
    image: "/images/cat2.jpg",
  },
];

export default function AnimalSection() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-4xl font-black">

          Satwa Membutuhkan Bantuan

        </h2>

        <p className="mt-3 text-slate-500">

          Donasi langsung kepada satwa yang sedang dirawat.

        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {animals.map((animal) => (

            <div
              key={animal.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg"
            >

              <Image
                src={animal.image}
                width={500}
                height={350}
                alt={animal.nama}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">

                  {animal.nama}

                </h3>

                <p className="text-slate-500">

                  {animal.jenis}

                </p>

                <div className="mt-5">

                  <div className="mb-2 flex justify-between text-sm">

                    <span>Progress Donasi</span>

                    <span>{animal.progress}%</span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-200">

                    <div
                      style={{
                        width: `${animal.progress}%`,
                      }}
                      className="h-3 rounded-full bg-green-600"
                    />

                  </div>

                </div>

                <button
                  className="mt-6 w-full rounded-xl bg-green-600 py-3 text-white"
                >
                  Donasi Sekarang
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}