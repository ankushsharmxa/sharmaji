export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  images: string[];
  category: string;
  stock: number;
  rating: number;
  reviewsCount: number;
  featured?: boolean;
  createdAt: string;
  specs?: Record<string, string>;
}
