import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-6">
        <Search size={40} className="stroke-[1.5]" />
      </div>
      <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight mb-2">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <Button variant="primary" className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
