import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white">

      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-8 lg:grid-cols-2">

        <div>

          <span className="rounded-full bg-green-100 px-4 py-2 text-green-700">

            🐾 Platform Donasi Shelter

          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight">

            Bersama Selamatkan

            <span className="text-green-600">

              {" "}Satwa Terlantar

            </span>

          </h1>

          <p className="mt-8 text-xl text-slate-600">

            Temukan shelter terpercaya,

            bantu kebutuhan satwa,

            dan pantau perkembangan donasi Anda.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-xl bg-green-600 px-8 py-4 text-white">

              Donasi Sekarang

            </button>

            <button className="rounded-xl border px-8 py-4">

              Jelajahi Shelter

            </button>

          </div>

        </div>

        <div>

          <Image
            src="/hero.png"
            width={650}
            height={650}
            alt="Hero"
            priority
          />

        </div>

      </div>

    </section>
  );
}