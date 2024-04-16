import { promises as fs } from "fs";

import ExpensesChart from "@/components/expenses-chart";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf-8");
  const data = JSON.parse(file);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <ExpensesChart expenses={data} />
    </main>
  );
}
