import AgeCalculator from "@/components/age-calculator";

export default function Home() {
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

  return (
    <div className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col justify-center items-start bg-white rounded-2xl rounded-br-[12.5rem] p-12">
        <AgeCalculator />
      </main>
    </div>
  );
}
