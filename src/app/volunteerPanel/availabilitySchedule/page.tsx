"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

type ScheduleEntry = {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
};

const daysOfWeek = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export default function AvailabilitySchedule() {
  const [schedule, setSchedule] = useState<ScheduleEntry[]>([]);
  const [form, setForm] = useState({
    day: "",
    startTime: "",
    endTime: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSchedule = (e: FormEvent) => {
    e.preventDefault();
    if (!form.day || !form.startTime || !form.endTime) {
      alert("Please fill all fields");
      return;
    }
    if (form.endTime <= form.startTime) {
      alert("End time must be after start time");
      return;
    }
    if (schedule.some((entry) => entry.day === form.day)) {
      alert("Schedule for this day already exists. You can edit it below.");
      return;
    }

    const newEntry: ScheduleEntry = {
      id: Date.now(),
      day: form.day,
      startTime: form.startTime,
      endTime: form.endTime,
    };
    setSchedule((prev) => [...prev, newEntry]);
    setForm({ day: "", startTime: "", endTime: "" });
  };

  const handleDelete = (id: number) => {
    setSchedule((prev) => prev.filter((entry) => entry.id !== id));
  };

  const handleEdit = (
    id: number,
    field: keyof Omit<ScheduleEntry, "id" | "day">,
    value: string
  ) => {
    setSchedule((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow w-full">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 w-full">
        Availability Schedule
      </h1>

      <form
        onSubmit={handleAddSchedule}
        className="mb-6 grid grid-cols-1 sm:grid-cols-4 gap-4 w-full"
      >
        <select
          name="day"
          value={form.day}
          onChange={handleInputChange}
          className="p-2 rounded border border-gray-300 w-full"
          required
        >
          <option value="" disabled>
            Select Day
          </option>
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        <input
          type="time"
          name="startTime"
          value={form.startTime}
          onChange={handleInputChange}
          className="p-2 rounded border border-gray-300 w-full"
          required
        />
        <input
          type="time"
          name="endTime"
          value={form.endTime}
          onChange={handleInputChange}
          className="p-2 rounded border border-gray-300 w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 font-semibold transition w-full"
        >
          Add Schedule
        </button>
      </form>

      {schedule.length === 0 ? (
        <p className="text-gray-700 w-full">No availability set yet.</p>
      ) : (
        <div className="space-y-4 w-full">
          {schedule.map(({ id, day, startTime, endTime }) => (
            <div
              key={id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded border-gray-300 bg-gray-50 w-full"
            >
              <div className="font-semibold text-gray-900 w-full sm:w-28 mb-2 sm:mb-0">
                {day}
              </div>

              <div className="flex items-center space-x-2 w-full sm:max-w-md mb-2 sm:mb-0">
                <label className="sr-only">Start Time</label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => handleEdit(id, "startTime", e.target.value)}
                  className="p-1 rounded border border-gray-300 w-full"
                />
                <span className="text-gray-700">to</span>
                <label className="sr-only">End Time</label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => handleEdit(id, "endTime", e.target.value)}
                  className="p-1 rounded border border-gray-300 w-full"
                />
              </div>

              <button
                onClick={() => handleDelete(id)}
                className="text-red-600 hover:text-red-800 font-semibold w-full sm:w-auto"
                aria-label={`Delete schedule for ${day}`}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
