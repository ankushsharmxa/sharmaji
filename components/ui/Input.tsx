import React from "react";
import { cn } from "@/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, helperText, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            ref={ref}
            className={cn(
              "w-full px-4 py-3 rounded-lg border bg-white text-sm text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:bg-gray-50 disabled:text-gray-500",
              error
                ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                : "border-gray-200 focus:border-primary-500",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <span className="text-xs text-red-500 font-medium">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span className="text-xs text-gray-400">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
