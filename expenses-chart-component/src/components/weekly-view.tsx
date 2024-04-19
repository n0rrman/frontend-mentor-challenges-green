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
        className="flex flex-col-reverse justify-start gap-2 items-center py-6"
        id={spending.day}
      >
        <div className="text-mediumBrown">{spending.day}</div>
        <div
          className={`${
            max == spending.amount
              ? "bg-cyan hover:bg-cyan/70"
              : "bg-softRed hover:bg-softRed/70"
          } w-12 rounded transition-all peer`}
          style={{ height: (150 * spending.amount) / max }}
        ></div>
        <div className="bg-darkBrown opacity-0 peer-hover:opacity-100 text-veryPaleOrange p-2 rounded-lg text-[1.125rem] transition-all">
          ${spending.amount}
        </div>
      </div>
    );
  });

  return <div className="flex flex-row justify-between">{renderedBars}</div>;
}
