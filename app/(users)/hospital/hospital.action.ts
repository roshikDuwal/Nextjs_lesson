"use server";

import { db } from "@/config/db";
import { revalidatePath } from "next/cache";

export const hospitalAction = async (
    formData: FormData
): Promise<void> => {
    const data = Object.fromEntries(formData.entries());

    const { fullName, specialization, phone, email, address } = data;

    if (!fullName || !email) {
        throw new Error("Full name and email are required");
    }

    await db.execute(
        `INSERT INTO tbldoctors
     (doctor_name, specialization, phone, email, address)
     VALUES (?, ?, ?, ?, ?)`,
        [fullName, specialization, phone, email, address]
    );

   revalidatePath("/hospital");  //if this is called on static page then it will be called on demand revalidate path else revalidate path
    
};