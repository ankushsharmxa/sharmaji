export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bgGradient: string;
  accentText: string;
  btnText: string;
  href: string;
  image: string;
}

export const BANNERS: Banner[] = [
  {
    id: "banner-1",
    title: "Upgrade Your Smart Living",
    subtitle: "PREMIUM DEALS LIVE",
    description: "Enjoy flat discount offers up to 45% off on our handpicked wireless earbuds, smartwatches, office essentials, and organic groceries.",
    bgGradient: "from-primary-600 to-primary-900",
    accentText: "⚡ Next-Day Delivery",
    btnText: "Shop Now",
    href: "/shop",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80"
  }
];
