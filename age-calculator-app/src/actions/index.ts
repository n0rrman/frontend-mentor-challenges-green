"use server";

import { z } from "zod";

const submitCalcSchema = z.object({
    days: z.number(),
    months: z.number(),
    years: z.number()
})

interface SubmitCalcFormState {
    errors: {
        days?: string[];
        months?: string[];
        years?: string[];
    }
    succes?: boolean;
}

export async function submitCalcForm(formState: SubmitCalcFormState, formData: FormData): Promise<SubmitCalcFormState> {

    const results = submitCalcSchema.safeParse({
        days: formData.get('days'),
        months: formData.get('months'),
        years: formData.get('years'),
    })

    console.log(formData.get('days'))
    console.log(formData.get('months'))
    console.log(formData.get('years'))

    if(!results.success) {
        return {
            errors: results.error.flatten().fieldErrors
        }
    }

    return {
        errors: {},
        succes: true,
    }
}