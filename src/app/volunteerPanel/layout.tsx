"use client"; // ✅ এই লাইনটা সবচেয়ে গুরুত্বপূর্ণ

import Link from "next/link";
import { usePathname } from "next/navigation";

const userMenu = [
  { name: "Overview", path: "/volunteerPanel" },
  { name: "Profile", path: "/volunteerPanel/profile" },
  { name: "My Events", path: "/volunteerPanel/events" },
  {
    name: "Availability Schedule",
    path: "/volunteerPanel/availabilitySchedule",
  },
  { name: "My Contributions", path: "/volunteerPanel/myContributions" },
  { name: "Support", path: "/volunteerPanel/support" },
  { name: "Settings", path: "/volunteerPanel/settings" },
];

export default function VolunteerPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 ">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md">
        <div className="p-6 text-xl font-bold text-blue-600">
          Volunteer Panel
        </div>
        <nav className="space-y-2 px-4 pb-6">
          {userMenu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`block px-4 py-2 rounded text-sm font-medium transition hover:bg-blue-100 dark:hover:bg-gray-700 ${
                pathname === item.path ? "bg-blue-200 " : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
