import { Suspense } from "react";
import Loading from "../loading";

const CustomerDetails = async (props: any) => {
  const params = await props.params;
  const name = params.name;
  if (!name) {
    return <div>NO Name Provided</div>;
  }
  const url = `https://api.genderize.io/?name=${name}`;
  const response = await fetch(url);

  const customer = await response.json();
  return (
    <div>
      <h1>Admin Customer</h1>

      <Suspense fallback={<Loading />}>
        <Data customer={customer} />
      </Suspense>
    </div>
  );
};

export default CustomerDetails;

const Data=async ({ customer }: { customer: any })=>{
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return (
           <div className="flex flex-wrap flex-col gap-2 rounded-lg ">
          <h1>{customer.name}</h1>
          <p>Gender: {customer.gender}</p>
          <p>Probability: {customer.probability}</p>
        </div>
    )
}