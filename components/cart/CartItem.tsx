import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Plus, Minus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-6 border-b border-gray-100 items-center justify-between">
      {/* Product Image */}
      <div className="relative w-20 h-20 bg-gray-50 rounded-lg flex-shrink-0 border border-gray-100 overflow-hidden">
        <Image
          src={product.images[0] || "/placeholder-product.webp"}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Product Details & Actions */}
      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">
          {product.category}
        </span>
        <Link href={`/product/${product.slug}`} className="hover:text-primary-500 transition-colors">
          <h4 className="font-semibold text-gray-800 text-sm md:text-base line-clamp-1">
            {product.name}
          </h4>
        </Link>
        
        {/* Quantity Controls & Trash */}
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center border border-gray-200 rounded-lg">
            <button className="p-1.5 hover:bg-gray-50 rounded-l-lg transition-colors text-gray-500 hover:text-gray-700">
              <Minus size={14} />
            </button>
            <span className="px-3 text-sm font-bold text-gray-700">
              {quantity}
            </span>
            <button className="p-1.5 hover:bg-gray-50 rounded-r-lg transition-colors text-gray-500 hover:text-gray-700">
              <Plus size={14} />
            </button>
          </div>
          
          <button className="text-gray-400 hover:text-red-500 transition-colors p-1.5 hover:bg-red-50 rounded-full">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Price block */}
      <div className="text-right flex-shrink-0 pl-2">
        <div className="font-extrabold text-gray-900 text-base md:text-lg">
          ₹{(product.price * quantity).toLocaleString("en-IN")}
        </div>
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="text-xs text-gray-400 line-through">
            ₹{(product.originalPrice * quantity).toLocaleString("en-IN")}
          </div>
        )}
      </div>
    </div>
  );
}
