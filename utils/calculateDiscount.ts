export function calculateDiscount(originalPrice: number, price: number): number {
  if (originalPrice <= 0 || price <= 0 || originalPrice <= price) {
    return 0;
  }
  const discount = ((originalPrice - price) / originalPrice) * 100;
  return Math.round(discount);
}
