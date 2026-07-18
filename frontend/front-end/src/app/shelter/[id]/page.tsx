import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer"

import ShelterHeader from "@/components/shelter/shelterHeader"
import ShelterInformation from  "@/components/shelter/shelterInformation"
import ShelterAnimals from "@/components/shelter/ShelterAnimal"

export default function ShelterDetailPage() {
  return (
    <>
      <Navbar />

      <ShelterHeader />

      <ShelterInformation />

      <ShelterAnimals />

      <Footer />
    </>
  );
}