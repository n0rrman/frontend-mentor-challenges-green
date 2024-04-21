import Image from "next/image";

import logo from "/public/logo.svg";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-[87px] h-[54px] mb-20">
        <Image src={logo} fill alt="" />
      </div>
      <div className="grid grid-cols-2 bg-white rounded-2xl p-8">
        <div className="flex flex-col pr-8 gap-8">
          <div>
            <div className="text-darkGrayishCyan">Bill</div>
            <input className="bg-lighterGrayishCyan w-full" type="text" />
          </div>

          <div>
            <div>Select Tip %</div>
            <div className="grid grid-cols-3 grid-rows-2 gap-2 text-center">
              <div className="py-4 bg-strongCyan">5%</div>
              <div className="bg-darkCyan">10%</div>
              <div className="bg-darkGrayishCyan">15%</div>
              <div className="bg-grayishCyan">25%</div>
              <div className="bg-lightGrayishCyan">50%</div>
              <div className="bg-lighterGrayishCyan">Custom</div>
            </div>
          </div>

          <div>
            <div className="bg-white">Number of People</div>
            <input className="bg-lighterGrayishCyan w-full" type="text" />
          </div>
        </div>
        <div className="bg-darkCyan rounded-2xl p-10 text-lightGrayishCyan flex flex-col justify-between">
          <div className="flex flex-col gap-10 w-[20rem]">
            <div className="flex flex-row justify-between items-center">
              <div className="">
                <div>Tip Amount</div>
                <div className="text-grayishCyan text-xs">/ person</div>
              </div>
              <div className="text-strongCyan text-4xl">$0.00</div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="">
                <div>Total</div>
                <div className="text-grayishCyan text-xs">/ person</div>
              </div>
              <div className="text-strongCyan text-4xl">$0.00</div>
            </div>
          </div>

          <div className="bg-lightGrayishCyan text-darkCyan uppercase text-center rounded py-2">
            Reset
          </div>
        </div>
      </div>
    </main>
  );
}
