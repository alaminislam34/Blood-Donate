// components/VolunteerSection.tsx
"use client";

import { motion } from "motion/react";

export default function VolunteerSection() {
  return (
    <section className="py-20 bg-red-600 text-white text-center">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          আমাদের স্বেচ্ছাসেবক দলে যোগ দিন
        </h2>
        <p className="text-lg mb-6">
          শুধু রক্তদান নয়, আপনার সময় ও শ্রম দিয়েও আপনি মানুষের পাশে দাঁড়াতে
          পারেন। আমাদের ইভেন্ট, ক্যাম্পেইন ও হেল্প ডেস্ক পরিচালনায় আমাদের
          স্বেচ্ছাসেবক দলের অংশ হোন।
        </p>
        <button className="px-6 py-3 bg-white text-red-700 font-semibold rounded shadow hover:bg-red-100 transition">
          এখনই রেজিস্টার করুন
        </button>
      </motion.div>
    </section>
  );
}
