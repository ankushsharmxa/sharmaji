import React from "react";
import { cn } from "@/utils/cn";

interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  size?: "sm" | "md" | "lg";
}

export default function Price({
  className,
  price,
  originalPrice,
  discountPercentage,
  size = "md",
  ...props
}: PriceProps) {
  const formattedPrice = `₹${price.toLocaleString("en-IN")}`;
  const formattedOriginalPrice = originalPrice ? `₹${originalPrice.toLocaleString("en-IN")}` : null;

  return (
    <div className={cn("flex flex-wrap items-baseline gap-1.5", className)} {...props}>
      <span
        className={cn("font-black text-slate-900", {
          "text-sm sm:text-base": size === "sm",
          "text-base sm:text-lg": size === "md",
          "text-2xl sm:text-3xl": size === "lg",
        })}
      >
        {formattedPrice}
      </span>
      
      {formattedOriginalPrice && originalPrice! > price && (
        <span
          className={cn("text-slate-400 line-through font-medium", {
            "text-[10px]": size === "sm",
            "text-xs": size === "md",
            "text-sm": size === "lg",
          })}
        >
          {formattedOriginalPrice}
        </span>
      )}

      {discountPercentage && discountPercentage > 0 ? (
        <span
          className={cn("font-bold text-orange-500", {
            "text-[10px]": size === "sm",
            "text-xs": size === "md",
            "text-sm": size === "lg",
          })}
        >
          {discountPercentage}% OFF
        </span>
      ) : null}
    </div>
  );
}
