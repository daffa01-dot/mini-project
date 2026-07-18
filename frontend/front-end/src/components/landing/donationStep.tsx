const steps = [
  {
    title: "Pilih Shelter",
    desc: "Cari shelter terpercaya.",
  },
  {
    title: "Pilih Satwa",
    desc: "Tentukan satwa yang ingin dibantu.",
  },
  {
    title: "Transfer Donasi",
    desc: "Transfer ke rekening shelter.",
  },
  {
    title: "Upload Bukti",
    desc: "Unggah bukti pembayaran.",
  },
];

export default function DonationStep() {
  return (
    <section className="bg-green-600 py-24 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-4xl font-black">

          Cara Berdonasi

        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="rounded-3xl bg-white/10 p-8 backdrop-blur"
            >

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl font-bold text-green-600">

                {index + 1}

              </div>

              <h3 className="text-2xl font-bold">

                {step.title}

              </h3>

              <p className="mt-3 text-green-100">

                {step.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}