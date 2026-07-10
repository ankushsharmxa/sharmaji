"use client";

import React from "react";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/products/ProductGrid";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { PRODUCTS } from "@/data/products";

export default function LatestProducts() {
  // Sort products by date (newest first)
  const sorted = [...PRODUCTS].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 4);

  return (
    <Section background="white" spacing="md" id="new-arrivals">
      <Container>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-baseline justify-between mb-6">
          <div>
            <Heading level={2} className="font-extrabold text-slate-900">
              Fresh Arrivals
            </Heading>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400 font-medium">
              The newest additions to our catalog. Grab them before stock runs out.
            </p>
          </div>
        </div>
        <ProductGrid products={sorted} />
      </Container>
    </Section>
  );
}
