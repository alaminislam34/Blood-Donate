"use client";

import { motion } from "motion/react";

export default function IntroVideoSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          আমাদের গল্প ভিডিওতে
        </motion.h2>
        <p className="text-gray-600 mb-8 text-base md:text-lg">
          আমাদের কার্যক্রম, লক্ষ্য এবং স্বপ্ন — সবই তুলে ধরা হয়েছে এই সংক্ষিপ্ত
          ভিডিওতে।
        </p>
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[400px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="আমাদের সম্পর্কে ভিডিও"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
