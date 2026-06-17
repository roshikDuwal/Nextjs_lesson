"use client";

import { useActionState } from "react";
import { contactAction } from "./contact.action";
import { useFormStatus } from "react-dom";

type FormState = {
  success: boolean;
  message: string;
} | null;

export default function ContactPage() {
  const [state, formAction] = useActionState<FormState, FormData>(contactAction, null);

  return (
    <form
      action={formAction}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" name="fullName" type="text" />
      </div>

      <div>
        <label htmlFor="specialization">Specialization</label>
        <input id="specialization" name="specialization" type="text" />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input id="address" name="address" type="text" />
      </div>

      <Submit />

      {state && (
        <p
          className={
            state.success ? "text-green-500" : "text-red-500"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

const Submit = () => {
  const {pending,method,action } = useFormStatus();
  return (

    <button disabled={pending} type="submit">
      {pending ? "Sending..." : "Send"}
    </button>
  )
}