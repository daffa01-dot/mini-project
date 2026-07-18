"use client";

import { useParams } from "next/navigation";

import { useShelterDetail } from "@/hooks/useShelterDetail";

import ShelterBanner from "@/components/shelter/shelterBanner";
import ShelterInfo from "@/components/shelter/shelterInfo";
import ShelterSatwaList from "@/components/shelter/shelterAnimalList";

export default function ShelterDetailPage() {
  const params = useParams();

  const { data, isLoading } = useShelterDetail(
    params.id as string,
  );

  if (isLoading) {
    return <div className="p-10">Loading...</div>;
  }

  if (!data) {
    return (
      <div className="p-10">
        Shelter tidak ditemukan.
      </div>
    );
  }

  return (
    <main className="space-y-8 p-8">
      <ShelterBanner shelter={data} />

      <ShelterInfo shelter={data} />

      <ShelterSatwaList
        satwa={data.satwa}
      />
    </main>
  );
}