"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { DonorsRelatedSections } from "./components/GuideLine";

type Donor = {
  id: number;
  name: string;
  photo: string;
  bloodGroup: string;
  division: string;
  district: string;
  lastDonation: string;
};

const locationData: Record<string, string[]> = {
  ঢাকা: ["ঢাকা সদর", "ধানমন্ডি", "মতিঝিল", "গাজীপুর", "নরসিংদী", "টাঙ্গাইল"],
  চট্টগ্রাম: [
    "চট্টগ্রাম সদর",
    "ব্রাহ্মণবাড়িয়া",
    "কর্ণফুলী",
    "ফেনী",
    "কুমিল্লা",
  ],
  সিলেট: ["সিলেট সদর", "বন্দর", "জকিগঞ্জ", "কানাইঘাট", "বিশ্বম্ভরপুর"],
  রাজশাহী: ["রাজশাহী সদর", "পবা", "বাগমারা", "মোহনপুর"],
  খুলনা: ["খুলনা সদর", "কোম্পানীগঞ্জ", "ডুমুরিয়া"],
  বরিশাল: ["বরিশাল সদর", "ঝালকাঠি", "পটুয়াখালী", "বাগেরহাট"],
  রংপুর: ["গাইবান্ধা", "ঠাকুরগাঁও", "রংপুর সদর"],
  কুমিল্লা: ["মনোহরগঞ্জ", "কুমিল্লা সদর"],
  ময়মনসিংহ: ["শেরপুর", "জামালপুর"],
  // প্রয়োজন মতো আরও যোগ করতে পারেন
};

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const donorsData: Donor[] = [
  {
    id: 1,
    name: "মোস্তাফিজুর রহমান",
    photo: "/donors/fatema.jpg",
    bloodGroup: "A+",
    division: "ঢাকা",
    district: "ধানমন্ডি",
    lastDonation: "২ মাস আগে",
  },
  {
    id: 2,
    name: "সাবরিনা পারভীন",
    photo: "/donors/fatema.jpg",
    bloodGroup: "B-",
    division: "চট্টগ্রাম",
    district: "ব্রাহ্মণবাড়িয়া",
    lastDonation: "১ মাস আগে",
  },
  {
    id: 3,
    name: "রফিকুল ইসলাম",
    photo: "/donors/fatema.jpg",
    bloodGroup: "AB+",
    division: "সিলেট",
    district: "জকিগঞ্জ",
    lastDonation: "৩ মাস আগে",
  },
  {
    id: 4,
    name: "আফজাল হোসেন",
    photo: "/donors/fatema.jpg",
    bloodGroup: "O+",
    division: "রাজশাহী",
    district: "পবা",
    lastDonation: "৬ মাস আগে",
  },
  {
    id: 5,
    name: "নূরুল আমিন",
    photo: "/donors/fatema.jpg",
    bloodGroup: "O-",
    division: "খুলনা",
    district: "কুষ্টিয়া",
    lastDonation: "৪ মাস আগে",
  },
  {
    id: 6,
    name: "মিমি আক্তার",
    photo: "/donors/fatema.jpg",
    bloodGroup: "A-",
    division: "বরিশাল",
    district: "ঝালকাঠি",
    lastDonation: "৫ মাস আগে",
  },
  {
    id: 7,
    name: "সোহেল রানা",
    photo: "/donors/fatema.jpg",
    bloodGroup: "B+",
    division: "রংপুর",
    district: "গাইবান্ধা",
    lastDonation: "২ মাস আগে",
  },
  {
    id: 8,
    name: "তানজিলা পারভীন",
    photo: "/donors/fatema.jpg",
    bloodGroup: "AB-",
    division: "ময়মনসিংহ",
    district: "শেরপুর",
    lastDonation: "১ মাস আগে",
  },
  {
    id: 9,
    name: "জাকির হোসেন",
    photo: "/donors/fatema.jpg",
    bloodGroup: "O+",
    division: "কুমিল্লা",
    district: "মনোহরগঞ্জ",
    lastDonation: "৭ মাস আগে",
  },
  {
    id: 10,
    name: "সারা খান",
    photo: "/donors/fatema.jpg",
    bloodGroup: "A+",
    division: "ঢাকা",
    district: "গাজীপুর",
    lastDonation: "৩ মাস আগে",
  },
  {
    id: 11,
    name: "আব্দুল্লাহ আল মামুন",
    photo: "/donors/fatema.jpg",
    bloodGroup: "B-",
    division: "চট্টগ্রাম",
    district: "ফেনী",
    lastDonation: "৬ মাস আগে",
  },
  {
    id: 12,
    name: "রাশেদা বেগম",
    photo: "/donors/fatema.jpg",
    bloodGroup: "AB+",
    division: "রাজশাহী",
    district: "নাটোর",
    lastDonation: "৫ মাস আগে",
  },
  {
    id: 13,
    name: "মোহাম্মদ আজিজ",
    photo: "/donors/fatema.jpg",
    bloodGroup: "O-",
    division: "সিলেট",
    district: "ফেঞ্চুগঞ্জ",
    lastDonation: "৪ মাস আগে",
  },
  {
    id: 14,
    name: "রোকেয়া খাতুন",
    photo: "/donors/fatema.jpg",
    bloodGroup: "A+",
    division: "বরিশাল",
    district: "পটুয়াখালী",
    lastDonation: "২ মাস আগে",
  },
  {
    id: 15,
    name: "সিদ্দিকুর রহমান",
    photo: "/donors/fatema.jpg",
    bloodGroup: "B+",
    division: "ঢাকা",
    district: "নরসিংদী",
    lastDonation: "১ মাস আগে",
  },
  {
    id: 16,
    name: "ফারহানা ইসলাম",
    photo: "/donors/fatema.jpg",
    bloodGroup: "O+",
    division: "খুলনা",
    district: "যশোর",
    lastDonation: "৩ মাস আগে",
  },
  {
    id: 17,
    name: "মোহাম্মদ ইমরান",
    photo: "/donors/fatema.jpg",
    bloodGroup: "AB-",
    division: "সিলেট",
    district: "বিয়ানীবাজার",
    lastDonation: "৪ মাস আগে",
  },
  {
    id: 18,
    name: "মাহমুদা আক্তার",
    photo: "/donors/fatema.jpg",
    bloodGroup: "A-",
    division: "বরিশাল",
    district: "বাগেরহাট",
    lastDonation: "৫ মাস আগে",
  },
  {
    id: 19,
    name: "আব্দুল মজিদ",
    photo: "/donors/fatema.jpg",
    bloodGroup: "O-",
    division: "রংপুর",
    district: "ঠাকুরগাঁও",
    lastDonation: "৬ মাস আগে",
  },
  {
    id: 20,
    name: "সেলিনা রহমান",
    photo: "/donors/fatema.jpg",
    bloodGroup: "B-",
    division: "ময়মনসিংহ",
    district: "জামালপুর",
    lastDonation: "২ মাস আগে",
  },
];

