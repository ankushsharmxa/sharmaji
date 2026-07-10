import React from "react";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 font-medium">No products found matching your criteria.</p>
      </div>
    );
  }

  // Dynamically set grid column classes to center products when count is less than 5
  const count = products.length;
  const gridColsClass = 
    count === 1 ? "grid-cols-1 max-w-xs mx-auto" :
    count === 2 ? "grid-cols-2 max-w-xl mx-auto" :
    count === 3 ? "grid-cols-2 sm:grid-cols-3 max-w-3xl mx-auto" :
    count === 4 ? "grid-cols-2 sm:grid-cols-4 max-w-5xl mx-auto" :
    "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";

  return (
    <div className={`grid ${gridColsClass} gap-3 sm:gap-6 justify-center`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
