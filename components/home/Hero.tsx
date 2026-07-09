import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 bg-gray-50/50" aria-label="Welcome Promotion Banner">
      <Container>
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 to-primary-900 text-white shadow-premium min-h-[380px] md:min-h-[460px] flex items-center">
          
          {/* Decorative background vectors */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Banner content grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full p-8 sm:p-12 lg:p-16 relative z-10 items-center">
            
            {/* Left Column: Promotion Info */}
            <div className="md:col-span-7 flex flex-col items-start gap-4 sm:gap-6">
              <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                <Zap size={12} className="text-accent-300" />
                Next-Day Delivery
              </span>
              
              <h2 className="text-xs sm:text-sm font-bold text-accent-300 uppercase tracking-widest leading-none">
                PREMIUM DEALS LIVE
              </h2>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Upgrade Your Smart Living
              </h1>
              
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-medium max-w-lg">
                Enjoy flat discount offers up to 45% off on our handpicked wireless earbuds, smartwatches, office essentials, and organic groceries.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Link href="/shop">
                  <Button variant="orange" size="lg" className="flex items-center gap-2 font-bold group min-h-[44px] shadow-soft">
                    Shop Now
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white/60">
                  <ShieldCheck size={16} className="text-accent-300" />
                  <span>100% Genuine Brands</span>
                </div>
              </div>
            </div>

            {/* Right Column: Promotional Item Hero Visual */}
            <div className="md:col-span-5 hidden md:flex justify-center items-center">
              <div className="relative w-full max-w-[280px] aspect-square transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
                  alt="AeroSound Max Headphones Promo Image"
                  fill
                  className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
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
