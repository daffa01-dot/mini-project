import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-5xl rounded-[40px] bg-green-600 px-10 py-20 text-center text-white">

        <h2 className="text-5xl font-black">

          Mari Menjadi Bagian
          dari Teman Asuh

        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-green-100">

          Setiap donasi membantu satwa mendapatkan
          makanan, pengobatan, dan kehidupan yang lebih baik.

        </p>

        <Link
          href="/register"
          className="mt-10 inline-block rounded-2xl bg-white px-8 py-4 font-semibold text-green-600"
        >
          Daftar Sekarang
        </Link>

      </div>

    </section>
  );
}