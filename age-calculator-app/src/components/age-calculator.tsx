"use client";

import CalcButton from "@/components/calc-button";
import DateInput from "@/components/date-input";
import ResultDisplay from "@/components/result-display";
import { useState } from "react";
import { useFormState } from "react-dom";

import { submitCalcForm } from "@/actions";

export default function AgeCalculator() {
  const [years, setYears] = useState("--");
  const [months, setMonths] = useState("--");
  const [days, setDays] = useState("--");

  const [formState, action] = useFormState(submitCalcForm, {
    errors: {},
  });

  return (
    <form action={action} className="w-[45rem]">
      <DateInput />
      <CalcButton />
      <ResultDisplay years={years} months={months} days={days} />
    </form>
  );
}
