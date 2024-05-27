"use client";

import { submitEmailFormState } from "@/actions";
import { useFormState } from "react-dom";

export default function Home() {
  const [formState, action] = useFormState(submitEmailFormState, {
    errors: {},
  });

  console.log(formState);
  return (
    <main className="min-h-screen flex justify-center items-center">
      <form
        action={action}
        className="flex flex-col gap-4 bg-white p-8 rounded-xl"
      >
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <div className="flex flex-row">
          <div>
            <div>First Name</div>
            <input name="firstName" />
          </div>
          {/* <div>This field is required</div> */}
          <div>
            <div>Last Name</div>
            <input name="lastName" />
          </div>
          {/* <div>This field is required</div> */}
        </div>
        <div className="flex flex-col w-full">
          <div>Email Address</div>
          <input className="w-full" name="emailAddress" />
          {/* <div>Please enter a valid email address</div> */}
          {/* <div>This field is required</div> */}
        </div>
        <div>
          <div>Query Type</div>
          <div>General Enquiry</div>
          <div>Support Request</div>
          {/* <div>Please select a query type</div> */}
        </div>
        <div>
          <div>Message</div>
          {/* <div>This field is required</div> */}
        </div>
        <div>
          <div>I consent to being contacted by the team</div>
          {/* <div>To submit this form, please consent to being contacted</div> */}
        </div>

        <div>
          <button className="w-full bg-green text-white text-sm p-3 rounded-lg">
            Submit
          </button>
          {/* <div>Message Sent!</div> */}
          {/* <div>Thanks for completing the form. We'll be in touch soon!</div> */}
        </div>
      </form>
    </main>
  );
}
