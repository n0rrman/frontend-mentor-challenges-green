"use server";

import { z } from "zod";


const submitEmailSchema = z.object({
    firstName: z.string()
        .email({ message: "Please check your email" })
        .min(5, { message: "Email too short" })
        .max(40, { message: "Email too long" }),
    });

interface SubmitEmailFormState {
    errors: {
        firstName?: string[];
        _form?: string[];
    };
    success?: boolean;

}

export async function submitEmailFormState(formState: SubmitEmailFormState, formData: FormData): Promise<SubmitEmailFormState> {

    const result = submitEmailSchema.safeParse({
        firstName : formData.get("firstName"),
    });

    console.log(result.data?.firstName)

    // if(!result.success) {
    //     return 
    //         errors: result.error.flatten().fieldErrors
    //     }
    // }

    return {
        errors: {},
        success: true,
      };
}