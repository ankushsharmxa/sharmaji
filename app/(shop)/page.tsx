import React from "react";
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LatestProducts from "@/components/home/LatestProducts";
import TrustSection from "@/components/home/TrustSection";
import BrandsSection from "@/components/home/BrandsSection";
import PromotionalOffers from "@/components/home/PromotionalOffers";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Categories />
      <PromotionalOffers />
      <FeaturedProducts />
      <LatestProducts />
      <BrandsSection />
      <TrustSection />
      <Newsletter />
    </div>
  );
}
