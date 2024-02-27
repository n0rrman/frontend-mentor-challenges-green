import Image from "next/image";

import { getRandom, getById } from "@/actions";
import diceIcon from "/public/icon-dice.svg";
import dividerDesktop from "/public/pattern-divider-desktop.svg";
import dividerMobile from "/public/pattern-divider-mobile.svg";
import Link from "next/link";

interface TipBoxProps {
  id?: string;
}

export default async function TipBox({ id }: TipBoxProps) {
  const nextRandom = Math.floor(Math.random() * 225);

  const tip = id ? await getById(id) : await getRandom();

  return (
    <main className="flex flex-col justify-between mb-8 items-center text-[1.75rem] mx-5 min-w-[33.75rem] min-h-[20.75rem] rounded-2xl shadow-xl bg-darkGrayishBlue text-white text-center">
      <h1 className="uppercase text-xs pt-12 tracking-[0.3rem] text-neonGreen">
        Advice #{tip.slip.id}
      </h1>
      <p className="text-[1.75rem] max-w-[24ch]">" {tip.slip.advice} "</p>

      <div className="relative">
        <Image alt="" width={444} height={16} src={dividerDesktop} />
      </div>
      <Link
        href={`${nextRandom}`}
        className="relative flex justify-center items-center w-16 h-16 -mb-8 rounded-full bg-neonGreen text-black"
      >
        <Image alt="" width={24} height={24} src={diceIcon} />
      </Link>
    </main>
  );
}
