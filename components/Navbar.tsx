import LogoutButton from "@/features/Authentication/LogoutButton";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ToggleTheme/ToggleTheme";
import { DropdownMenu } from "./ui/dropdown-menu";

type Props = {};

export default async function Navbar({}: Props) {
  const session = await getServerSession(authOptions);
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-center p-4 mb-5">
      <ul className="flex gap-10 w-full max-w-6xl items-center justify-between">
        <li className="flex items-center gap-5">
          <Button variant="ghost" className="">
            <Link className="font-bold text-2xl" href="/">
              LifeQuest
            </Link>
          </Button>
          <DropdownMenu />
        </li>
        <li className="flex items-center gap-2">
          {session ? (
            <LogoutButton />
          ) : (
            <Button>
              <Link href="/auth">Log In</Link>
            </Button>
          )}
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
