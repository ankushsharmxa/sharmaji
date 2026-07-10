import React from "react";
import { cn } from "@/utils/cn";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rectangular" | "circular";
}

export default function Skeleton({
  className,
  variant = "rectangular",
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-slate-200/80",
        {
          "rounded-md h-4 w-full": variant === "text",
          "rounded-xl h-40 w-full": variant === "rectangular",
          "rounded-full h-12 w-12": variant === "circular",
        },
        className
      )}
      {...props}
    />
  );
}
