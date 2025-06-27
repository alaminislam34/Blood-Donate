"use client";

import { FaRegComments, FaTint, FaUser } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", donations: 1 },
  { month: "Feb", donations: 2 },
  { month: "Mar", donations: 3 },
  { month: "Apr", donations: 2 },
  { month: "May", donations: 4 },
];

export default function UserDashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="text-gray-800 ">
        <h1 className="text-3xl font-bold">👋 Welcome back, Al Amin!</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Here’s a quick overview of your activity.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white  p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
            <FaUser size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">12 Posts</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total created
            </p>
          </div>
        </div>
        <div className="bg-white  p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-full">
            <FaRegComments size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">34 Comments</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Engaged in discussion
            </p>
          </div>
        </div>
        <div className="bg-white  p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-full">
            <FaTint size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">2 Times</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Blood Donated
            </p>
          </div>
        </div>
      </div>

      {/* chart section */}
      <section>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="donations"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Recent Activity (static example) */}
      <div className="bg-white  p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          📋 Recent Activity
        </h3>
        <ul className="space-y-2 text-sm text-gray-600 ">
          <li>📝 You posted: “Blood donation campaign at Mirpur!”</li>
          <li>💬 You commented on Rakib’s post.</li>
          <li>🩸 You donated blood 3 weeks ago.</li>
        </ul>
      </div>
    </div>
  );
}
