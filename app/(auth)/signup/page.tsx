"use client";

import { useRouter } from "next/navigation";

export default function ContactPage() {
   
    const router = useRouter();
    const handleSubmit = () => {
        router.push("/")
    }

    return (
        <div
         
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
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" />
            </div>

        
            <button onClick={handleSubmit}  type="submit">
                Send
            </button>

            
        </div>
    );
}

