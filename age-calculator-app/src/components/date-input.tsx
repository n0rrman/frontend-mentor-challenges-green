interface DateInputProps {
  errors: {
    days?: string[];
    months?: string[];
    years?: string[];
  };
}

export default function DateInput({ errors }: DateInputProps) {
  return (
    <div className="flex flex-row uppercase font-bold text-smokeyGray gap-8 text-[0.9rem] tracking-[0.2rem]">
      <div>
        <div className={`${errors.days && "text-lightRed"} py-2`}>Day</div>
        <input
          name="days"
          className={`${
            errors.days && "border-lightRed"
          } placeholder:text-smokeyGray focus:border-purple focus:outline-none text-offBlack border rounded-lg px-6 py-[0.7rem] w-40 text-[2rem]`}
          placeholder="DD"
        />
        <div className="text-sm text-lightRed normal-case font-normal italic tracking-wide">
          {errors.days}
        </div>
      </div>
      <div>
        <div className={`${errors.months && "text-lightRed"} py-2`}>Month</div>
        <input
          name="months"
          className={`${
            errors.months && "border-lightRed"
          } placeholder:text-smokeyGray focus:border-purple focus:outline-none text-offBlack border rounded-lg px-6 py-[0.7rem] w-40 text-[2rem]`}
          placeholder="MM"
        />
        <div className="text-sm text-lightRed normal-case font-normal italic tracking-wide">
          {errors.months}
        </div>
      </div>
      <div>
        <div className={`${errors.years && "text-lightRed"} py-2`}>Year</div>
        <input
          name="years"
          className={`${
            errors.years && "border-lightRed"
          } placeholder:text-smokeyGray focus:border-purple focus:outline-none text-offBlack border rounded-lg px-6 py-[0.7rem] w-40 text-[2rem]`}
          placeholder="YYYY"
        />
        <div className="text-sm text-lightRed normal-case font-normal italic tracking-wide">
          {errors.years}
        </div>
      </div>
    </div>
  );
}
