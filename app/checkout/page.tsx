"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import { CreditCard, ShoppingBag, ShieldCheck, Truck, CheckCircle2, Ticket, MapPin } from "lucide-react";
import RequireAuth from "@/components/auth/RequireAuth";

export default function CheckoutPage() {
  const [useSameAsBilling, setUseSameAsBilling] = useState(true);
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMode, setPaymentMode] = useState("cod");

  return (
    <RequireAuth>
      <div className="py-10 bg-gray-50/50 min-h-screen">
      <Container>
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Shipping Form & Billing */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Shipping Address Panel */}
            <Card className="p-6 sm:p-8">
              <h3 className="text-base font-extrabold text-gray-800 border-b border-gray-100 pb-3 mb-6 flex items-center gap-2">
                <Truck size={18} className="text-primary-500" />
                Shipping Address
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Full Name" placeholder="John Doe" disabled value="Ankus Sharma" />
                <Input label="Phone Number" placeholder="10-digit number" disabled value="+91 98765 43210" />
                <div className="sm:col-span-2">
                  <Input label="Email Address" type="email" placeholder="name@example.com" disabled value="ankus@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <Input label="Street Address / Locality" placeholder="Flat, House no., Street" disabled value="123, VIP Main Road, Sector 5" />
                </div>
                <Input label="City" placeholder="City" disabled value="Kolkata" />
                <Input label="State" placeholder="State" disabled value="West Bengal" />
                <Input label="ZIP / Postal Code" placeholder="6-digit ZIP" disabled value="700091" />
              </div>

              {/* Billing address matching checkbox */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <label className="flex items-center gap-2.5 text-sm font-semibold text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useSameAsBilling}
                    onChange={(e) => setUseSameAsBilling(e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500/20 w-4 h-4"
                  />
                  <span>Billing Address is same as Shipping Address</span>
                </label>
              </div>
            </Card>

            {/* Separate Billing Address (Conditional) */}
            {!useSameAsBilling && (
              <Card className="p-6 sm:p-8 animate-fade-in">
                <h3 className="text-base font-extrabold text-gray-800 border-b border-gray-100 pb-3 mb-6 flex items-center gap-2">
                  <MapPin size={18} className="text-primary-500" />
                  Billing Address
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input label="Billing Full Name" placeholder="Enter name" />
                  <Input label="Phone Number" placeholder="Phone number" />
                  <div className="sm:col-span-2">
                    <Input label="Street Address / Locality" placeholder="Flat, House no., Street" />
                  </div>
                  <Input label="City" placeholder="City" />
                  <Input label="State" placeholder="State" />
                  <Input label="ZIP Code" placeholder="6-digit ZIP" />
                </div>
              </Card>
            )}

            {/* Delivery Methods */}
            <Card className="p-6 sm:p-8">
              <h3 className="text-base font-extrabold text-gray-800 border-b border-gray-100 pb-3 mb-6">
                Delivery Method
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer hover:border-primary-100 transition-colors ${
                  deliveryMethod === "standard" ? "border-primary-500 bg-primary-50/10" : "border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    checked={deliveryMethod === "standard"}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="text-primary-600 focus:ring-primary-500/20 mt-1"
                  />
                  <div>
                    <span className="text-sm font-bold text-gray-800">Standard Delivery (FREE)</span>
                    <p className="text-xs text-gray-400 mt-1">Delivered within 3 - 5 business days.</p>
                  </div>
                </label>

                <label className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer hover:border-primary-100 transition-colors ${
                  deliveryMethod === "express" ? "border-primary-500 bg-primary-50/10" : "border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="delivery"
                    value="express"
                    checked={deliveryMethod === "express"}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                    className="text-primary-600 focus:ring-primary-500/20 mt-1"
                  />
                  <div>
                    <span className="text-sm font-bold text-gray-800">Express Courier (₹99)</span>
                    <p className="text-xs text-gray-400 mt-1">Delivered tomorrow morning. Guaranteed.</p>
                  </div>
                </label>
              </div>
            </Card>

            {/* Payment Methods */}
            <Card className="p-6 sm:p-8">
              <h3 className="text-base font-extrabold text-gray-800 border-b border-gray-100 pb-3 mb-6 flex items-center gap-2">
                <CreditCard size={18} className="text-primary-500" />
                Payment Mode
              </h3>
              
              <div className="flex flex-col gap-3">
                <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-primary-100 transition-colors ${
                  paymentMode === "cod" ? "border-primary-500 bg-primary-50/10" : "border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMode === "cod"}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="text-primary-600 focus:ring-primary-500/20"
                  />
                  <div>
                    <span className="text-sm font-bold text-gray-800">Cash on Delivery (COD)</span>
                    <p className="text-xs text-gray-400 mt-0.5">Pay in cash or UPI upon package arrival.</p>
                  </div>
                </label>
                
                <label className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:border-primary-100 transition-colors ${
                  paymentMode === "online" ? "border-primary-500 bg-primary-50/10" : "border-gray-200"
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMode === "online"}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="text-primary-600 focus:ring-primary-500/20"
                  />
                  <div>
                    <span className="text-sm font-bold text-gray-800">Online UPI / Cards (Mock)</span>
                    <p className="text-xs text-gray-400 mt-0.5">Pay securely with online payment gateways.</p>
                  </div>
                </label>
              </div>
            </Card>
          </div>

          {/* Sidebar summary */}
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
                />
                <Button size="sm" variant="outline" className="min-h-[44px]">Apply</Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-800 pb-4 border-b border-gray-100 mb-4 flex items-center gap-2">
                <ShoppingBag size={18} className="text-primary-500" />
                Order Summary
              </h3>

              <div className="flex flex-col gap-4 max-h-[220px] overflow-y-auto custom-scrollbar mb-4">
                <div className="flex gap-3 justify-between items-center text-sm font-semibold text-gray-600">
                  <span className="truncate max-w-[200px]">AeroSound Max Headphones x 1</span>
                  <span className="text-gray-800">₹8,999</span>
                </div>
                <div className="flex gap-3 justify-between items-center text-sm font-semibold text-gray-600">
                  <span className="truncate max-w-[200px]">ProFit Smartwatch x 1</span>
                  <span className="text-gray-800">₹4,599</span>
                </div>
              </div>

              <div className="border-t border-gray-100 my-4" />

              <div className="flex justify-between text-base font-extrabold text-gray-900 mb-6">
                <span>Grand Total</span>
                <span>₹13,598</span>
              </div>

              {/* Disabled Checkout Trigger */}
              <Button disabled variant="orange" size="lg" className="w-full font-bold shadow-soft cursor-not-allowed opacity-60 min-h-[44px]">
                Place Order (Disabled)
              </Button>

              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider justify-center pt-4">
                <ShieldCheck size={14} className="text-primary-500" />
                <span>SSL Encryption Enabled</span>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
    </RequireAuth>
  );
}
