import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const HabitDetails = () => {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/publicHabits/${id}`) 
      .then((res) => res.json())
      .then((data) => {
        setHabit(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching habit details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-300 rounded-full animate-spin border-t-transparent"></div>
          <span className="absolute text-blue-600 font-semibold text-sm">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (!habit || habit.message === "Habit not found") {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <p className="text-gray-500 text-lg font-medium">No data found</p>
      </div>
    );
  }

  // Fake progress data for demo
  const progress = habit.completedDays ? (habit.completedDays / 30) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10 mb-16">
      <img
        src={habit.image}
        alt={habit.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold text-gray-800 mb-2">{habit.title}</h1>
      <p className="text-gray-600 mb-4">{habit.description}</p>

      <div className="flex items-center gap-3 mb-6">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
          {habit.category}
        </span>
        {habit.streak && (
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            🔥 {habit.streak}-day streak
          </span>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700">
          Progress (Last 30 Days)
        </label>
        <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {Math.round(progress)}% completed
        </p>
      </div>

      {/* Creator Info */}
      {habit.creator && (
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-gray-700 font-semibold mb-1">Created by:</h3>
          <p className="text-gray-600 text-sm">
            {habit.creator.name} ({habit.creator.email})
          </p>
        </div>
      )}

      {/* Mark Complete Button */}
      <div className="mt-6">
        <button className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-all">
          Mark Complete
        </button>
      </div>
    </div>
  );
};

export default HabitDetails;
