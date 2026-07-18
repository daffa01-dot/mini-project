import RegisterForm from "@/components/auth/register/RegisterForm"
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT */}

        <section className="hidden lg:flex flex-col justify-between bg-green-600 p-14 text-white">

          <div>

            <h1 className="text-5xl font-black">

              Teman Asuh

            </h1>

            <p className="mt-5 text-lg text-green-100 leading-8">

              Platform donasi dan adopsi satwa
              untuk membantu shelter di seluruh Indonesia.

            </p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/images/register-hero.png"
              alt="Hero"
              width={500}
              height={500}
            />

          </div>

          <div className="grid grid-cols-3 gap-6">

            <div>

              <h2 className="text-4xl font-bold">

                250+

              </h2>

              <p>Shelter</p>

            </div>

            <div>

              <h2 className="text-4xl font-bold">

                1200+

              </h2>

              <p>Satwa</p>

            </div>

            <div>

              <h2 className="text-4xl font-bold">

                6.000+

              </h2>

              <p>Donatur</p>

            </div>

          </div>

        </section>

        {/* RIGHT */}

        <section className="flex items-center justify-center p-10">

          <RegisterForm />

        </section>

      </div>

    </main>
  );
}