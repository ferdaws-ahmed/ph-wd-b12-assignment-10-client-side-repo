// MotionSection.jsx
import React from "react";
import { motion } from "framer-motion";

const MotionSection = () => {
  return (
    <section className="bg-white py-16 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-purple-600 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Your Best Habits
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Habituo empowers you to create lasting habits with a simple, intuitive interface.
          Keep track of your progress and celebrate every achievement.
        </motion.p>
        <motion.div
          className="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg cursor-pointer hover:bg-purple-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Tracking
        </motion.div>
      </div>
    </section>
  );
};

export default MotionSection;
