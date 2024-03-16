interface EmailFormProps {
  buttonText: string;
  placeholder: string;
}

export default function EmailForm({ buttonText, placeholder }: EmailFormProps) {
  return (
    <form className="flex flex-row gap-6">
      <input
        className="border border-primaryDarkBlue w-72"
        placeholder={placeholder}
      />
      <button className="bg-accentBlue text-neutralBlue py-2 px-4">
        {buttonText}
      </button>
    </form>
  );
}
