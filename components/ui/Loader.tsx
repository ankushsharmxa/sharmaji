import React from "react";
import { cn } from "@/utils/cn";

export interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white" | "orange";
  className?: string;
}

export default function Loader({
  size = "md",
  color = "primary",
  className,
}: LoaderProps) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-t-transparent",
        {
          "h-5 w-5 border-2": size === "sm",
          "h-8 w-8 border-3": size === "md",
          "h-12 w-12 border-4": size === "lg",
          "border-primary-500 border-t-transparent": color === "primary",
          "border-white border-t-transparent": color === "white",
          "border-orange-500 border-t-transparent": color === "orange",
        },
        className
      )}
    />
  );
}
