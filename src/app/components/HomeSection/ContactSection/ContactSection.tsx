"use client";

import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          যোগাযোগ করুন ও সাহায্যের হাত বাড়ান
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          আপনার ছোট্ট সাহায্য অনেক জীবনের আশা হতে পারে। রক্তদাতা বা স্বেচ্ছাসেবী
          হতে এখনই আমাদের সাথে যোগাযোগ করুন।
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-red-600 mb-2">ফোন</h3>
            <p className="text-gray-700 text-lg">+৮৮০ ১৭১১ ১২৩ ৪৫৬</p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-red-600 mb-2">ইমেইল</h3>
            <p className="text-gray-700 text-lg">support@blooddonate.com</p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-red-600 mb-2">ঠিকানা</h3>
            <p className="text-gray-700 text-lg">
              ১২৩, নিউ মার্কেট, ঢাকা, বাংলাদেশ
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <a
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded shadow transition"
          >
            এখনই যোগাযোগ করুন
          </a>
        </motion.div>
      </div>
    </section>
  );
}
