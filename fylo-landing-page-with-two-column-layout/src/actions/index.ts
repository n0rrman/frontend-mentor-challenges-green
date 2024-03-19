"use server";

import { z } from "zod";


const submitEmailSchema = z.object({
    email: z.string()
        .email({ message: "Please check your email" })
        .min(5, { message: "Email too short" })
        .max(40, { message: "Email too long" }),
    });

interface SubmitEmailFormState {
    errors: {
        email?: string[];
        _form?: string[];
    };
    success?: boolean;

}

export async function submitEmailFormState(formState: SubmitEmailFormState, formData: FormData): Promise<SubmitEmailFormState> {

    const result = submitEmailSchema.safeParse({
        email : formData.get("email"),
    });

    if(!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        }
    }

    return {
        errors: {},
        success: true,
      };
}