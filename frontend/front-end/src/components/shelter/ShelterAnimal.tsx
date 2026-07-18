import Link from "next/link";
import Image from "next/image";

const animals = [
  {
    id: 1,
    nama: "Milo",
    image: "/images/cat1.jpg",
  },
  {
    id: 2,
    nama: "Bruno",
    image: "/images/dog1.jpg",
  },
  {
    id: 3,
    nama: "Oyen",
    image: "/images/cat2.jpg",
  },
];

export default function ShelterAnimals() {
  return (
    <section className="mx-auto max-w-7xl px-8 pb-24">

      <h2 className="mb-10 text-4xl font-black">

        Satwa di Shelter

      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {animals.map((satwa) => (

          <div
            key={satwa.id}
            className="overflow-hidden rounded-3xl bg-white shadow-lg"
          >

            <Image
              src={satwa.image}
              width={500}
              height={300}
              alt={satwa.nama}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-bold">

                {satwa.nama}

              </h3>

              <Link
                href={`/animals/${satwa.id}`}
                className="mt-6 block rounded-xl bg-green-600 py-3 text-center text-white"
              >
                Detail Satwa
              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}