import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  reviewsCount?: number;
  size?: "sm" | "md";
}

export default function Rating({
  className,
  rating,
  reviewsCount,
  size = "sm",
  ...props
}: RatingProps) {
  return (
    <div className={cn("flex items-center gap-1.5", className)} {...props}>
      <div
        className={cn(
          "flex items-center gap-0.5 bg-green-600 text-white font-black rounded",
          {
            "text-[9px] px-1.5 py-0.5": size === "sm",
            "text-xs px-2 py-0.5": size === "md",
          }
        )}
      >
        <span>{rating.toFixed(1)}</span>
        <Star size={size === "sm" ? 8 : 10} className="fill-current" />
      </div>
      
      {reviewsCount !== undefined && (
        <span
          className={cn("font-semibold text-slate-400", {
            "text-[10px]": size === "sm",
            "text-xs": size === "md",
          })}
        >
          ({reviewsCount} Reviews)
        </span>
      )}
    </div>
  );
}
