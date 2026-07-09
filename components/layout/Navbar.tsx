"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Button from "@/components/ui/Button";
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  User, 
  LayoutDashboard,
  XCircle
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop All", href: "/shop" },
    { label: "My Orders", href: "/orders" },
  ];

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-soft transition-all duration-300">
      <Container className="h-16 md:h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 touch-target" aria-label="SharmaJi Store Home">
          <Image 
            src="/logo.svg" 
            alt="SharmaJi Store Logo" 
            width={180} 
            height={36} 
            className="h-9 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-grow max-w-xl relative">
          <input
            type="text"
            placeholder="Search for premium products, brands and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 text-sm rounded-lg pl-10 pr-10 py-3 focus:outline-none focus:border-primary-500 focus:bg-white transition-colors min-h-[44px]"
            aria-label="Search products"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          {searchQuery && (
            <button 
              onClick={handleClearSearch}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Clear search"
            >
              <XCircle size={16} />
            </button>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-sm font-bold text-gray-600 hover:text-primary-500 transition-colors py-2 focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* User Actions & Utility Buttons */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Dashboard Quick Access */}
          <Link href="/admin" className="hidden sm:inline-flex" aria-label="Admin Dashboard">
            <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-primary-500 touch-target">
              <LayoutDashboard size={14} />
              Admin
            </Button>
          </Link>

          {/* Cart Icon Button with Badge */}
          <Link 
            href="/cart" 
            className="relative p-2.5 text-gray-700 hover:text-primary-500 transition-colors rounded-full hover:bg-gray-50 touch-target"
            aria-label="Shopping Cart with 3 items"
          >
            <ShoppingBag size={20} className="stroke-[1.8]" />
            <span className="absolute top-1 right-1 w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold shadow-soft">
              3
            </span>
          </Link>

          {/* Auth Button */}
          <Link href="/login" className="hidden md:block" aria-label="Login page">
            <Button variant="outline" size="sm" className="flex items-center gap-2 font-bold touch-target">
              <User size={14} />
              Login
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 lg:hidden text-gray-700 hover:bg-gray-50 rounded-full touch-target"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Sticky Mobile Search Bar */}
      <div className="md:hidden border-t border-gray-100 bg-white px-4 py-2 flex items-center gap-2 sticky bottom-0 w-full z-40">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 border border-gray-200 text-xs rounded-lg pl-9 pr-8 py-2.5 focus:outline-none focus:border-primary-500 min-h-[44px]"
            aria-label="Search products"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          {searchQuery && (
            <button 
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Clear search"
            >
              <XCircle size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Overlay with Smooth Animation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white border-t border-gray-100 flex flex-col justify-between p-6 animate-slide-right lg:hidden">
          <div className="flex flex-col gap-6">
            {/* Menu Links */}
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-bold text-gray-800 hover:text-primary-500 py-3 border-b border-gray-50 block touch-target"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/admin" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-bold text-gray-800 hover:text-primary-500 py-3 border-b border-gray-50 flex items-center gap-2 touch-target"
              >
                <LayoutDashboard size={18} />
                Admin Dashboard
              </Link>
            </nav>
          </div>

          {/* Bottom actions */}
          <div className="flex flex-col gap-3">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full font-bold min-h-[44px]" variant="primary">Login / Sign Up</Button>
            </Link>
            <p className="text-center text-xs text-gray-400">© 2026 SharmaJi Store. Built with Next.js 15.</p>
          </div>
        </div>
      )}
    </header>
  );
}
