import React from "react";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/products/ProductGrid";
import { PRODUCTS } from "@/data/products";

export default function LatestProducts() {
  // Sort products by date (newest first)
  const sorted = [...PRODUCTS].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 4);

  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Fresh Arrivals
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              The newest additions to our catalog. Grab them before stock runs out.
            </p>
          </div>
        </div>
        <ProductGrid products={sorted} />
      </Container>
    </section>
  );
}
