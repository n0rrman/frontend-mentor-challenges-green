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
        className="flex flex-col-reverse justify-start gap-3 sm:gap-2 items-center pt-0 pb-6 sm:pt-6 sm:pb-7"
        key={spending.day}
      >
        <div className="text-mediumBrown text-[0.7rem] sm:text-[0.95rem]">
          {spending.day}
        </div>
        <div
          className={`${
            max == spending.amount
              ? "bg-cyan hover:bg-cyan/70"
              : "bg-softRed hover:bg-softRed/70"
          } w-[2.075rem] sm:w-[3.17rem] rounded transition-all peer`}
          style={{ height: (150 * spending.amount) / max }}
        ></div>
        <div className="bg-darkBrown opacity-0 peer-hover:opacity-100 text-veryPaleOrange px-2 py-1.5 rounded text-[1.125rem] transition-all -mx-5">
          ${spending.amount}
        </div>
      </div>
    );
  });

  return <div className="flex flex-row justify-between">{renderedBars}</div>;
}
