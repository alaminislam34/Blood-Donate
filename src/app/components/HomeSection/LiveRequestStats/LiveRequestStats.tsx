"use client";

import { motion } from "framer-motion";

export default function LiveRequestsStats() {
  // Static data for demonstration. This can be fetched from an API.
  const stats = [
    { label: "Total Donors", value: 1250 },
    { label: "Successful Donations", value: 870 },
    { label: "Active Blood Requests", value: 45 },
    { label: "Donor Registrations", value: 230 },
  ];

  // Dummy data for live requests.
  const liveRequests = [
    { name: "John Doe", bloodGroup: "A+", location: "New York", urgency: "High" },
    {
      name: "Jane Smith",
      bloodGroup: "B-",
      location: "London",
      urgency: "Medium",
    },
    {
      name: "Sam Wilson",
      bloodGroup: "O+",
      location: "Chicago",
      urgency: "High",
    },
  ];

  const statVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const requestListVariants = {
    hidden: { opacity: 0, scaleY: 0.9 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-red-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Live Blood Requests & Statistics
        </motion.h2>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 * index }}
            >
              <p className="text-5xl font-extrabold text-red-600">
                {stat.value}
              </p>
              <p className="mt-3 text-lg font-medium text-gray-700">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Live Requests Section */}
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8"
          variants={requestListVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">
            Live Blood Requests
          </h3>
          <ul className="space-y-4">
            {liveRequests.map((req, i) => (
              <li
                key={i}
                className="flex items-center justify-between p-5 rounded-xl border border-gray-200 transition-all duration-300 hover:bg-gray-100"
              >
                <div>
                  <p className="font-semibold text-gray-900">{req.name}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {req.location} |{" "}
                    <span className="font-bold text-red-600">
                      {req.bloodGroup}
                    </span>
                  </p>
                </div>
                <span
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white ${
                    req.urgency === "High"
                      ? "bg-red-600"
                      : req.urgency === "Medium"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                >
                  {req.urgency} Urgency
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
