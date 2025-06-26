"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTint,
  FaInfoCircle,
} from "react-icons/fa";

type Request = {
  id: number;
  patientName: string;
  bloodGroup: string;
  location: string;
  hospital: string;
  contact: string;
  neededDate: string;
  note?: string;
};

const bloodRequests: Request[] = [
  {
    id: 11,
    patientName: "ফারহানা রহমান",
    bloodGroup: "B+",
    location: "ঢাকা",
    hospital: "শেবাচিম",
    contact: "017xxxxxx11",
    neededDate: "৭ জুলাই, ২০২৫",
  },
  {
    id: 12,
    patientName: "আবদুল্লাহ আল মামুন",
    bloodGroup: "O-",
    location: "চট্টগ্রাম",
    hospital: "চট্টগ্রাম মেডিকেল কলেজ",
    contact: "018xxxxxx12",
    neededDate: "৮ জুলাই, ২০২৫",
    note: "অর্থোপেডিক সার্জারির জন্য",
  },
  {
    id: 13,
    patientName: "সালমা খাতুন",
    bloodGroup: "A+",
    location: "সিলেট",
    hospital: "সিলেট ওসমানী মেডিকেল",
    contact: "019xxxxxx13",
    neededDate: "৯ জুলাই, ২০২৫",
  },
  {
    id: 14,
    patientName: "মোহাম্মদ রাশেদ",
    bloodGroup: "AB-",
    location: "রাজশাহী",
    hospital: "রাজশাহী মেডিকেল কলেজ",
    contact: "016xxxxxx14",
    neededDate: "১০ জুলাই, ২০২৫",
  },
  {
    id: 15,
    patientName: "জয়িতা বিশ্বাস",
    bloodGroup: "O+",
    location: "খুলনা",
    hospital: "খুলনা মেডিকেল",
    contact: "017xxxxxx15",
    neededDate: "১১ জুলাই, ২০২৫",
    note: "হেমাটোলজি ক্যান্সার রোগী",
  },
  {
    id: 16,
    patientName: "মিজানুর রহমান",
    bloodGroup: "B-",
    location: "বরিশাল",
    hospital: "বরিশাল মেডিকেল কলেজ",
    contact: "018xxxxxx16",
    neededDate: "১২ জুলাই, ২০২৫",
  },
  {
    id: 17,
    patientName: "সোহেল আহমেদ",
    bloodGroup: "A-",
    location: "কুমিল্লা",
    hospital: "কুমিল্লা মেডিকেল কলেজ",
    contact: "019xxxxxx17",
    neededDate: "১৩ জুলাই, ২০২৫",
    note: "অপরিহার্য রক্তের প্রয়োজন",
  },
  {
    id: 18,
    patientName: "নূর হাসান",
    bloodGroup: "AB+",
    location: "ময়মনসিংহ",
    hospital: "ময়মনসিংহ মেডিকেল",
    contact: "015xxxxxx18",
    neededDate: "১৪ জুলাই, ২০২৫",
  },
  {
    id: 19,
    patientName: "রিমা খান",
    bloodGroup: "O-",
    location: "রংপুর",
    hospital: "রংপুর মেডিকেল কলেজ",
    contact: "013xxxxxx19",
    neededDate: "১৫ জুলাই, ২০২৫",
  },
  {
    id: 20,
    patientName: "আদনান কবীর",
    bloodGroup: "A+",
    location: "নওগাঁ",
    hospital: "নওগাঁ সদর হাসপাতাল",
    contact: "014xxxxxx20",
    neededDate: "১৬ জুলাই, ২০২৫",
    note: "জরুরি অস্ত্রোপচারের জন্য",
  },
];

const donorGuidelines = [
  "রক্তদান করার আগে পর্যাপ্ত বিশ্রাম নিন।",
  "খালি পেটে রক্তদান করবেন না।",
  "রক্তদান শেষে পর্যাপ্ত পানি পান করুন।",
  "রক্তদানের পর অন্তত ১৫ মিনিট বিশ্রাম করুন।",
];

const emergencyContacts = [
  { name: "জাতীয় রক্ত ব্যাংক", phone: "16263" },
  { name: "ঢাকা মেডিকেল হাসপাতাল", phone: "02-12345678" },
  { name: "চট্টগ্রাম মেডিকেল", phone: "031-87654321" },
];

