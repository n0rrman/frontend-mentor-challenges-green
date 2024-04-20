import BalanceCard from "./balance-card";
import SpendingCard from "./spending-card";

interface ExpensesChartProps {
  spendings: { day: string; amount: number }[];
}

export default function ExpensesChart({ spendings }: ExpensesChartProps) {
  return (
    <div className="flex flex-col w-full sm:w-[33.75rem] p-4 sm:p-0 gap-4 sm:gap-6">
      <BalanceCard balance={921.48} />
      <SpendingCard spendings={spendings} total={478.33} trend="+2.4" />
    </div>
  );
}
