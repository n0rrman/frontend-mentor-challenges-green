interface ResultDisplayProps {
  years: string;
  months: string;
  days: string;
}

// TODO: - **Bonus**: See the age numbers animate to their final number when the form is submitted

export default function ResultDisplay({
  years,
  months,
  days,
}: ResultDisplayProps) {
  return (
    <div className="flex flex-col font-bold italic text-8xl text-offBlack">
      <div>
        <span className="text-purple">{years}</span> years
      </div>
      <div>
        <span className="text-purple">{months}</span> months
      </div>
      <div>
        <span className="text-purple">{days}</span> days
      </div>
    </div>
  );
}
