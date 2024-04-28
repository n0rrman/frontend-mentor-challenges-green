"use client";

import { submitEmailFormState } from "@/actions";
import { useFormState } from "react-dom";

interface EmailFormProps {
  buttonText: string;
  placeholder: string;
  vertical?: boolean;
}

export default function EmailForm({
  buttonText,
  placeholder,
  vertical,
}: EmailFormProps) {
  const [formState, action] = useFormState(submitEmailFormState, {
    errors: {},
  });

  return (
    <form
      action={action}
      className={`${
        vertical ? "sm:flex-col" : "sm:flex-row"
      } flex-col flex gap-4 py-2 items-start justify-start`}
    >
      <div className="flex flex-col w-full sm:w-max">
        <input
          name="email"
          className={`${
            !formState.errors.email
              ? "border-primaryDarkBlue"
              : "border-rose-600"
          } border text-sm placeholder:text-lightGrayish rounded ${
            vertical ? "sm:w-[33.5vw]" : "sm:w-[20rem]"
          } px-5 py-3 w-full`}
          placeholder={placeholder}
        />
        <div
          className={`${
            !formState.errors.email ? "opacity-0" : "opacity-100"
          } text-rose-600 text-[0.8rem] h-[1ch]`}
        >
          {formState.errors.email?.at(0)}
        </div>
      </div>
      <button
        type="submit"
        className={`bg-accentBlue text-sm font-bold rounded text-neutralBlue shadow-lg text-nowrap w-full sm:w-auto ${
          vertical ? "px-[2.1rem]" : "px-[3.95rem]"
        } py-[0.825rem]`}
      >
        {buttonText}
      </button>
    </form>
  );
}
