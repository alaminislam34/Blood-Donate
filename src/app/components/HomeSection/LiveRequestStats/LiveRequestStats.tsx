"use client";

import { motion } from "motion/react";

export default function LiveRequestsStats() {
  // সিম্পল স্ট্যাটিক ডাটা, তুমি চাইলে API থেকেও নিয়ে আসতে পারো
  const stats = [
    { label: "মোট রক্তদাতা", value: 1250 },
    { label: "সফল রক্তদান", value: 870 },
    { label: "অ্যাকটিভ রক্ত অনুরোধ", value: 45 },
    { label: "রক্তদাতা রেজিস্ট্রেশন", value: 230 },
  ];

  // লাইভ রিকোয়েস্টের জন্য ডামি লিস্ট
  const liveRequests = [
    { name: "মোঃ হাসান", bloodGroup: "A+", location: "ঢাকা", urgency: "উচ্চ" },
    {
      name: "ফাতেমা খাতুন",
      bloodGroup: "B-",
      location: "চট্টগ্রাম",
      urgency: "মধ্যম",
    },
    {
      name: "রাহুল সিকদার",
      bloodGroup: "O+",
      location: "রাজশাহী",
      urgency: "উচ্চ",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          লাইভ রক্ত অনুরোধ ও পরিসংখ্যান
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-red-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.7 }}
            >
              <p className="text-4xl font-extrabold text-red-600">
                {stat.value}
              </p>
              <p className="mt-2 text-lg font-medium text-gray-700">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Live Requests */}
        <motion.div
          className="max-w-4xl mx-auto bg-red-50 rounded-lg shadow-lg p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-red-700 mb-4 text-center">
            লাইভ রক্ত অনুরোধ
          </h3>
          <ul className="space-y-4">
            {liveRequests.map((req, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <div>
                  <p className="font-semibold text-gray-900">{req.name}</p>
                  <p className="text-sm text-gray-600">
                    {req.location} -{" "}
                    <span className="font-bold">{req.bloodGroup}</span>
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    req.urgency === "উচ্চ"
                      ? "bg-red-600 text-white"
                      : req.urgency === "মধ্যম"
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {req.urgency} জরুরি
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
