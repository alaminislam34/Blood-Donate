"use client";

import { motion } from "motion/react";

type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
};

const events: Event[] = [
  {
    title: "ঢাকা রেড ক্রিসেন্ট ব্লাড ডোনেশন ক্যাম্প",
    date: "৩০ জুন ২০২৫",
    location: "জাতীয় প্রেস ক্লাব, ঢাকা",
    description:
      "এই ইভেন্টে অংশ নিয়ে আপনি রক্তদান করতে পারবেন এবং বিনামূল্যে স্বাস্থ্য পরামর্শও নিতে পারবেন।",
  },
  {
    title: "চট্টগ্রাম ইউনিভার্সিটি ব্লাড ড্রাইভ",
    date: "৫ জুলাই ২০২৫",
    location: "চবি কেন্দ্রীয় লাইব্রেরি মাঠ",
    description:
      "বিশ্ববিদ্যালয়ের শিক্ষার্থী ও সাধারণ মানুষের জন্য উন্মুক্ত একটি ক্যাম্প।",
  },
  {
    title: "সিলেট মেডিকেল কলেজ ক্যাম্পেইন",
    date: "১৫ জুলাই ২০২৫",
    location: "সিলেট মেডিকেল কলেজ হাসপাতাল চত্বর",
    description:
      "বড় পরিসরে আয়োজিত ক্যাম্প, যেখানে একসাথে ৫০০+ মানুষ রক্তদান করতে পারবেন।",
  },
];

export default function EventsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          আগত রক্তদানের ইভেন্টসমূহ
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                📅 <strong>তারিখ:</strong> {event.date}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                📍 <strong>লোকেশন:</strong> {event.location}
              </p>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
