"use client";

import { motion } from "motion/react";
import { FaBullseye, FaEye } from "react-icons/fa6";

export default function MissionVisionSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          আমাদের লক্ষ্য ও ভিশন
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <motion.div
            className="bg-red-50 rounded-xl p-8 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-red-600 text-2xl" />
              <h3 className="text-xl font-semibold text-red-700">
                লক্ষ্য (Mission)
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              আমাদের লক্ষ্য খুবই স্পষ্ট: একটি এমন ডিজিটাল হেলথ কেয়ার প্ল্যাটফর্ম
              গড়ে তোলা যেখানে যেকোনো ব্যক্তি বিনা দ্বিধায়, নিরাপদে এবং দ্রুততার
              সাথে রক্তদাতা খুঁজে পাবে। আমরা চাই, কেউ রক্তের জন্য অন্ধকারে না
              থাকুক। আমাদের সিস্টেম এমনভাবে গঠিত যেখানে ব্যবহারকারী সহজেই ডোনার
              সার্চ করতে পারবে, রিকোয়েস্ট পাঠাতে পারবে, এবং রক্ত পাওয়ার নিশ্চয়তা
              পাবে।
              <br />
              <br />
              পাশাপাশি, এটি শুধুমাত্র রক্তদানের একটি মাধ্যম নয় — বরং একটি
              স্বাস্থ্য সচেতনতা ভিত্তিক প্ল্যাটফর্ম হিসেবে গড়ে উঠছে। আমরা চাচ্ছি
              মানুষ যেন রক্তদানের পাশাপাশি স্বাস্থ্য সম্পর্কিত মৌলিক তথ্য যেমন —
              রক্তের গ্রুপ অনুযায়ী রোগপ্রবণতা, খাদ্যাভ্যাস, ব্লাড প্রেসার,
              হেমোগ্লোবিন নিয়ন্ত্রণ ইত্যাদি বিষয়েও জানতে পারে।
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-red-50 rounded-xl p-8 shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaEye className="text-red-600 text-2xl" />
              <h3 className="text-xl font-semibold text-red-700">
                ভিশন (Vision)
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              আমরা ভবিষ্যতে এমন একটি বাংলাদেশ কল্পনা করি যেখানে:
              <ul className="list-disc pl-5 mt-3 text-sm text-gray-700 space-y-1">
                <li>রক্তের জন্য কেউ কখনও প্রাণ হারাবে না।</li>
                <li>স্বাস্থ্যসেবা সম্পর্কে সাধারণ মানুষ হবে আরও সচেতন।</li>
                <li>
                  ডিজিটাল স্বাস্থ্যসেবা সহজলভ্য হবে শহর ও গ্রামের সবার জন্য।
                </li>
                <li>
                  স্বেচ্ছাসেবী ডোনারদের একটি শক্তিশালী নেটওয়ার্ক তৈরি হবে।
                </li>
                <li>রক্তদান হবে সামাজিক দায়িত্ব ও মানবিক বন্ধনের প্রতীক।</li>
              </ul>
              <br />
              প্রযুক্তির মাধ্যমে একটি মানবিক বাংলাদেশ গড়াই আমাদের দীর্ঘমেয়াদী
              ভিশন। আমরা বিশ্বাস করি, ছোট একটি ডোনেশন অনেক বড় একটি জীবন বদলে
              দিতে পারে।
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
