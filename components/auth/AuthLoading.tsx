import React from "react";

export default function AuthLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Simple elegant logo text placeholder matching navbar style */}
        <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5 animate-pulse">
          <span className="bg-primary-600 text-white px-2 py-0.5 rounded-lg text-lg font-black">SJ</span>
          <span>SHARMAJI</span>
          <span className="text-primary-600 font-extrabold">.</span>
        </span>
        
        {/* Loading Spinner */}
        <div className="w-8 h-8 border-2 border-primary-100 border-t-primary-600 rounded-full animate-spin mt-2" />
        
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
          Initializing Session
        </p>
      </div>
    </div>
  );
}
