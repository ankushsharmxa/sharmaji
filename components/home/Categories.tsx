"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

export default function Categories() {
  const categoriesList = [
    { name: "Headphones", slug: "headphones", count: 14, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80" },
    { name: "Fast Chargers", slug: "chargers", count: 25, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=300&q=80" },
    { name: "Speakers", slug: "speakers", count: 19, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=300&q=80" },
    { name: "Power Banks", slug: "power-banks", count: 30, image: "https://images.unsplash.com/photo-1609592424089-9a76d8b6fd70?auto=format&fit=crop&w=300&q=80" },
    { name: "Wireless Earbuds", slug: "earbuds", count: 22, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&q=80" },
    { name: "Charging Cables", slug: "cables", count: 120, image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&w=300&q=80" },
    { name: "Laptop Stands", slug: "laptop-accessories", count: 40, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80" },
    { name: "Power Strips", slug: "phone-accessories", count: 55, image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=300&q=80" }
  ];

  return (
    <Section background="white" spacing="md" id="categories">
      <Container>
        <div className="flex flex-col items-center text-center mb-8">
          <Heading level={2} align="center" className="font-extrabold text-slate-900">
            Shop by Category
          </Heading>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md font-medium">
            Explore certified, high-performance tech accessories and premium audio gear.
          </p>
        </div>

        {/* Categories Row */}
        <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 justify-start md:justify-center items-center hide-scrollbar snap-x touch-pan-x">
          {categoriesList.map((category) => {
            return (
              <Link 
                key={category.slug} 
                href={`/category/${category.slug}`}
                className="group flex flex-col items-center gap-3 flex-shrink-0 w-[96px] sm:w-[110px] snap-start text-center focus:outline-none"
                aria-label={`View ${category.name} category`}
              >
                {/* Perfectly Cohesive Circle Image */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-slate-100/80 group-hover:border-primary-500 group-focus:border-primary-500 transition-all duration-300 bg-slate-50 shadow-soft">
                  <Image 
                    src={category.image} 
                    alt={category.name} 
                    fill 
                    sizes="(max-width: 640px) 80px, 120px"
                    className="object-cover group-hover:scale-105 transition-transform duration-350"
                    loading="lazy"
                  />
                </div>

                {/* Info Text */}
                <div className="flex flex-col items-center gap-0.5">
                  <h3 className="font-bold text-slate-800 text-xs sm:text-[13px] tracking-tight group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                    {category.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-bold">
                    {category.count} items
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
