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
    <div className="bg-veryPaleOrange text-darkBrown flex flex-col justify-between py-8 px-10 rounded-2xl">
      <h1 className="text-[2rem] font-bold">Spending - Last 7 days</h1>

      <WeeklyView spendings={spendings} />

      <div className="flex flex-row justify-between border-t pt-8">
        <div className="flex flex-col">
          <div className="text-lg text-mediumBrown">Total this month</div>
          <div className="text-5xl font-bold py-1.5">${total}</div>
        </div>
        <div className="flex flex-col items-end justify-center pt-6">
          <div className="text-lg font-bold">{trend}%</div>
          <div className="text-lg text-mediumBrown -mt-1">from last month</div>
        </div>
      </div>
    </div>
  );
}
