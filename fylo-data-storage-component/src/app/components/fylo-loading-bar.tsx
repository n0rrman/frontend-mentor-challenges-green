"use client";

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
    setPercentage(Math.trunc((current / (max - min)) * 100));
  }, [min, max, current]);

  return (
    <div className="flex justify-start w-full bg-veryDarkBlue p-1 rounded-2xl">
      <div
        className={`flex justify-end bg-gradient-to-r from-gradientFrom to-gradientTo h-4 p-0.5 transition-all rounded-2xl`}
        style={{ width: `${percentage}%` }}
      >
        <div className="rounded-full h-full aspect-square bg-white"></div>
      </div>
    </div>
  );
}
