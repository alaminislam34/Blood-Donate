"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function WhyDonateSection() {
  const cards = [
    {
      title: "জীবন বাঁচান",
      description:
        "আপনার এক ব্যাগ রক্ত কারো জন্য হতে পারে নতুন জীবনের উপহার। দেরি না করে রক্ত দিন, জীবন বাঁচান।",
      image: "/images/safeLife.jpg",
    },
    {
      title: "স্বাস্থ্যের উন্নতি",
      description:
        "নিয়মিত রক্তদান হৃদপিণ্ডের স্বাস্থ্য ভালো রাখে এবং শরীরের নতুন কোষ উৎপাদনে সহায়তা করে।",
      image: "/images/healthBenefit.jpg",
    },
    {
      title: "মানবিক দায়িত্ব",
      description:
        "রক্তদান একটি মহান মানবিক কাজ। এটি আমাদের সমাজে সহানুভূতি ও সংহতির বন্ধন দৃঢ় করে।",
      image: "/images/responsibility.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          কেন রক্তদান করবেন?
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        >
          রক্তদান শুধু একজন মানুষের জীবন বাঁচায় না, এটি সমাজে একটি মানবিক বার্তা
          পৌঁছে দেয়।
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.8,
                ease: [0.25, 0.8, 0.25, 1], // smooth spring-like effect
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="h-52 relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
