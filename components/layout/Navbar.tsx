import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex w-full items-center gap-4  p-4">
      <div>thapa</div>
      <nav className="ml-auto flex-1 w-full">
        <ul className="flex items-center gap-4  justify-center w-full font-work-sans">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
            <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
