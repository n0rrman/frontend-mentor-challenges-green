import Image from "next/image";

import logo from "/public/logo.svg";

interface BalanceCardProps {
  balance: number;
}

export default function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <div className="bg-softRed text-veryPaleOrange flex flex-row justify-between p-5 rounded-lg sm:pt-8 sm:pb-7 sm:px-8 sm:rounded-[1.2rem]">
      <div className="flex flex-col gap-0.5 sm:gap-4 justify-between items-start">
        <div className="text-sm sm:text-[1.11rem]">My balance</div>
        <div className="text-2xl sm:text-[2rem] font-bold">${balance}</div>
      </div>
      <div className="flex items-center">
        <div className="relative h-[40px] w-[60px] sm:h-[48px] sm:w-[72px] mr-1.5">
          <Image fill src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
