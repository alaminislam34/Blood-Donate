"use client";

import { useState, FormEvent } from "react";

type Tab = "password" | "notifications" | "theme";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("password");

  // Password states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Notifications & theme
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Handle password form submission
  const handlePasswordSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("❌ New password and confirm password do not match.");
      return;
    }
    alert("✅ Password successfully changed! (API integration coming soon)");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // Tab button styling helper
  const tabClass = (tab: Tab) =>
    `cursor-pointer py-2 px-4 rounded-t-md font-semibold ${
      activeTab === tab
        ? "bg-blue-600 text-white shadow"
        : "bg-gray-200 text-gray-700  hover:bg-gray-300 "
    }`;

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 ">Settings</h1>

      {/* Tabs */}
      <div className="flex space-x-3 mb-6 border-b border-gray-300 ">
        <button
          className={tabClass("password")}
          onClick={() => setActiveTab("password")}
        >
          Password
        </button>
        <button
          className={tabClass("notifications")}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
        <button
          className={tabClass("theme")}
          onClick={() => setActiveTab("theme")}
        >
          Theme
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "password" && (
        <section className="max-w-md">
          <form onSubmit={handlePasswordSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="currentPassword"
                className="block mb-1 font-medium text-gray-700 "
              >
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full p-3 rounded border border-gray-300  focus:ring-2 focus:ring-blue-500"
                placeholder="Enter current password"
              />
            </div>

            <div>
              <label
                htmlFor="newPassword"
                className="block mb-1 font-medium text-gray-700 "
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={6}
                className="w-full p-3 rounded border border-gray-300  focus:ring-2 focus:ring-blue-500"
                placeholder="Enter new password"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-1 font-medium text-gray-700 "
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="w-full p-3 rounded border border-gray-300  focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm new password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-3 font-semibold transition"
            >
              Change Password
            </button>
          </form>
        </section>
      )}

      {activeTab === "notifications" && (
        <section className="max-w-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
            Email Notifications
          </h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-700 ">Enable Email Notifications</span>
          </label>
        </section>
      )}

      {activeTab === "theme" && (
        <section className="max-w-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Appearance
          </h2>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-gray-700 ">Dark Mode</span>
          </label>
        </section>
      )}
    </div>
  );
}
