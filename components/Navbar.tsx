import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="p-4">
      <ul className="flex gap-10 items-center justify-center">
        <Link href="/inventory">Inventory</Link>
        <Link href="/market">Market</Link>
        <Link href="/party">Party</Link>
      </ul>
    </nav>
  );
}
