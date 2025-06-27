"use client";

import React, { useState, FormEvent } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How can I request blood from a donor?",
    answer:
      "Go to the 'Find Donor' page, select your area and blood group, then contact the donor directly.",
  },
  {
    question: "How to become a volunteer?",
    answer:
      "Go to your profile settings and choose 'Apply as Volunteer' or contact admin.",
  },
  {
    question: "I forgot my password. What should I do?",
    answer:
      "Click on 'Forgot Password' on the login page and follow the instructions sent to your email.",
  },
];

export default function HelpSupport() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Support request submitted! We'll get back to you soon.");
    // later: send data to API
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow w-full">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">Help & Support</h1>

      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 rounded bg-gray-50">
              <h3 className="font-medium text-blue-700">{faq.question}</h3>
              <p className="text-gray-700 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support Form */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Need More Help?
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
          <textarea
            name="message"
            placeholder="Describe your issue or question..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold"
          >
            Submit Request
          </button>
        </form>
      </section>
    </div>
  );
}
