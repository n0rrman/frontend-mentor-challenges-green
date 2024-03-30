export default function DateInput() {
  return (
    <div className="flex flex-row uppercase font-bold">
      <div>
        <div className="">Day</div>
        <input placeholder="DD" />
      </div>
      <div>
        <div>Month</div>
        <input placeholder="MM" />
      </div>
      <div>
        <div>Year</div>
        <input placeholder="YYYY" />
      </div>
    </div>
  );
}
