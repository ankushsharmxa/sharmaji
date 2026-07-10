import { Review } from "./review";

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  brand: string;
  modelNumber: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  images: string[];
  category: string;
  stock: number;
  stockCount: number;
  rating: number;
  reviewsCount: number;
  ratingCount: number;
  featured?: boolean;
  createdAt: string;
  specs: Record<string, string>;
  warranty: string;
  deliveryTime: string;
  features: string[];
  reviews?: Review[];
}
