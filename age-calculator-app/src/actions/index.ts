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
    success?: boolean;
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

    const results = submitCalcSchema.safeParse({ days, months, years })
 
    if(!results.success) {
        return {
            errors: results.error.flatten().fieldErrors,
            success: false,
        }
    }



    // Check if date is valid, number of days per month
    /// If not -> error @day


    // Calculate age
    //// if negative -> error @year
    /// if pos -> return as string

    return {
        errors: {},
        success: true,
        payload: { days: "10", months: "11", years: "12"}
    }
}