import BalanceCard from "./balance-card";

interface ExpensesChartProps {
  expenses: { day: string; amount: number }[];
}

export default function ExpensesChart({ expenses }: ExpensesChartProps) {
  return (
    <div className="w-[33.75rem]">
      <BalanceCard balance={921.48} />

      <h1>Spending - Last 7 days</h1>

      <div>mon</div>
      <div>tue</div>
      <div>wed</div>
      <div>thu</div>
      <div>fri</div>
      <div>sat</div>
      <div>sun</div>

      <div>Total this month</div>
      <div>$478.33</div>
      <div>+2.4%</div>
      <div>from last month</div>
    </div>
  );
}
