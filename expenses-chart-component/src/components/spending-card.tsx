import WeeklyView from "./weekly-view";

interface SpendingCardProps {
  total: number;
  trend: string;
  spendings: { day: string; amount: number }[];
}

export default function SpendingCard({
  total,
  trend,
  spendings,
}: SpendingCardProps) {
  return (
    <div className="bg-veryPaleOrange text-darkBrown flex flex-col justify-between p-5 pt-6 rounded-xl sm:pt-[2.35rem] sm:pb-10 sm:px-10 sm:rounded-[1.2rem]">
      <h1 className="text-2xl sm:text-[1.975rem] font-bold">
        Spending - Last 7 days
      </h1>

      <WeeklyView spendings={spendings} />

      <div className="flex flex-row justify-between border-t pt-6 mt-0 sm:pt-7 sm:mt-1">
        <div className="flex flex-col">
          <div className="text-[0.925rem] sm:text-lg text-mediumBrown">
            Total this month
          </div>
          <div className="text-3xl sm:text-5xl font-bold py-1.5">${total}</div>
        </div>
        <div className="flex flex-col items-end justify-center pt-6">
          <div className="text-[0.925rem] sm:text-lg font-bold">{trend}%</div>
          <div className="text-[0.925rem] sm:text-lg text-mediumBrown -mt-1">
            from last month
          </div>
        </div>
      </div>
    </div>
  );
}
