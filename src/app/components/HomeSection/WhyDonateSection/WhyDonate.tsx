"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyDonateSection() {
  const cards = [
    {
      title: "Save Lives",
      description:
        "A single blood donation can be a gift of new life for someone. Don't delay, donate blood, and save a life.",
      image: "/images/safeLife.jpg",
    },
    {
      title: "Improve Health",
      description:
        "Regular blood donation maintains a healthy heart and helps the body produce new cells.",
      image: "/images/healthBenefit.jpg",
    },
    {
      title: "Humanitarian Duty",
      description:
        "Blood donation is a great humanitarian act. It strengthens the bonds of empathy and solidarity in our society.",
      image: "/images/responsibility.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-red-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Donate Blood?
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Blood donation doesn't just save a life—it sends a powerful humanitarian message to society, connecting us all through a simple act of kindness.
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
              variants={cardVariants}
            >
              <div className="h-60 w-full relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-red-600 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-base">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}