import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const PublicHabits = () => {
  const [habits, setHabits] = useState([]);
  const [filteredHabits, setFilteredHabits] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/publicHabits")
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setFilteredHabits(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching habits:", error);
        setLoading(false);
      });
  }, []);

  // 🔍 Dynamic Search + Filter
  useEffect(() => {
    let results = habits;

    if (category !== "All") {
      results = results.filter((habit) => habit.category === category);
    }

    if (search.trim() !== "") {
      const term = search.toLowerCase();
      results = results.filter(
        (habit) =>
          habit.habitName.toLowerCase().includes(term) ||
          habit.shortDescription?.toLowerCase().includes(term)
      );
    }

    setFilteredHabits(results);
  }, [search, category, habits]);

  // 🌀 Custom Loader
  const Loader = () => (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <motion.div
        className="relative w-24 h-24 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <motion.div
          className="absolute rounded-full border-t-4 border-b-4 border-indigo-500 w-24 h-24"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-lg"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
      <p className="mt-6 text-gray-600 font-semibold text-lg tracking-wide animate-pulse">
        Loading awesome habits...
      </p>
    </div>
  );

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-white dark:from-[#3d84dc] dark:via-[#58e28f] dark:to-[#cae640]">
      {/* 🔹 Main Content (takes available space) */}
      <div className="flex-grow py-14 px-5">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-600">
          Browse Public Habits
        </h2>

        {/* 🔎 Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-5xl mx-auto mb-10">
          <input
            type="text"
            placeholder="🔍 Search habits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 outline-none"
          >
            <option value="All">All Categories</option>
            <option value="Morning">Morning</option>
            <option value="Work">Work</option>
            <option value="Fitness">Fitness</option>
            <option value="Evening">Evening</option>
            <option value="Study">Study</option>
          </select>
        </div>

        {/* 🧩 Habits Grid */}
        {filteredHabits.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredHabits.map((habit) => (
              <motion.div
                key={habit._id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.03 }}
              >
                {habit.image && (
                  <img
                    src={habit.image}
                    alt={habit.habitName}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
                      {habit.habitName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {habit.shortDescription || "No description available."}
                    </p>

                    <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                      <p>
                        <strong>👤 Creator:</strong>{" "}
                        {habit.creatorName || "Unknown"}
                      </p>
                      <p>
                        <strong>📂 Category:</strong>{" "}
                        {habit.category || "General"}
                      </p>
                      <p>
                        <strong>📅 Date:</strong>{" "}
                        {new Date(habit.createDate).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>

                  <Link to={`/habit-details/${habit._id}`}>
                    <button className="mt-5 py-2 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-500 text-white font-semibold hover:scale-[1.03] transition-transform duration-200">
                      View More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center min-h-[60vh]">
            <p className="text-center text-gray-500 text-lg">
              No habits found 😔
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default PublicHabits;
