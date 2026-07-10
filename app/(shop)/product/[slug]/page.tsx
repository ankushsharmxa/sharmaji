"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { PRODUCTS } from "@/data/products";
import { ShieldCheck, Truck, RotateCcw, Award, ShoppingCart, CreditCard } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import Price from "@/components/ui/Price";
import Rating from "@/components/ui/Rating";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: Props) {
  const { slug } = use(params);
  
  // Find product
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Gallery images list (using the product's actual multiple images)
  const galleryImages = product.images && product.images.length > 0 
    ? product.images 
    : ["/placeholder-product.webp"];

  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  // Filter related items in the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-400 font-bold mb-8">
          <Link href="/" className="hover:text-primary-500">HOME</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary-500">SHOP</Link>
          <span>/</span>
          <Link href={`/category/${product.category.toLowerCase().replace(" ", "-")}`} className="hover:text-primary-500 uppercase">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[200px]">{product.name}</span>
        </div>

        {/* Product Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Image Box & Thumbnail Selector */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 flex justify-center items-center h-[340px] md:h-[400px] shadow-soft relative">
              <div className="relative w-full h-full">
                <Image
                  src={activeImage}
                  alt={`Primary screenshot view of ${product.name}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Thumbnail Selectors Grid */}
            <div className="flex gap-3 justify-center">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 rounded-xl border-2 bg-white overflow-hidden p-1 transition-all ${
                    activeImage === img ? "border-primary-500" : "border-gray-200 hover:border-primary-200"
                  }`}
                  aria-label={`Select product image view ${idx + 1}`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={img}
                      alt={`Thumbnail view ${idx + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Specs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Title & Brand */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-soft flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="primary" size="sm">{product.category}</Badge>
                {product.stock > 0 ? (
                  <Badge variant="success" size="sm">In Stock</Badge>
                ) : (
                  <Badge variant="danger" size="sm">Out of Stock</Badge>
                )}
              </div>
              
              <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Ratings */}
              <Rating rating={product.rating} reviewsCount={product.reviewsCount} size="md" />

              {/* Color Selector (Disabled UI Only) */}
              <div className="mt-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Select Color</span>
                <div className="flex gap-2.5 mt-2">
                  {["#212529", "#003ad6", "#dee2e6"].map((color, idx) => (
                    <button
                      key={idx}
                      disabled
                      style={{ backgroundColor: color }}
                      className="w-8 h-8 rounded-full border border-gray-300 cursor-not-allowed opacity-50 relative"
                      aria-label={`Color option ${idx + 1} (disabled)`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector (Disabled UI Only) */}
              <div className="mt-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Select Size</span>
                <div className="flex gap-2.5 mt-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      disabled
                      className="w-10 h-10 border border-gray-200 rounded-lg text-xs font-bold text-gray-400 cursor-not-allowed bg-gray-50 opacity-60 flex items-center justify-center"
                      aria-label={`Size ${size} (disabled)`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector (Disabled UI Only) */}
              <div className="mt-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Quantity</span>
                <div className="flex items-center border border-gray-200 rounded-lg w-28 mt-2 bg-gray-50 opacity-60 cursor-not-allowed">
                  <button disabled className="p-2 text-gray-400 cursor-not-allowed w-9 flex items-center justify-center">-</button>
                  <span className="flex-1 text-center text-sm font-bold text-gray-500">1</span>
                  <button disabled className="p-2 text-gray-400 cursor-not-allowed w-9 flex items-center justify-center">+</button>
                </div>
              </div>

              {/* Price Details */}
              <div className="py-4 border-y border-gray-100 my-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Special Price</span>
                  <Price price={product.price} originalPrice={product.originalPrice} discountPercentage={product.discountPercentage} size="lg" className="mt-1" />
                </div>

                {/* Add/Buy Buttons (Disabled UI Only) */}
                <div className="flex items-center gap-3">
                  <Button disabled variant="primary" className="flex items-center gap-2 font-bold px-6 cursor-not-allowed opacity-60">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </Button>
                  <Button disabled variant="orange" className="flex items-center gap-2 font-bold px-6 cursor-not-allowed opacity-60">
                    <CreditCard size={16} />
                    Buy Now
                  </Button>
                </div>
              </div>

              {/* Guarantee badges */}
              <div className="grid grid-cols-3 gap-3 text-center text-[10px] sm:text-xs text-gray-500 font-bold">
                <div className="flex flex-col items-center gap-1.5 p-2.5 bg-gray-50 rounded-xl">
                  <Truck size={18} className="text-primary-500" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-2.5 bg-gray-50 rounded-xl">
                  <RotateCcw size={18} className="text-primary-500" />
                  <span>7 Day Returns</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 p-2.5 bg-gray-50 rounded-xl">
                  <Award size={18} className="text-primary-500" />
                  <span>Authentic Brand</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-soft">
              <h3 className="text-base font-extrabold text-gray-900 mb-3">Product Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            {product.specs && (
              <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-soft">
                <h3 className="text-base font-extrabold text-gray-900 mb-4">Specifications & Details</h3>
                <div className="border border-gray-100 rounded-xl overflow-hidden text-sm">
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <div 
                      key={key} 
                      className={`grid grid-cols-3 p-3.5 ${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      } border-b border-gray-100 last:border-0`}
                    >
                      <span className="font-bold text-gray-400 uppercase tracking-wider text-[11px]">
                        {key}
                      </span>
                      <span className="col-span-2 font-semibold text-gray-800">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-gray-200/60 pt-12">
            <h3 className="text-xl font-extrabold text-gray-800 mb-8">Related Products</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
