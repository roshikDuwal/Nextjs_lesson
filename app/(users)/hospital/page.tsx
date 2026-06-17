import { db } from "@/config/db";
import { RowDataPacket } from "mysql2";
import { hospitalAction } from "./hospital.action";

//this is static page
interface Doctor extends RowDataPacket {
    doctor_id: number;
    fullName: string;
    specialization: string;
    phone: string;
    email: string;
    address: string;
}

const HospitalPage = async () => {
    const [doctors] = await db.execute<Doctor[]>("SELECT * FROM tbldoctors");

    return (
        <div>
            <h2>Doctor Page</h2>

            <form
                action={hospitalAction}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginBottom: "24px",
                }}
            >
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="specialization">Specialization</label>
                    <input
                        id="specialization"
                        name="specialization"
                        type="text"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        required
                    />
                </div>

                <button type="submit">Send</button>
            </form>

            <h3>Doctors List</h3>

            {doctors.length === 0 ? (
                <p>No doctors found.</p>
            ) : (
                <ul>
                    {doctors.map((doctor,index) => (
                        <li key={index}>
                            <strong>{doctor.fullName}</strong>
                            <br />
                            Specialization: {doctor.specialization}
                            <br />
                            Phone: {doctor.phone}
                            <br />
                            Email: {doctor.email}
                            <br />
                            Address: {doctor.address}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HospitalPage;