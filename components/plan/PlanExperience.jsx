"use client";

import { useState } from "react";
import PlanForm from "@/components/plan/PlanForm";
import VoiceInput from "@/components/plan/VoiceInput";

export default function PlanExperience() {
  const [inputMode, setInputMode] = useState("form"); // "form" | "voice"

  function handleGeneratePlan(payload) {
    // This is where we'll call the AI backend later with either
    // structured form data or a transcript from voice input.
    console.log("Generate plan with payload", payload);
  }

  return (
    <div className="space-y-8">
      <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white text-[11px] tracking-[0.3em] overflow-hidden shadow-sm">
        <button
          type="button"
          onClick={() => setInputMode("form")}
          className={`px-5 py-2 transition-colors ${
            inputMode === "form"
              ? "bg-black text-white"
              : "bg-transparent text-neutral-600 hover:bg-neutral-100"
          }`}
        >
          FORM INPUT
        </button>
        <button
          type="button"
          onClick={() => setInputMode("voice")}
          className={`px-5 py-2 border-l border-neutral-200 transition-colors ${
            inputMode === "voice"
              ? "bg-black text-white"
              : "bg-transparent text-neutral-600 hover:bg-neutral-100"
          }`}
        >
          VOICE INPUT
        </button>
      </div>

      {inputMode === "form" ? (
        <PlanForm onGeneratePlan={handleGeneratePlan} />
      ) : (
        <VoiceInput onGeneratePlan={handleGeneratePlan} />
      )}
    </div>
  );
}
