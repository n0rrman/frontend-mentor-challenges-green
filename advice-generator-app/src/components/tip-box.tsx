import { getRandom, getById } from "@/actions";

interface TipBoxProps {
  id?: string;
}

export default async function TipBox({ id }: TipBoxProps) {
  const tip = id ? await getById(id) : await getRandom();
  console.log(tip);

  return (
    <main className="flex flex-col justify-between mb-8 items-center text-[1.75rem mx-5 min-w-[33.75rem] h-[20.75rem] rounded-2xl shadow-xl bg-darkGrayishBlue text-white text-center">
      <h1 className="uppercase text-xs py-12 tracking-[0.3rem] text-neonGreen">
        Advice #{tip.slip.id}
      </h1>
      <p className="text-[1.75rem] max-w-[15ch]">" {tip.slip.advice} "</p>
      <div>asd</div>
      <div className="flex justify-center items-center w-16 h-16 -mb-8 rounded-full bg-neonGreen text-black">
        +
      </div>
    </main>
  );
}
