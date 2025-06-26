"use client";

import { motion } from "motion/react";

const stats = [
  { label: "রক্তদান", value: "১২,৫০০+" },
  { label: "রেজিস্টারকৃত ডোনার", value: "৫,২০০+" },
  { label: "সহযোগী হাসপাতাল", value: "৩০+" },
  { label: "সফল রক্ত মেলানো", value: "১১,৮০০+" },
];

export default function ImpactStatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          আমাদের প্রভাব
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-3xl text-red-600 font-bold">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
