import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "orange";
  size?: "sm" | "md";
}

export default function Badge({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-bold tracking-wide rounded-full uppercase",
        {
          "bg-primary-50 text-primary-600": variant === "primary",
          "bg-gray-100 text-gray-700": variant === "secondary",
          "bg-green-50 text-green-600": variant === "success",
          "bg-yellow-50 text-yellow-700": variant === "warning",
          "bg-red-50 text-red-600": variant === "danger",
          "bg-orange-50 text-orange-600": variant === "orange",
          "px-2 py-0.5 text-[10px]": size === "sm",
          "px-2.5 py-1 text-xs": size === "md",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
