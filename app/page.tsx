import Hero from "@/components/home/Hero";
import Divisions from "@/components/home/Divisions";
import CoreMessage from "@/components/home/CoreMessage";
import Philosophy from "@/components/home/Philosophy";
import ProductsGrid from "@/components/home/ProductsGrid";
import AboutTech from "@/components/home/AboutTech";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsGrid />
      <Divisions />
      <AboutTech />
      <CoreMessage />
      <Features />
      <Philosophy />
      <CTA />
    </>
  );
}

