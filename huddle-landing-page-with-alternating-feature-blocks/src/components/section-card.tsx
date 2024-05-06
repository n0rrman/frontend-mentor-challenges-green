import Image, { StaticImageData } from "next/image";

import { mainFont, headingFont } from "../app/fonts";

interface SectionCardProps {
  heading: string;
  content: string;
  imgSize: string;
  image: StaticImageData;
  left?: boolean;
}

export default function SectionCard({
  heading,
  content,
  image,
  imgSize,
  left,
}: SectionCardProps) {
  return (
    <div
      className={`flex flex-row gap-[10rem] justify-end items-center ${mainFont.className} shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-2xl px-6`}
    >
      <div className="flex flex-col justify-center gap-3 text-left w-[49ch] h-[27.5rem]">
        <h2
          className={`${headingFont.className} w-full text-[1.75rem] font-bold`}
        >
          {heading}
        </h2>
        <p className="text-grayishBlue">{content}</p>
      </div>
      <div className={`${left ? "order-first" : "order-last"} `}>
        <div className={`relative ${imgSize} mx-2`}>
          <Image src={image} alt="" fill />
        </div>
      </div>
    </div>
  );
}
