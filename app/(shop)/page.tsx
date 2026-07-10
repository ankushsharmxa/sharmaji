import React from "react";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestProducts from "@/components/home/LatestProducts";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <LatestProducts />
    </div>
  );
}
