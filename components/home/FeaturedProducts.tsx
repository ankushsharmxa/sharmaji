"use client";

import React from "react";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/products/ProductGrid";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { PRODUCTS } from "@/data/products";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <Section background="gray" spacing="md" id="deals">
      <Container>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-baseline justify-between mb-6">
          <div>
            <Heading level={2} className="font-extrabold text-slate-900">
              Featured Deals
            </Heading>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400 font-medium">
              The highest-rated products and handpicked specials this week.
            </p>
          </div>
        </div>
        <ProductGrid products={featured} />
      </Container>
    </Section>
  );
}
