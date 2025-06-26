// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "আপনার নাম লিখুন";
    if (!formData.email.trim()) {
      newErrors.email = "আপনার ইমেইল দিন";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "সঠিক ইমেইল ঠিকানা দিন";
    }
    if (!formData.message.trim()) newErrors.message = "বার্তা লিখুন";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // এখানে আপনি ফর্ম ডাটা সাবমিট করার API কল বা অন্য কোনো কাজ করতে পারেন
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-bold text-red-700 mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        যোগাযোগ করুন
      </motion.h1>

      <div className="flex flex-col md:flex-row md:space-x-10 gap-10">
        {/* Contact Info */}
        <motion.div
          className="md:w-1/2 bg-red-50 rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-red-700">
            আমাদের সাথে যোগাযোগ
          </h2>
          <p className="mb-4">
            আপনার যেকোনো প্রশ্ন বা সাহায্যের জন্য নিচের মাধ্যমে যোগাযোগ করুন।
          </p>

          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>ঠিকানা:</strong> ১২৩, নতুন বাজার, ঢাকা, বাংলাদেশ
            </li>
            <li>
              <strong>ফোন:</strong> +৮৮ ০১৭xxxxxxxx
            </li>
            <li>
              <strong>ইমেইল:</strong> support@blooddonate.com
            </li>
            <li>
              <strong>ওয়েবসাইট:</strong> www.blooddonate.com
            </li>
          </ul>

          <div className="mt-8">
            {/* Simple embedded Google Map iframe */}
            <iframe
              src="https://maps.google.com/maps?q=Dhaka%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-48 rounded-md border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-white rounded-lg p-6 shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          noValidate
        >
          {submitted && (
            <motion.div
              className="mb-4 p-3 bg-green-100 text-green-700 rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা দ্রুত যোগাযোগ করব।
            </motion.div>
          )}

          <label className="block mb-2 font-semibold" htmlFor="name">
            নাম
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="আপনার নাম লিখুন"
            className={`w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600 ${
              errors.name ? "border-red-600" : "border-gray-300"
            }`}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}

          <label className="block mt-4 mb-2 font-semibold" htmlFor="email">
            ইমেইল
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="আপনার ইমেইল লিখুন"
            className={`w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600 ${
              errors.email ? "border-red-600" : "border-gray-300"
            }`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}

          <label className="block mt-4 mb-2 font-semibold" htmlFor="message">
            বার্তা
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="আপনার বার্তা লিখুন"
            className={`w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-600 ${
              errors.message ? "border-red-600" : "border-gray-300"
            }`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}

          <button
            type="submit"
            className="mt-6 w-full bg-red-600 text-white font-semibold py-3 rounded hover:bg-red-700 transition"
          >
            পাঠান
          </button>
        </motion.form>
      </div>
    </section>
  );
}
