"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-14 bg-white" aria-label="Electronics Promotion Banner">
      <Container>
        <div className="relative w-full rounded-2xl overflow-hidden bg-slate-950 text-white shadow-xl min-h-[380px] md:min-h-[460px] flex items-center">
          
          {/* Subtle Ambient Light Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-1/3 w-[250px] h-[250px] bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Core Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full p-8 sm:p-12 lg:p-16 relative z-10 items-center">
            
            {/* Left Column: Promotion Info */}
            <div className="md:col-span-7 flex flex-col items-start gap-4 md:gap-6">
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 text-slate-300 text-[10px] font-black tracking-widest px-3.5 py-1 rounded-full uppercase">
                Featured Audio Deal
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Sony WH-1000XM4 <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                  Silence Redefined.
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium max-w-md">
                Industry-leading active noise cancellation, smart adaptive listening algorithms, and up to 30 hours of rich high-fidelity audio.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link href="/product/sony-wh-1000xm4">
                  <Button variant="primary" className="bg-primary-600 hover:bg-primary-500 text-white font-bold rounded-xl px-7 min-h-[44px] shadow-lg shadow-primary-500/10 flex items-center gap-2">
                    Shop Now
                    <ArrowRight size={14} />
                  </Button>
                </Link>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                  <ShieldCheck size={14} className="text-primary-400" />
                  <span>1 Year Sony Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Clean Product Visual */}
            <div className="md:col-span-5 hidden md:flex justify-center items-center relative">
              <div className="relative w-full max-w-[280px] aspect-square transition-transform duration-500 hover:scale-[1.02] z-10">
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
                  alt="Sony WH-1000XM4 Wireless Headphones"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
