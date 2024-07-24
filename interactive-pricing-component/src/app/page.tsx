export default function Home() {
  return (
    <main>
      <div id="headings">
        <h1>Simple, traffic-based pricing</h1>
        <h2>Sign-up for our 30-day trial. No credit card required.</h2>
      </div>
      <div className="bg-pricingCompBg" id="card">
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
