interface ResultDisplayProps {
  success: boolean;
  years: string;
  months: string;
  days: string;
}

// TODO: - **Bonus**: See the age numbers animate to their final number when the form is submitted

export default function ResultDisplay({
  success,
  years,
  months,
  days,
}: ResultDisplayProps) {
  return (
    <div className="flex flex-col font-bold italic text-[6.5rem] leading-[7rem] tracking-[-0.26rem] text-offBlack">
      <div>
        <span className={`${!success && "tracking-widest"} text-purple`}>
          {years}
        </span>
        {success && " "}year{years !== "1" && "s"}
      </div>
      <div>
        <span className={`${!success && "tracking-widest"} text-purple`}>
          {months}
        </span>
        {success && " "}month{months !== "1" && "s"}
      </div>
      <div>
        <span className={`${!success && "tracking-widest"} text-purple`}>
          {days}
        </span>
        {success && " "}day{days !== "1" && "s"}
      </div>
    </div>
  );
}
