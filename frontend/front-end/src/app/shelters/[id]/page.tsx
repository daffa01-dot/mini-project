"use client";

import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer";
import ShelterBanner from "@/components/shelter/shelterBanner";
import ShelterInfo from "@/components/shelter/shelterInfo";
import ShelterSatwaList from "@/components/shelter/shelterAnimalList";
import { useShelterDetail } from "@/hooks/useShelterDetail";
import { useParams } from "next/navigation";

export default function PublicShelterDetailPage() {
  const params = useParams<{ id: string }>();
  const { data, isLoading, isError } = useShelterDetail(params.id);

  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-[60vh] max-w-7xl px-6 py-10 lg:px-8">
        {isLoading && <p role="status">Memuat detail shelter...</p>}
        {isError && <p role="alert">Detail shelter gagal dimuat. Silakan coba lagi.</p>}
        {!isLoading && !isError && !data && <p>Shelter tidak ditemukan.</p>}
        {data && <div className="space-y-8"><ShelterBanner shelter={data} /><ShelterInfo shelter={data} /><ShelterSatwaList satwa={data.satwa} shelterId={data.id} /></div>}
      </main>
      <Footer />
    </>
  );
}
