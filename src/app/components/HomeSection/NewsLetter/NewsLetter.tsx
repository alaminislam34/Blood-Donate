// components/NewsletterSection.tsx
"use client";

import { motion } from "motion/react";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-xl mx-auto text-center px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          সর্বশেষ আপডেট পেতে সাবস্ক্রাইব করুন
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          আপনার ইমেইল দিন এবং আমাদের সর্বশেষ রক্তদানের ইভেন্ট ও খবর পেয়ে যান।
        </motion.p>

        <form className="flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="আপনার ইমেইল লিখুন"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            সাবস্ক্রাইব
          </button>
        </form>
      </div>
    </section>
  );
}
