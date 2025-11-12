import React from "react";
import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";

const TrackProgressSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-5 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-[#1f4068] dark:via-[#162447] dark:to-[#1a1a2e]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <FaChartLine size={48} className="mx-auto text-indigo-600 mb-6" />
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-200">
          Track Your Progress
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Keep an eye on your daily habits and measure your growth. Visualize your achievements and stay motivated to build better routines.
        </p>
        <button className="mt-6 px-6 py-2 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-pink-500 text-white hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200">
          Start Tracking
        </button>
      </div>
    </motion.div>
  );
};

export default TrackProgressSection;
