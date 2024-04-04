"use server";

import { z } from "zod";

const submitCalcSchema = z.object({
    days: z.number({ required_error: "This field is required"})
        .gte(1, { message: "Must be a valid day" })
        .lte(31, { message: "Must be a valid day" }),
    months: z.number({ required_error: "This field is required"})
        .gte(1, { message: "Must be a valid month" })
        .lte(12, { message: "Must be a valid month" }),
    years: z.number({ required_error: "This field is required"})
        .gte(0, { message: "Must be a valid year"})
        .lte(new Date().getFullYear(), { message: "Must be in the past"})
})

interface SubmitCalcFormState {
    errors: {
        days?: string[];
        months?: string[];
        years?: string[];
    }
    success: boolean;
    payload?: {
        days: string;
        months: string;
        years: string;
    }
}

export async function submitCalcForm(formState: SubmitCalcFormState, formData: FormData): Promise<SubmitCalcFormState> {

    const days = Number(formData.get('days'));
    const months = Number(formData.get('months'));
    const years = Number(formData.get('years'));

    // FORM ERRORS
    const results = submitCalcSchema.safeParse({ days, months, years })
    if(!results.success) {
        return {
            errors: results.error.flatten().fieldErrors,
            success: false,
        }
    } 

    const now = new Date()
    const date = new Date(`${years}-${months}-${days}`)

    // DATE VALIDATION
    const validDay = days == date.getDate()
    if (!validDay) {
        return {
            errors: {
                days: ["Must be a valid date"],
            },
            success: false,
        } 
    }

    // FUTURE DATE CHECK
    const calc = +now - +date;
    if (calc < 0) {
        return {
            errors: {
                years: ["Must be in the past"],
            },
            success: false,
        } 
    }

    // AGE CALCULATION
    const yConst = 31556952000
    const mConst = 2629746000
    const dConst = 86400000

    const calcYears = Math.floor(calc /  yConst) 
    const calcMonths = Math.floor((calc % yConst) / mConst )
    const calcDays = Math.floor((calc % mConst) / dConst )

    return {
        errors: {},
        success: true,
        payload: { days: calcDays.toString(), months: calcMonths.toString(), years: calcYears.toString()}
    }
}