import React from "react";
import { motion } from "framer-motion";
import { FaUsers } from "react-icons/fa";

const CommunitySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-5 bg-gradient-to-r from-yellow-50 via-green-50 to-blue-50 dark:from-[#162447] dark:via-[#1f4068] dark:to-[#0f1a2a]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <FaUsers size={48} className="mx-auto text-green-600 mb-6" />
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-200">
          Join the Community
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Connect with like-minded individuals who are building habits just like you. Share tips, celebrate achievements, and stay motivated together.
        </p>
        <button className="mt-6 px-6 py-2 rounded-xl font-semibold bg-gradient-to-r from-green-500 to-blue-500 text-white hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200">
          Join Now
        </button>
      </div>
    </motion.div>
  );
};

export default CommunitySection;
