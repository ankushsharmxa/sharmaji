import React from "react";
import { cn } from "@/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: "white" | "gray" | "slate" | "transparent";
  spacing?: "sm" | "md" | "lg" | "none";
}

export default function Section({
  className,
  background = "transparent",
  spacing = "md",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full transition-colors duration-200",
        {
          "bg-white": background === "white",
          "bg-gray-50/50": background === "gray",
          "bg-slate-50": background === "slate",
          "bg-transparent": background === "transparent",
          "py-6": spacing === "sm",
          "py-10 md:py-12": spacing === "md",
          "py-16 md:py-20": spacing === "lg",
          "py-0": spacing === "none",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
