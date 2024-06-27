import Image, { StaticImageData } from "next/image";

import bgImg from "/public/pattern-bg.svg";

interface CardProps {
  name: string;
  title: string;
  pic: StaticImageData;
  review: string;
}

export default function Card({ name, title, pic, review }: CardProps) {
  return (
    <div className="flex flex-row-reverse justify-center items-center text-xl gap-4 m-10">
      <div className="relative flex justify-center items-center w-[30rem] h-[30rem]">
        <div className="animate-scaleIn w-[77.5%] h-[72.5%] z-20 relative">
          <Image className="rounded" src={pic} alt="" fill />
        </div>
        <div className="z-10 absolute w-full h-full inset-0">
          <div className="relative">
            <Image className="" src={bgImg} alt="" />
          </div>
        </div>
      </div>

      <div className="text-darkBlue flex flex-col gap-8 -mr-[10%]">
        <div className="animate-floatRight font-light w-[32.35ch] z-40 text-2xl">
          {review}
        </div>
        <div className="flex flex-row gap-2 z-40">
          <div className="animate-floatLeft font-bold">{name}</div>
          <div className="animate-scaleIn font-light">{title}</div>
        </div>
      </div>
    </div>
  );
}
