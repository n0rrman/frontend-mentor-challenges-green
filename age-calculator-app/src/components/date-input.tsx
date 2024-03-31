import { useState } from "react";
import { z } from "zod";

export default function DateInput() {
  /*


- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The date is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted


*/

  const [years, setYears] = useState("--");
  const [months, setMonths] = useState("--");
  const [days, setDays] = useState("--");

  return (
    <div className="flex flex-row uppercase font-bold text-smokeyGray gap-7 text-[0.9rem] tracking-[0.2rem]">
      <div>
        <div className="">Day</div>
        <input
          // value={days}
          className="placeholder:text-smokeyGray text-offBlack border rounded-lg p-4 w-36 text-3xl"
          placeholder="DD"
        />
      </div>
      <div>
        <div>Month</div>
        <input
          // value={months}
          className="placeholder:text-smokeyGray text-offBlack border rounded-lg p-4 w-36 text-3xl"
          placeholder="MM"
        />
      </div>
      <div>
        <div>Year</div>
        <input
          // value={years}
          className="placeholder:text-smokeyGray text-offBlack border rounded-lg p-4 w-36 text-3xl"
          placeholder="YYYY"
        />
      </div>
    </div>
  );
}
