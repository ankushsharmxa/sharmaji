export const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  CART: "/cart",
  CHECKOUT: "/checkout",
  LOGIN: "/login",
  SIGNUP: "/signup",
  PROFILE: "/profile",
  ORDERS: "/orders",
  ADMIN: "/admin",
  CATEGORY: (slug: string) => `/category/${slug}`,
  PRODUCT: (slug: string) => `/product/${slug}`,
};
