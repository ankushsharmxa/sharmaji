"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Package, ChevronRight, Eye } from "lucide-react";
import RequireAuth from "@/components/auth/RequireAuth";

export default function OrdersPage() {
  const mockOrders = [
    {
      id: "SHJ-9821",
      date: "08 July 2026",
      status: "processing",
      totalAmount: 14497,
      items: [
        { name: "AeroSound Max Headphones", quantity: 1, price: 8999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=100&q=80" },
        { name: "ProFit Smartwatch", quantity: 1, price: 4599, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=100&q=80" },
        { name: "Classic Leather Wallet", quantity: 1, price: 899, image: "https://images.unsplash.com/photo-1627124765135-56f70ed1165e?auto=format&fit=crop&w=100&q=80" }
      ]
    },
    {
      id: "SHJ-8742",
      date: "28 June 2026",
      status: "delivered",
      totalAmount: 549,
      items: [
        { name: "Premium Roasted California Almonds - 500g", quantity: 1, price: 549, image: "https://images.unsplash.com/photo-1508061253366-f7da188cff94?auto=format&fit=crop&w=100&q=80" }
      ]
    }
  ];

  return (
    <RequireAuth>
      <div className="py-10 bg-gray-50/50 min-h-screen">
      <Container className="max-w-4xl">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-8 flex items-center gap-2">
          <Package size={24} className="text-primary-500" />
          My Orders
        </h1>

        <div className="flex flex-col gap-6">
          {mockOrders.map((order) => (
            <Card key={order.id} className="p-6">
              
              {/* Order Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100 mb-6">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Order ID</span>
                    <p className="text-sm font-extrabold text-gray-800">{order.id}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date Placed</span>
                    <p className="text-sm font-semibold text-gray-600">{order.date}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total</span>
                    <p className="text-sm font-extrabold text-gray-900">₹{order.totalAmount.toLocaleString("en-IN")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {order.status === "delivered" ? (
                    <Badge variant="success" size="md">Delivered</Badge>
                  ) : (
                    <Badge variant="orange" size="md">In Transit</Badge>
                  )}
                  <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs">
                    <Eye size={12} />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Order Items */}
              <div className="flex flex-col gap-4">
                {order.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 justify-between">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="relative w-12 h-12 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-800 truncate max-w-sm sm:max-w-md">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-400 font-semibold mt-0.5">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-sm font-extrabold text-gray-800">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
    </RequireAuth>
  );
}
