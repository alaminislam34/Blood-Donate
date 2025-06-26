"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

type Testimonial = {
  name: string;
  photo: string;
  message: string;
  location: string;
  details: string;
};

const testimonials: Testimonial[] = [
  {
    name: "মোস্তাফিজুর রহমান",
    photo: "/images/testimonial1.jpg",
    message:
      "রক্তদানে অংশ নিয়ে আমি অনেক খুশি। আমার রক্ত দিয়ে কারো জীবন বাঁচাতে পেরে গর্বিত।",
    location: "ঢাকা",
    details:
      "রক্তদান আমার জীবনের একটি অর্থবহ অভিজ্ঞতা। আমি অনেক মানুষকে সাহায্য করতে পেরেছি এবং এ থেকে আমি আত্মতৃপ্তি পাই। প্রত্যেকের উচিত রক্তদানে অংশ নেওয়া।",
  },
  {
    name: "সাবরিনা পারভীন",
    photo: "/images/testimonial2.jpg",
    message:
      "আমার মা যখন রক্তের প্রয়োজন ছিল, এই প্ল্যাটফর্ম থেকে দ্রুত সাহায্য পেয়েছিলাম। সবাইকে ধন্যবাদ।",
    location: "চট্টগ্রাম",
    details:
      "এই প্ল্যাটফর্মের মাধ্যমে আমার মা দ্রুত রক্ত পেয়ে জীবন রক্ষা পেয়েছে। তাদের সেবা অসাধারণ এবং সহজলভ্য। আমি সবাইকে সুপারিশ করবো এখান থেকে সাহায্য নিতে।",
  },
  {
    name: "রফিকুল ইসলাম",
    photo: "/images/testimonial3.jpg",
    message:
      "রক্তদাতা হিসেবে রেজিস্ট্রেশন করা আমার জীবনের একটা ভালো সিদ্ধান্ত। সবাইকে উৎসাহিত করছি।",
    location: "সিলেট",
    details:
      "রক্তদাতা হিসেবে আমি অনেক মানুষকে সাহায্য করেছি এবং এতে আমি গর্বিত। আমি সবাইকে রক্তদানে উৎসাহিত করছি কারণ এটি একটি মহান মানবিক কাজ।",
  },
];

export default function TestimonialsSlider() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          সফলতার গল্প ও অভিজ্ঞতা
        </motion.h2>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center mx-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-6 shadow-lg mx-auto">
                <Image
                  height={100}
                  width={100}
                  src={t.photo}
                  alt={`${t.name} এর ছবি`}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-gray-700 italic mb-6 text-lg">“{t.message}”</p>
              <h3 className="font-semibold text-red-700 text-xl">{t.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{t.location}</p>
              <button
                onClick={() => openModal(i)}
                className="bg-red-600 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-700 transition"
              >
                বিস্তারিত পড়ুন
              </button>
            </motion.div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {modalOpen && selectedIndex !== null && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg max-w-xl w-full p-6 relative shadow-lg"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 cursor-pointer right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              {testimonials[selectedIndex].name} এর বিস্তারিত অভিজ্ঞতা
            </h3>
            <p className="text-gray-700 whitespace-pre-line">
              {testimonials[selectedIndex].details}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
