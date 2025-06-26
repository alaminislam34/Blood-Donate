"use client";

import { motion } from "motion/react";
import Image from "next/image";
import ImpactStatsSection from "./components/ImpactStatsSection";
import IntroVideoSection from "./components/IntroVideo";
import MeetTeamSection from "./components/Team";
import MissionVisionSection from "./components/MissionVisionSection";

export default function AboutPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-red-700 text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          আমাদের সম্পর্কে
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-full h-72 md:h-96">
            <Image
              src="/images/about-blood-donation.jpg"
              alt="Blood donation awareness"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              মানবতার ডাকে, আমরা পাশে আছি
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              আমাদের প্ল্যাটফর্মটি তৈরি করা হয়েছে একটাই মূল লক্ষ্য নিয়ে — রক্তের
              প্রয়োজন মেটাতে অসহায় মানুষদের পাশে দাঁড়ানো। প্রতিদিন বাংলাদেশে বহু
              মানুষ রক্তের অভাবে বিপদে পড়েন। হাসপাতাল, দূর্ঘটনা, জটিল অপারেশন
              কিংবা বাচ্চা জন্মদানের সময় তাৎক্ষণিক রক্তের প্রয়োজন হয়। ঠিক তখনই
              আমরা হয়ে উঠি একজন রক্তদাতা এবং রক্তপ্রার্থীর মাঝে এক সেতুবন্ধন।
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed text-justify">
              আমাদের সাইটের মাধ্যমে আপনি সহজেই আপনার এলাকার কাছাকাছি রক্তদাতাদের
              খুঁজে পেতে পারবেন। আপনি চাইলে রক্তদাতা হিসেবেও রেজিস্টার করতে
              পারবেন, যাতে যখনই কারো প্রয়োজন হয় — সে আপনার সাথে যোগাযোগ করতে
              পারে। এই উদ্যোগের মাধ্যমে আমরা একটি সেবামূলক সমাজ গড়ে তুলতে চাই,
              যেখানে রক্তের অভাবে আর কোনো প্রাণ হারাতে না হয়।
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-14 grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              সহজ অনুসন্ধান
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              আপনি আপনার এলাকা, ব্লাড গ্রুপ এবং নাম দিয়ে খুব সহজেই রক্তদাতা
              খুঁজে নিতে পারবেন।
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              রক্তদাতা নিবন্ধন
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              রক্তদাতা হিসেবে রেজিস্টার করে আপনি মানুষের প্রাণ বাঁচাতে সরাসরি
              অবদান রাখতে পারেন।
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-red-700 mb-2">
              সুরক্ষা ও সচেতনতা
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              আমরা সুরক্ষিত রক্তদানে বিশ্বাসী। রক্তদাতার তথ্য যাচাই ও সচেতনতা
              বিষয়েও আমরা সর্বোচ্চ গুরুত্ব দিয়ে থাকি।
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 bg-red-50 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            আমরা সবাই মিলেই গড়ি একটি মানবিক বাংলাদেশ
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            এই প্ল্যাটফর্মটি শুধুই একটি প্রযুক্তিগত সেবা নয়, বরং এটি একটি
            মানবিকতার আন্দোলন। আমরা চাই দেশের প্রতিটি প্রান্তে রক্তের জন্য আর
            কেউ না কাঁদুক। একজন দাতা যেমন বাঁচাতে পারে একজন রোগীর জীবন, তেমনি
            একজন মানুষ এই উদ্যোগে শামিল হয়ে বদলে দিতে পারে আমাদের সমাজের চিত্র।
          </p>
        </motion.div>
      </div>
      <section>
        <MeetTeamSection />
      </section>
      <section>
        <ImpactStatsSection />
      </section>
      <section>
        <IntroVideoSection />
      </section>
      <section>
        <MissionVisionSection />
      </section>
    </section>
  );
}
