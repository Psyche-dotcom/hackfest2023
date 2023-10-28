import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSecton from "@/components/organism/HeroSecton";
import SecondSection from "@/components/organism/SecondSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSecton />
      <SecondSection />
    </>
  );
}
