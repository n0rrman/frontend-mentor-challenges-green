"use client";

import { useState } from "react";

import Card from "@/components/card";

interface CardSliderProps {
  data: {
    name: string;
    title: string;
    review: string;
  }[];
}

export default function CardSlider({ data }: CardSliderProps) {
  const MIN_VAL = 0;
  const MAX_VAL = data.length - 1;

  const [active, setActive] = useState(0);

  const renderedData = data.map((data) => {
    const { name, title, review } = data;
    return (
      <div key={name} className="w-[100vw]">
        <Card name={name} title={title} review={review} />
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
    <div>
      <div>{active}</div>
      <div className="flex overflow-x-hidden w-[100vw]">
        <div className="flex flex-row w-[300vw]">{renderedData[active]}</div>
      </div>

      <button
        className={`${
          active === MIN_VAL
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
        disabled={active === MIN_VAL}
        onClick={() => handleDecrement()}
      >
        {"<"}
      </button>
      <button
        className={`${
          active === MAX_VAL
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer"
        }`}
        disabled={active === MAX_VAL}
        onClick={() => handleIncrement()}
      >
        {">"}
      </button>
    </div>
  );
}
