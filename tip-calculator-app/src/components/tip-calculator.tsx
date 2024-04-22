import Image from "next/image";

import dollarIcon from "/public/icon-dollar.svg";
import personIcon from "/public/icon-person.svg";

export default function TipCalculator() {
  return (
    <div className="grid grid-cols-2 bg-white rounded-2xl p-8 max-w-[57.5rem] shadow-2xl shadow-darkCyan/20">
      <div className="flex flex-col pr-9 gap-8 text-grayishCyan p-4">
        <div className="">
          <div className="">Bill</div>
          <div className="flex flex-row items-center">
            <div className="relative w-[11px] h-[17px] -mr-[11px] ">
              <Image alt="" fill src={dollarIcon} />
            </div>
            <input
              className="bg-lighterGrayishCyan w-full text-right py-2 px-5 rounded-md text-2xl"
              type="text"
              placeholder="0"
            />
          </div>
        </div>

        <div>
          <div className="pb-4">Select Tip %</div>
          <div className="grid grid-cols-3 grid-rows-2 gap-4 text-center text-2xl text-lighterGrayishCyan">
            <div className="rounded-md py-2 bg-darkCyan">5%</div>
            <div className="rounded-md py-2 bg-darkCyan">10%</div>
            <div className="rounded-md py-2 bg-darkCyan">15%</div>
            <div className="rounded-md py-2 bg-darkCyan">25%</div>
            <div className="rounded-md py-2 bg-darkCyan">50%</div>
            <input
              className="rounded-md py-2 placeholder:text-darkGrayishCyan text-center bg-lighterGrayishCyan"
              placeholder="Custom"
            />
          </div>
        </div>

        <div>
          <div className="bg-white">Number of People</div>
          <div className="flex flex-row">
            <div className="relative w-[11px] h-[17px] -mr-[11px] ">
              <Image alt="" fill src={personIcon} />
            </div>
            <input
              className="bg-lighterGrayishCyan w-full text-right py-2 px-5 rounded-md text-2xl"
              type="text"
              placeholder="0"
            />
          </div>
        </div>
      </div>
      <div className="bg-darkCyan rounded-2xl py-10 pr-10 pl-9 ml-3.5 text-lightGrayishCyan flex flex-col justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <div>Tip Amount</div>
              <div className="text-grayishCyan text-xs">/ person</div>
            </div>
            <div className="text-strongCyan text-5xl">$0.00</div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="">
              <div>Total</div>
              <div className="text-grayishCyan text-xs">/ person</div>
            </div>
            <div className="text-strongCyan text-5xl">$0.00</div>
          </div>
        </div>

        <div className="bg-lightGrayishCyan text-darkCyan uppercase text-center rounded py-2">
          Reset
        </div>
      </div>
    </div>
  );
}
