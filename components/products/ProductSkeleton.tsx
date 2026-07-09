import React from "react";

export function ProductSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col h-full animate-pulse">
      {/* Image box skeleton */}
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 w-full" />
      {/* Category skeleton */}
      <div className="h-3 bg-gray-100 rounded w-1/4 mb-2" />
      {/* Title skeleton */}
      <div className="h-4 bg-gray-100 rounded w-3/4 mb-1" />
      <div className="h-4 bg-gray-100 rounded w-1/2 mb-4" />
      {/* Star ratings skeleton */}
      <div className="h-4 bg-gray-100 rounded w-1/3 mb-4" />
      {/* Price & action button skeleton */}
      <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between gap-4">
        <div className="h-6 bg-gray-100 rounded w-2/5" />
        <div className="h-9 w-9 bg-gray-100 rounded-full" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}

export function CategorySkeleton() {
  return (
    <div className="flex flex-col items-center gap-2 animate-pulse">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full" />
      <div className="h-3 bg-gray-100 rounded w-12" />
    </div>
  );
}

export function BannerSkeleton() {
  return (
    <div className="w-full h-[280px] sm:h-[400px] bg-gray-100 rounded-2xl animate-pulse" />
  );
}
