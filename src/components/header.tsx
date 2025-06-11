"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Header() {
  const { data } = useSession();
  const session = data;
  return (
    <header className="bg-[#FBFBFB] border p-4  flex justify-between">
      <nav className="text-black text-lg font-semibold ">
        <Link href="/">Share Stories</Link>
      </nav>

      <nav>
        <ul className="flex gap-4 text-black text-center">
          {session ? (
            <>
              <p>Hi, {session?.user?.name}!</p>
              <li>
                <Link className="underline" href="/about">
                  About us
                </Link>
              </li>
              <li>
                <Link className="underline" href="/service">
                  Service
                </Link>
              </li>
              <li>
                <Link className="underline" href="/blog">
                  Blog
                </Link>
              </li>
              <button className="underline" onClick={() => signOut()}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <li>
                <Link className="underline" href={"/auth/sign-in"}>
                  Sign In
                </Link>
              </li>

              <li>
                <Link className="underline" href="/about">
                  About us
                </Link>
              </li>
              <li>
                <Link className="underline" href="/service">
                  Service
                </Link>
              </li>
              <li>
                <Link className="underline" href="/blog">
                  Blog
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
