"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Sparkles
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { label: "Headphones", href: "/category/headphones" },
      { label: "Fast Chargers", href: "/category/chargers" },
      { label: "Speakers", href: "/category/speakers" },
      { label: "Power Banks", href: "/category/power-banks" },
      { label: "Wireless Earbuds", href: "/category/earbuds" },
    ],
    support: [
      { label: "Warranty Support", href: "#" },
      { label: "Shipping Info", href: "#" },
      { label: "Returns & Exchanges", href: "#" },
      { label: "FAQs & Guides", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Contact Support", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 text-slate-500">
      <Container>
        
        {/* Core Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-slate-100 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-50 text-primary-600 rounded-xl">
              <Truck size={22} className="stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Free Metro Shipping</h4>
              <p className="text-xs text-slate-400 font-medium">Free shipping on orders above ₹499 with priority metro distribution.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-50 text-primary-600 rounded-xl">
              <RotateCcw size={22} className="stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">Easy 7-Day Returns</h4>
              <p className="text-xs text-slate-400 font-medium">Hassle-free doorstep return pickup and quick refunds process.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-50 text-primary-600 rounded-xl">
              <ShieldCheck size={22} className="stroke-[1.8]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">100% Certified Tech</h4>
              <p className="text-xs text-slate-400 font-medium">Authorized brand products with official manufacturer warranty support.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="text-xl font-black tracking-tight text-slate-950 flex items-center gap-1.5">
              <span className="bg-primary-600 text-white px-2 py-0.5 rounded-lg text-lg font-black shadow-md shadow-primary-500/20">SJ</span>
              <span>SHARMAJI</span>
              <span className="text-primary-600 font-extrabold">.</span>
            </span>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mt-2 font-medium leading-relaxed">
              Premium authorized retailer for next-generation chargers, high-fidelity wireless audio accessories, power banks, and surge protectors.
            </p>
            <div className="flex items-center gap-2.5 mt-2">
              <Link href="#" className="p-2 text-slate-400 hover:text-primary-500 hover:bg-slate-50 rounded-full transition-all">
                <Facebook size={16} />
              </Link>
              <Link href="#" className="p-2 text-slate-400 hover:text-primary-500 hover:bg-slate-50 rounded-full transition-all">
                <Twitter size={16} />
              </Link>
              <Link href="#" className="p-2 text-slate-400 hover:text-primary-500 hover:bg-slate-50 rounded-full transition-all">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="p-2 text-slate-400 hover:text-primary-500 hover:bg-slate-50 rounded-full transition-all">
                <Youtube size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div>
            <h4 className="text-[11px] font-extrabold text-slate-900 mb-4 uppercase tracking-wider">Product Categories</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-bold text-slate-400">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h4 className="text-[11px] font-extrabold text-slate-900 mb-4 uppercase tracking-wider">Customer Support</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-bold text-slate-400">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-primary-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-4 text-xs font-medium text-slate-400">
            <h4 className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">Contact Us</h4>
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">123, VIP Main Road, Sector 5, Kolkata, India</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-primary-500 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-primary-500 flex-shrink-0" />
              <span className="font-bold text-slate-800">support@sharmaji.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          <p>© {currentYear} SHARMAJI STORE. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary-600">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-600">Terms of Use</Link>
            <Link href="#" className="hover:text-primary-600">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
