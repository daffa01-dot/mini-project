export default function RelatedSatwa() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-24">

      <h2 className="mb-10 text-4xl font-black">

        Satwa Lainnya

      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        {[1,2,3].map((item)=>(
          <div
            key={item}
            className="rounded-3xl bg-white p-6 shadow-lg"
          >
            <div className="h-56 rounded-2xl bg-slate-200"/>

            <h3 className="mt-6 text-2xl font-bold">

              Oyen

            </h3>

            <button className="mt-5 w-full rounded-xl bg-green-600 py-3 text-white">

              Lihat Detail

            </button>

          </div>
        ))}

      </div>

    </section>
  );
}