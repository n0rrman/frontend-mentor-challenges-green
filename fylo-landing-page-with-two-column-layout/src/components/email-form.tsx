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
        vertical ? "flex-col" : "flex-row"
      } flex gap-4 py-2 items-start justify-start`}
    >
      <div className="flex flex-col w-max">
        <input
          name="email"
          className={`${
            !formState.errors.email
              ? "border-primaryDarkBlue"
              : "border-rose-600"
          } border text-sm placeholder:text-lightGrayish rounded ${
            vertical ? "w-[33.5vw]" : "w-[20rem]"
          } px-5 py-3`}
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
        className="bg-accentBlue text-sm font-bold rounded text-neutralBlue text-nowrap px-16 py-[0.825rem]"
      >
        {buttonText}
      </button>
    </form>
  );
}
