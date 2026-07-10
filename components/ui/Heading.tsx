import React from "react";
import { cn } from "@/utils/cn";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  weight?: "normal" | "semibold" | "bold" | "black" | "extrabold";
  align?: "left" | "center" | "right";
}

export default function Heading({
  className,
  level = 2,
  weight = "extrabold",
  align = "left",
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={cn(
        "text-slate-900 tracking-tight leading-tight",
        {
          "text-3xl sm:text-4xl md:text-5xl": level === 1,
          "text-2xl sm:text-3xl": level === 2,
          "text-lg sm:text-xl": level === 3,
          "text-sm sm:text-base": level === 4,
          "font-normal": weight === "normal",
          "font-semibold": weight === "semibold",
          "font-bold": weight === "bold",
          "font-extrabold": weight === "extrabold",
          "font-black": weight === "black",
          "text-left": align === "left",
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
