import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer"

import AnimalHero from "@/components/satwa/satwaHero"
import AnimalInformation from "@/components/satwa/satwaInformation"
import AnimalDonationCard from "@/components/satwa/satwaDonationCard"
import AnimalGallery from "@/components/satwa/satwaGallery"
import RelatedAnimals from "@/components/satwa/relatedSatwa"

export default function AnimalDetailPage() {
  return (
    <>
      <Navbar />
{/* 
      <AnimalHero />

      <AnimalInformation /> */}

      <AnimalDonationCard />

      <AnimalGallery />

      <RelatedAnimals />

      <Footer />
    </>
  );
}
