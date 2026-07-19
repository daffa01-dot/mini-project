import Link from "next/link";

export default function SatwaDonationCard() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">

      <div className="rounded-3xl bg-green-600 p-10 text-white">

        <h2 className="text-3xl font-black">

          Progress Donasi

        </h2>

        <div className="mt-8 h-5 rounded-full bg-green-300">

          <div
            className="h-5 rounded-full bg-white"
            style={{ width: "75%" }}
          />

        </div>

        <div className="mt-5 flex justify-between">

          <span>

            Rp4.500.000

          </span>

          <span>

            Target Rp6.000.000

          </span>

        </div>

        <Link
          href="/checkout"
          className="mt-10 block rounded-xl bg-white py-4 text-center font-semibold text-green-700"
        >
          Donasi Sekarang
        </Link>

      </div>

    </section>
  );
}