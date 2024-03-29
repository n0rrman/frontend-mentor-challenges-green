interface ResultDisplayProps {
  years: string;
  months: string;
  days: string;
}

export default function ResultDisplay({
  years,
  months,
  days,
}: ResultDisplayProps) {
  return (
    <div className="flex flex-col font-bold italic text-8xl">
      <div>
        <span className="text-purple">{years}</span>
        years
      </div>
      <div>
        <span className="text-purple">{months}</span>
        months
      </div>
      <div>
        <span className="text-purple">{days}</span>
        days
      </div>
    </div>
  );
}