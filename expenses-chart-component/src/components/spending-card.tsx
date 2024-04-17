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
    <div className="bg-veryPaleOrange text-darkBrown flex flex-col justify-between p-10 rounded-2xl">
      <h1 className="text-3xl font-bold">Spending - Last 7 days</h1>

      <WeeklyView spendings={spendings} />

      <div className="flex flex-row justify-between border-t pt-8">
        <div className="flex flex-col">
          <div className="text-mediumBrown">Total this month</div>
          <div className="text-4xl font-bold">${total}</div>
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="text-lg font-bold">{trend}%</div>
          <div className="text-mediumBrown">from last month</div>
        </div>
      </div>
    </div>
  );
}
