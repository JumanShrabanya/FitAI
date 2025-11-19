"use client";

import Link from "next/link";

export default function AppHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200/60">
      <div className="max-w-screen-2xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-1 h-8 bg-black" />
          <span className="text-sm font-medium tracking-wider">FITAI</span>
        </Link>
        {/* <div className="flex items-center gap-3">
          <Link
            href="/plan"
            className="text-sm px-6 py-2 border border-black hover:bg-black hover:text-white transition-all"
          >
            Launch App
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
