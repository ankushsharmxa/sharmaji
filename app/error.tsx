"use strict";
"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { AlertOctagon, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
        <AlertOctagon size={32} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        An unexpected error occurred while loading this page. Please try reloading or return to home.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={reset} variant="primary" size="md" className="flex items-center gap-2">
          <RotateCcw size={16} />
          Try Again
        </Button>
        <Link href="/">
          <Button variant="outline" size="md" className="flex items-center gap-2 w-full">
            <Home size={16} />
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
