import icon from "/public/icon-arrow.svg";
import Image from "next/image";

export default function CalcButton() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="border-b w-full"></div>
      <div className="relative bg-purple rounded-full h-[6rem] aspect-square hover:bg-offBlack transition">
        <Image className="p-6" fill src={icon} alt="calculate" />
      </div>
    </div>
  );
}
