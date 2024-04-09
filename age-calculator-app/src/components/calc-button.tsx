import icon from "/public/icon-arrow.svg";
import Image from "next/image";

export default function CalcButton() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center pb-8 lg:pb-0">
      <div className="border-b w-full h-[4.1rem] -mb-[2rem] lg:h-0 lg:mb-0"></div>
      <button
        type="submit"
        className="relative bg-purple rounded-full h-[4rem] lg:h-[6rem] aspect-square hover:bg-offBlack transition"
      >
        <Image className="p-5 lg:p-6" fill src={icon} alt="calculate" />
      </button>
    </div>
  );
}
