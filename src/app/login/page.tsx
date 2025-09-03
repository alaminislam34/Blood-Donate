"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("সব ফিল্ড পূরণ করুন");
      return;
    }

    // Email validation regex (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("বৈধ ইমেইল ঠিকানা দিন");
      return;
    }

    setError("");
    // TODO: API কল করুন অথবা Login Logic হ্যান্ডেল করুন
    console.log({ email, password });
  };

  return (
    <section className="max-w-xl mx-auto my-16 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-700">
        লগইন করুন
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
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
            htmlFor="password"
            className="block mb-1 font-semibold text-gray-700"
          >
            পাসওয়ার্ড
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="আপনার পাসওয়ার্ড দিন"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
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
        </div>

        {error && <p className="text-red-600 font-medium">{error}</p>}
        <div className="flex justify-end">
          <Link href="/register" className="text-red-600 hover:underline">
            {" "}
            নিবন্ধন করুন
          </Link>
        </div>
        <button
          type="submit"
          className="w-full bg-red-700 mt-2 hover:bg-red-800 text-white font-semibold py-2 rounded transition"
        >
          লগইন
        </button>
      </form>
    </section>
  );
}
