import AgeCalculator from "@/components/age-calculator";

export default function Home() {
  return (
    <div className="flex justify-center items-start sm:items-center min-h-screen p-4">
      <main className="flex flex-col justify-center items-start bg-white rounded-3xl rounded-br-[6.4rem] sm:rounded-br-[12.5rem] py-[2.75rem] px-6 lg:px-14 lg:py-12 translate-y-[4.5rem] sm:translate-y-4 transition-all">
        <AgeCalculator />
      </main>
    </div>
  );
}
