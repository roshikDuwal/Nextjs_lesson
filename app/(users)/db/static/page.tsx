import { db } from "@/config/db";
//if page contains header, searchparams, params, fetch then it will be dynamic by default and it will not be statically rendered. but if you want to force the page to be statically rendered then you can use the following code.

//After build store the data statically and serve the same data for every request and donot fetch new data from database for every request.

// so in to revalidate data in this we use ISR 
export const revalidate=30; 

const StaticPage = async () => {
  const [rows, fields] = await db.query("SELECT * FROM tbldoctors");
  console.log("Static page");
  const doctors = rows as any[];

  if (doctors?.length === 0) {
    return <div>No doctors found.</div>;
  }

  return (
    <div>
      {doctors.map((doctor: any, index: number) => (
        <div key={index}>
          <h2>{doctor.name}</h2>
          <p>{doctor.specialization}</p>
        </div>
      ))}
    </div>
  );
};

export default StaticPage;
