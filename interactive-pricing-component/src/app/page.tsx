export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center flex-col gap-5">
      <div className="text-center" id="headings">
        <h1 className="text-3xl">Simple, traffic-based pricing</h1>
        <h2 className="text-xl">
          Sign-up for our 30-day trial. No credit card required.
        </h2>
      </div>
      <div className="bg-pricingCompBg shadow-2xl rounded-xl" id="card">
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
