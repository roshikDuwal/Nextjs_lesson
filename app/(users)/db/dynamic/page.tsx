import { db } from "@/config/db";

export const dynamic = "force-dynamic"; //This will force the page to be rendered dynamically on every request, even if it can be statically rendered. This is useful when you want to ensure that the page always shows the most up-to-date data, such as from 

import {cache} from "react" //for caching multiple data

const getAllDoctors = cache(async () => {
  const [rows] = await db.query("SELECT * FROM tbldoctors");
  const doctors = rows as any[];
  console.log("fetching data");
  return doctors;
});

const DynamicPage = async () => {

  const doctors =await getAllDoctors();

  if (doctors && doctors.length === 0) {
    return <div>No doctors found.</div>;
  }

  return (
    <div>
      <DoctorList doctors={doctors} />
    </div>
  );
};

export default DynamicPage;



const DoctorList = async ({ doctors }: { doctors: any }) => {
  const doctorsSecond =await getAllDoctors();
  return (
    <>
      <div>
        <h1>Doctor first data</h1>
        {doctors.map((doctor: any, index: number) => (
          <div key={index}>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialization}</p>
          </div>
        ))}
      </div>
      <div>
        <br />

        <h1>Doctor second data</h1>
        {doctorsSecond.map((doctor: any, index: number) => (
          <div key={index}>
            <h2>{doctor.name}</h2>
            <p>{doctor.specialization}</p>
          </div>
        ))}
      </div>
    </>
  );
};
