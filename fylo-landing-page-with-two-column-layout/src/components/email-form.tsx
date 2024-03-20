"use client";

import { submitEmailFormState } from "@/actions";
import { useFormState } from "react-dom";

interface EmailFormProps {
  buttonText: string;
  placeholder: string;
}

export default function EmailForm({ buttonText, placeholder }: EmailFormProps) {
  const [formState, action] = useFormState(submitEmailFormState, {
    errors: {},
  });

  console.log(formState.errors);
  return (
    <>
      <form action={action} className="flex flex-row gap-6">
        <input
          name="email"
          className="border border-primaryDarkBlue w-72"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="bg-accentBlue text-neutralBlue py-2 px-4"
        >
          {buttonText}
        </button>
      </form>
      {!formState.success && <div>{formState.errors.email?.at(0)}</div>}
    </>
  );
}
