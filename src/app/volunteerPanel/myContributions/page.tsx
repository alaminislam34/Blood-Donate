"use client";

import React from "react";

type Contribution = {
  id: number;
  type: "Blood Donation" | "Other Help";
  description: string;
  date: string;
};

const dummyContributions: Contribution[] = [
  {
    id: 1,
    type: "Blood Donation",
    description: "Donated A+ blood to a patient at Dhaka Medical Hospital.",
    date: "2025-05-12",
  },
  {
    id: 2,
    type: "Other Help",
    description: "Helped in organizing a blood donation campaign at MIST.",
    date: "2025-06-05",
  },
];

export default function MyContributions() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow w-full">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        My Contributions
      </h1>

      {dummyContributions.length === 0 ? (
        <p className="text-gray-700">No contributions found yet.</p>
      ) : (
        <div className="space-y-4">
          {dummyContributions.map(({ id, type, description, date }) => (
            <div
              key={id}
              className="border border-gray-300 rounded-lg p-4 bg-gray-50 w-full"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="mb-2 sm:mb-0">
                  <p className="text-sm text-gray-500">{date}</p>
                  <h2 className="text-lg font-semibold text-blue-600">
                    {type}
                  </h2>
                </div>
                <span className="text-sm font-medium text-green-600">
                  #{id.toString().padStart(4, "0")}
                </span>
              </div>
              <p className="text-gray-700 mt-2">{description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
