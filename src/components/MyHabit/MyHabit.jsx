import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/myhabit?userEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setHabits(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch habits!");
        setLoading(false);
      });
  }, [user?.email]);

  const confirmDelete = (id) => setDeleteId(id);

  const handleDelete = () => {
    fetch(`http://localhost:3000/myhabit/${deleteId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        toast.success("Habit deleted successfully!");
        setHabits(habits.filter((habit) => habit._id !== deleteId));
        setDeleteId(null);
      })
      .catch(() => {
        toast.error("Failed to delete habit!");
        setDeleteId(null);
      });
  };

  return (
    <div className="min-h-[80vh] py-10 px-5 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
        📝 My Habits
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading habits...</p>
      ) : habits.length === 0 ? (
        <p className="text-center text-gray-500">You have no habits yet.</p>
      ) : (
        <>
          {/* Current Streak Card */}
          <div className="max-w-5xl mx-auto mb-6">
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-lg flex justify-between items-center shadow-md">
              <h3 className="text-lg font-semibold text-indigo-700">Current Streaks</h3>
              <div className="flex gap-4">
                {habits.map((habit) => (
                  <div
                    key={habit._id}
                    className="bg-white border border-gray-200 rounded-lg p-3 text-center shadow-sm w-32"
                  >
                    <p className="text-sm text-gray-500">{habit.habitName}</p>
                    <p className="text-xl font-bold text-indigo-600">
                      {habit.currentStreak || 0} 🔥
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Habits Table */}
          <div className="overflow-x-auto max-w-6xl mx-auto">
            <table className="table-auto w-full border border-gray-300 rounded-lg shadow-lg divide-y divide-gray-200">
              <thead className="bg-indigo-100 text-left">
                <tr>
                  <th className="px-4 py-3 border-b">Title</th>
                  <th className="px-4 py-3 border-b">Category</th>
                  <th className="px-4 py-3 border-b">Reminder Time</th>
                  <th className="px-4 py-3 border-b">Created Date</th>
                  <th className="px-4 py-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {habits.map((habit) => (
                  <tr key={habit._id} className="hover:bg-indigo-50 transition-colors">
                    <td className="px-4 py-3 border-b font-medium text-gray-700">{habit.habitName}</td>
                    <td className="px-4 py-3 border-b text-gray-600">{habit.category}</td>
                    <td className="px-4 py-3 border-b text-gray-600">
                      {habit.reminderTime || "Not set"}
                    </td>
                    <td className="px-4 py-3 border-b text-gray-500">
                      {new Date(habit.createDate).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-4 py-3 border-b space-x-2">
                      <Link to={`/updatehabit/${habit._id}`}>
                        <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                          Update
                        </button>
                      </Link>

                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        onClick={() => confirmDelete(habit._id)}
                      >
                        Delete
                      </button>
                      <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Mark Complete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteId && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 text-center w-80"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                ⚠ Confirm Delete
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this habit?
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setDeleteId(null)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyHabits;
