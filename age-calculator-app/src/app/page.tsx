import AgeCalculator from "@/components/age-calculator";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col justify-center items-start bg-white rounded-2xl rounded-br-[12.5rem] p-12">
        <AgeCalculator />
      </main>
    </div>
  );
}
