"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      setError("সব ফিল্ড পূরণ করুন");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("বৈধ ইমেইল ঠিকানা দিন");
      return;
    }

    const phoneRegex = /^[0-9]{10,14}$/;
    if (!phoneRegex.test(phone)) {
      setError("বৈধ ফোন নাম্বার দিন (10-14 সংখ্যা)");
      return;
    }

    if (password.length < 6) {
      setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
      return;
    }

    if (password !== confirmPassword) {
      setError("পাসওয়ার্ড এবং নিশ্চিত পাসওয়ার্ড মিলছে না");
      return;
    }

    setError("");
    // TODO: API কল করুন অথবা Register Logic হ্যান্ডেল করুন
    console.log({ fullName, email, phone, password });
  };

  return (
    <section className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-700">
        নিবন্ধন করুন
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="fullName"
            className="block mb-1 font-semibold text-gray-700"
          >
            পূর্ণ নাম
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="আপনার পূর্ণ নাম দিন"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 font-semibold text-gray-700"
          >
            ইমেইল
          </label>
          <input
            id="email"
            type="email"
            placeholder="আপনার ইমেইল দিন"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-1 font-semibold text-gray-700"
          >
            ফোন নম্বর
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="০১৭xxxxxxxx"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            autoComplete="tel"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-1 font-semibold text-gray-700"
          >
            পাসওয়ার্ড
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="পাসওয়ার্ড দিন"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-600 hover:text-red-600"
              tabIndex={-1}
            >
              {showPassword ? "লুকান" : "দেখান"}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            কমপক্ষে ৬ অক্ষরের পাসওয়ার্ড ব্যবহার করুন।
          </p>
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-1 font-semibold text-gray-700"
          >
            পাসওয়ার্ড নিশ্চিত করুন
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="পাসওয়ার্ড আবার দিন"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2.5 text-gray-600 hover:text-red-600"
              tabIndex={-1}
            >
              {showConfirmPassword ? "লুকান" : "দেখান"}
            </button>
          </div>
        </div>

        {error && <p className="text-red-600 font-medium">{error}</p>}

        <div className="flex justify-end">
          <Link href="/login" className="text-red-600 hover:underline">
            লগইন করুন
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-red-700 mt-2 hover:bg-red-800 text-white font-semibold py-2 rounded transition"
        >
          নিবন্ধন করুন
        </button>
      </form>
    </section>
  );
}
