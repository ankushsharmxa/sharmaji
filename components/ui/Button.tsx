import React from "react";
import { cn } from "@/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "orange";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100",
          {
            "bg-primary-500 text-white hover:bg-primary-600 shadow-soft": variant === "primary",
            "bg-gray-100 text-gray-800 hover:bg-gray-200": variant === "secondary",
            "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50": variant === "outline",
            "text-gray-600 hover:bg-gray-100": variant === "ghost",
            "bg-red-600 text-white hover:bg-red-700": variant === "danger",
            "bg-orange-500 text-white hover:bg-orange-600 shadow-soft": variant === "orange",
            "h-9 px-3 text-xs": size === "sm",
            "h-11 px-5 text-sm": size === "md",
            "h-13 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
