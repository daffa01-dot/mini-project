import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/hero"
import Stats from "@/components/landing/stats"
import ShelterSection from "@/components/landing/shelterSection"
import AnimalSection from "@/components/landing/animalSection"
import DonationStep from "@/components/landing/donationStep"
import CTA from "@/components/landing/cta"
import Footer from "@/components/landing/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <ShelterSection />

      <AnimalSection />

      <DonationStep />

      <CTA />

      <Footer />
    </>
  );
}