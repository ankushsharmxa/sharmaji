"use client";

import React, { useState } from "react";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  Ticket, 
  FolderTree, 
  Settings, 
  Plus, 
  ChevronRight, 
  Layers 
} from "lucide-react";
import RequireAdmin from "@/components/auth/RequireAdmin";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const sidebarLinks = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "customers", label: "Customers", icon: Users },
    { id: "coupons", label: "Coupons", icon: Ticket },
    { id: "categories", label: "Categories", icon: FolderTree },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <RequireAdmin>
      <div className="py-10 bg-gray-50/50 min-h-screen">
        <Container>
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-400 font-bold mb-6">
          <span>PORTAL</span>
          <ChevronRight size={12} />
          <span>ADMIN</span>
          <ChevronRight size={12} />
          <span className="text-gray-600 uppercase">{activeTab}</span>
        </div>

        {/* Dashboard Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar Navigation */}
          <aside className="lg:col-span-3 flex flex-col gap-2">
            <Card className="p-4 flex flex-col gap-1.5 bg-white">
              {sidebarLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => setActiveTab(link.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                      activeTab === link.id 
                        ? "bg-primary-500 text-white shadow-soft" 
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </Card>
          </aside>

          {/* Right Panel Layout */}
          <main className="lg:col-span-9 flex flex-col gap-6">
            
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl p-6 shadow-soft">
              <div>
                <h1 className="text-xl font-extrabold text-gray-900 capitalize">{activeTab} Control Center</h1>
                <p className="text-xs text-gray-500 mt-1">Configure catalogs, examine orders status, or modify settings parameters.</p>
              </div>
              <div>
                <Button variant="primary" size="sm" className="flex items-center gap-1.5 font-bold min-h-[44px]">
                  <Plus size={16} />
                  Add New Item
                </Button>
              </div>
            </div>

            {/* Dashboard Content Switcher */}
            {activeTab === "dashboard" && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="p-6 flex flex-col justify-between min-h-[140px]">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Inventory Capacity</span>
                    <h3 className="text-2xl font-black text-gray-800 mt-2">18 / 100 Products</h3>
                  </div>
                  <span className="text-[10px] text-primary-500 font-extrabold mt-4 uppercase">82 items slots remaining</span>
                </Card>
                
                <Card className="p-6 flex flex-col justify-between min-h-[140px]">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Coupons Issued</span>
                    <h3 className="text-2xl font-black text-gray-800 mt-2">5 Active Code</h3>
                  </div>
                  <span className="text-[10px] text-green-600 font-extrabold mt-4 uppercase">All campaigns live</span>
                </Card>

                <Card className="p-6 flex flex-col justify-between min-h-[140px]">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Delivery Coverage</span>
                    <h3 className="text-2xl font-black text-gray-800 mt-2">24 Cities</h3>
                  </div>
                  <span className="text-[10px] text-indigo-500 font-extrabold mt-4 uppercase">Standard tracking active</span>
                </Card>
              </div>
            )}

            {/* Empty State Panel for other sections */}
            {activeTab !== "dashboard" && (
              <Card className="p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-16 h-16 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center mb-4">
                  <Layers size={28} />
                </div>
                <h3 className="text-base font-extrabold text-gray-800 capitalize">{activeTab} List is Empty</h3>
                <p className="text-xs text-gray-400 mt-1 max-w-sm">
                  There are currently no items configured under this list. Add a new item to get started.
                </p>
                <Button variant="outline" size="sm" className="mt-6 flex items-center gap-1.5 font-bold min-h-[44px]">
                  <Plus size={14} />
                  Add {activeTab}
                </Button>
              </Card>
            )}

          </main>
        </div>
      </Container>
    </div>
    </RequireAdmin>
  );
}
