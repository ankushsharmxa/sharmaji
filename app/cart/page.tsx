"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import CartItem from "@/components/cart/CartItem";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { PRODUCTS } from "@/data/products";
import { ShoppingBag, ArrowRight, ShieldCheck, Ticket, Trash2 } from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { product: PRODUCTS[0], quantity: 1 },
    { product: PRODUCTS[1], quantity: 2 },
    { product: PRODUCTS[2], quantity: 1 },
  ]);

  const itemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  const originalTotal = cartItems.reduce(
    (acc, item) => acc + (item.product.originalPrice || item.product.price) * item.quantity, 
    0
  );
  
  const currentTotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity, 
    0
  );

  const discountAmount = originalTotal - currentTotal;
  const deliveryCharge = currentTotal > 499 ? 0 : 49;
  const finalTotal = currentTotal + deliveryCharge;

  const handleClearCartMock = () => {
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
        <div className="w-20 h-20 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag size={32} className="stroke-[1.5]" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">Your Shopping Cart is Empty</h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-2 mb-6 max-w-sm font-medium">
          Explore today&apos;s exclusive discounts and grab high-quality groceries, gadgets or wearables.
        </p>
        <div className="flex gap-3">
          <Link href="/shop">
            <Button variant="primary" className="font-bold">Shop Products</Button>
          </Link>
          <button 
            onClick={() => setCartItems([
              { product: PRODUCTS[0], quantity: 1 },
              { product: PRODUCTS[1], quantity: 2 },
            ])}
            className="text-xs font-bold text-primary-500 hover:text-primary-600 underline"
          >
            Load Demo Cart Items
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-gray-50/50 min-h-screen">
      <Container>
        <div className="flex justify-between items-baseline mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            Shopping Cart
            <span className="text-sm font-semibold text-gray-400">({itemsCount} Items)</span>
          </h1>
          <button 
            onClick={handleClearCartMock}
            className="text-xs font-bold text-red-500 hover:text-red-600 flex items-center gap-1 hover:bg-red-50 px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <Trash2 size={14} />
            Empty Cart (UI)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart items list */}
          <div className="lg:col-span-8 bg-white border border-gray-100 rounded-2xl p-6 shadow-soft h-fit">
            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
              <Link href="/shop" className="text-sm font-bold text-primary-500 hover:text-primary-600">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Cart Pricing summary panel */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Promo Vouchers Panel */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Ticket size={18} className="text-primary-500" />
                Vouchers & Offers
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Promo Code"
                  className="flex-grow bg-gray-50 border border-gray-200 text-xs rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary-500 uppercase font-semibold min-h-[44px]"
                  aria-label="Promo code input"
                />
                <Button size="sm" variant="outline" className="min-h-[44px]">Apply</Button>
              </div>
            </Card>

            {/* Pricing details */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-800 pb-4 border-b border-gray-100 mb-4">
                Price Details
              </h3>
              
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between text-gray-500">
                  <span>Price ({itemsCount} items)</span>
                  <span className="font-semibold text-gray-800">₹{originalTotal.toLocaleString("en-IN")}</span>
                </div>
                
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Discount</span>
                    <span>- ₹{discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-gray-500">
                  <span>Delivery Charges</span>
                  {deliveryCharge === 0 ? (
                    <span className="text-green-600 font-semibold uppercase">Free</span>
                  ) : (
                    <span className="font-semibold text-gray-800">₹{deliveryCharge}</span>
                  )}
                </div>

                <div className="border-t border-gray-100 my-2" />

                <div className="flex justify-between text-base font-extrabold text-gray-900">
                  <span>Total Amount</span>
                  <span>₹{finalTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {discountAmount > 0 && (
                <div className="mt-4 bg-green-50/50 text-green-700 text-xs font-bold p-3 rounded-lg text-center">
                  You will save ₹{discountAmount.toLocaleString("en-IN")} on this order! 🎉
                </div>
              )}

              {/* Disabled Checkout Button */}
              <Button disabled variant="primary" className="w-full flex items-center justify-center gap-2 font-bold shadow-soft mt-6 cursor-not-allowed opacity-60 min-h-[44px]">
                Proceed to Checkout
                <ArrowRight size={16} />
              </Button>
            </Card>

            {/* Buyer Protection Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 font-semibold">
              <ShieldCheck size={16} className="text-primary-500" />
              <span>Safe & Secure Payments. Easy Returns.</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
