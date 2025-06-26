"use client";

import { Disclosure } from "@headlessui/react";
import { motion } from "motion/react";
import { IoChevronUpCircleOutline } from "react-icons/io5";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "রক্তদানের জন্য শারীরিকভাবে কী যোগ্যতা থাকতে হয়?",
    answer:
      "আপনার বয়স ১৮ থেকে ৬৫ বছরের মধ্যে হতে হবে এবং ওজন কমপক্ষে ৫০ কেজি হতে হবে। আপনি যদি সুস্থ থাকেন এবং কোনো সংক্রমণ না থাকে, তাহলে আপনি রক্তদান করতে পারবেন।",
  },
  {
    question: "রক্তদানের পর কি কোনো পার্শ্বপ্রতিক্রিয়া হয়?",
    answer:
      "সাধারণত কোনো পার্শ্বপ্রতিক্রিয়া হয় না। মাঝে মাঝে হালকা মাথা ঘোরা বা ক্লান্তি অনুভব হতে পারে, কিন্তু সেটা অস্থায়ী। বিশ্রাম নিলেই ঠিক হয়ে যায়।",
  },
  {
    question: "আমি কিভাবে একজন রক্তদাতা খুঁজতে পারি?",
    answer:
      "আমাদের প্ল্যাটফর্মে সার্চ অপশন ব্যবহার করে আপনার এলাকার কাছাকাছি রক্তদাতা খুঁজে নিতে পারবেন।",
  },
  {
    question: "আমি কিভাবে রক্তদাতা হিসেবে রেজিস্টার করবো?",
    answer:
      "নেভিগেশন বারে থাকা 'Register as Donor' বাটনে ক্লিক করে আপনার তথ্য দিয়ে খুব সহজেই রেজিস্টার করতে পারবেন।",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          প্রায়ই জিজ্ঞাসিত প্রশ্নাবলী
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <motion.div
                  className="border rounded-md overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                >
                  <Disclosure.Button className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 hover:bg-gray-200 font-medium text-left text-gray-800">
                    <span>{faq.question}</span>
                    <IoChevronUpCircleOutline
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-red-600 transition`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-5 py-4 bg-white text-gray-700 text-sm">
                    {faq.answer}
                  </Disclosure.Panel>
                </motion.div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
