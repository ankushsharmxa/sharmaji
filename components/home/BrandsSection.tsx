import React from "react";
import Container from "@/components/layout/Container";
import { Sparkles } from "lucide-react";

export default function BrandsSection() {
  const brands = [
    { name: "ElectroMax", logoText: "⚡ E-Max" },
    { name: "FreshFarms", logoText: "🌾 FreshF" },
    { name: "UrbanThread", logoText: "👕 UrbanT" },
    { name: "HomeCraft", logoText: "🏡 HomeC" },
    { name: "Organix", logoText: "🍃 Organix" },
    { name: "FitPro", logoText: "🏃 FitPro" }
  ];

  return (
    <section className="py-12 bg-gray-50/50" aria-label="Popular Brands">
      <Container>
        <div className="flex flex-col items-center text-center mb-8">
          <span className="inline-flex items-center gap-1 bg-primary-50 text-primary-600 text-[10px] font-black tracking-widest px-2.5 py-1 rounded-full uppercase mb-2">
            <Sparkles size={10} />
            Authorized Partners
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">Popular Brands</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100/60 rounded-xl p-5 flex items-center justify-center font-extrabold text-gray-400 hover:text-primary-500 hover:border-primary-100 transition-all duration-300 shadow-soft select-none text-sm tracking-wide h-16"
            >
              {brand.logoText}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
