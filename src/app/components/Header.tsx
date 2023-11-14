"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex space-x-72 pt-6 ml-4">
      <div className="flex space-x-4">
        <Link href="/">MERCH STORE</Link>
        <Link className="hover:underline" href="/all">All</Link>
        <Link className="hover:underline" href="/shirts">Shirts</Link>
        <Link className="hover:underline" href="/stickers">Stickers</Link>
      </div>

     <div className="flex border-2 rounded-lg overflow-clip align-middle"> 
      <input
        className="bg-black pl-4 outline-none"
        type="text"
        placeholder="Search for products..."
      />
      <MagnifyingGlassIcon className="h-4" />
      </div>
      <button className="border-2 rounded-sm">cart</button>
    </div>
  );
}
