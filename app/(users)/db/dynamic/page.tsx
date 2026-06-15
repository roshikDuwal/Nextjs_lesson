import { db } from "@/config/db";

export const dynamic = "force-dynamic"; //This will force the page to be rendered dynamically on every request, even if it can be statically rendered. This is useful when you want to ensure that the page always shows the most up-to-date data, such as from a database or an API.
const DynamicPage = async () => {
  const [rows, fields] = await db.query("SELECT * FROM tbldoctors");
  console.log("Dyanmic page");
  const doctors = rows as any[];

  if (doctors && doctors.length === 0) {
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

export default DynamicPage;
