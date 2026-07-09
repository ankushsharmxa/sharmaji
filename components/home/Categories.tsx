import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Laptop, Apple, Shirt, Home, Sparkles, Heart } from "lucide-react";

export default function Categories() {
  const categoriesList = [
    { name: "Electronics", slug: "electronics", icon: Laptop, color: "bg-blue-50 text-blue-600 hover:bg-blue-100" },
    { name: "Groceries", slug: "groceries", icon: Apple, color: "bg-green-50 text-green-600 hover:bg-green-100" },
    { name: "Fashion", slug: "fashion", icon: Shirt, color: "bg-purple-50 text-purple-600 hover:bg-purple-100" },
    { name: "Home Essentials", slug: "home-kitchen", icon: Home, color: "bg-amber-50 text-amber-600 hover:bg-amber-100" },
    { name: "Beauty & Care", slug: "beauty", icon: Sparkles, color: "bg-pink-50 text-pink-600 hover:bg-pink-100" },
    { name: "Wellness", slug: "wellness", icon: Heart, color: "bg-rose-50 text-rose-600 hover:bg-rose-100" },
  ];

  return (
    <section className="py-12 bg-white" aria-label="Shop Categories">
      <Container>
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-500 max-w-md">
            Explore our curated items catalog, from fresh food to state-of-the-art tech.
          </p>
        </div>

        {/* Swipeable horizontal scrolling on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 md:grid md:grid-cols-6 md:gap-6 hide-scrollbar scroll-smooth snap-x touch-pan-x">
          {categoriesList.map((category) => {
            const Icon = category.icon;
            return (
              <Link 
                key={category.slug} 
                href={`/category/${category.slug}`}
                className="flex flex-col items-center group snap-start flex-shrink-0 w-24 md:w-auto"
                aria-label={`Shop ${category.name}`}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-soft group-hover:scale-105 group-hover:shadow-hover touch-target ${category.color}`}>
                  <Icon size={28} className="stroke-[1.5]" />
                </div>
                <span className="mt-3 text-xs md:text-sm font-bold text-gray-700 group-hover:text-primary-500 transition-colors text-center truncate w-full">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
