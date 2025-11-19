import PlanExperience from "@/components/plan/PlanExperience";
import AppHeader from "@/components/layout/AppHeader";

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-white">
      <AppHeader />
      <div className="mx-auto px-6 md:px-10 lg:px-12 pt-32 pb-24">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-2 text-[11px] tracking-[0.35em] text-neutral-500">
          <span>FITAI / PLAN</span>
          <span>STEP 01 · INPUTS</span>
        </div>

        <section className="bg-white border border-neutral-200/80 shadow-[0_20px_40px_rgba(0,0,0,0.04)] px-6 md:px-10 py-10 md:py-12">
          <header className="mb-10 md:mb-12 max-w-3xl">
            <p className="text-xs tracking-[0.4em] text-neutral-500 mb-3">CREATE YOUR PLAN</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4">
              Tell FitAI about you.
            </h1>
            <p className="text-sm md:text-base text-neutral-600">
              These inputs tune the AI engine for your exact context—body stats, goals, training
              environment, and recovery. Toggle between structured inputs or voice to start the
              same personalized plan pipeline.
            </p>
          </header>

          <PlanExperience />
        </section>
      </div>
    </div>
  );
}
