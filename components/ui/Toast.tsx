"use client";

import React, { useEffect } from "react";
import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from "lucide-react";
import { cn } from "@/utils/cn";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type = "info",
  isOpen,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3 px-4 py-3 bg-white rounded-lg border border-gray-100 shadow-hover animate-slide-up max-w-sm">
      {type === "success" && (
        <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
      )}
      {type === "error" && (
        <AlertCircle className="text-red-500 flex-shrink-0" size={18} />
      )}
      {type === "warning" && (
        <AlertTriangle className="text-yellow-500 flex-shrink-0" size={18} />
      )}
      {type === "info" && (
        <Info className="text-primary-500 flex-shrink-0" size={18} />
      )}

      <p className="text-sm font-medium text-gray-800 flex-grow">{message}</p>

      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 transition-colors p-0.5"
      >
        <X size={14} />
      </button>
    </div>
  );
}
