"use client";

import { useState } from "react";

export default function VoiceInput({ onGeneratePlan }) {
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!description.trim()) return;
    onGeneratePlan?.({ mode: "voice", description: description.trim() });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-neutral-200 p-8 md:p-10 space-y-6"
    >
      <div className="space-y-2">
        <label className="block text-xs tracking-widest text-neutral-500">
          TELL FITAI WITH YOUR VOICE
        </label>
        <p className="text-xs text-neutral-500 max-w-xl">
          Speak or type a quick description, like: "27-year-old beginner, wants to lose fat,
          works out at home 4 days a week, vegetarian diet, knee pain, high stress job".
        </p>
      </div>

      {/* Placeholder for actual voice capture UI */}
      <div className="space-y-3">
        <textarea
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Tap the mic (coming soon) or type your description here..."
          className="w-full border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black resize-none"
        />
        <div className="flex items-center justify-between gap-3 flex-col md:flex-row">
          <button
            type="button"
            className="border border-neutral-300 px-4 py-2 text-xs tracking-wide hover:border-black transition-colors w-full md:w-auto"
          >
            🎙️ Start Voice Input (placeholder)
          </button>
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 text-sm tracking-wide hover:bg-neutral-900 transition-colors w-full md:w-auto"
          >
            Generate Plan
          </button>
        </div>
      </div>
    </form>
  );
}
