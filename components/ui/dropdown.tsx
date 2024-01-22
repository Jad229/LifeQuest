"use client";
import Link from "next/link";
import { useState } from "react";

import { MdArrowDropDownCircle } from "react-icons/md";

function Dropdown() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="relative flex flex-col gap-4 items-center">
      <button onClick={() => setOpenDropdown((prevState) => !prevState)}>
        <MdArrowDropDownCircle size={25} />
      </button>

      {openDropdown && (
        <div className="bg-white p-10 border border-black absolute flex flex-col gap-4 mt-10">
          <Link href="/inventory">Inventory</Link>
          <Link href="/market">Market</Link>
          <Link href="/party">Party</Link>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
