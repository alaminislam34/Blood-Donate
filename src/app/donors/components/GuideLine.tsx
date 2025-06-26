import {
  FaInfoCircle,
  FaTint,
  FaPhoneAlt,
  FaQuestionCircle,
} from "react-icons/fa";

const donorGuidelines = [
  "রক্তদান করার আগে পর্যাপ্ত বিশ্রাম নিন।",
  "খালি পেটে রক্তদান করবেন না।",
  "রক্তদান শেষে পর্যাপ্ত পানি পান করুন।",
  "রক্তদানের পর অন্তত ১৫ মিনিট বিশ্রাম করুন।",
];

const bloodRules = [
  "রক্তদানকারী অবশ্যই সুস্থ এবং স্বাস্থ্যবান হতে হবে।",
  "১৮ বছর থেকে ৬৫ বছর বয়সের মধ্যে রক্তদান করা যেতে পারে।",
  "সর্বনিম্ন ওজন ৫০ কেজি হতে হবে।",
  "রক্তদান ও রক্ত গ্রহণের ক্ষেত্রে চিকিৎসকের পরামর্শ নেওয়া আবশ্যক।",
];

const emergencyContacts = [
  { name: "জাতীয় রক্ত ব্যাংক", phone: "16263" },
  { name: "ঢাকা মেডিকেল হাসপাতাল", phone: "02-12345678" },
  { name: "চট্টগ্রাম মেডিকেল", phone: "031-87654321" },
];

const donorFAQs = [
  {
    question: "আমি কতবার রক্তদান করতে পারি?",
    answer: "পুরুষরা ৩ মাস অন্তর এবং মহিলারা ৪ মাস অন্তর রক্তদান করতে পারেন।",
  },
  {
    question: "রক্তদানের পূর্বে কি কিছু খাবার বা পানীয় এড়ানো উচিত?",
    answer: "হ্যাঁ, অতিরিক্ত চর্বিযুক্ত খাবার এবং অ্যালকোহল এড়ানো উচিত।",
  },
  {
    question: "রক্তদানের সময় কি ব্যথা অনুভব হবে?",
    answer: "সাধারণত খুব সামান্য ব্যথা হয় যা খুব দ্রুত চলে যায়।",
  },
];

export function DonorsRelatedSections() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* রক্তদানের নির্দেশিকা */}
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

      {/* রক্তদানের নিয়মাবলী */}
      <section className="bg-white rounded-lg p-6 shadow border border-red-100">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
          <FaTint /> রক্তদান ও রক্ত গ্রহণের নিয়মাবলী
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {bloodRules.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
      </section>

      {/* জরুরি যোগাযোগ নম্বর */}
      <section className="bg-red-50 rounded-lg p-6 shadow">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
          <FaPhoneAlt /> জরুরি যোগাযোগ নম্বর
        </h2>
        <ul className="text-gray-700 space-y-2">
          {emergencyContacts.map((contact, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-600" />
              <span>{contact.name} :</span>
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

      {/* ডোনার FAQs */}
      <section className="bg-white rounded-lg p-6 shadow border border-red-100">
        <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
          <FaQuestionCircle /> প্রায়শই জিজ্ঞাসিত প্রশ্নসমূহ
        </h2>
        <div className="space-y-4">
          {donorFAQs.map(({ question, answer }, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-2">
              <p className="font-semibold text-gray-800">{question}</p>
              <p className="text-gray-600 mt-1">{answer}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
