import React from "react";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/products/ProductGrid";
import { PRODUCTS } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  
  // Find products matching this category slug
  const filteredProducts = PRODUCTS.filter(
    (product) => product.category.toLowerCase().replace(" ", "-") === slug
  );

  // Capitalize name for UI title
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      <Container>
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 font-bold mb-2">
            <span>HOME</span>
            <span>/</span>
            <span>CATEGORY</span>
            <span>/</span>
            <span className="text-gray-600 uppercase">{categoryName}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{categoryName}</h1>
          <p className="text-sm text-gray-500 mt-1">
            Showing {filteredProducts.length} items in the {categoryName} catalog.
          </p>
        </div>

        {/* Product Grid */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 shadow-soft">
          <ProductGrid products={filteredProducts} />
        </div>
      </Container>
    </div>
  );
}
