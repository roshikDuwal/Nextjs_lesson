"use server";

import { db } from "@/config/db";
import { redirect } from "next/navigation";

type ActionState = {
  success: boolean;
  message: string;
};

export async function contactAction(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  try {
    const data = Object.fromEntries(formData.entries());
    const { fullName, specialization, phone, email, address } = data;

    if (!fullName || !email) {
      return {
        success: false,
        message: "Full name and email are required",
      };
    }

    if (!fullName || !email) {
      return {
        success: false,
        message: "Full name and email are required",
      };
    }

    await db.execute(
      `INSERT INTO tbldoctors 
       (doctor_name, specialization, phone, email, address) 
       VALUES (?, ?, ?, ?, ?)`,
      [fullName, specialization, phone, email, address]
    );
  
  } catch (error: unknown) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Something went wrong",
    };
  }

  redirect("/");
}