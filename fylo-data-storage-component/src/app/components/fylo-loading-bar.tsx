"use client";

import { useEffect, useState } from "react";

interface FyloLoadingBarProps {
  min: number;
  max: number;
  current: number;
  className: string;
}

export default function FyloLoadingBar({
  min,
  max,
  current,
  className,
}: FyloLoadingBarProps) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(Math.trunc((current / (max - min)) * 100));
  }, [min, max, current]);

  console.log(percentage);

  return (
    <div
      className={`flex justify-start w-full bg-veryDarkBlue/50 p-0.5 rounded-2xl ${className}`}
    >
      <div
        className={`flex justify-end bg-gradient-to-r from-gradientFrom to-gradientTo h-3.5 p-0.5 transition-all rounded-2xl`}
        style={{ width: `${percentage}%` }}
      >
        <div className="rounded-full h-full aspect-square bg-white"></div>
      </div>
    </div>
  );
}
