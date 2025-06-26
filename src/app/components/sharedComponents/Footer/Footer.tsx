// components/Footer.tsx

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-16">
      {/* মূল কন্টেইনার: সেন্টার করে মাক্সিমাম প্রস্থ ৭xl, ৩টি কলামে গ্রিড */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* লোগো এবং বর্ণনা */}
        <div>
          <h2 className="text-xl font-bold text-red-500">BloodDonate</h2>
          <p className="mt-2 text-sm">
            রক্তদাতাদের সহজে খুঁজে পাওয়ার এবং রক্তের অনুরোধ করার জন্য একটি
            প্ল্যাটফর্ম। জীবন বাঁচান, ভালোবাসা ছড়ান।
          </p>
        </div>

        {/* দ্রুত লিঙ্কসমূহ */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            দ্রুত লিঙ্কসমূহ
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-red-500">
                হোম
              </Link>
            </li>
            <li>
              <Link href="/donors" className="hover:text-red-500">
                ডোনারস
              </Link>
            </li>
            <li>
              <Link href="/request" className="hover:text-red-500">
                রক্তের জন্য অনুরোধ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500">
                আমাদের সম্পর্কে
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">
                যোগাযোগ
              </Link>
            </li>
          </ul>
        </div>

        {/* যোগাযোগ ও সোশ্যাল আইকন */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">যোগাযোগ</h3>
          <p>
            ইমেইল:{" "}
            <a
              href="mailto:support@blooddonate.com"
              className="hover:text-red-400"
            >
              support@blooddonate.com
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-xl hover:text-red-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-red-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-red-500">
              <FaInstagram />
            </a>
            <a
              href="mailto:support@blooddonate.com"
              className="text-xl hover:text-red-500"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* ফুটারের নিচের অংশ, সেন্টার করা, ছোট লেখা এবং হালকা বর্ডার */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} BloodDonate. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
