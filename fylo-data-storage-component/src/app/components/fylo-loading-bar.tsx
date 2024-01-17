"use client";

import { log } from "console";
import { useEffect, useState } from "react";

interface FyloLoadingBarProps {
  min: number;
  max: number;
  current: number;
}

export default function FyloLoadingBar({
  min,
  max,
  current,
}: FyloLoadingBarProps) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage((current / (max - min)) * 100);
  }, [min, max, current]);

  console.log(percentage);

  return (
    <div className="flex justify-start w-full bg-veryDarkBlue p-1 rounded-2xl">
      <input
        type="range"
        min={min}
        max={max}
        value={current}
        // className={`slider flex justify-end bg-gradient-to-r from-gradientFrom to-gradientTo h-4 p-0.5 w-[60%] transition-all rounded-2xl`}
        className="w-full bg-gradient-to-r from-gradientFrom to-gradientTo"
      />
      {/* <div className="rounded-full h-full aspect-square bg-white"></div> */}
    </div>
  );
}
