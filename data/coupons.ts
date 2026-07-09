import { Coupon } from "@/types";

export const COUPONS: Coupon[] = [
  {
    id: "cp1",
    code: "SHJGROCERY15",
    discountType: "percentage",
    discountValue: 15,
    minOrderAmount: 999,
    expiryDate: "2026-12-31T23:59:59Z",
    isActive: true
  },
  {
    id: "cp2",
    code: "SHJAUDIO1500",
    discountType: "fixed",
    discountValue: 1500,
    minOrderAmount: 4999,
    expiryDate: "2026-12-31T23:59:59Z",
    isActive: true
  }
];
