"use client";

import { motion } from "motion/react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "মো. আল আমিন ইসলাম",
    role: "প্রতিষ্ঠাতা ও প্রকল্প পরিচালক",
    image: "/team/alamin.jpg",
  },
  {
    name: "রাকিবুল হাসান",
    role: "ডেভেলপার ও ইউআই ডিজাইনার",
    image: "/team/rakib.jpg",
  },
  {
    name: "মেহেদী হাসান",
    role: "কন্টেন্ট ও রিসার্চ",
    image: "/team/mehedi.jpg",
  },
];

export default function MeetTeamSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          আমাদের টিমকে চিনুন
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          একটি মানবিক লক্ষ্যকে সামনে রেখে আমরা কাজ করছি মানুষের পাশে থাকার জন্য।
          আমাদের টিম সদস্যরা প্রতিদিন চেষ্টা করে যাচ্ছেন সহজ ও কার্যকর
          প্ল্যাটফর্ম গড়ে তুলতে।
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-red-700">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
