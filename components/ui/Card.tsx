import React from "react";
import { cn } from "@/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  premium?: boolean;
}

export default function Card({
  className,
  hoverable = true,
  premium = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-100/80 shadow-soft overflow-hidden transition-all duration-300",
        hoverable && "hover:shadow-hover hover:-translate-y-0.5",
        premium && "shadow-premium border-primary-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
