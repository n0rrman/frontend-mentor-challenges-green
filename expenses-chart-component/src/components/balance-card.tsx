import Image from "next/image";

import logo from "/public/logo.svg";

interface BalanceCardProps {
  balance: number;
}

export default function BalanceCard({ balance }: BalanceCardProps) {
  return (
    <div className="bg-softRed text-veryPaleOrange flex flex-row justify-between py-6 px-8 rounded-2xl">
      <div className="flex flex-col gap-2 justify-between items-start">
        <div className="text-lg">My balance</div>
        <div className="text-3xl font-bold">${balance}</div>
      </div>
      <div className="flex items-center">
        <div className="relative h-[48px] w-[72px]">
          <Image fill src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}
