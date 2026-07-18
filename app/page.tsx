import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PracticeAreas />
      <HowItWorks />
      <About />
      <Differentials />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
