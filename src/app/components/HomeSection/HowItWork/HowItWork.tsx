"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "রেজিস্ট্রেশন করুন",
      description: "আমাদের প্ল্যাটফর্মে সহজেই একাউন্ট তৈরি করুন কয়েকটি ধাপে।",
      icon: "/icons/register.png",
    },
    {
      title: "প্রোফাইল তৈরি করুন",
      description: "আপনার রক্তের গ্রুপ, লোকেশন ও অন্যান্য তথ্য যুক্ত করুন।",
      icon: "/icons/profile.png",
    },
    {
      title: "রক্ত খুঁজুন বা অনুরোধ দিন",
      description: "প্রয়োজনে রক্ত খুঁজুন বা অন্যদের কাছে রক্তের অনুরোধ পাঠান।",
      icon: "/icons/search.png",
    },
    {
      title: "যোগাযোগ করুন ও জীবন বাঁচান",
      description: "রক্তদাতার সাথে যোগাযোগ করুন এবং সহযোগিতার হাত বাড়ান।",
      icon: "/icons/connect.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          কিভাবে কাজ করে?
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          মাত্র কয়েকটি ধাপে আপনি আমাদের প্ল্যাটফর্ম ব্যবহার করে রক্ত দিতে বা
          নিতে পারবেন।
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <Image
                  src={step.icon}
                  alt={step.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
