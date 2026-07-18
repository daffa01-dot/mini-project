export default function Stats() {
  return (
    <section className="py-20">

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-8 lg:grid-cols-4">

        {[
          ["125+", "Shelter"],
          ["1300+", "Satwa"],
          ["5200+", "Donatur"],
          ["Rp820 Juta", "Donasi"],
        ].map(([title, sub]) => (
          <div
            key={title}
            className="rounded-3xl bg-white p-8 text-center shadow-lg"
          >
            <h2 className="text-5xl font-black text-green-600">

              {title}

            </h2>

            <p className="mt-3 text-slate-500">

              {sub}

            </p>

          </div>
        ))}

      </div>

    </section>
  );
}