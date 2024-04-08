import AgeCalculator from "@/components/age-calculator";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col justify-center items-start bg-white rounded-3xl rounded-br-[12.5rem] px-14 py-12 translate-y-4">
        <AgeCalculator />
      </main>
    </div>
  );
}
