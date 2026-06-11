import Link from "next/link";

const AdminNavbar = () => {
  return (
    <header className="flex w-full items-center gap-4  p-4">
      <div>thapa</div>
      <nav className="ml-auto flex-1 w-full">
        <ul className="flex items-center gap-4  justify-center w-full font-work-sans">
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/customer">Customer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AdminNavbar;
