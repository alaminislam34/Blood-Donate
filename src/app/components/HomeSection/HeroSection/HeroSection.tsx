// components/HeroSection.tsx

"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // CHANGE 1: Import the 'Variants' type
import { ArrowRight } from "lucide-react";

// Import slick-carousel styles
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
    autoplaySpeed: 7000,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  };

  const slides = [
    {
      title: "Donate Blood, Save Lives",
      description: "Join the life-saving mission by becoming a blood donor today.",
      image: "/images/slider1.jpg",
    },
    {
      title: "Find Blood Donors Near You",
      description: "Instantly find available blood donors in your area with ease.",
      image: "/images/slider2.jpg",
    },
    {
      title: "You Can Be a Hero",
      description: "Your blood could be someone's last hope. Register today.",
      image: "/images/slider3.jpg",
    },
  ];

  // Animation variants for the text container
  // CHANGE 2: Explicitly apply the 'Variants' type
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Animation variants for each text item (h1, p)
  // CHANGE 2: Explicitly apply the 'Variants' type
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full h-[90vh] lg:h-[85vh] overflow-hidden">
      {/* Background Image Slider */}
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[90vh] lg:h-[85vh] w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Animated Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          key={currentSlide}
          className="max-w-3xl flex flex-col items-center gap-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }}
            variants={itemVariants}
          >
            {slides[currentSlide].title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-xl"
            style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }}
            variants={itemVariants}
          >
            {slides[currentSlide].description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <button className="group mt-4 px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-300 transition-all duration-300 ease-in-out flex items-center gap-x-2">
              Get Started
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}