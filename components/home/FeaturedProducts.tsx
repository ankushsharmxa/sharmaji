import React from "react";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/products/ProductGrid";
import { PRODUCTS } from "@/data/products";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <section className="py-12 bg-gray-50/50">
      <Container>
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Featured Deals
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              The highest-rated products and handpicked specials this week.
            </p>
          </div>
        </div>
        <ProductGrid products={featured} />
      </Container>
    </section>
  );
}
