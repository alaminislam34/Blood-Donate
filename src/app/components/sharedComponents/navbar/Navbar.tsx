// components/Navbar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Donors", href: "/donors" },
  { name: "Request Blood", href: "/request" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Community Support", href: "/community" },
  { name: "Login", href: "/login", primary: true }, // Added primary for styling
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              className={
                item.primary
                  ? "text-white bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition"
                  : "hover:text-red-600 transition"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={
                item.primary
                  ? "block text-white bg-red-600 px-4 py-1 rounded hover:bg-red-700 transition"
                  : "block hover:text-red-600 transition"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}