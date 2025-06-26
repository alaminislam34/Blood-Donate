"use client";

import { motion } from "motion/react";
import Image from "next/image";

const donors = [
  {
    name: "রাহিম উল ইসলাম",
    bloodGroup: "A+",
    location: "ঢাকা",
    photo: "/donors/rahim.jpg",
  },
  {
    name: "সুমাইয়া খাতুন",
    bloodGroup: "B-",
    location: "চট্টগ্রাম",
    photo: "/donors/sumiya.jpg",
  },
  {
    name: "আব্দুল করিম",
    bloodGroup: "O+",
    location: "রাজশাহী",
    photo: "/donors/abdul.jpg",
  },
  {
    name: "ফাতেমা জাহান",
    bloodGroup: "AB+",
    location: "সিলেট",
    photo: "/donors/fatema.jpg",
  },
];

export default function TopDonorsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          আমাদের সেরা রক্তদাতারা
        </motion.h2>
        <motion.p
          className="text-gray-700 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          তারা নিয়মিত রক্তদান করে জীবন বাঁচাচ্ছেন, আপনারাও তাদের মতো হোন।
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {donors.map((donor, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative h-56 w-full">
                <Image
                  src={donor.photo}
                  alt={donor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-red-600 mb-1">
                  {donor.name}
                </h3>
                <p className="text-gray-700">
                  রক্ত গ্রুপ:{" "}
                  <span className="font-semibold">{donor.bloodGroup}</span>
                </p>
                <p className="text-gray-600 text-sm">{donor.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
