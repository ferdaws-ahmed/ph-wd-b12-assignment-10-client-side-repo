import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateHabit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch existing habit by ID
  useEffect(() => {
    fetch(`http://localhost:3000/myhabit/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHabit(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching habit:", err);
        toast.error("Failed to load habit!");
        setLoading(false);
      });
  }, [id]);

  // Update habit in DB
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedHabit = {
      habitName: form.habitName.value,
      description: form.description.value,
      category: form.category.value,
      reminderTime: form.reminderTime.value,
      image: form.image.value,
    };

    fetch(`http://localhost:3000/myhabit/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedHabit),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Habit updated successfully!");
        setTimeout(() => navigate("/myhabits"), 1000);
      })
      .catch((err) => {
        console.error("Error updating habit:", err);
        toast.error("Failed to update habit!");
      });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <span className="loading loading-spinner text-indigo-600 w-12 h-12"></span>
      </div>
    );

  if (!habit)
    return (
      <div className="text-center text-gray-500 py-20">
        Habit not found.
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">
        ✏️ Update Habit
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">
        {/* Habit Title */}
        <div>
          <label className="block font-semibold mb-1">Habit Title</label>
          <input
            type="text"
            name="habitName"
            defaultValue={habit.habitName}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            defaultValue={habit.description}
            rows="3"
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={habit.category}
            required
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Reminder Time */}
        <div>
          <label className="block font-semibold mb-1">Reminder Time</label>
          <input
            type="time"
            name="reminderTime"
            defaultValue={habit.reminderTime}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">
            Image URL (optional)
          </label>
          <input
            type="text"
            name="image"
            defaultValue={habit.image || ""}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* User Info (Read Only) */}
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block font-semibold mb-1">User Name</label>
            <input
              type="text"
              value={habit.userName}
              readOnly
              className="w-full border bg-gray-100 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">User Email</label>
            <input
              type="email"
              value={habit.userEmail}
              readOnly
              className="w-full border bg-gray-100 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 text-white font-semibold px-8 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Update Habit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateHabit;
