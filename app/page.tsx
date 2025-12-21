import Hero from "@/components/home/Hero";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import CoreMessage from "@/components/home/CoreMessage";
import Philosophy from "@/components/home/Philosophy";
import AboutTech from "@/components/home/AboutTech";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <CoreMessage />
      <Philosophy />
      <AboutTech />
      <CTA />
    </>
  );
}

