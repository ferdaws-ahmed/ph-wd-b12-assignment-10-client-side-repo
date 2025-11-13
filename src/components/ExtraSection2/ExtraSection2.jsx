// MotionSection.jsx
import React from "react";
import { motion } from "framer-motion";

const MotionSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 py-20 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-purple-700 mb-6"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Level Up Your Daily Habits
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-10 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Habituo makes habit tracking easy and fun. Set goals, mark your progress, and 
          celebrate every streak. Consistency is the key to success!
        </motion.p>

        <motion.div
          className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg cursor-pointer shadow-lg hover:bg-purple-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-default"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-2 text-purple-700">Track Progress</h3>
            <p className="text-gray-600 text-sm">
              Keep daily tabs on your habits and visualize your streaks.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition cursor-default"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-bold mb-2 text-purple-700">Stay Motivated</h3>
            <p className="text-gray-600 text-sm">
              Celebrate achievements and receive visual feedback on your consistency.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MotionSection;
