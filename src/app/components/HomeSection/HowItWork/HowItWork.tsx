"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Register",
      description: "Easily create an account on our platform in just a few steps.",
      icon: "/icons/register.png",
    },
    {
      title: "Create a Profile",
      description: "Add your blood type, location, and other relevant information.",
      icon: "/icons/profile.png",
    },
    {
      title: "Find or Request Blood",
      description: "Search for blood when you need it or send a blood request to others.",
      icon: "/icons/search.png",
    },
    {
      title: "Connect and Save a Life",
      description: "Connect with a blood donor and extend a helping hand.",
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
          How It Works
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          You can use our platform to donate or receive blood in just a few simple steps.
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