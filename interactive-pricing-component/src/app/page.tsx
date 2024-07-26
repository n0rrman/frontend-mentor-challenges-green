import Image from "next/image";

import bg from "/public/bg-pattern.svg";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center flex-col gap-5">
      <div className="relative w-full min-h-50% aspect-square top-0">
        <Image fill src={bg} alt="" />
      </div>
      <div className="text-center z-40" id="headings">
        <h1 className="text-3xl">Simple, traffic-based pricing</h1>
        <h2 className="text-xl">
          Sign-up for our 30-day trial. No credit card required.
        </h2>
      </div>
      <div className="bg-pricingCompBg shadow-2xl rounded-xl z-40" id="card">
        <div>
          <div>Pageviews</div>
          <div>$ /month</div>
        </div>

        <div>
          <div>Monthly Billing</div>
          <div>Yearly Billing</div>
          <div>25% discount</div>
        </div>
        <div>
          <div>
            <div>Unlimited websites</div>
            <div>100% data ownership</div>
            <div>Email reports</div>
          </div>

          <button>Start my trial</button>
        </div>
      </div>
    </main>
  );
}
