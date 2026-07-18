import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/footer"

import AnimalHero from "@/components/animal/animalHero"
import AnimalInformation from "@/components/animal/animalInformation"
import AnimalDonationCard from "@/components/animal/animalDonationCard"
import AnimalGallery from "@/components/animal/animalGallery"
import RelatedAnimals from "@/components/animal/relatedAnimal"

export default function AnimalDetailPage() {
  return (
    <>
      <Navbar />

      <AnimalHero />

      <AnimalInformation />

      <AnimalDonationCard />

      <AnimalGallery />

      <RelatedAnimals />

      <Footer />
    </>
  );
}
