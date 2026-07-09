import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <Loader size="lg" color="primary" />
      <p className="mt-4 text-gray-500 font-medium text-sm animate-pulse">
        Loading SharmaJi Store...
      </p>
    </div>
  );
}
