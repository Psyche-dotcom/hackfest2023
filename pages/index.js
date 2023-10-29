import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSecton from "@/components/organism/HeroSecton";
import SecondSection from "@/components/organism/SecondSection";
import ThirdSection from "@/components/organism/ThirdSection";
import FeatureSection from "@/components/organism/FeatureSection";
import FourthSection from "@/components/organism/FourthSection";
import FifthSection from "@/components/organism/FifthSection";
import Footer from "@/components/organism/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSecton />
      <FeatureSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </>
  );
}
