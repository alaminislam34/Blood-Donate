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
      {/* স্বাগতম মেসেজ */}
      <div className="text-gray-800">
        <h1 className="text-3xl font-bold">👋 স্বাগতম, আল-আমিন!</h1>
        <p className="text-sm text-gray-500 mt-1">
          এটি আপনার কার্যক্রমের একটি সংক্ষিপ্ত বিবরণ।
        </p>
      </div>

      {/* পরিসংখ্যান */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
            <FaUser size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">১২টি পোস্ট</h2>
            <p className="text-sm text-gray-500">আপনার তৈরি পোস্ট সংখ্যা</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-full">
            <FaRegComments size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">৩৪টি মন্তব্য</h2>
            <p className="text-sm text-gray-500">আলোচনায় অংশগ্রহণ করেছেন</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-full">
            <FaTint size={24} />
          </div>
          <div>
            <h2 className="text-lg font-semibold">২ বার</h2>
            <p className="text-sm text-gray-500">রক্তদান করেছেন</p>
          </div>
        </div>
      </div>

      {/* রক্তদানের চার্ট */}
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

      {/* সাম্প্রতিক কার্যক্রম */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          📋 সাম্প্রতিক কার্যক্রম
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>📝 আপনি পোস্ট করেছেন: “মিরপুরে রক্তদান ক্যাম্পেইন!”</li>
          <li>💬 আপনি রাকিবের পোস্টে মন্তব্য করেছেন।</li>
          <li>🩸 আপনি ৩ সপ্তাহ আগে রক্তদান করেছেন।</li>
        </ul>
      </div>
    </div>
  );
}
