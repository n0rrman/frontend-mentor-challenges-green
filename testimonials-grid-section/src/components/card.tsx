import Image, { StaticImageData } from "next/image";

import bgIcon from "/public/bg-pattern-quotation.svg";

interface CardProps {
  name: string;
  title: string;
  profilePic: StaticImageData;
  heading: string;
  text: string;
  purpleBorder?: boolean;
  first?: boolean;
  className: string;
}

export default function Card({
  name,
  title,
  profilePic,
  heading,
  text,
  purpleBorder,
  first,
  className,
}: CardProps) {
  return (
    <div
      className={`relative flex flex-col ${className} shadow-2xl rounded-lg py-5 px-8 gap-3 text-[0.8125rem]`}
    >
      <div className="flex flex-row justify-start items-center">
        {first && (
          <div className="absolute right-[14.79%] top-0 z-10">
            <Image src={bgIcon} alt="" width={104} height={102} />
          </div>
        )}
        <div
          className={`relative h-8 w-8 rounded-full overflow-hidden mr-4 -ml-0.5 my-1 border-2 ${
            purpleBorder ? "border-moderateViolet" : "border-white/30"
          }`}
        >
          <Image alt="" src={profilePic} fill />
        </div>
        <div className="flex flex-col z-30">
          <h2 className="text-[0.8rem] -mb-0.5">{name}</h2>
          <h3 className="text-[0.675rem] opacity-50 font-bold">{title}</h3>
        </div>
      </div>
      <h1 className="font-semibold text-[1.25rem] leading-6 z-30 tracking-[0.0025rem] pb-2.5">
        {heading}
      </h1>
      <p className="opacity-70 leading-[1.15rem] z-30">" {text} "</p>
    </div>
  );
}
