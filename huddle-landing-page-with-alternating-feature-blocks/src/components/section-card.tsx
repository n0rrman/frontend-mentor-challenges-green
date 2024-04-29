import Image, { StaticImageData } from "next/image";

import { mainFont, headingFont } from "../app/fonts";

interface SectionCardProps {
  heading: string;
  content: string;
  image: StaticImageData;
  left?: boolean;
}

export default function SectionCard({
  heading,
  content,
  image,
  left,
}: SectionCardProps) {
  return (
    <div
      className={`flex ${left ? "flex-row-reverse" : "flex-row"} ${
        mainFont.className
      } items-center justify-center py-[3.4rem] gap-[7.5rem] pl-[7.5rem] shadow-[0px_0px_20px_rgba(0,0,0,0.1)] rounded-2xl`}
    >
      <div className="flex flex-col gap-3">
        <h2 className={`${headingFont.className} text-[1.75rem] font-bold`}>
          {heading}
        </h2>
        <p className="text-grayishBlue">{content}</p>
      </div>
      <div>
        <div className="relative h-[20.75rem] w-[25.4rem] mx-8">
          <Image src={image} alt="" fill />
        </div>
      </div>
    </div>
  );
}
