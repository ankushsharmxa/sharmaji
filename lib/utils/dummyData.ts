import { Product } from "@/types";

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "AeroSound Max Wireless Headphones - Active Noise Cancelling",
    slug: "aerosound-max-wireless-headphones",
    description: "Premium over-ear headphones with active noise cancellation, 40-hour battery life, spatial audio support, and ultra-comfortable memory foam earcups.",
    price: 8999,
    originalPrice: 14999,
    discountPercentage: 40,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"],
    category: "Electronics",
    stock: 25,
    rating: 4.8,
    reviewsCount: 142,
    featured: true,
    createdAt: "2026-06-01T12:00:00Z",
    specs: {
      "Battery Life": "Up to 40 Hours",
      "Bluetooth Version": "5.2",
      "Driver Size": "40mm Dynamic",
      "Warranty": "1 Year Manufacturer Warranty"
    }
  },
  {
    id: "p2",
    name: "ProFit Smartwatch Series 6 - AMOLED Display, GPS",
    slug: "profit-smartwatch-series-6",
    description: "Advanced fitness tracker and smartwatch with a crystal clear AMOLED always-on display, built-in GPS, blood oxygen tracking, and water resistance up to 50m.",
    price: 4599,
    originalPrice: 7999,
    discountPercentage: 42,
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"],
    category: "Electronics",
    stock: 18,
    rating: 4.6,
    reviewsCount: 98,
    featured: true,
    createdAt: "2026-06-10T12:00:00Z",
    specs: {
      "Display": "1.78 inch AMOLED",
      "Battery Life": "Up to 7 Days",
      "Water Resistance": "5 ATM",
      "Sensors": "Heart Rate, SpO2, Accelerometer"
    }
  },
  {
    id: "p3",
    name: "Classic Leather Minimalist Wallet - RFID Blocking",
    slug: "classic-leather-minimalist-wallet",
    description: "Handcrafted top-grain genuine leather wallet with slim card profiles and integrated RFID blocking technology to secure your personal credit cards.",
    price: 899,
    originalPrice: 1999,
    discountPercentage: 55,
    images: ["https://images.unsplash.com/photo-1627124765135-56f70ed1165e?auto=format&fit=crop&w=600&q=80"],
    category: "Fashion",
    stock: 50,
    rating: 4.5,
    reviewsCount: 312,
    featured: true,
    createdAt: "2026-05-15T12:00:00Z",
    specs: {
      "Material": "100% Genuine Leather",
      "Capacity": "Up to 8 Cards + Cash",
      "RFID Block": "Yes",
      "Dimensions": "10.5cm x 7.5cm"
    }
  },
  {
    id: "p4",
    name: "Smart Brew Drip Coffee Maker - 12 Cup Programmable",
    slug: "smart-brew-drip-coffee-maker",
    description: "Kickstart your morning with programmable brewing cycles, premium glass carafe, custom strength controls, and dynamic warming plates.",
    price: 3499,
    originalPrice: 4999,
    discountPercentage: 30,
    images: ["https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?auto=format&fit=crop&w=600&q=80"],
    category: "Home Essentials",
    stock: 12,
    rating: 4.3,
    reviewsCount: 54,
    featured: false,
    createdAt: "2026-06-20T12:00:00Z",
    specs: {
      "Capacity": "12 Cups (1.8 Liters)",
      "Power": "900 Watts",
      "Programmable": "Yes (24-Hour Timer)",
      "Filter Type": "Reusable Mesh Filter"
    }
  },
  {
    id: "p5",
    name: "Premium Roasted California Almonds - 500g Pack",
    slug: "premium-roasted-california-almonds-500g",
    description: "Lightly salted and dry roasted natural California almonds. Rich source of protein, healthy fibers, and loaded with essential nutrients.",
    price: 549,
    originalPrice: 799,
    discountPercentage: 31,
    images: ["https://images.unsplash.com/photo-1508061253366-f7da188cff94?auto=format&fit=crop&w=600&q=80"],
    category: "Groceries",
    stock: 120,
    rating: 4.7,
    reviewsCount: 215,
    featured: true,
    createdAt: "2026-07-01T12:00:00Z",
    specs: {
      "Weight": "500 Grams",
      "Container": "Resealable Zipper Pouch",
      "Shelf Life": "6 Months",
      "Allergen Info": "Contains Tree Nuts"
    }
  },
  {
    id: "p6",
    name: "Ergonomic Memory Foam Office Chair Cushion",
    slug: "ergonomic-memory-foam-office-chair-cushion",
    description: "Premium seat cushion designed to relieve tailbone pressure, support correct posture during long working hours, and fit most chairs.",
    price: 1299,
    originalPrice: 2499,
    discountPercentage: 48,
    images: ["https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80"],
    category: "Home Essentials",
    stock: 45,
    rating: 4.4,
    reviewsCount: 83,
    featured: false,
    createdAt: "2026-06-18T12:00:00Z",
    specs: {
      "Filling Material": "100% Premium Memory Foam",
      "Cover": "Breathable Mesh (Washable)",
      "Non-slip Bottom": "Yes",
      "Dimensions": "45cm x 35cm x 7cm"
    }
  },
  {
    id: "p7",
    name: "Ultra-Lightweight Unisex Running Shoes",
    slug: "ultra-lightweight-unisex-running-shoes",
    description: "Performance running shoes with breathable knit upper, responsive shock-absorbing midsole, and flexible traction outer sole.",
    price: 2199,
    originalPrice: 3999,
    discountPercentage: 45,
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"],
    category: "Fashion",
    stock: 30,
    rating: 4.6,
    reviewsCount: 164,
    featured: false,
    createdAt: "2026-06-25T12:00:00Z",
    specs: {
      "Sole Material": "Phylon & Rubber",
      "Upper Material": "Flyknit Mesh",
      "Weight": "240g (Single Shoe)",
      "Ideal For": "Running, Gym, Walking"
    }
  },
  {
    id: "p8",
    name: "Organic Pure Extra Virgin Olive Oil - 1 Litre",
    slug: "organic-pure-extra-virgin-olive-oil-1l",
    description: "Cold-pressed extra virgin olive oil imported from Spain. Ideal for salads, gourmet dressings, sautéing, and healthy cooking alternatives.",
    price: 849,
    originalPrice: 1199,
    discountPercentage: 29,
    images: ["https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80"],
    category: "Groceries",
    stock: 75,
    rating: 4.7,
    reviewsCount: 104,
    featured: false,
    createdAt: "2026-07-02T12:00:00Z",
    specs: {
      "Volume": "1 Litre",
      "Packaging": "Dark Glass Bottle",
      "Process": "First Cold Pressed",
      "Origin": "Spain"
    }
  }
];

export const DUMMY_CATEGORIES = [
  { id: "c1", name: "Electronics", slug: "electronics", count: 25, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80" },
  { id: "c2", name: "Groceries", slug: "groceries", count: 42, image: "https://images.unsplash.com/photo-1508061253366-f7da188cff94?auto=format&fit=crop&w=150&q=80" },
  { id: "c3", name: "Fashion", slug: "fashion", count: 35, image: "https://images.unsplash.com/photo-1627124765135-56f70ed1165e?auto=format&fit=crop&w=150&q=80" },
  { id: "c4", name: "Home Essentials", slug: "home-kitchen", count: 18, image: "https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?auto=format&fit=crop&w=150&q=80" },
];
