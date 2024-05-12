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
      className={`flex flex-col lg:flex-row gap-14 xl:gap-[10rem] lg:py-0 xl:pl-[7.5rem] xl:pr-6 justify-end items-center ${mainFont.className} shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-2xl px-10 py-14`}
    >
      <div className="flex flex-col justify-center gap-4 md:gap-3 text-center lg:text-left w-30 md:w-[49ch] h-full xl:h-[27.5rem] py-0 lg:py-24 xl:py-0">
        <h2
          className={`${headingFont.className} w-full text-[1.25rem] md:text-[1.75rem] font-bold`}
        >
          {heading}
        </h2>
        <p className="text-grayishBlue text-sm md:text-lg">{content}</p>
      </div>
      <div className={`${left ? "order-first" : "order-first lg:order-last"} `}>
        <div className={`relative ${imgSize} mx-2`}>
          <Image src={image} alt="" fill />
        </div>
      </div>
    </div>
  );
}