const bloodRules = [
  "রক্তদানকারী অবশ্যই সুস্থ এবং স্বাস্থ্যবান হতে হবে।",
  "১৮ বছর থেকে ৬৫ বছর বয়সের মধ্যে রক্তদান করা যেতে পারে।",
  "সর্বনিম্ন ওজন ৫০ কেজি হতে হবে।",
  "রক্তদান ও রক্ত গ্রহণের ক্ষেত্রে চিকিৎসকের পরামর্শ নেওয়া আবশ্যক।",
];

export default function BloodRequestSection() {
  const [bloodFilter, setBloodFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const bloodGroups = Array.from(
    new Set(bloodRequests.map((req) => req.bloodGroup))
  );
  const locations = Array.from(
    new Set(bloodRequests.map((req) => req.location))
  );

  const filteredRequests = useMemo(() => {
    return bloodRequests.filter((req) => {
      const matchBlood = bloodFilter ? req.bloodGroup === bloodFilter : true;
      const matchLocation = locationFilter
        ? req.location === locationFilter
        : true;
      return matchBlood && matchLocation;
    });
  }, [bloodFilter, locationFilter]);

  // Pagination variables
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

  // Current page data slice
  const currentData = filteredRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pagination handlers
  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setCurrentPage(page);
    // Scroll to top of section on page change (optional)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset page to 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [bloodFilter, locationFilter]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        রক্তের অনুরোধসমূহ
      </motion.h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-8 gap-4">
        <select
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={bloodFilter}
          onChange={(e) => setBloodFilter(e.target.value)}
        >
          <option value="">সকল ব্লাড গ্রুপ</option>
          {bloodGroups.map((bg) => (
            <option key={bg} value={bg}>
              {bg}
            </option>
          ))}
        </select>

        <select
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">সকল লোকেশন</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Requests Cards */}
      {currentData.length === 0 ? (
        <p className="text-center text-gray-500 mt-16 text-lg">
          কোনো রক্তের অনুরোধ পাওয়া যায়নি।
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentData.map((req) => (
            <motion.div
              key={req.id}
              className="bg-white border border-red-100 shadow rounded-lg p-6 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-3 right-3 px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                {req.bloodGroup}
              </div>
              <h3 className="text-lg font-semibold text-red-700 mb-2">
                {req.patientName}
              </h3>
              <p className="text-sm text-gray-700 mb-1 flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                লোকেশন: {req.location}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                হাসপাতাল: {req.hospital}
              </p>
              <p className="text-sm text-gray-700 mb-1 flex items-center">
                <FaPhoneAlt className="mr-1" />
                যোগাযোগ: {req.contact}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                প্রয়োজনীয় তারিখ: {req.neededDate}
              </p>
              {req.note && (
                <p className="text-sm text-red-500 font-medium">
                  নোট: {req.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-3 mt-12 flex-wrap gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition"
            }`}
          >
            পূর্ববর্তী
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`px-4 py-2 rounded-md border ${
                  pageNum === currentPage
                    ? "bg-red-600 text-white border-red-600"
                    : "text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition"
            }`}
          >
            পরবর্তী
          </button>
        </div>
      )}

      <div className="border-b w-full border-gray-300 mt-16"></div>

      {/* Additional Sections */}
      <section className="bg-red-50 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
          <FaInfoCircle /> রক্তদাতাদের জন্য নির্দেশিকা
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {donorGuidelines.map((guide, idx) => (
            <li key={idx}>{guide}</li>
          ))}
        </ul>
      </section>

      <section className="bg-white rounded-lg p-6 shadow border border-red-100">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
          <FaPhoneAlt /> জরুরি যোগাযোগ নম্বর
        </h2>
        <ul className="text-gray-700 space-y-2">
          {emergencyContacts.map((contact, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-600" />
              <span>{contact.name} : </span>
              <a
                href={`tel:${contact.phone}`}
                className="text-red-700 font-semibold"
              >
                {contact.phone}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-red-50 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
          <FaTint /> রক্তদান ও রক্ত গ্রহণের নিয়মাবলী
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {bloodRules.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
