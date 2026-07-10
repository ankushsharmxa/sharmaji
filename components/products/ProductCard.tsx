"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Price from "@/components/ui/Price";
import Rating from "@/components/ui/Rating";
import { Heart } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    name,
    slug,
    price,
    originalPrice,
    discountPercentage,
    images,
    brand,
    rating,
    reviewsCount,
    stock
  } = product;

  const [isWishlisted, setIsWishlisted] = useState(false);
  const imageUrl = images?.[0] || "/placeholder-product.webp";

  return (
    <Card 
      hoverable={true} 
      className="flex flex-col h-full bg-white relative group rounded-2xl border border-slate-100/65 overflow-hidden transition-all duration-300 hover:shadow-soft-xl hover:-translate-y-1"
    >
      {/* Absolute click overlay spanning the entire card except the wishlist icon */}
      <Link href={`/product/${slug}`} className="absolute inset-0 z-10" aria-label={`View details of ${name}`} />

      {/* Wishlist Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsWishlisted(!isWishlisted);
        }}
        className="absolute top-3 right-3 z-20 w-8.5 h-8.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-red-500 hover:scale-105 active:scale-95 transition-all shadow-sm touch-target"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart size={14} className={isWishlisted ? "fill-red-500 text-red-500" : "fill-none"} />
      </button>

      {/* Image Container with consistent sizing and ratio */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-50/40 border-b border-slate-50 flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={`Product photo of ${name}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
        />
      </div>

      {/* Info details */}
      <div className="flex flex-col flex-grow p-4.5 items-center text-center">
        
        {/* Brand Name & Stock Indicator */}
        <div className="flex items-center justify-center gap-2 mb-1.5 w-full">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            {brand}
          </span>
          {stock < 15 ? (
            <span className="text-[9px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
              Low Stock
            </span>
          ) : null}
        </div>

        {/* Title */}
        <div className="group-hover:text-primary-600 transition-colors w-full mb-2">
          <h3 className="font-extrabold text-slate-800 text-[13px] sm:text-sm line-clamp-2 leading-snug min-h-[2.5rem] tracking-tight">
            {name}
          </h3>
        </div>

        {/* Ratings block */}
        <Rating rating={rating} reviewsCount={reviewsCount} size="sm" className="mb-3" />

        {/* Pricing details */}
        <div className="mt-auto pt-2 border-t border-slate-50/80 w-full flex flex-col items-center gap-0.5">
          <Price price={price} originalPrice={originalPrice} discountPercentage={discountPercentage} size="sm" />
          <span className="text-[9px] font-bold text-green-600 tracking-wider uppercase mt-1">
            Free Delivery
          </span>
        </div>

      </div>
    </Card>
  );
}
