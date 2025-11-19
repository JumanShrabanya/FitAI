"use client"
import { useState } from 'react';
import { Dumbbell, Sparkles, ArrowRight, Circle } from 'lucide-react';

export default function Homepage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { title: "Personalized Workout Plans", desc: "AI-generated routines tailored to your goals" },
    { title: "Custom Nutrition Guide", desc: "Diet plans with caloric estimates" },
    { title: "Audio Guidance", desc: "Listen to your plans hands-free" },
    { title: "Visual Examples", desc: "AI images of exercises and meals" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Minimalist Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
        <div className="max-w-screen-2xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-8 bg-black"></div>
            <span className="text-sm font-medium tracking-wider">FITAI</span>
          </div>
          <button className="text-sm px-6 py-2 border border-black hover:bg-black hover:text-white transition-all">
            Launch App
          </button>
        </div>
      </nav>

      {/* Hero - Centered Layout */}
      <section className="pt-24 pb-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 text-xs tracking-widest text-neutral-500">
                <Circle className="w-2 h-2 fill-black" />
                AI-POWERED FITNESS
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8  max-w-3xl mx-auto">
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto border-2 border-black flex items-center justify-center">
                  <Dumbbell className="w-8 h-8" />
                </div>
                <div className="text-xs tracking-wide text-neutral-600">WORKOUT PLANS</div>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto border-2 border-black flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18M3 6h18M3 18h18"/>
                  </svg>
                </div>
                <div className="text-xs tracking-wide text-neutral-600">NUTRITION GUIDE</div>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto border-2 border-black flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <div className="text-xs tracking-wide text-neutral-600">PROGRESS TRACKING</div>
              </div>
            </div>
            
            <h1 className="text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
              {/* Stop<br/> */}
              <span className="font-serif">Stop guessing.</span><br/>
              <span className='italic'>Start Training</span><br/>
              {/* <span className="font-medium">training.</span> */}
            </h1>
            
            <p className="text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed font-light">
              Your body is unique. Your plan should be too. Get AI-crafted workout and nutrition plans in seconds.
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-4">
              <button className="group bg-black text-white px-8 py-4 flex items-center gap-3 hover:gap-4 transition-all">
                <span className="text-sm tracking-wide">CREATE YOUR PLAN</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-12 pt-2 border-t border-neutral-200 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-light mb-1">100%</div>
                <div className="text-xs text-neutral-500 tracking-wide">PERSONALIZED</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-1">&lt;30s</div>
                <div className="text-xs text-neutral-500 tracking-wide">GENERATION</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-1">AI</div>
                <div className="text-xs text-neutral-500 tracking-wide">POWERED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Minimal Cards */}
      <section className="py-32 px-8 bg-neutral-50">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-20">
            <div className="text-xs tracking-widest text-neutral-500 mb-4">WHAT YOU GET</div>
            <h2 className="text-5xl font-light tracking-tight max-w-2xl">
              Everything you need.<br/>
              <span className="italic font-serif">Nothing you don't.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-white border border-neutral-200">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-10 border-r border-b border-neutral-200 last:border-r-0 hover:bg-neutral-50 transition-colors cursor-pointer group"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="text-4xl font-light mb-8 text-neutral-300 group-hover:text-black transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-medium mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Vertical Timeline */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs tracking-widest text-neutral-500 mb-12 text-center">HOW IT WORKS</div>
          
          <div className="space-y-16">
            {[
              { num: "01", title: "Tell us about yourself", desc: "Age, goals, fitness level, dietary preferences" },
              { num: "02", title: "AI creates your plan", desc: "Personalized workouts, nutrition, and motivation" },
              { num: "03", title: "Start your journey", desc: "Follow, track, export, and regenerate as needed" }
            ].map((step, index) => (
              <div key={index} className="flex gap-12 items-start group">
                <div className="w-24 shrink-0">
                  <div className="text-5xl font-light text-neutral-200 group-hover:text-black transition-colors">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-light mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="w-px h-16 bg-neutral-200 ml-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 px-8 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="w-8 h-8 mx-auto mb-8 text-neutral-400" />
          <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-8 tracking-tight">
            Generic plans don't work.<br/>
            <span className="italic font-serif">Your body deserves better.</span>
          </h2>
          <p className="text-lg text-neutral-400 mb-12 leading-relaxed">
            Stop following cookie-cutter routines. Get a plan designed specifically for your body, goals, and lifestyle.
          </p>
          <button className="bg-white text-black px-10 py-4 hover:bg-neutral-100 transition-colors">
            <span className="text-sm tracking-wide">START NOW</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-neutral-200">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-1 h-8 bg-black"></div>
              <span className="text-sm font-medium tracking-wider">FITAI</span>
            </div>
            
            <div className="flex gap-12 text-sm text-neutral-500">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
              <a href="#" className="hover:text-black transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="text-center mt-12 text-xs text-neutral-400 tracking-wide">
            © 2024 FITAI — AI-Powered Fitness Coaching
          </div>
        </div>
      </footer>
    </div>
  );
}