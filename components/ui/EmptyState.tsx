import React from "react";
import { Info } from "lucide-react";
import { cn } from "@/utils/cn";
import Button from "./Button";

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  actionLabel?: string;
  onActionClick?: () => void;
}

export default function EmptyState({
  className,
  title,
  description,
  actionLabel,
  onActionClick,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-16 px-4 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50 max-w-md mx-auto",
        className
      )}
      {...props}
    >
      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
        <Info size={20} />
      </div>
      <h3 className="text-base font-extrabold text-slate-800 tracking-tight mb-1">{title}</h3>
      <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6 max-w-xs">
        {description}
      </p>
      {actionLabel && onActionClick && (
        <Button variant="primary" size="sm" onClick={onActionClick} className="font-bold rounded-xl shadow-soft">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