export default function DonorsPage() {
  const [search, setSearch] = useState("");
  const [bloodFilter, setBloodFilter] = useState("");
  const [divisionFilter, setDivisionFilter] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const districts = useMemo(() => {
    if (divisionFilter && locationData[divisionFilter]) {
      return locationData[divisionFilter];
    }
    return [];
  }, [divisionFilter]);

  const filteredDonors = useMemo(() => {
    return donorsData.filter((donor) => {
      const matchSearch =
        donor.name.toLowerCase().includes(search.toLowerCase()) ||
        donor.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
        donor.division.toLowerCase().includes(search.toLowerCase()) ||
        donor.district.toLowerCase().includes(search.toLowerCase());

      const matchBlood = bloodFilter ? donor.bloodGroup === bloodFilter : true;
      const matchDivision = divisionFilter
        ? donor.division === divisionFilter
        : true;
      const matchDistrict = districtFilter
        ? donor.district === districtFilter
        : true;

      return matchSearch && matchBlood && matchDivision && matchDistrict;
    });
  }, [search, bloodFilter, divisionFilter, districtFilter]);

  // Pagination Logic
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredDonors.length / itemsPerPage);

  const currentData = filteredDonors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: page change এ স্ক্রল টপ
  };

  // ফিল্টার/সার্চ পরিবর্তনে পেজ ১ এ রিসেট
  useMemo(() => {
    setCurrentPage(1);
  }, [search, bloodFilter, divisionFilter, districtFilter]);

  const handleDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDivisionFilter(e.target.value);
    setDistrictFilter(""); // জেলা রিসেট
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-red-700 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        রক্তদাতাদের তালিকা
      </motion.h1>

      {/* সার্চ ও ফিল্টার */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 gap-4 mb-10">
        <input
          type="text"
          placeholder="নাম, ব্লাড গ্রুপ বা লোকেশন দিয়ে সার্চ করুন..."
          className="flex-grow border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

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
          value={divisionFilter}
          onChange={handleDivisionChange}
        >
          <option value="">সকল বিভাগ</option>
          {Object.keys(locationData).map((division) => (
            <option key={division} value={division}>
              {division}
            </option>
          ))}
        </select>

        <select
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          value={districtFilter}
          onChange={(e) => setDistrictFilter(e.target.value)}
          disabled={!divisionFilter}
        >
          <option value="">সকল জেলা/থানা</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      {/* ডোনার কার্ড */}
      {currentData.length === 0 ? (
        <p className="text-center text-gray-500 mt-16 text-lg">
          কোন ডোনার পাওয়া যায়নি। অনুগ্রহ করে সার্চ বা ফিল্টার পরিবর্তন করুন।
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentData.map((donor) => (
            <motion.div
              key={donor.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-lg relative">
                <Image
                  height={100}
                  width={100}
                  src={donor.photo}
                  alt={`${donor.name} এর ছবি`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-red-700 mb-1">
                {donor.name}
              </h3>
              <p className="text-gray-700 mb-1">
                রক্তের গ্রুপ: {donor.bloodGroup}
              </p>
              <p className="text-gray-700 mb-1">
                বিভাগ: {donor.division}, জেলা/থানা: {donor.district}
              </p>
              <p className="text-gray-500 text-sm">
                সর্বশেষ রক্তদান: {donor.lastDonation}
              </p>
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
      <section>
        <DonorsRelatedSections />
      </section>
    </section>
  );
}
