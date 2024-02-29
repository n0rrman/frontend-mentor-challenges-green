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
  const nextRandom = 1 + Math.floor(Math.random() * 224);

  const tip = id ? await getById(id) : await getRandom();

  let advice;
  if (!tip.slip) {
    advice = tip.message.text;
  } else {
    advice = tip.slip.advice;
  }

  return (
    <main className="flex flex-col justify-between mb-8 items-center text-[1.75rem] mx-5 min-w-full sm:min-w-[33.75rem] min-h-[20.75rem] rounded-none sm:rounded-2xl shadow-xl bg-darkGrayishBlue text-white text-center">
      <h1 className="uppercase text-xs pt-12 tracking-[0.3rem] text-neonGreen">
        Advice #{id}
      </h1>
      <p className="text-[1.75rem] text-lightCyan max-w-[24ch] leading-[2.5rem] p-5 sm:p-0">
        &quot; {advice} &quot;
      </p>

      <div className="relative py-5">
        <Image alt="" width={444} height={16} src={dividerDesktop} />
      </div>
      <Link
        href={`${nextRandom}`}
        aria-label="next tip"
        className="relative flex justify-center items-center w-16 h-16 -mb-8 rounded-full bg-neonGreen hover:shadow-[0px_0px_20px_2px] transition hover:shadow-neonGreen text-black"
      >
        <Image alt="" width={24} height={24} src={diceIcon} />
      </Link>
    </main>
  );
}
