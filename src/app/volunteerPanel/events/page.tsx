"use client";

import React, { useState } from "react";

type Event = {
  id: number;
  name: string;
  date: string;
  location: string;
  status: "Registered" | "Attended" | "Cancelled";
};

const initialEvents: Event[] = [
  {
    id: 1,
    name: "Blood Donation Camp - Dhaka",
    date: "2025-07-10",
    location: "Central Park, Dhaka",
    status: "Registered",
  },
  {
    id: 2,
    name: "Community Awareness Program",
    date: "2025-06-25",
    location: "Mirpur Community Center",
    status: "Attended",
  },
  {
    id: 3,
    name: "Emergency Blood Drive",
    date: "2025-08-05",
    location: "City Hospital",
    status: "Registered",
  },
];

export default function MyEvents() {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  // Cancel event handler
  const handleCancel = (id: number) => {
    setEvents((prev) =>
      prev.map((ev) => (ev.id === id ? { ...ev, status: "Cancelled" } : ev))
    );
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 ">My Events</h1>

      {events.length === 0 && (
        <p className="text-gray-700 ">You have no events yet.</p>
      )}

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className={`flex flex-col md:flex-row justify-between items-center border rounded p-4
              ${
                event.status === "Cancelled"
                  ? "bg-red-100 border-red-400 text-red-700"
                  : "bg-gray-50 border-gray-300 "
              }
            `}
          >
            <div className="mb-3 md:mb-0 flex-1">
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p className="text-gray-600 ">
                📅 {new Date(event.date).toLocaleDateString()} | 📍{" "}
                {event.location}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full font-medium text-sm ${
                  event.status === "Registered"
                    ? "bg-blue-100 text-blue-700"
                    : event.status === "Attended"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {event.status}
              </span>

              {event.status === "Registered" && (
                <button
                  onClick={() => handleCancel(event.id)}
                  className="px-4 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded transition"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
