import Image, { StaticImageData } from "next/image";

import bgImg from "/public/pattern-bg.svg";
import quotesImg from "/public/pattern-quotes.svg";

interface CardProps {
  name: string;
  title: string;
  pic: StaticImageData;
  review: string;
}

export default function Card({ name, title, pic, review }: CardProps) {
  return (
    <div className="flex flex-row-reverse justify-center items-center text-xl">
      <div className="relative flex justify-center items-center w-[50rem] h-[48rem]">
        <div className="animate-scaleIn w-[70%] h-[72.5%] z-20 relative">
          <Image className="rounded" src={pic} alt="" fill />
        </div>
        <div className="z-10 absolute w-full h-full flex items-center justify-center bg-red-500">
          <div className="relative">
            <Image className="" src={bgImg} alt="" />
          </div>
        </div>
      </div>

      <div className="text-darkBlue flex flex-col items-start justify-center gap-9 ml-[4%] -mr-[10%]">
        <Image
          className="w-[7.5rem] flex translate-x-[5.9rem] translate-y-[4.5rem] mt-[-2.25rem]"
          src={quotesImg}
          alt=""
        />
        <div className="animate-floatRight font-light w-[32.35ch] z-40 text-[2rem] leading-[2.75rem] ">
          {review}
        </div>
        <div className="flex flex-row gap-2 z-40">
          <div className="animate-floatLeft font-bold">{name}</div>
          <div className="animate-scaleIn text-grayishBlue">{title}</div>
        </div>
      </div>
    </div>
  );
}
