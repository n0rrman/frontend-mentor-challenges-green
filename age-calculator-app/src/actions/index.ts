"use server";

import { z } from "zod";


const submitCalcSchema = z.object({
    days: z.number().gte(1, { message: "too small" }).lte(31, { message: "too big"}),
    months: z.number().gte(1, { message: "too small"}).lte(12, { message: "too big"}),
    years: z.number().gte(0, { message: "too small"}).lte(new Date().getFullYear(), { message: "in future"})
})

/*
- Any field is empty when the form is submitted
- The day number is not between 1-31
- The month number is not between 1-12
- The date is in the future
- The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- **Bonus**: See the age numbers animate to their final number when the form is submitted
*/

interface SubmitCalcFormState {
    errors: {
        days?: string[];
        months?: string[];
        years?: string[];
    }
    success?: boolean;
}

export async function submitCalcForm(formState: SubmitCalcFormState, formData: FormData): Promise<SubmitCalcFormState> {

    const results = submitCalcSchema.safeParse({
        days: Number(formData.get('days') || ""),
        months: Number(formData.get('months') || ""),
        years: Number(formData.get('years') || ""),
    })

    
    if(!results.success) {
        console.log(results.error.flatten().fieldErrors)
        return {
            errors: results.error.flatten().fieldErrors
        }
    }

    return {
        errors: {},
        success: true,
    }
}