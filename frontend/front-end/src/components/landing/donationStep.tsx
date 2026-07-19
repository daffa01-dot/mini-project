import {
  Building2,
  PawPrint,
  CreditCard,
  Upload,
  BadgeCheck,
  UserPlus,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Daftar / Login",
    desc: "Masuk sebagai donatur untuk mulai berdonasi.",
  },
  {
    icon: Building2,
    title: "Pilih Shelter",
    desc: "Temukan shelter terpercaya yang ingin Anda bantu.",
  },
  {
    icon: PawPrint,
    title: "Pilih Satwa",
    desc: "Pilih satwa yang sedang membutuhkan bantuan.",
  },
  {
    icon: CreditCard,
    title: "Transfer Donasi",
    desc: "Lakukan transfer sesuai nominal donasi.",
  },
  {
    icon: Upload,
    title: "Upload Bukti",
    desc: "Unggah bukti transfer agar dapat diverifikasi.",
  },
  {
    icon: BadgeCheck,
    title: "Verifikasi Shelter",
    desc: "Shelter akan memeriksa bukti dan mengubah status donasi.",
  },
];

export default function DonationStep() {
  return (
    <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black lg:text-4xl">
            Cara Berdonasi
          </h2>

          <p className="mt-4 text-green-100">
            Hanya perlu beberapa langkah sederhana untuk membantu satwa
            yang membutuhkan.
          </p>
        </div>

        {/* Timeline */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/20"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-green-600 shadow">
                    <Icon size={30} />
                  </div>

                  <span className="text-3xl font-black text-green-200">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-green-100">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}