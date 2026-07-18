import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer"

import SearchShelter from "@/components/shelter/searchShelter"
import FilterCity from "@/components/shelter/filterCity"
import ShelterGrid from "@/components/shelter/shelterGrid"

export default function ShelterPage() {
  return (
    <>
      <Navbar />

      <section className="bg-green-600 py-20 text-white">

        <div className="mx-auto max-w-7xl px-8">

          <h1 className="text-6xl font-black">

            Temukan Shelter

          </h1>

          <p className="mt-4 text-green-100">

            Cari shelter terpercaya untuk
            membantu satwa terlantar.

          </p>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-8 py-14">

        <SearchShelter />

        <FilterCity />

        <ShelterGrid />

      </section>

      <Footer />
    </>
  );
}