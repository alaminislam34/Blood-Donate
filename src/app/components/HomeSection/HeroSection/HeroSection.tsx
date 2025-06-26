// components/HeroSection.tsx

"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "motion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    cssEase: "linear",
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const slides = [
    {
      title: "রক্ত দিন, জীবন বাঁচান",
      description: "আজই একজন রক্তদাতা হয়ে জীবন রক্ষার মিশনে যোগ দিন।",
      image: "/images/slider1.jpg",
    },
    {
      title: "আপনার কাছাকাছি রক্তদাতা খুঁজুন",
      description: "অবিলম্বে আপনার এলাকায় উপলব্ধ রক্তদাতাদের খুঁজে পান সহজেই।",
      image: "/images/slider2.jpg",
    },
    {
      title: "আপনিও হতে পারেন একজন বীর",
      description:
        "আপনার রক্তই হতে পারে কারো বাঁচার শেষ ভরসা। আজই রেজিস্টার করুন।",
      image: "/images/slider3.jpg",
    },
  ];

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image Slider */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[80vh] w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>
        ))}
      </Slider>

      {/* Static Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4 ">
        <motion.div
          key={currentSlide}
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl">
            {slides[currentSlide].description}
          </p>
          <div className="mt-6 pointer-events-auto">
            <button className="px-6 py-3 text-white bg-red-600 font-semibold rounded shadow hover:bg-red-700 transition cursor-pointer">
              শুরু করুন
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
