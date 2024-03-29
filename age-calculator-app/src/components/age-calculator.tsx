"use client";

import CalcButton from "@/components/calc-button";
import DateInput from "@/components/date-input";
import ResultDisplay from "@/components/result-display";
import { useState } from "react";

export default function AgeCalculator() {
  const [years, setYears] = useState("--");
  const [months, setMonths] = useState("--");
  const [days, setDays] = useState("--");
  return (
    <>
      <DateInput />
      <CalcButton />
      <ResultDisplay years={years} months={months} days={days} />
    </>
  );
}
