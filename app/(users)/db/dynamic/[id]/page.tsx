import { notFound } from "next/navigation";
import { db } from "@/config/db";
import { RowDataPacket } from "mysql2";

type Doctor = RowDataPacket & {
  doctor_id: number;
  first_name: string;
};

//store all ids data in build time like static 
export async function generateStaticParams() {
  const [rows] = await db.execute<Doctor[]>("SELECT doctor_id FROM tbldoctors");
  console.log("rows",rows);

  return rows.map((doctor) => ({
    id: doctor.doctor_id.toString(),
  }));
}
const SingleDoctor = async ({params}: {params: Promise<{ id: string }>}) => {
  const { id } = await params;

  const [rows] = await db.execute<Doctor[]>(
    "SELECT * FROM tbldoctors WHERE doctor_id = ?",
    [id]
  );


  
  const doctor = rows[0];

  if (!doctor) {
    notFound();
  }

  return <div>{doctor.full_name}</div>;
};

export default SingleDoctor;