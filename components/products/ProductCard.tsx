"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Star, Heart, Eye } from "lucide-react";
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
    category,
    rating,
    reviewsCount,
    specs
  } = product;

  const [isWishlisted, setIsWishlisted] = useState(false);
  const imageUrl = images?.[0] || "/placeholder-product.webp";
  const brandName = specs?.Brand || "SharmaJi Premium";

  return (
    <Card hoverable={true} className="flex flex-col h-full bg-white relative group min-h-[380px]">
      
      {/* Wishlist Icon Button (UI Only) */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsWishlisted(!isWishlisted);
        }}
        className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-red-500 hover:scale-105 active:scale-95 transition-all shadow-soft touch-target"
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart size={16} className={isWishlisted ? "fill-red-500 text-red-500" : "fill-none"} />
      </button>

      {/* Discount Badge */}
      {discountPercentage && discountPercentage > 0 ? (
        <Badge 
          variant="orange" 
          size="sm" 
          className="absolute top-3 left-3 z-10 font-bold"
        >
          {discountPercentage}% OFF
        </Badge>
      ) : null}

      {/* Product Image Link */}
      <Link href={`/product/${slug}`} className="block relative aspect-square overflow-hidden bg-gray-50/50">
        <Image
          src={imageUrl}
          alt={`Product photo of ${name}`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Quick View Button Hover Overlay (UI only) */}
        <div className="absolute inset-0 bg-gray-900/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1.5 bg-white/95 text-gray-800 border-none font-bold py-2 shadow-soft"
            tabIndex={-1}
          >
            <Eye size={14} />
            Quick View
          </Button>
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex flex-col flex-1 p-4">
        {/* Brand & Category Label */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
            {category}
          </span>
          <span className="text-[10px] font-extrabold text-primary-500 tracking-wide uppercase">
            {brandName}
          </span>
        </div>
        
        {/* Title */}
        <Link href={`/product/${slug}`} className="hover:text-primary-500 transition-colors">
          <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base line-clamp-2 leading-tight min-h-[2.5rem] tracking-tight">
            {name}
          </h3>
        </Link>

        {/* Rating and Reviews count */}
        <div className="flex items-center gap-1.5 mt-2 mb-3">
          <div className="flex items-center gap-0.5 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
            <span>{rating.toFixed(1)}</span>
            <Star size={10} className="fill-current" />
          </div>
          <span className="text-[10px] font-bold text-gray-400">
            ({reviewsCount} Reviews)
          </span>
        </div>

        {/* Prices & Action Button at the bottom */}
        <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm sm:text-base md:text-lg font-extrabold text-gray-900">
                ₹{price.toLocaleString("en-IN")}
              </span>
              {originalPrice && originalPrice > price && (
                <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                  ₹{originalPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            {/* Delivery badge */}
            <span className="text-[9px] font-extrabold text-green-600 tracking-wide mt-1 uppercase">
              Free Delivery
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
