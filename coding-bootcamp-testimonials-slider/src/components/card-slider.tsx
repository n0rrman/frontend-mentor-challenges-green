"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";

import Card from "@/components/card";
import Image from "next/image";
import nextButton from "/public/icon-next.svg";
import prevButton from "/public/icon-prev.svg";

interface CardSliderProps {
  data: {
    name: string;
    title: string;
    pic: StaticImageData;
    review: string;
  }[];
}

export default function CardSlider({ data }: CardSliderProps) {
  const MIN_VAL = 0;
  const MAX_VAL = data.length - 1;

  const [active, setActive] = useState(0);

  const renderedData = data.map((data) => {
    const { name, title, pic, review } = data;
    return (
      <div key={name}>
        <Card name={name} pic={pic} title={title} review={review} />
      </div>
    );
  });

  const handleIncrement = () => {
    setActive((val) => {
      if (val < MAX_VAL) {
        return val + 1;
      } else {
        return val;
      }
    });
  };

  const handleDecrement = () => {
    setActive((val) => {
      if (val > MIN_VAL) {
        return val - 1;
      } else {
        return val;
      }
    });
  };

  return (
    <div className="flex flex-col items-center z-40">
      <div className="flex flex-row overflow-x-hidden">
        {renderedData[active]}
      </div>

      <div className="hover:scale-[1.05] transition-all flex flex-row items-center w-fit gap-8 z-50 bg-white p-4 rounded-full shadow-[0px_0px_20px] shadow-grayishBlue/50 translate-y-[-8.5rem] translate-x-[5rem]">
        <button
          className={`${
            active === MIN_VAL
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:scale-[1.15] transition"
          } w-6 h-6 relative`}
          disabled={active === MIN_VAL}
          onClick={() => handleDecrement()}
        >
          <Image alt="prev" src={prevButton} fill />
        </button>
        <button
          className={`${
            active === MAX_VAL
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer hover:scale-[1.15] transition"
          } w-6 h-6 relative`}
          disabled={active === MAX_VAL}
          onClick={() => handleIncrement()}
        >
          <Image alt="next" src={nextButton} fill />
        </button>
      </div>
    </div>
  );
}
