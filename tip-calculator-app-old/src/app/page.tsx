import Image from "next/image";

import logo from "/public/logo.svg";
import TipCalculator from "@/components/tip-calculator";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-[87px] h-[54px] mb-20 -mt-20">
        <Image src={logo} fill alt="" />
      </div>

      <TipCalculator />
    </main>
  );
}
