import React from "react";
import { Image } from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between mb-10">
      <Link className="w-1/4" href="/">
        <p>Logo Image</p>
      </Link>
      <nav className="flex justify-between w-[15%]">
        <Link href="/">Home </Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div>

      </div>
    </header>
  );
};

export default Header;
