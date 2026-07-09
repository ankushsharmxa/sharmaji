"use client";

import React, { useState } from "react";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/products/ProductGrid";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS } from "@/data/products";
import { Filter, SlidersHorizontal, ArrowUpDown, Grid, List, Star, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      <Container>
        
        {/* Page Title & Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-bold mb-2">
            <span>HOME</span>
            <span>/</span>
            <span className="text-gray-600">SHOP</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Shop Catalog</h1>
          <p className="text-sm text-gray-500 mt-1">Browse all premium products with active deals and speedy delivery.</p>
        </div>

        {/* Filter bar */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
          <div className="flex items-center gap-2 text-sm text-gray-600 font-bold">
            <SlidersHorizontal size={16} className="text-primary-500" />
            <span>Showing {PRODUCTS.length} Results</span>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {/* View Mode Toggle Buttons */}
            <div className="flex items-center border border-gray-200 rounded-lg p-0.5 bg-gray-50">
              <button 
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-white text-primary-500 shadow-soft" : "text-gray-400 hover:text-gray-600"}`}
                aria-label="Grid View"
              >
                <Grid size={16} />
              </button>
              <button 
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-white text-primary-500 shadow-soft" : "text-gray-400 hover:text-gray-600"}`}
                aria-label="List View"
              >
                <List size={16} />
              </button>
            </div>

            <div className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 text-xs font-semibold text-gray-700 min-h-[44px] cursor-pointer">
              <ArrowUpDown size={14} />
              <span>Sort: Featured</span>
            </div>
            
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => setIsMobileFiltersOpen(true)}
              className="flex items-center gap-1.5 lg:hidden min-h-[44px]"
            >
              <Filter size={14} />
              Filters
            </Button>
          </div>
        </div>

        {/* Sidebar and Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 bg-white rounded-xl border border-gray-100 p-6 h-fit shadow-soft sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-primary-500" />
                Filters
              </h3>
              <button className="text-xs font-bold text-primary-500 hover:text-primary-600">Clear All</button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">Categories</h4>
              <div className="flex flex-col gap-2.5">
                {["Electronics", "Groceries", "Fashion", "Home Essentials"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2.5 text-sm text-gray-600 font-semibold cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500/20" />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Slider (UI Only) */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">Price Limit</h4>
              <input type="range" min="500" max="25000" defaultValue="15000" className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500" />
              <div className="flex justify-between text-xs font-semibold text-gray-400 mt-2">
                <span>₹500</span>
                <span>₹25,000</span>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">Popular Brands</h4>
              <div className="flex flex-col gap-2.5">
                {["AeroSound", "ProFit", "ClassicLeather", "SmartBrew", "FreshFarms"].map((brand) => (
                  <label key={brand} className="flex items-center gap-2.5 text-sm text-gray-600 font-semibold cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500/20" />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">Availability</h4>
              <div className="flex flex-col gap-2.5">
                <label className="flex items-center gap-2.5 text-sm text-gray-600 font-semibold cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500/20" defaultChecked />
                  <span>Exclude Out of Stock</span>
                </label>
              </div>
            </div>

            {/* Ratings Filter */}
            <div>
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">Customer Rating</h4>
              <div className="flex flex-col gap-2.5">
                {[4, 3, 2].map((stars) => (
                  <label key={stars} className="flex items-center gap-2.5 text-sm text-gray-600 font-semibold cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500/20" />
                    <span className="flex items-center gap-1">
                      {stars}★ & above
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid / List view container */}
          <div className="lg:col-span-9">
            {viewMode === "grid" ? (
              <ProductGrid products={PRODUCTS} />
            ) : (
              <div className="flex flex-col gap-4">
                {PRODUCTS.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-6 hover:shadow-hover transition-shadow relative">
                    <div className="relative w-36 h-36 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase">{product.category}</span>
                          <span className="text-[10px] font-extrabold text-primary-500 uppercase">{product.specs?.Brand || "Premium"}</span>
                        </div>
                        <Link href={`/product/${product.slug}`}>
                          <h3 className="font-extrabold text-gray-800 text-base hover:text-primary-500 transition-colors line-clamp-1">{product.name}</h3>
                        </Link>
                        <div className="flex items-center gap-1.5 mt-2">
                          <div className="flex items-center gap-0.5 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                            <span>{product.rating}</span>
                            <Star size={10} className="fill-current" />
                          </div>
                          <span className="text-xs text-gray-400">({product.reviewsCount} Reviews)</span>
                        </div>
                      </div>
                      
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-lg font-black text-gray-900">₹{product.price.toLocaleString("en-IN")}</span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString("en-IN")}</span>
                        )}
                        <span className="text-xs font-bold text-orange-500">{product.discountPercentage}% OFF</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Filters */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileFiltersOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-white h-full p-6 overflow-y-auto flex flex-col justify-between animate-slide-right z-10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                <h3 className="font-bold text-gray-800">Filters</h3>
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="text-sm font-bold text-gray-400 hover:text-gray-600"
                >
                  Close
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">Categories</h4>
                <div className="flex flex-col gap-3">
                  {["Electronics", "Groceries", "Fashion", "Home Essentials"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2.5 text-sm text-gray-600 font-semibold cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-primary-600 focus:ring-primary-500/20" />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <Button variant="primary" className="w-full font-bold" onClick={() => setIsMobileFiltersOpen(false)}>
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
