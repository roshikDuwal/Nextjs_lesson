import Link from "next/link";

const User = async (props: any) => {
  const user = await props.params;
  return (
    <>
    <div>{user.name} page</div>
      <Link className="bg-blue-500 p-2 text-white" href={`/users/${user.name}/1`}>
      Go to User Id
      </Link>
    </>
  );
};

export default User;
