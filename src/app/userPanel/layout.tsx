"use client"; // ✅ এই লাইনটা সবচেয়ে গুরুত্বপূর্ণ

import Link from "next/link";
import { usePathname } from "next/navigation";

// ইউজার প্যানেলের মেনু আইটেমসমূহ
const userMenu = [
  { name: "ওভারভিউ", path: "/userPanel" },
  { name: "প্রোফাইল", path: "/userPanel/profile" },
  { name: "আমার পোস্ট", path: "/userPanel/posts" },
  { name: "সেটিংস", path: "/userPanel/settings" },
];

export default function UserPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // বর্তমান রুট চিহ্নিত করার জন্য

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* সাইডবার */}
      <aside className="w-full md:w-64 bg-white shadow-md">
        <div className="p-6 text-xl font-bold text-blue-600">ইউজার প্যানেল</div>

        <nav className="space-y-2 px-4 pb-6">
          {userMenu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-2 rounded text-sm font-medium transition hover:bg-blue-100 ${
                pathname === item.path ? "bg-blue-200 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* মূল কন্টেন্ট */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
