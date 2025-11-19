"use client";

import { useState } from "react";

export default function PlanForm({ onGeneratePlan }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    fitnessGoal: "",
    fitnessLevel: "",
    workoutLocation: "",
    dietPreference: "",
    medicalHistory: "",
    stressLevel: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onGeneratePlan?.({ mode: "form", ...formData });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
            required
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="10"
              max="100"
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
              required
            >
              <option value="">Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="non-binary">Non-binary</option>
              <option value="prefer-not">Prefer not to say</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">Fitness goal</label>
          <input
            type="text"
            name="fitnessGoal"
            value={formData.fitnessGoal}
            onChange={handleChange}
            placeholder="Build strength, drop 5kg, improve stamina"
            className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
            required
          />
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1">Height (cm)</label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              min="80"
              max="250"
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              min="20"
              max="300"
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-500 mb-1">Fitness level</label>
            <select
              name="fitnessLevel"
              value={formData.fitnessLevel}
              onChange={handleChange}
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
              required
            >
              <option value="">Select</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">Workout location</label>
          <select
            name="workoutLocation"
            value={formData.workoutLocation}
            onChange={handleChange}
            className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
            required
          >
            <option value="">Select</option>
            <option value="home">Home</option>
            <option value="gym">Gym</option>
            <option value="outdoor">Outdoor</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">Dietary preference</label>
          <select
            name="dietPreference"
            value={formData.dietPreference}
            onChange={handleChange}
            className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
            required
          >
            <option value="">Select</option>
            <option value="no-restrictions">No restrictions</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="keto">Keto</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">Medical history (optional)</label>
          <textarea
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            rows={4}
            placeholder="Injuries, conditions, or anything your coach should know."
            className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0 resize-none"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">Stress level</label>
          <select
            name="stressLevel"
            value={formData.stressLevel}
            onChange={handleChange}
            className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm outline-none focus:border-black focus:ring-0"
            required
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
            <option value="very-high">Very High</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
          FitAI uses these inputs to generate a tailored workout and diet plan. You can always
          adjust details and regenerate later.
        </p>
        <button
          type="submit"
          className="w-full md:w-auto bg-black text-white px-8 py-3 text-sm tracking-[0.2em] hover:bg-neutral-900 transition-colors"
        >
          GENERATE PLAN
        </button>
      </div>
    </form>
  );
}
