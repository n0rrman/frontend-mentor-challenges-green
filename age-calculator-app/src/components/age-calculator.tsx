"use client";

import CalcButton from "@/components/calc-button";
import DateInput from "@/components/date-input";
import ResultDisplay from "@/components/result-display";
import { useFormState } from "react-dom";

import { submitCalcForm } from "@/actions";

export default function AgeCalculator() {
  const [formState, action] = useFormState(submitCalcForm, {
    errors: {},
    success: false,
  });

  const { errors, success, payload } = formState;

  return (
    <form action={action} className="w-[45.5rem] pb-3">
      <DateInput errors={errors} />
      <CalcButton />
      <ResultDisplay
        success={success}
        years={payload?.years || "--"}
        months={payload?.months || "--"}
        days={payload?.days || "--"}
      />
    </form>
  );
}
