"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Button from "@/components/ui/Button";
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  X, 
  User, 
  Heart,
  XCircle,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  LogOut
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { useAuth } from "@/context/AuthContext";
import { authService } from "@/services/auth.service";

export default function Navbar() {
  const pathname = usePathname();
  const { user, profile } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const publicNavLinks = [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/#categories" },
    { label: "Featured Deals", href: "/#deals" },
    { label: "Fresh Arrivals", href: "/#new-arrivals" }
  ];

  // Derive suggestions directly during render
  const suggestions = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  // Handle outside clicks to close search suggestions and profile dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleLogout = async () => {
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
    await authService.logout();
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/80 shadow-sm transition-all duration-200">
      <Container className="h-16 md:h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 focus-visible:ring-2 focus-visible:ring-primary-500 rounded-xl" aria-label="SharmaJi Store Home">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center gap-1.5">
            <span className="bg-primary-600 text-white px-2 py-0.5 rounded-lg text-lg font-black shadow-md shadow-primary-500/20">SJ</span>
            <span>SHARMAJI</span>
            <span className="text-primary-600 font-extrabold">.</span>
          </span>
        </Link>

        {/* Center Navigation Links - Desktop Only */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {publicNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.label} 
                href={link.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive ? "text-primary-600 font-extrabold" : "text-slate-600 hover:text-primary-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Search Bar - Tablet & Desktop */}
        <div ref={searchRef} className="hidden md:flex relative flex-grow max-w-sm">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search audio, chargers..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl pl-9 pr-8 py-2.5 focus:outline-none focus:border-primary-500 min-h-[40px] font-medium"
              aria-label="Search"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={13} />
            {searchQuery && (
              <button 
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-0.5"
                aria-label="Clear search"
              >
                <XCircle size={13} />
              </button>
            )}
          </div>

          {/* Autocomplete suggestions dropdown */}
          {showSuggestions && searchQuery.trim() !== "" && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl p-3 z-50 flex flex-col gap-2">
              {suggestions.length > 0 ? (
                <>
                  <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-2 py-1 flex items-center gap-1">
                    <TrendingUp size={10} /> Suggestions
                  </div>
                  {suggestions.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => setShowSuggestions(false)}
                      className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors group"
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0 flex items-center justify-center p-1">
                        <Image src={product.images[0]} alt={product.name} fill className="object-contain p-0.5" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="text-xs font-bold text-slate-800 truncate group-hover:text-primary-600 transition-colors">{product.name}</h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{product.brand}</p>
                      </div>
                      <ArrowRight size={12} className="text-slate-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </>
              ) : (
                <div className="text-center py-6 text-xs text-slate-400 font-medium">
                  No matching electronic products found
                </div>
              )}
            </div>
          )}
        </div>

        {/* User Utilities */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Wishlist Icon */}
          <Link 
            href="#" 
            className="p-2.5 text-slate-700 hover:text-primary-500 transition-colors rounded-full hover:bg-slate-50 touch-target"
            aria-label="Wishlist items"
          >
            <Heart size={18} className="stroke-[1.8]" />
          </Link>

          {/* Cart Icon */}
          <Link 
            href="/cart" 
            className="relative p-2.5 text-slate-700 hover:text-primary-500 transition-colors rounded-full hover:bg-slate-50 touch-target group"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={18} className="stroke-[1.8] group-hover:scale-105 transition-transform" />
            <span className="absolute top-1 right-1 min-w-[18px] h-[18px] px-1 bg-primary-600 text-white rounded-full flex items-center justify-center text-[9px] font-black shadow-md shadow-primary-500/10 border border-white">
              3
            </span>
          </Link>

          {/* Auth State Menu for Desktop */}
          {user ? (
            <div ref={profileMenuRef} className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="p-2 text-slate-700 hover:text-primary-500 transition-colors rounded-full hover:bg-slate-50 touch-target flex items-center justify-center border border-slate-100 ml-1"
                aria-label="User Account Menu"
              >
                {profile?.photoURL ? (
                  <Image
                    src={profile.photoURL}
                    alt={profile.displayName || "User avatar"}
                    width={24}
                    height={24}
                    unoptimized
                    className="w-6 h-6 rounded-full object-cover"
                  />
                ) : (
                  <User size={18} className="stroke-[1.8]" />
                )}
              </button>

              {/* Profile Dropdown Panel */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-slate-100 rounded-xl shadow-lg py-2 z-50 text-xs font-bold text-slate-700">
                  <div className="px-4 py-2.5 border-b border-slate-50">
                    <p className="text-slate-900 truncate font-black">{profile?.displayName || "SharmaJi User"}</p>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5 font-semibold">{profile?.email}</p>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setIsProfileDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <span>My Profile</span>
                  </Link>
                  <Link
                    href="/orders"
                    onClick={() => setIsProfileDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <span>My Orders</span>
                  </Link>
                  {profile?.role === "admin" && (
                    <Link
                      href="/admin"
                      onClick={() => setIsProfileDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 hover:bg-slate-50 transition-colors text-primary-600"
                    >
                      <ShieldAlert size={12} />
                      <span>Admin Panel</span>
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center gap-2 px-4 py-2.5 hover:bg-slate-50 transition-colors text-red-600 border-t border-slate-50 mt-1"
                  >
                    <LogOut size={12} />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              href="/login" 
              className="p-2.5 text-slate-700 hover:text-primary-500 transition-colors rounded-full hover:bg-slate-50 touch-target" 
              aria-label="Login / Register"
            >
              <User size={18} className="stroke-[1.8]" />
            </Link>
          )}

          {/* Mobile Menu Drawer Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 lg:hidden text-slate-700 hover:bg-slate-50 rounded-full touch-target transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {/* Sticky Mobile Search Input */}
      <div className="md:hidden border-t border-slate-100 bg-white px-4 py-2 flex items-center gap-2 sticky bottom-0 w-full z-40">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search audio, chargers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 text-xs rounded-xl pl-9 pr-8 py-2.5 focus:outline-none focus:border-primary-500 min-h-[40px] font-medium"
            aria-label="Search"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={13} />
          {searchQuery && (
            <button 
              onClick={handleClearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-0.5"
              aria-label="Clear search"
            >
              <XCircle size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer (Slide Out Menu) */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-full sm:w-[320px] bg-white shadow-2xl border-l border-slate-100 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "64px" }}
      >
        <div className="flex flex-col gap-6">
          {/* User profile brief (Mobile Drawer) */}
          {user && (
            <div className="p-4 bg-slate-50 rounded-xl mb-2 flex flex-col gap-1">
              <p className="text-xs font-black text-slate-900">{profile?.displayName || "SharmaJi User"}</p>
              <p className="text-[10px] text-slate-500 font-semibold truncate">{profile?.email}</p>
              <span className="text-[9px] bg-primary-100 text-primary-700 font-bold px-2 py-0.5 rounded-full w-max uppercase tracking-wider mt-1.5">
                {profile?.role}
              </span>
            </div>
          )}

          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {publicNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold py-3.5 border-b border-slate-50 block transition-colors ${
                    isActive ? "text-primary-600 font-black" : "text-slate-800 hover:text-primary-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Authenticated routes in mobile drawer */}
            {user && (
              <>
                <Link 
                  href="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold py-3.5 border-b border-slate-50 block text-slate-800 hover:text-primary-500"
                >
                  My Profile
                </Link>
                <Link 
                  href="/orders"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold py-3.5 border-b border-slate-50 block text-slate-800 hover:text-primary-500"
                >
                  My Orders
                </Link>
                {profile?.role === "admin" && (
                  <Link 
                    href="/admin"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-bold py-3.5 border-b border-slate-50 block text-primary-600"
                  >
                    Admin Panel
                  </Link>
                )}
              </>
            )}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          {user ? (
            <Button 
              className="w-full font-bold min-h-[44px] rounded-xl shadow-soft" 
              variant="outline"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          ) : (
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full font-bold min-h-[44px] rounded-xl shadow-soft" variant="primary">Log In / Register</Button>
            </Link>
          )}
          <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">
            © 2026 SHARMAJI store. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Mobile Drawer Overlay Background */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 top-[64px] bg-slate-900/20 backdrop-blur-[2px] z-40 lg:hidden"
        />
      )}
    </header>
  );
}
