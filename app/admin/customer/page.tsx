import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";

const Customer = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  const customers = await response.json();
  return (
    <div>
      <h1>Admin Customer</h1>

      <div className="flex flex-wrap ">
        {customers.map((customer: any) => (
          <div
            key={customer.id}
            className="p-4 border-2 m-4 flex flex-col gap-2 rounded-lg w-[300px]"
          >
            {customer.name}
            {customer.email}
            <Link
              href={`/admin/customer/name=${customer.name}`}
              className="text-blue-500"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
