"use client";

interface WeeklyViewProps {
  spendings: { day: string; amount: number }[];
}

export default function WeeklyView({ spendings }: WeeklyViewProps) {
  const max = Math.max(
    spendings[0].amount,
    spendings[1].amount,
    spendings[2].amount,
    spendings[3].amount,
    spendings[4].amount,
    spendings[5].amount,
    spendings[6].amount
  );

  const renderedBars = spendings.map((spending) => {
    return (
      <div
        className="flex flex-col justify-end items-center py-6"
        id={spending.day}
      >
        <div>{spending.amount}</div>
        <div style={{ height: (150 * spending.amount) / max }}>x</div>
        <div>{spending.day}</div>
      </div>
    );
  });

  return <div className="flex flex-row justify-between">{renderedBars}</div>;
}
