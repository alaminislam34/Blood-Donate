"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-red-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          আজই রক্তদাতা হিসেবে রেজিস্টার করুন
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto mb-8 text-lg "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          আপনার রক্তের একটি ব্যাগ কারো পুরো জীবনের আশার আলো হতে পারে। আমাদের
          কমিউনিটির অংশ হন এবং জীবন বাঁচানোর এই যাত্রায় এগিয়ে আসুন।
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/register"
            className="inline-block hover:-translate-y-1 duration-300 px-8 py-3 bg-white text-red-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
          >
            রেজিস্টার করুন
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
