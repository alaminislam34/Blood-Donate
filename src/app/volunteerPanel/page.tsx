"use client";
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

const VolunteerPanel = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* হেডার */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          ভলান্টিয়ার প্যানেল
        </h1>
        <p className="text-gray-600 mt-2">
          স্বাগতম! আপনার ভলান্টিয়ার কার্যকলাপের একটি সারাংশ এখানে দেখুন।
        </p>
      </header>

      {/* তিনটি ইনফো কার্ড */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* মোট রক্তদান */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
            মোট রক্তদান
          </h2>
          <p className="text-4xl font-bold text-gray-900">১৫</p>
          <p className="text-gray-500 mt-auto">আপনি যতবার রক্তদান করেছেন।</p>
        </div>

        {/* আসন্ন ইভেন্ট */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-green-600">
            আসন্ন ইভেন্ট
          </h2>
          <p className="text-4xl font-bold text-gray-900">৩</p>
          <p className="text-gray-500 mt-auto">
            যেসব ইভেন্টে আপনি অংশগ্রহণ করবেন।
          </p>
        </div>

        {/* বার্তা */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-purple-600">বার্তা</h2>
          <p className="text-4xl font-bold text-gray-900">৭</p>
          <p className="text-gray-500 mt-auto">
            কো-অর্ডিনেটর এবং সদস্যদের বার্তা।
          </p>
        </div>
      </section>

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

      {/* দ্রুত অ্যাকশন বাটন */}
      <section className="mt-10 flex flex-wrap gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition">
          নতুন ইভেন্টে যোগ দিন
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow transition">
          সময়সূচি আপডেট করুন
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded shadow transition">
          আমার অবদান দেখুন
        </button>
      </section>
    </div>
  );
};

export default VolunteerPanel;
