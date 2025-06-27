// components/Navbar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "হোম", href: "/" },
  { name: "রক্তদাতারা", href: "/donors" },
  { name: "রক্তের অনুরোধ", href: "/request" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  { name: "যোগাযোগ", href: "/contact" },
  { name: "সমাজ সহায়তা", href: "/community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-600">
          BloodDonate
        </Link>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-red-600 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="text-white bg-red-600 px-6 py-2 rounded hover:bg-red-700"
          >
            লগইন
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block hover:text-red-600"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700"
          >
            লগইন
          </Link>
        </div>
      )}
    </nav>
  );
}
